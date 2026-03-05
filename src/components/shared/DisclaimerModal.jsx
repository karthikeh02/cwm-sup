import { useState } from 'react'
import { X } from 'lucide-react'

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-teal-50 border-t border-teal-200 px-4 py-3">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-teal-800">
          Investing in NFTs are inherently risky activities, and as such, it is vital that you conduct your own due diligence before buying or selling any NFT, and come to your own conclusions.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 p-1 text-teal-600 hover:text-teal-900 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
