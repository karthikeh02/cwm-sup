import { useState, useEffect } from 'react'
import { Wallet, ArrowRight } from 'lucide-react'
import NeonButton from '@/components/shared/NeonButton'
import BackgroundGrid from '@/components/shared/BackgroundGrid'

const messages = [
  'Need help recovering access to your cryptocurrency wallet?',
  'Experiencing issues with a delayed or pending transaction?',
  'Accidentally sent funds to the wrong address and need expert recovery assistance?',
  'Looking for professional support to restore your locked or compromised wallet?',
  'Want to verify the security status of your digital wallet and assets?',
]

export default function HeroBanner() {
  const [index, setIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
      setAnimKey((prev) => prev + 1)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <BackgroundGrid size={50} opacity={0.03} />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyber-purple/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyber-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2 mb-6 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyber-purple shadow-[0_0_10px_rgba(189,82,235,0.3)]">
              <Wallet className="h-3.5 w-3.5" />
              Digital Assets Recovery
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Secure, Restore, and{' '}
              <span className="text-cyber-purple drop-shadow-[0_0_20px_rgba(189,82,235,0.5)]">Recover</span>{' '}
              Your{' '}
              <span className="text-cyber-green drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">Digital Assets</span>{' '}
              with Confidence
            </h1>

            {/* Rotating message */}
            <div className="mt-6 h-14 flex items-center">
              <p
                key={animKey}
                className="animate-fade-slide text-base sm:text-lg text-white/70 leading-relaxed"
              >
                {messages[index]}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <NeonButton variant="purple" size="lg" href="tel:+18447062190">
                Start Recovery
                <ArrowRight className="h-4 w-4" />
              </NeonButton>
              <NeonButton variant="outline" size="lg" href="tel:+18447062190">
                Talk to Experts
              </NeonButton>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:row-span-2 flex items-center justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-purple/10 rounded-full blur-[80px] pointer-events-none" />
              <img
                src="/images/hero-illustration.png"
                alt="Digital Asset Security"
                className="relative w-[240px] sm:w-[300px] lg:w-[420px] h-auto drop-shadow-[0_0_30px_rgba(189,82,235,0.2)] animate-float"
              />
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 text-xs text-white/55">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-green animate-pulse" />
              Available 24/7
            </span>
            <span>Trusted by 14M+ Users</span>
            <span>Established 2016</span>
          </div>
        </div>
      </div>
    </section>
  )
}
