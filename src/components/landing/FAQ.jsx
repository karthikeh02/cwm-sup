import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import useScrollAnimation from '@/hooks/useScrollAnimation'

const faqs = [
  {
    question: 'What types of wallets do you support for recovery?',
    answer: 'We support recovery for over 100 wallet platforms including hardware devices, software applications, web-based platforms, and mobile apps. If your wallet type is not listed, contact our team for a personalized assessment.',
  },
  {
    question: 'How long does the recovery process typically take?',
    answer: 'Most recovery cases are resolved within 24 to 72 hours. Simple cases such as locked accounts or forgotten passwords can often be resolved same-day. More complex situations involving compromised wallets or advanced security configurations may take up to 5 business days. You will receive status updates throughout the entire process.',
  },
  {
    question: 'Is my personal and wallet data kept secure during recovery?',
    answer: 'Absolutely. We use military-grade AES-256 encryption throughout the recovery process. Our zero-knowledge privacy architecture means we never store your security credentials or sensitive account data on our servers. All communication channels are end-to-end encrypted.',
  },
  {
    question: 'What if my wallet has been compromised or hacked?',
    answer: 'If your wallet has been compromised, our specialized security team can help secure remaining assets, trace unauthorized activity, and guide you through the process of regaining control. Time is critical in these cases — contact our 24/7 support line immediately for priority handling.',
  },
  {
    question: 'Do you charge upfront fees for recovery services?',
    answer: 'We offer a free initial case assessment. Our transparent pricing model means you will know the exact cost before any recovery work begins. There are no hidden fees, no surprise charges, and in many cases, if we cannot recover your assets, you do not pay.',
  },
  {
    question: 'Can you recover assets from lost security credentials?',
    answer: 'In certain scenarios, yes. If you have partial credential information, previous device backups, or other identifying data, our specialists may be able to reconstruct access. Each case is unique — submit your case details for a confidential evaluation by our recovery team.',
  },
  {
    question: 'How do I get started with the recovery process?',
    answer: 'Getting started is simple. Click the "Start Recovery" button anywhere on our site, fill in the brief intake form with your account details, and a certified recovery specialist will contact you within 24 hours with a personalized recovery plan. You can also call our 24/7 support line for immediate assistance.',
  },
]

export default function FAQ() {
  const [ref, isVisible] = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={ref}
      className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our digital currency wallet recovery services."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* FAQ accordion */}
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyber-purple transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side illustrations */}
          <div className="hidden lg:flex flex-col items-center gap-8 sticky top-24">
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-purple/5 rounded-full blur-[40px] pointer-events-none" />
              <img
                src="/images/nft-defi.png"
                alt="Digital Platform"
                className="relative w-[200px] h-auto drop-shadow-[0_0_15px_rgba(189,82,235,0.1)]"
              />
            </div>
            <img
              src="/images/phone-support.svg"
              alt="24/7 Support"
              className="w-[120px] h-auto opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
