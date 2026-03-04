import GlassCard from '@/components/shared/GlassCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const stats = [
  {
    image: '/images/people-stats.png',
    value: 14,
    suffix: 'M+',
    label: 'Trusted Users Worldwide',
    color: 'text-cyber-purple',
    glow: 'purple',
  },
  {
    image: '/images/calendar-stats.png',
    value: 2016,
    suffix: '',
    label: 'Established & Verified',
    color: 'text-cyber-green',
    glow: 'green',
    isYear: true,
  },
  {
    image: '/images/audit-stats.png',
    value: 100,
    suffix: '%',
    label: 'Third-Party Security Audited',
    color: 'text-cyber-blue',
    glow: 'blue',
  },
]

export default function StatsBar() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <GlassCard key={stat.label} glow={stat.glow} className="p-8 text-center">
              <img src={stat.image} alt={stat.label} className="h-14 w-14 mx-auto mb-4 object-contain" />
              <div className={`text-4xl font-bold ${stat.color}`}>
                {stat.isYear ? (
                  stat.value
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
