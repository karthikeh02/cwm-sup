const glowColors = {
  purple: 'hover:shadow-[0_4px_20px_rgba(147,51,234,0.12)]',
  pink: 'hover:shadow-[0_4px_20px_rgba(236,72,153,0.12)]',
  green: 'hover:shadow-[0_4px_20px_rgba(22,163,74,0.12)]',
  blue: 'hover:shadow-[0_4px_20px_rgba(37,99,235,0.12)]',
  none: '',
}

export default function GlassCard({ children, className = '', glow = 'purple', hover = true }) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${hover ? `transition-all duration-300 hover:border-gray-300 ${glowColors[glow]}` : ''} ${className}`}>
      {children}
    </div>
  )
}
