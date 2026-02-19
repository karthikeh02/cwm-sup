import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Shield } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyber-purple/50 bg-cyber-purple/20 shadow-[0_0_12px_rgba(189,82,235,0.4)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(189,82,235,0.6)]">
              <Shield className="h-5 w-5 text-cyber-purple" />
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-wider uppercase text-white">
              Digital Currency Wallet<br className="sm:hidden lg:block" />
              <span className="text-cyber-purple"> Management</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.to
                    ? 'text-cyber-purple'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18447062190"
              className="inline-flex items-center gap-2 rounded-lg border border-cyber-purple/50 bg-cyber-purple/15 px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white shadow-[0_0_12px_rgba(189,82,235,0.3)] transition-all duration-300 hover:bg-cyber-purple/25 hover:shadow-[0_0_20px_rgba(189,82,235,0.5)]"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              +1 (844) 706-2190
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 border-b border-white/10' : 'max-h-0'
        }`}
      >
        <div className="bg-cyber-black/95 backdrop-blur-xl px-4 pb-6 pt-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === item.to
                  ? 'bg-cyber-purple/15 text-cyber-purple'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+18447062190"
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-cyber-purple hover:bg-white/5"
          >
            <Phone className="h-4 w-4" />
            +1 (844) 706-2190
          </a>
        </div>
      </div>
    </header>
  )
}
