#!/usr/bin/env python3
"""
ZIVO QR Landing — 이미지 일괄 생성.

사용:
  python scripts/generate-landing.py           # 누락된 것만 (--force 아니면 스킵)
  python scripts/generate-landing.py --only hero,owner-1
  python scripts/generate-landing.py --force   # 강제 재생성
"""
from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

# 같은 폴더의 banana.py 사용
sys.path.insert(0, str(Path(__file__).parent))
from banana import generate  # noqa

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PUBLIC = PROJECT_ROOT / "public" / "images"
REF = PROJECT_ROOT / "scripts-assets" / "zivo-qr-reference.png"

# 공통 스타일 프리픽스/서픽스
STYLE = (
    "Photorealistic commercial photograph, Toss Place editorial quality, "
    "35mm lens, natural daylight, shallow depth of field, warm muted color palette, "
    "no retouching, no studio flash, no overexposure, no plastic skin, "
    "authentic natural expressions."
)

QR_DESIGN = (
    "The ZIVO QR stand sign is a table-top acrylic stand displaying: "
    "'zivo' wordmark where the final 'o' is a warm yellow/orange open ring, "
    "a large white 'Scan to Order' label below, a high-contrast square QR code, "
    "and Korean text '외국인 전용' at the bottom. The stand's base color varies "
    "(blue, navy, white, terracotta, sage, charcoal, cream)."
)

JOBS: list[dict] = [
    {
        "key": "hero",
        "out": "public/images/hero.jpg",
        "aspect": "16:9",
        "ref": True,
        "prompt": (
            f"{STYLE} A bright modern Korean restaurant at midday. A foreign "
            "tourist woman in her late 20s with light brown hair in a beige "
            "sweater sits at a wooden table smiling while looking at a "
            "smartphone showing a colorful Korean food menu. Across the table "
            "the Korean restaurant owner (late 30s, short black hair, navy apron) "
            "is smiling. Between them on the table stands a bright blue ZIVO QR "
            f"stand sign. {QR_DESIGN} Warm natural window light from the left, "
            "wooden interior, plants, other foreign tourists enjoying Korean "
            "dishes softly blurred in background. Hero marketing shot composition "
            "with breathing room on the left for text overlay."
        ),
    },
    {
        "key": "wide-tourism",
        "out": "public/images/wide-tourism.jpg",
        "aspect": "16:9",
        "ref": False,
        "prompt": (
            f"{STYLE} A lively pedestrian street in Myeongdong, Seoul, early "
            "evening golden hour. Many foreign tourists from diverse "
            "nationalities (Western, Japanese, Chinese, South-East Asian) "
            "walking, chatting, taking photos of Korean storefronts, hanok tiled "
            "roofs in the distance. Koreans walking among them. Neon restaurant "
            "signs starting to glow. Shot from waist height on a wide lens to "
            "capture bustle. Cinematic warm color grade. No identifiable brand "
            "logos. No text overlays."
        ),
    },
    {
        "key": "wide-sticker",
        "out": "public/images/wide-sticker.jpg",
        "aspect": "16:9",
        "ref": True,
        "prompt": (
            f"{STYLE} Extreme close-up macro of a ZIVO QR acrylic table stand "
            f"placed on a warm oak wood restaurant table. {QR_DESIGN} The stand "
            "is the bright blue variant in sharp focus on the left third. The "
            "right two-thirds shows softly blurred bokeh of a Korean BBQ grill "
            "plate with steam rising, chopsticks resting on a ceramic holder, "
            "and warm orange pendant lights. No people visible. Marketing hero "
            "product shot composition."
        ),
    },
    {
        "key": "qr-showcase",
        "out": "public/images/qr-showcase.jpg",
        "aspect": "16:9",
        "ref": True,
        "prompt": (
            f"{STYLE} Top-down overhead flat-lay product photograph of 10 "
            "ZIVO QR acrylic table stands arranged in a neat 5x2 grid on a "
            f"warm-toned oak wood surface. {QR_DESIGN} The 10 stands use "
            "different base colors: bright blue, navy, terracotta red, sage "
            "green, deep forest green, warm beige, cream, charcoal black, "
            "cool slate grey, and pure white with blue border. Each stand "
            "clearly legible. Soft overhead natural light. Minimal "
            "marketing hero product grid shot, magazine editorial quality."
        ),
    },
    {
        "key": "wide-sticker-foreigner",
        "out": "public/images/wide-language.jpg",
        "aspect": "16:9",
        "ref": True,
        "prompt": (
            f"{STYLE} Medium-wide photograph of a warm modern Korean restaurant "
            "interior in afternoon. A Western foreign tourist woman late 20s, "
            "light brown wavy hair, beige sweater, seated at a wooden table "
            "smiling while holding a smartphone showing a colorful Korean food "
            "menu UI. On the table stands a bright blue ZIVO QR stand sign. "
            f"{QR_DESIGN} Background softly blurred with another couple of "
            "foreign tourists eating Korean dishes. Natural window light from "
            "the left. No text overlays."
        ),
    },
    {
        "key": "owner-1",
        "out": "public/images/owner-1.jpg",
        "aspect": "1:1",
        "ref": False,
        "prompt": (
            f"{STYLE} Waist-up portrait of a Korean restaurant owner, man "
            "in his early 40s, short dark hair, wearing a clean white chef's "
            "jacket, gentle professional smile, arms crossed lightly. "
            "Background is a blurred warm-lit Korean hanjeongsik (traditional "
            "set meal) restaurant in Myeongdong with wooden panels and hanji "
            "lamps. Soft natural daylight from the left. Looks trustworthy "
            "and competent. Square crop composition."
        ),
    },
    {
        "key": "owner-2",
        "out": "public/images/owner-2.jpg",
        "aspect": "1:1",
        "ref": False,
        "prompt": (
            f"{STYLE} Waist-up portrait of a Korean cafe owner, woman in her "
            "early 30s, shoulder-length dark brown hair, casual beige apron "
            "over a cream knit, warm genuine smile, one hand gently holding "
            "a ceramic mug. Background is a bright airy Hongdae cafe with "
            "plants, wooden shelves, and soft window light. Minimal warm "
            "palette. Looks friendly and approachable. Square crop."
        ),
    },
    {
        "key": "owner-3",
        "out": "public/images/owner-3.jpg",
        "aspect": "1:1",
        "ref": False,
        "prompt": (
            f"{STYLE} Waist-up portrait of a Korean BBQ restaurant floor "
            "manager, man in his early 30s, short black hair, wearing a dark "
            "navy apron over a short-sleeve shirt, arms slightly crossed, "
            "confident but warm smile. Background is a softly blurred "
            "Itaewon Korean BBQ restaurant with smoke venting and charcoal "
            "grill, warm orange pendant lights. Natural golden hour light. "
            "Square crop."
        ),
    },
    {
        "key": "owner-4",
        "out": "public/images/owner-4.jpg",
        "aspect": "1:1",
        "ref": False,
        "prompt": (
            f"{STYLE} Waist-up portrait of a Korean sushi chef-owner, woman "
            "in her late 30s, hair in a low bun, wearing a crisp white chef's "
            "jacket with a blue band collar, hands lightly resting on a wooden "
            "sushi counter. Confident composed smile. Background is a minimal "
            "high-end Gangnam omakase restaurant with cedar wood and soft "
            "indirect lighting. Muted cool palette. Square crop."
        ),
    },
    {
        "key": "owner-5",
        "out": "public/images/owner-5.jpg",
        "aspect": "1:1",
        "ref": False,
        "prompt": (
            f"{STYLE} Waist-up portrait of a Korean seafood restaurant owner "
            "in Busan Haeundae, man in his late 40s, salt-and-pepper hair, "
            "weathered friendly face, wearing a navy work apron over a "
            "sky-blue shirt. Relaxed genuine smile. Background is a softly "
            "blurred seaside restaurant with wooden tables and a sea view "
            "through windows. Bright coastal afternoon light. Square crop."
        ),
    },
    {
        "key": "owner-6",
        "out": "public/images/owner-6.jpg",
        "aspect": "1:1",
        "ref": False,
        "prompt": (
            f"{STYLE} Waist-up portrait of a Korean dessert cafe owner in "
            "Samcheong-dong, woman in her mid 30s, bob haircut with light "
            "brown highlights, wearing a pastel pink apron over an oatmeal "
            "sweater, holding a small plate with a bingsu dessert. "
            "Bright cheerful smile. Background is a cozy boutique hanok-style "
            "cafe with soft pendant lights and pressed flowers on walls. "
            "Warm soft palette. Square crop."
        ),
    },
]


def run(only: set[str] | None, force: bool) -> None:
    for job in JOBS:
        key = job["key"]
        if only and key not in only:
            continue
        out = PROJECT_ROOT / job["out"]
        if out.exists() and not force:
            print(f"↷ 스킵 (이미 존재): {job['out']}")
            continue
        refs = [REF] if job["ref"] else []
        print(f"\n━━ {key} ━━")
        t0 = time.time()
        generate(job["prompt"], out, refs, job.get("aspect"))
        print(f"  ⏱ {time.time() - t0:.1f}s")


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--only", default=None, help="쉼표 구분 키 (예: hero,owner-1)")
    p.add_argument("--force", action="store_true", help="기존 파일 덮어쓰기")
    args = p.parse_args()

    only = set(args.only.split(",")) if args.only else None
    run(only, args.force)


if __name__ == "__main__":
    main()
