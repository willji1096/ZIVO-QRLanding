import { lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'

const PainPoints = lazy(() => import('./sections/PainPoints').then(m => ({ default: m.PainPoints })))
const Solution = lazy(() => import('./sections/Solution').then(m => ({ default: m.Solution })))
const Stats = lazy(() => import('./sections/Stats').then(m => ({ default: m.Stats })))
const Features = lazy(() => import('./sections/Features').then(m => ({ default: m.Features })))
const HowItWorks = lazy(() => import('./sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })))
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })))
const CTA = lazy(() => import('./sections/CTA').then(m => ({ default: m.CTA })))

function SectionLoader() {
  return <div className="min-h-[200px]" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <PainPoints />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Solution />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
