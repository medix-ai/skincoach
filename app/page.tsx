import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServiceIntro from '@/components/ServiceIntro'
import AppScreens from '@/components/AppScreens'
import RoutineForm from '@/components/RoutineForm'
import ChallengeCTA from '@/components/ChallengeCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServiceIntro />
      <AppScreens />
      <RoutineForm />
      <ChallengeCTA />
      <FAQ />
      <Footer />
    </main>
  )
}
