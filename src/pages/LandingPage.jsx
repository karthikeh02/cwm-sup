import CryptoPriceTicker from '@/components/landing/CryptoPriceTicker'
import TrustMarquee from '@/components/landing/TrustMarquee'
import HeroBanner from '@/components/landing/HeroBanner'
import StatsBar from '@/components/landing/StatsBar'
import PlatformStats from '@/components/landing/PlatformStats'
import ServicesGrid from '@/components/landing/ServicesGrid'
import HowItWorks from '@/components/landing/HowItWorks'
import RecoverySection from '@/components/landing/RecoverySection'
import SupportedWallets from '@/components/landing/SupportedWallets'
import SecuritySection from '@/components/landing/SecuritySection'
import Testimonials from '@/components/landing/Testimonials'
import EarnRewards from '@/components/landing/EarnRewards'
import FAQ from '@/components/landing/FAQ'
import CtaBanner from '@/components/landing/CtaBanner'
import SectionDivider from '@/components/landing/SectionDivider'

export default function LandingPage() {
  return (
    <>
      <TrustMarquee />
      <CryptoPriceTicker />
      <HeroBanner />
      <StatsBar />
      <SectionDivider />
      <PlatformStats />
      <SectionDivider />
      <ServicesGrid />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <RecoverySection />
      <SupportedWallets />
      <SectionDivider />
      <SecuritySection />
      <Testimonials />
      <SectionDivider />
      <EarnRewards />
      <SectionDivider />
      <FAQ />
      <CtaBanner />
    </>
  )
}
