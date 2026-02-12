import { Link } from 'react-router-dom'

const variants = {
  purple: 'border-cyber-purple/50 bg-cyber-purple/15 shadow-[0_0_10px_rgba(189,82,235,0.3)] hover:bg-cyber-purple/25 hover:shadow-[0_0_18px_rgba(189,82,235,0.5)]',
  green: 'border-cyber-green/50 bg-cyber-green/10 shadow-[0_0_10px_rgba(74,222,128,0.25)] hover:bg-cyber-green/20 hover:shadow-[0_0_18px_rgba(74,222,128,0.4)] text-cyber-green',
  pink: 'border-cyber-pink/50 bg-cyber-pink/15 shadow-[0_0_10px_rgba(255,22,148,0.3)] hover:bg-cyber-pink/25 hover:shadow-[0_0_18px_rgba(255,22,148,0.5)]',
  outline: 'border-white/20 bg-transparent hover:border-cyber-purple/50 hover:bg-cyber-purple/10 hover:shadow-[0_0_12px_rgba(189,82,235,0.25)]',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function NeonButton({ children, variant = 'purple', href, to, onClick, className = '', size = 'md' }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg border font-semibold text-white transition-all duration-300 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={base}>{children}</Link>
  if (href) {
    const isExternal = href.startsWith('http')
    return <a href={href} className={base} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  }
  return <button onClick={onClick} className={base}>{children}</button>
}
