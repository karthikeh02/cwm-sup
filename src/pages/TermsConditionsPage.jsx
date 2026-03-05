import { FileText } from 'lucide-react'
import BackgroundGrid from '@/components/shared/BackgroundGrid'

const sections = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    content: 'By creating an account or using our services, you acknowledge that you have read, understood, and agreed to comply with these terms. If you do not agree with any part of these terms, you must discontinue use of our platform immediately.',
  },
  {
    id: 2,
    title: 'User Eligibility',
    content: 'To use our services, you must meet the following eligibility requirements:',
    list: [
      { bold: 'Minimum Age:', text: 'Users must be at least 18 years old to access or use our services.' },
      { bold: 'Legal Eligibility:', text: 'You must have the legal capacity to enter into binding contracts in your jurisdiction.' },
      { bold: 'Regional Limitations:', text: 'Some services may be unavailable in particular locations due to regulatory restrictions or other limitations.' },
    ],
  },
  {
    id: 3,
    title: 'User Account Responsibilities',
    content: 'As a user of our platform, you are responsible for the following:',
    list: [
      { text: 'Maintaining the confidentiality of your account credentials, including passwords and security information.' },
      { text: 'Providing accurate, current, and complete information during registration and while using our services.' },
      { text: 'Accepting full responsibility for all activities that occur under your account.' },
      { text: 'Immediately reporting any unauthorized access, security breaches, or suspicious activity related to your account.' },
    ],
  },
  {
    id: 4,
    title: 'Service Usage Guidelines',
    content: 'When using our platform, you agree not to engage in any of the following prohibited activities:',
    list: [
      { text: 'Engaging in any illegal, fraudulent, or deceptive actions using our services.' },
      { text: 'Attempting to bypass, disable, or interfere with any security features or measures of our platform.' },
      { text: 'Using our services for money laundering, terrorist financing, or any other unlawful financial activities.' },
      { text: 'Interfering with, disrupting, or negatively impacting other users or the proper functioning of our platform.' },
      { text: 'You must comply with all applicable local, state, national, and international laws and regulations while using our services.' },
    ],
  },
  {
    id: 5,
    title: 'Intellectual Property',
    content: 'All content, software, design components, trademarks, logos, and other intellectual property displayed on our platform are solely owned by Portfolio Management or its licensors. Users may not copy, reproduce, distribute, share, or modify any materials from our platform without prior written consent from Portfolio Management.',
  },
  {
    id: 6,
    title: 'Financial Transactions',
    content: 'By engaging in financial transactions through our platform, you acknowledge and agree to the following:',
    list: [
      { text: 'Transaction fees and service charges are subject to change without prior notice. Current fees will always be displayed before you confirm any transaction.' },
      { text: 'You bear full responsibility for your financial decisions and actions taken on our platform.' },
      { text: 'We do not guarantee transaction results, recovery outcomes, or market performance. Past performance is not indicative of future results.' },
    ],
  },
  {
    id: 7,
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law, Portfolio Management and its officers, directors, employees, and agents shall not be held liable for:',
    list: [
      { text: 'Any financial losses, including but not limited to loss of funds, profits, or digital assets arising from the use of our services.' },
      { text: 'Any indirect, incidental, special, consequential, or punitive damages, regardless of the cause of action.' },
      { text: 'Any actions, errors, or omissions of third parties, including but not limited to service providers, partners, or other users.' },
    ],
  },
  {
    id: 8,
    title: 'Dispute Resolution',
    content: 'Any disputes, claims, or controversies arising out of or relating to these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. All arbitration proceedings shall be conducted in English. By agreeing to these terms, you waive your right to participate in class action lawsuits or class-wide arbitration.',
  },
  {
    id: 9,
    title: 'Modifications to Terms',
    content: 'We reserve the right to modify, update, or revise these terms at any time and at our sole discretion. When material changes are made, we will update the "Last Updated" date at the top of this page. Continued use of our services after any modifications constitutes your acceptance of the updated terms. We encourage you to review these terms periodically.',
  },
  {
    id: 10,
    title: 'Termination',
    content: 'We hold the right to suspend or terminate your account at our sole discretion, with or without prior notice, in the event of any breach of these terms. Upon termination, your right to access and use our services will immediately cease. Any provisions of these terms that by their nature should survive termination shall remain in full force and effect.',
  },
]

export default function TermsConditionsPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundGrid size={50} opacity={0.02} />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/60 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-purple-200 bg-purple-50 mb-6">
            <FileText className="h-7 w-7 text-cyber-purple" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-lg text-slate-400">Portfolio Management</p>
          <p className="mt-2 text-sm text-slate-300">Last Updated: March 2026</p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-slate-500">
            Welcome to <strong className="text-slate-700">Portfolio Management</strong>. By accessing or using our services, you agree to these Terms and Conditions that govern your use of our platform. Please read them carefully before proceeding.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#terms-${s.id}`}
                className="text-sm text-slate-400 hover:text-cyber-purple transition-colors py-1"
              >
                {s.id}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24 space-y-8">
        {sections.map((s) => (
          <div
            key={s.id}
            id={`terms-${s.id}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 scroll-mt-24 shadow-sm"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-2xl font-bold text-cyber-purple">{s.id}.</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{s.title}</h2>
            </div>
            <p className="text-base leading-[1.8] text-slate-500">{s.content}</p>
            {s.list && (
              <ul className="mt-4 space-y-3">
                {s.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-purple shrink-0" />
                    <span>
                      {item.bold && <strong className="text-slate-600">{item.bold} </strong>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-base leading-[1.8] text-slate-500">
            If you have any questions or concerns regarding these Terms and Conditions, please contact us:
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Phone: <a href="tel:+18887690872" className="text-slate-500 hover:text-cyber-purple transition-colors">+1 (888) 769-0872</a></p>
            <p>Availability: <span className="text-slate-500">24/7 Expert Support</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}
