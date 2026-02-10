import { Routes, Route } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import FloatingCTA from '@/components/shared/FloatingCTA'
import LandingPage from '@/pages/LandingPage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
