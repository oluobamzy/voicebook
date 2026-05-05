import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';
import CookieBanner, { getStoredConsent } from './components/CookieBanner';
import AnalyticsScripts from './components/AnalyticsScripts';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(
    () => getStoredConsent() === 'accepted'
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner onChange={(v) => setAnalyticsEnabled(v === 'accepted')} />
      <AnalyticsScripts enabled={analyticsEnabled} />
    </Router>
  );
}

export default App;
