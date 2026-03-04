import { Routes, Route } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import FloatingCTA from '@/components/shared/FloatingCTA'
import LandingPage from '@/pages/LandingPage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'
import TermsConditionsPage from '@/pages/TermsConditionsPage'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
