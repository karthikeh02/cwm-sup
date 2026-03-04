import { Phone } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <a
      href="tel:+18887690872"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-4 shadow-[0_2px_12px_rgba(22,163,74,0.15)] transition-all duration-300 hover:bg-green-100 hover:shadow-[0_4px_16px_rgba(22,163,74,0.25)] hover:pr-6"
    >
      <Phone className="h-5 w-5 text-cyber-green animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-cyber-green transition-all duration-300 group-hover:max-w-xs group-hover:ml-1">
        Contact Support
      </span>
    </a>
  )
}
