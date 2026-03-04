import { Link } from 'react-router-dom'

const variants = {
  purple: 'border-cyber-purple bg-cyber-purple text-white shadow-[0_2px_10px_rgba(147,51,234,0.3)] hover:bg-purple-700 hover:shadow-[0_4px_16px_rgba(147,51,234,0.4)]',
  green: 'border-cyber-green bg-cyber-green text-white shadow-[0_2px_10px_rgba(22,163,74,0.25)] hover:bg-green-700 hover:shadow-[0_4px_16px_rgba(22,163,74,0.35)]',
  pink: 'border-cyber-pink bg-cyber-pink text-white shadow-[0_2px_10px_rgba(236,72,153,0.3)] hover:bg-pink-600 hover:shadow-[0_4px_16px_rgba(236,72,153,0.4)]',
  outline: 'border-gray-300 bg-white text-slate-700 hover:border-cyber-purple hover:text-cyber-purple hover:shadow-[0_2px_12px_rgba(147,51,234,0.15)]',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function NeonButton({ children, variant = 'purple', href, to, onClick, className = '', size = 'md' }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-all duration-300 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={base}>{children}</Link>
  if (href) {
    const isExternal = href.startsWith('http')
    return <a href={href} className={base} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  }
  return <button onClick={onClick} className={base}>{children}</button>
}
