import { CheckCircle, ArrowRight } from 'lucide-react'
import NeonButton from '@/components/shared/NeonButton'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const features = [
  'Direct support from certified recovery experts',
  'Compatible with 100+ major wallet platforms',
  'End-to-end encrypted recovery process',
]

export default function RecoverySection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative py-24 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-50/50 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/wallet-recovery.png"
              alt="Wallet Recovery"
              className="relative w-full max-w-sm h-auto drop-shadow-[0_10px_25px_rgba(147,51,234,0.1)]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-2 right-4 sm:bottom-4 sm:right-8 rounded-xl border border-purple-200 bg-white shadow-lg px-5 py-3">
              <p className="text-2xl font-bold text-cyber-purple">100+</p>
              <p className="text-xs text-slate-500">Wallets Supported</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block mb-4 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyber-purple">
              Wallet Recovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
              Quickly and Safely Recover Access to Your Digital Wallet
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500">
              Take full control of your wallet recovery process. Our team of certified specialists works directly with you to restore access to locked, compromised, or inaccessible wallets from all major platforms including hardware devices, software applications, and web-based accounts. Skip the complications — our streamlined recovery process gets you back in control with speed, security, and transparency.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <NeonButton variant="purple" size="lg" href="tel:+18887690872">
                Start Recovery
                <ArrowRight className="h-4 w-4" />
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
