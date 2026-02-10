const glowColors = {
  purple: 'hover:shadow-[0_0_25px_rgba(189,82,235,0.18)]',
  pink: 'hover:shadow-[0_0_25px_rgba(255,22,148,0.18)]',
  green: 'hover:shadow-[0_0_25px_rgba(74,222,128,0.15)]',
  blue: 'hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
  none: '',
}

export default function GlassCard({ children, className = '', glow = 'purple', hover = true }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl ${hover ? `transition-all duration-300 hover:border-white/20 ${glowColors[glow]}` : ''} ${className}`}>
      {children}
    </div>
  )
}
