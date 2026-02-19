import { Wallet } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const wallets = [
  'Hardware Devices', 'Software Wallets', 'Web Platforms', 'Mobile Apps', 'Desktop Applications',
  'Cloud Accounts', 'Multi-Factor Systems', 'Cold Storage', 'Hot Storage', 'Browser Extensions',
  'Payment Platforms', 'Digital Vaults', 'Security Keys', 'Authentication Apps',
  'Backup Systems', 'Recovery Tools', 'Account Managers', 'Password Managers', 'Digital Safes',
]

const row1 = wallets.slice(0, 10)
const row2 = wallets.slice(10, 20)

function WalletChip({ name }) {
  return (
    <div className="flex items-center gap-2.5 mx-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-3 shrink-0 transition-all duration-300 hover:border-cyber-purple/30 hover:shadow-[0_0_20px_rgba(189,82,235,0.15)]">
      <Wallet className="h-4 w-4 text-cyber-purple shrink-0" />
      <span className="text-sm font-medium text-white/80 whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function SupportedWallets() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-24 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Supported Platforms"
          title="Compatible with 100+ Leading Digital Platforms"
          description="From hardware wallets to browser extensions and mobile apps, we support recovery across all major digital currency wallet platforms."
        />
        {/* Platform illustration */}
        <div className="flex justify-center mt-10">
          <img
            src="/images/four.jpg"
            alt="Platform Technology"
            className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto rounded-2xl opacity-85 drop-shadow-[0_0_25px_rgba(189,82,235,0.15)]"
          />
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {/* Row 1 — scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cyber-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cyber-black to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex">
            {[...row1, ...row1, ...row1, ...row1].map((name, i) => (
              <WalletChip key={`r1-${i}`} name={name} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cyber-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cyber-black to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee-reverse flex">
            {[...row2, ...row2, ...row2, ...row2].map((name, i) => (
              <WalletChip key={`r2-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xs text-white/55">
          And many more including all major hardware, software, and web-based digital platforms
        </p>
      </div>
    </section>
  )
}
