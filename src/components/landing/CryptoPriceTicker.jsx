import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const COINS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { id: 'solana', symbol: 'SOL', name: 'Solana' },
  { id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
  { id: 'ripple', symbol: 'XRP', name: 'XRP' },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
]

const COIN_IDS = COINS.map((c) => c.id).join(',')

function formatPrice(price) {
  if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  if (price >= 1) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
}

export default function CryptoPriceTicker() {
  const [prices, setPrices] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let mounted = true

    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS}&vs_currencies=usd&include_24hr_change=true`
        )
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (mounted) {
          setPrices(data)
          setError(false)
        }
      } catch {
        if (mounted) setError(true)
      }
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 60000)
    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [])

  if (error || !prices) return null

  const items = COINS.map((coin) => {
    const data = prices[coin.id]
    if (!data) return null
    const price = data.usd
    const change = data.usd_24h_change
    const positive = change >= 0
    return { ...coin, price, change, positive }
  }).filter(Boolean)

  if (items.length === 0) return null

  return (
    <div className="relative overflow-hidden border-b border-white/5 bg-cyber-black/80 backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cyber-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cyber-black to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex whitespace-nowrap py-2.5">
        {[...items, ...items, ...items, ...items].map((coin, i) => (
          <div key={`${coin.id}-${i}`} className="flex items-center gap-3 mx-6 shrink-0">
            <span className="text-xs font-bold text-white/90">{coin.symbol}</span>
            <span className="text-xs font-mono text-white/70">${formatPrice(coin.price)}</span>
            <span className={`flex items-center gap-0.5 text-xs font-medium ${coin.positive ? 'text-cyber-green' : 'text-cyber-pink'}`}>
              {coin.positive
                ? <TrendingUp className="h-3 w-3" />
                : <TrendingDown className="h-3 w-3" />
              }
              {Math.abs(coin.change).toFixed(2)}%
            </span>
            <span className="ml-4 text-white/10">|</span>
          </div>
        ))}
      </div>
    </div>
  )
}
