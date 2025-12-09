import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppPreview from '@/components/AppPreview'
import CenterHero from '@/components/CenterHero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AppPreview />
      <CenterHero />
      <CTA />
      <Footer />
    </main>
  )
}
