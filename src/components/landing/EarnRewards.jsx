import { CheckCircle, ArrowRight } from 'lucide-react'
import NeonButton from '@/components/shared/NeonButton'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const features = [
  'Up to 70% APR from authenticated staking sources',
  'Real-time reward tracking across all positions',
  'One-click unstaking with no hidden lock periods',
]

export default function EarnRewards() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative py-24 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyber-green/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div className="lg:order-1">
            <span className="inline-block mb-4 rounded-full border border-cyber-green/40 bg-cyber-green/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyber-green">
              Staking & Rewards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              Earn Up to 70% APR on Your Digital Assets
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Put your cryptocurrency to work. Stake your assets through our verified partner protocols and earn industry-leading returns with complete transparency. Every staking position is monitored in real-time, with instant alerts and one-click unstaking for full flexibility.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <NeonButton variant="green" size="lg" href="tel:+18447062190">
                Start Staking
                <ArrowRight className="h-4 w-4" />
              </NeonButton>
            </div>
          </div>

          {/* Image side */}
          <div className="relative lg:order-2 flex items-center justify-center">
            <div className="absolute inset-0 bg-cyber-green/5 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/staking-rewards.png"
              alt="Earn Rewards"
              className="relative w-full max-w-sm h-auto drop-shadow-[0_0_25px_rgba(74,222,128,0.1)]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-2 left-4 sm:bottom-4 sm:left-8 rounded-xl border border-cyber-green/30 bg-cyber-black/90 backdrop-blur-xl px-5 py-3 shadow-[0_0_15px_rgba(74,222,128,0.15)]">
              <p className="text-2xl font-bold text-cyber-green">70%</p>
              <p className="text-xs text-white/60">Max APR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
