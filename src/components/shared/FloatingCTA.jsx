import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="tel:+18447062190"
      className={`fixed bottom-6 right-6 z-50 group flex items-center gap-2 rounded-full border border-cyber-green/40 bg-cyber-green/15 backdrop-blur-xl px-4 py-4 shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-500 hover:bg-cyber-green/25 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:pr-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Phone className="h-5 w-5 text-cyber-green animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-cyber-green transition-all duration-300 group-hover:max-w-xs group-hover:ml-1">
        Contact Support
      </span>
    </a>
  )
}
