#!/usr/bin/env python3
"""
ZIVO QR Landing — Nano Banana CLI (Gemini 2.5 Flash Image)

사용 예시:
  python scripts/banana.py \
      --prompt "Korean restaurant interior, natural light, foreign tourist using QR menu, photorealistic" \
      --out public/images/wide-language.jpg \
      --ref scripts-assets/zivo-qr-reference.png \
      --aspect 16:9

참고 이미지 여러 장: --ref A.png --ref B.png
"""
from __future__ import annotations

import argparse
import mimetypes
import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

MODEL = os.environ.get("BANANA_MODEL", "gemini-2.5-flash-image")
PROJECT_ROOT = Path(__file__).resolve().parent.parent


def load_api_key() -> str:
    load_dotenv(PROJECT_ROOT / ".env.local")
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        raise SystemExit("GEMINI_API_KEY가 .env.local 또는 환경변수에 없음.")
    return key


def load_ref(path: Path) -> types.Part:
    if not path.exists():
        raise SystemExit(f"ref 이미지 없음: {path}")
    mime, _ = mimetypes.guess_type(path)
    if mime is None:
        mime = "image/png"
    data = path.read_bytes()
    return types.Part.from_bytes(data=data, mime_type=mime)


def save_image(data: bytes, out: Path) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(data)
    # 확장자가 jpg인데 PNG 바이트가 오는 경우 → 실제 포맷 기반 재저장
    try:
        with Image.open(out) as im:
            expected_ext = out.suffix.lower().lstrip(".")
            actual_format = (im.format or "").lower()
            if expected_ext in ("jpg", "jpeg") and actual_format == "png":
                rgb = im.convert("RGB")
                rgb.save(out, "JPEG", quality=92)
            elif expected_ext == "png" and actual_format in ("jpeg", "jpg"):
                im.save(out, "PNG")
    except Exception:
        pass


def generate(prompt: str, out: Path, refs: list[Path], aspect: str | None) -> None:
    client = genai.Client(api_key=load_api_key())

    parts: list[types.Part | str] = [prompt]
    for r in refs:
        parts.append(load_ref(r))

    config_kwargs: dict = {
        "response_modalities": ["IMAGE"],
    }
    if aspect:
        config_kwargs["image_config"] = types.ImageConfig(aspect_ratio=aspect)

    print(f"▶ 모델: {MODEL}")
    print(f"▶ 프롬프트: {prompt[:120]}{'…' if len(prompt) > 120 else ''}")
    if refs:
        print(f"▶ 참고 이미지: {', '.join(str(r.name) for r in refs)}")
    if aspect:
        print(f"▶ aspect: {aspect}")

    response = client.models.generate_content(
        model=MODEL,
        contents=parts,
        config=types.GenerateContentConfig(**config_kwargs),
    )

    saved = False
    for cand in response.candidates or []:
        content = getattr(cand, "content", None)
        if not content:
            continue
        for part in content.parts or []:
            inline = getattr(part, "inline_data", None)
            if inline and inline.data:
                save_image(inline.data, out)
                saved = True
                break
        if saved:
            break

    if not saved:
        raise SystemExit(
            "이미지 응답이 없음. 응답 텍스트: "
            + (response.text or "(empty)")[:300]
        )

    print(f"✔ 저장 완료 → {out.relative_to(PROJECT_ROOT)}")


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Nano Banana CLI for ZIVO QR Landing")
    p.add_argument("--prompt", required=True, help="생성 프롬프트")
    p.add_argument("--out", required=True, help="저장 경로 (예: public/images/hero.jpg)")
    p.add_argument(
        "--ref",
        action="append",
        default=[],
        help="참고 이미지 경로 (여러 번 지정 가능)",
    )
    p.add_argument(
        "--aspect",
        default=None,
        help="비율 예: 16:9, 9:16, 1:1 (생략 시 모델 기본)",
    )
    return p.parse_args()


def main() -> None:
    args = parse_args()
    out = Path(args.out)
    if not out.is_absolute():
        out = PROJECT_ROOT / out
    refs = [Path(r) if Path(r).is_absolute() else PROJECT_ROOT / r for r in args.ref]
    generate(args.prompt, out, refs, args.aspect)


if __name__ == "__main__":
    main()
