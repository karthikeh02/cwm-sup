import { Link } from 'react-router-dom'
import { Shield, Phone, Clock, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="relative bg-cyber-black border-t border-white/5">
      {/* Neon accent bars */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-cyber-pink to-transparent opacity-60" />
      <div className="h-[2px] bg-gradient-to-r from-transparent via-cyber-purple to-transparent opacity-40 mt-[1px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyber-purple/50 bg-cyber-purple/20 shadow-[0_0_12px_rgba(189,82,235,0.4)]">
                <Shield className="h-5 w-5 text-cyber-purple" />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase text-white">
                Crypto Wallet <span className="text-cyber-purple">Management</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Your trusted partner in digital asset security and recovery. Protecting millions of wallets worldwide since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-cyber-purple"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18447062190"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-cyber-green"
                >
                  <Phone className="h-4 w-4" />
                  +1 (844) 706-2190
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4" />
                24/7 Expert Support Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Crypto Wallet Management. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Securing digital assets with confidence.
          </p>
        </div>
      </div>
    </footer>
  )
}
