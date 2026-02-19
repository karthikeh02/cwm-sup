import { ShieldCheck, TrendingUp, LayoutGrid, ArrowLeftRight } from 'lucide-react'
import GlassCard from '@/components/shared/GlassCard'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const services = [
  {
    icon: ShieldCheck,
    title: 'Regain Control of Your Digital Assets',
    description: 'Recover access to your digital currency wallet using our advanced recovery protocols. Whether your wallet is locked, compromised, or inaccessible, our expert team guides you through a secure restoration process.',
    accent: 'border-t-cyber-purple',
    iconColor: 'text-cyber-purple',
    glow: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'Earn Rewards with Full Protection',
    description: 'Stake your assets and earn up to 70% APR in rewards from verified, authenticated sources. Your earnings are secured through industry-leading protection protocols.',
    accent: 'border-t-cyber-green',
    iconColor: 'text-cyber-green',
    glow: 'green',
  },
  {
    icon: LayoutGrid,
    title: 'Explore NFT & DeFi Platforms',
    description: 'Navigate leading NFT marketplaces and decentralized finance platforms with confidence. Manage, trade, and grow your portfolio with expert guidance.',
    accent: 'border-t-cyber-pink',
    iconColor: 'text-cyber-pink',
    glow: 'pink',
  },
  {
    icon: ArrowLeftRight,
    title: 'Swap Currencies Securely',
    description: 'Exchange more than 10,000 digital currency pairs through trusted, verified providers. Every swap is secured with enterprise-grade encryption and real-time monitoring.',
    accent: 'border-t-cyber-blue',
    iconColor: 'text-cyber-blue',
    glow: 'blue',
  },
]

export default function ServicesGrid() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="A Unified Platform for Countless Assets"
          description="From wallet recovery to staking rewards, our comprehensive suite of services covers every aspect of digital asset management."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="flex items-center justify-center relative order-first lg:order-2">
            <div className="absolute inset-0 bg-cyber-purple/5 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/swap-exchange.png"
              alt="Digital Asset Services"
              className="relative w-[220px] sm:w-[280px] lg:w-full lg:max-w-sm h-auto drop-shadow-[0_0_25px_rgba(189,82,235,0.12)]"
            />
          </div>

          {/* Cards side */}
          <div className="grid gap-5 sm:grid-cols-2 order-1">
            {services.map((service) => (
              <GlassCard key={service.title} glow={service.glow} className={`p-6 border-t-2 ${service.accent}`}>
                <service.icon className={`h-9 w-9 ${service.iconColor} mb-4`} />
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
