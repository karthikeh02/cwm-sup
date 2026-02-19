import { Shield } from 'lucide-react'
import BackgroundGrid from '@/components/shared/BackgroundGrid'

const sections = [
  {
    id: 1,
    title: 'Introduction',
    content: `At Network Vault Tech, we are committed to safeguarding the privacy and security of our users. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our platform, services, and website. By accessing or using our services, you agree to the practices described in this policy. We encourage you to read this document carefully to understand how we handle your data.`,
  },
  {
    id: 2,
    title: 'Information We Collect',
    content: 'We collect limited information necessary to provide and improve our services:',
    list: [
      { bold: 'Technical Information:', text: 'Device type, operating system, browser type, screen resolution, and general connection data used to optimize your experience.' },
      { bold: 'Service Information:', text: 'Account activity data, platform identifiers, and service records that you voluntarily submit when using our recovery and management services. We do not store security credentials or recovery phrases.' },
      { bold: 'Communication Information:', text: 'Messages, support requests, and correspondence you send to our team through our contact channels.' },
      { bold: 'Usage Analytics:', text: 'Anonymous, aggregated data about how users interact with our platform, including page views, feature usage, and session duration. This data cannot identify individual users.' },
    ],
  },
  {
    id: 3,
    title: 'How We Use Your Information',
    content: 'We use the information we collect for the following purposes:',
    list: [
      { text: 'To provide, maintain, and improve our account recovery and management services.' },
      { text: 'To communicate with you regarding support requests, service updates, and important security notifications.' },
      { text: 'To detect, prevent, and address security threats, fraud, and unauthorized activity on our platform.' },
      { text: 'To analyze anonymous usage patterns and optimize the performance, reliability, and user experience of our services.' },
      { text: 'To comply with applicable legal obligations, regulatory requirements, and law enforcement requests.' },
    ],
  },
  {
    id: 4,
    title: 'Data Security and Protection',
    content: 'Protecting your data is foundational to our mission. We employ multiple layers of security:',
    list: [
      { bold: 'End-to-End Encryption:', text: 'All data transmitted between your device and our servers is encrypted using TLS 1.3. Sensitive data at rest is protected with AES-256 encryption.' },
      { bold: 'Security Credential Policy:', text: 'We never collect, store, transmit, or access your security credentials, recovery phrases, or sensitive authentication data. These remain exclusively under your control at all times.' },
      { bold: 'Real-Time Threat Monitoring:', text: 'Our systems continuously monitor for suspicious activity, unauthorized access attempts, and potential security threats with automated alerting.' },
      { bold: 'Encrypted Cloud Backup:', text: 'If you opt into our backup services, your data is encrypted client-side before being stored in our secure, redundant cloud infrastructure.' },
      { bold: 'Access Controls:', text: 'Internal access to user data is strictly limited to authorized personnel on a need-to-know basis, with all access logged and audited.' },
    ],
  },
  {
    id: 5,
    title: 'Sharing and Disclosure',
    content: 'We are committed to protecting your privacy and do not sell, rent, or trade your personal information to third parties. We may share limited information only in the following circumstances:',
    list: [
      { text: 'When required by law, legal process, or enforceable governmental request.' },
      { text: 'With trusted service partners who assist in delivering our services, bound by strict confidentiality agreements.' },
      { text: 'With analytics providers who process anonymized, aggregated data that cannot identify individual users.' },
      { text: 'To protect the rights, property, or safety of Network Vault Tech, our users, or the public.' },
    ],
  },
  {
    id: 6,
    title: 'Third-Party Services and Links',
    content: `Our platform may contain links to third-party websites, services, or applications that are not operated by Network Vault Tech. We are not responsible for the privacy practices, content, or security of these external services. We encourage you to review the privacy policies of any third-party service before providing your information.`,
  },
  {
    id: 7,
    title: 'Cookies and Tracking Technologies',
    content: `We use essential cookies to ensure the proper functionality of our platform. We do not use advertising cookies or tracking pixels. You may configure your browser to refuse cookies, though this may limit certain features of our service.`,
  },
  {
    id: 8,
    title: 'Your Privacy Choices',
    content: 'You have the following rights regarding your personal information:',
    list: [
      { bold: 'Opt-Out:', text: 'You may opt out of non-essential communications and marketing messages at any time by contacting our support team.' },
      { bold: 'Data Access:', text: 'You may request a copy of the personal information we hold about you.' },
      { bold: 'Data Deletion:', text: 'You may request the deletion of your personal data, subject to any legal obligations that require us to retain certain information.' },
      { bold: 'Security Preferences:', text: 'You may configure additional security measures for your account, including notification preferences and access controls.' },
    ],
  },
  {
    id: 9,
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a user under 18 has provided us with personal information, we will take immediate steps to delete such data from our systems.`,
  },
  {
    id: 10,
    title: 'International Data Transfers',
    content: `If you access our services from outside the United States, your information may be transferred to, stored, and processed in the United States or other jurisdictions where our servers and service providers operate. We take appropriate measures to ensure your data receives adequate protection in accordance with applicable data protection laws.`,
  },
  {
    id: 11,
    title: 'Updates to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will notify you by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.`,
  },
  {
    id: 12,
    title: 'Contact Us',
    content: 'If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
    contact: true,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundGrid size={50} opacity={0.02} />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/8 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyber-purple/40 bg-cyber-purple/15 mb-6 shadow-[0_0_20px_rgba(189,82,235,0.3)]">
            <Shield className="h-7 w-7 text-cyber-purple" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-white/50">Network Vault Tech</p>
          <p className="mt-2 text-sm text-white/30">Last Updated: February 2026</p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#section-${s.id}`}
                className="text-sm text-white/50 hover:text-cyber-purple transition-colors py-1"
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
            id={`section-${s.id}`}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 scroll-mt-24"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-2xl font-bold text-cyber-purple">{s.id}.</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{s.title}</h2>
            </div>
            <p className="text-base leading-[1.8] text-white/60">{s.content}</p>
            {s.list && (
              <ul className="mt-4 space-y-3">
                {s.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-purple shrink-0" />
                    <span>
                      {item.bold && <strong className="text-white/80">{item.bold} </strong>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {s.contact && (
              <div className="mt-4 space-y-2 text-sm text-white/55">
                <p>Phone: <a href="tel:+18887690872" className="text-white/70 hover:text-cyber-purple transition-colors">+1 (888) 769-0872</a></p>
                <p>Response Time: <span className="text-white/70">We aim to respond to all privacy-related inquiries within 48 hours.</span></p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
