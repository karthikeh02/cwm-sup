import { CheckCircle, ArrowRight } from 'lucide-react'
import NeonButton from '@/components/shared/NeonButton'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const features = [
  'Direct support from certified blockchain recovery experts',
  'Compatible with 100+ major wallet platforms',
  'End-to-end encrypted recovery process',
]

export default function RecoverySection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative py-24 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyber-purple/8 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/wallet-recovery.png"
              alt="Wallet Recovery"
              className="relative w-full max-w-sm h-auto drop-shadow-[0_0_25px_rgba(189,82,235,0.15)]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-2 right-4 sm:bottom-4 sm:right-8 rounded-xl border border-cyber-purple/30 bg-cyber-black/90 backdrop-blur-xl px-5 py-3 shadow-[0_0_20px_rgba(189,82,235,0.3)]">
              <p className="text-2xl font-bold text-cyber-purple">100+</p>
              <p className="text-xs text-white/60">Wallets Supported</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block mb-4 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyber-purple">
              Wallet Recovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              Quickly and Safely Recover Access to Your Digital Wallet
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Take full control of your wallet recovery process. Our team of certified blockchain specialists works directly with you to restore access to locked, compromised, or inaccessible wallets from leading platforms including Binance, Coinbase, MetaMask, Trust Wallet, Ledger, Trezor, and more. Skip the complications — our streamlined recovery process gets you back in control with speed, security, and transparency.
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
              <NeonButton variant="purple" size="lg">
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
