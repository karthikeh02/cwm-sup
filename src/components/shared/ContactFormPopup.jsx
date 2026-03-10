import { useState, useEffect, useRef } from 'react'
import { X, MessageSquare, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function ContactFormPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef(null)

  // Auto-open after 6 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true)
        setHasAutoOpened(true)
      }
    }, 6000)
    return () => clearTimeout(timer)
  }, [hasAutoOpened])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setTimeout(() => {
        setIsOpen(false)
        setSent(false)
        formRef.current?.reset()
      }, 3000)
    } catch (err) {
      setError('Failed to send. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Floating Button - sits above WhatsApp */}
      <button
        onClick={() => { setIsOpen(true); setError(''); setSent(false) }}
        className="group flex items-center gap-2 rounded-full bg-cyber-purple px-4 py-4 shadow-[0_2px_12px_rgba(147,51,234,0.3)] transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_4px_16px_rgba(147,51,234,0.4)] hover:pr-6"
      >
        <MessageSquare className="h-5 w-5 text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-xs group-hover:ml-1">
          Get Help
        </span>
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-cyber-purple to-purple-700 px-6 py-4">
              <h3 className="text-lg font-bold text-white">Get Free Consultation</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <CheckCircle className="h-14 w-14 text-green-500" />
                  <p className="text-lg font-semibold text-slate-800">Message Sent!</p>
                  <p className="text-sm text-slate-500">Our team will reach out to you shortly.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-cyber-purple focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-cyber-purple focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      required
                      placeholder="+1 (___) ___-____"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-cyber-purple focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Reason <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="reason"
                      required
                      rows={3}
                      placeholder="Briefly describe your issue..."
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-cyber-purple focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyber-purple px-6 py-3 text-sm font-bold text-white shadow-[0_2px_10px_rgba(147,51,234,0.3)] transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_4px_16px_rgba(147,51,234,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
