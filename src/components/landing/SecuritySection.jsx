import GlassCard from '@/components/shared/GlassCard'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const features = [
  {
    image: '/images/security-icon.png',
    title: 'Advanced Encryption',
    description: 'Protect your wallet using our Encrypted Cloud Backup solution. Military-grade AES-256 encryption ensures your recovery data remains impenetrable.',
    glow: 'purple',
  },
  {
    image: '/images/no-tracking-icon.png',
    title: 'Zero-Knowledge Privacy',
    description: 'We never collect, track, or monitor personal data such as IP addresses, browsing activity, or wallet balances. Your privacy is absolute.',
    glow: 'green',
  },
  {
    image: '/images/alert-icon.png',
    title: 'Real-Time Threat Alerts',
    description: 'Stay protected with instant notifications for suspicious wallet activity, unauthorized access attempts, and potential transaction risks.',
    glow: 'pink',
  },
]

export default function SecuritySection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Security First"
          title="Complete Ownership and Control of Your Wallet Assets"
          description="Your wallet is secured with state-of-the-art protection, but only you possess the security credentials and recovery information. They stay completely out of our reach at all times."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="flex items-center justify-center relative">
            <div className="absolute inset-0 bg-purple-50/50 rounded-full blur-[60px] pointer-events-none" />
            <img
              src="/images/security-shield.png"
              alt="Wallet Security"
              className="relative w-[200px] sm:w-[260px] lg:w-full lg:max-w-sm h-auto drop-shadow-[0_10px_25px_rgba(147,51,234,0.1)]"
            />
          </div>

          {/* Cards side */}
          <div className="grid gap-5">
            {features.map((feature) => (
              <GlassCard key={feature.title} glow={feature.glow} className="p-6 flex items-start gap-5">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
