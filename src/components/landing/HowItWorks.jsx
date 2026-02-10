import { FileSearch, ShieldCheck, Settings, CheckCircle2 } from 'lucide-react'
import GlassCard from '@/components/shared/GlassCard'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Submit Your Case',
    description: 'Provide details about your wallet issue — whether it is locked, compromised, or inaccessible. Our intake form takes less than 2 minutes.',
    iconColor: 'text-cyber-purple',
    glow: 'purple',
    borderColor: 'border-t-cyber-purple',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Expert Assessment',
    description: 'A certified blockchain recovery specialist reviews your case within 24 hours and prepares a secure, personalized recovery strategy.',
    iconColor: 'text-cyber-green',
    glow: 'green',
    borderColor: 'border-t-cyber-green',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Secure Recovery',
    description: 'Using military-grade encrypted protocols, our team executes the recovery process while keeping you informed at every step.',
    iconColor: 'text-cyber-pink',
    glow: 'pink',
    borderColor: 'border-t-cyber-pink',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Access Restored',
    description: 'Once verified, full access to your wallet and digital assets is restored. You regain complete ownership and control.',
    iconColor: 'text-cyber-blue',
    glow: 'blue',
    borderColor: 'border-t-cyber-blue',
  },
]

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Your Recovery Journey in 4 Simple Steps"
          description="From initial contact to full wallet restoration, our streamlined process ensures a secure and transparent recovery experience."
        />

        {/* Illustration */}
        <div className="flex justify-center mt-10 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-purple/5 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/crypto-raw2.svg"
              alt="Recovery Process"
              className="relative w-[180px] sm:w-[220px] lg:w-[280px] h-auto drop-shadow-[0_0_20px_rgba(189,82,235,0.1)]"
            />
          </div>
        </div>

        <div className="relative mt-8">
          {/* Connecting line - desktop only */}
          <div className="absolute top-24 left-0 right-0 hidden lg:block">
            <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-cyber-purple/40 via-cyber-pink/40 to-cyber-blue/40" />
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <GlassCard
                key={step.number}
                glow={step.glow}
                className={`p-8 text-center border-t-2 ${step.borderColor}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5 font-mono text-lg font-bold ${step.iconColor}`}>
                  {step.number}
                </div>
                <step.icon className={`h-8 w-8 mx-auto mb-4 ${step.iconColor}`} />
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
