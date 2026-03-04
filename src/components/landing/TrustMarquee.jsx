import { Shield, Headphones, Users } from 'lucide-react'

const items = [
  { icon: Shield, text: 'Instant Support for All Major Digital Wallet Platforms' },
  { icon: Headphones, text: '24/7 Expert Assistance Available' },
  { icon: Users, text: 'Trusted by 14M+ Users Worldwide' },
  { icon: Shield, text: 'Instant Support for All Major Digital Wallet Platforms' },
  { icon: Headphones, text: '24/7 Expert Assistance Available' },
  { icon: Users, text: 'Trusted by 14M+ Users Worldwide' },
]

export default function TrustMarquee() {
  return (
    <div className="relative overflow-hidden bg-purple-50 border-b border-purple-100 pt-18">
      <div className="animate-marquee flex whitespace-nowrap py-3">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 text-sm text-slate-600">
            <item.icon className="h-4 w-4 text-cyber-purple shrink-0" />
            <span>{item.text}</span>
            <span className="ml-6 text-purple-300">&#9670;</span>
          </div>
        ))}
      </div>
    </div>
  )
}
