import { ArrowRight } from 'lucide-react'
import NeonButton from '@/components/shared/NeonButton'
import BackgroundGrid from '@/components/shared/BackgroundGrid'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function CtaBanner() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`relative py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/15 via-cyber-black to-cyber-black" />
      <BackgroundGrid size={60} opacity={0.02} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyber-purple/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              One Wallet Platform to Power Your Entire{' '}
              <span className="text-cyber-purple">Digital Experience</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70">
              Effortlessly recover assets, secure your accounts, and benefit from advanced digital wallet integration — all in one secure, trusted platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <NeonButton variant="purple" size="lg" href="tel:+18887690872">
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </NeonButton>
              <NeonButton variant="outline" size="lg" href="tel:+18887690872">
                Talk to Experts
              </NeonButton>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-white/55">
              <span>Available 24/7</span>
              <span className="text-cyber-purple/50">&#9670;</span>
              <span>Trusted by 14M+ Users</span>
              <span className="text-cyber-purple/50">&#9670;</span>
              <span>Established 2016</span>
            </div>
          </div>

          {/* Image side */}
          <div className="flex items-center justify-center relative">
            <div className="absolute inset-0 bg-cyber-purple/8 rounded-full blur-[80px] pointer-events-none" />
            <img
              src="/images/cta-illustration.png"
              alt="Digital Asset Management Platform"
              className="relative w-[200px] sm:w-[260px] lg:w-full lg:max-w-xs h-auto drop-shadow-[0_0_30px_rgba(189,82,235,0.15)] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
