import { Star, Quote } from 'lucide-react'
import GlassCard from '@/components/shared/GlassCard'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Hardware Device User',
    initials: 'MT',
    stars: 5,
    quote: 'I thought my funds were gone forever after my device malfunctioned. The recovery team had my wallet access restored in under 48 hours. Absolutely professional and transparent throughout the entire process.',
    accentColor: 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30',
    glow: 'purple',
  },
  {
    name: 'Sarah L.',
    role: 'Account Recovery',
    initials: 'SL',
    stars: 5,
    quote: 'After a phishing attack compromised my online account, I was desperate. Their security team helped me secure my remaining assets and guided me through the entire recovery process. Could not recommend them more highly.',
    accentColor: 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
    glow: 'green',
  },
  {
    name: 'David K.',
    role: 'Mobile Platform User',
    initials: 'DK',
    stars: 5,
    quote: 'Lost access to my mobile wallet with a significant amount in stored funds. The team recovered everything and even helped me improve my security setup. Their 24/7 support made all the difference during a stressful time.',
    accentColor: 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30',
    glow: 'pink',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-cyber-gold text-cyber-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Users Worldwide"
          description="Real stories from real users who successfully recovered their digital assets with our expert assistance."
        />

        {/* Decorative illustration */}
        <div className="flex justify-center mt-8 mb-4">
          <img
            src="/images/crypto-raw1.svg"
            alt="User Community"
            className="w-[150px] sm:w-[180px] lg:w-[220px] h-auto opacity-70"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name} glow={t.glow} className="p-8 flex flex-col">
              <Quote className="h-8 w-8 text-white/10 mb-4" />
              <StarRating count={t.stars} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold ${t.accentColor}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/55">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
