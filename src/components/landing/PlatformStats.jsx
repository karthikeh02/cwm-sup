import AnimatedCounter from '@/components/shared/AnimatedCounter'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const stats = [
  { value: 10, suffix: 'M+', label: 'Digital Assets Managed' },
  { value: 600, prefix: '$', suffix: 'M+', label: 'In Recovered Funds' },
  { value: 100, suffix: '+', label: 'Supported Wallets' },
]

export default function PlatformStats() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`relative py-20 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50/50 to-purple-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Stats */}
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl sm:text-6xl font-extrabold text-slate-900">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/crypto-raw3.svg"
              alt="Global Digital Platform"
              className="w-[140px] sm:w-[170px] lg:w-[200px] h-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
