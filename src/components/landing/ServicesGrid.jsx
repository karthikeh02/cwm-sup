import { ShieldCheck, Shield, LayoutGrid, Headphones } from 'lucide-react'
import GlassCard from '@/components/shared/GlassCard'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const services = [
  {
    icon: ShieldCheck,
    title: 'Regain Control of Your Digital Accounts',
    description: 'Recover access to your digital wallet using our advanced recovery protocols. Whether your account is locked, compromised, or inaccessible, our expert team guides you through a secure restoration process.',
    accent: 'border-t-cyber-purple',
    iconColor: 'text-cyber-purple',
    glow: 'purple',
  },
  {
    icon: Shield,
    title: 'Advanced Account Protection',
    description: 'Proactive security monitoring, threat detection, and real-time alerts keep your accounts protected around the clock. Stay one step ahead with industry-leading protection protocols.',
    accent: 'border-t-cyber-green',
    iconColor: 'text-cyber-green',
    glow: 'green',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-Platform Compatibility',
    description: 'Our services work seamlessly across 100+ platforms including hardware devices, mobile apps, desktop software, and web-based accounts. One solution for all your digital security needs.',
    accent: 'border-t-cyber-pink',
    iconColor: 'text-cyber-pink',
    glow: 'pink',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Technical Support',
    description: 'Connect with certified specialists any time, day or night. Every support interaction is secured with enterprise-grade encryption and real-time monitoring.',
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
          description="From account recovery to security audits, our comprehensive suite of services covers every aspect of digital account management."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="flex items-center justify-center relative order-first lg:order-2">
            <div className="absolute inset-0 bg-cyber-purple/5 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/swap-exchange.png"
              alt="Digital Security Services"
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
