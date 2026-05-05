import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const STORAGE_KEY = 'voicebook_cookie_consent';

export type ConsentValue = 'accepted' | 'declined';

export function getStoredConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'accepted' || v === 'declined') return v;
  } catch {
    // ignore
  }
  return null;
}

interface Props {
  onChange: (value: ConsentValue) => void;
}

const CookieBanner = ({ onChange }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) setVisible(true);
  }, []);

  const set = (value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    onChange(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-50 mx-auto max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                We value your privacy
              </h2>
              <p className="text-sm text-gray-600">
                We use cookies for analytics and live chat to improve your experience. You can
                accept or decline these optional cookies. See our{' '}
                <Link to="/cookie-policy" className="text-blue-500 hover:text-blue-600 underline">
                  Cookie Policy
                </Link>
                .
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => set('accepted')}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm"
                >
                  Accept all
                </button>
                <button
                  onClick={() => set('declined')}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-300 text-sm"
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={() => set('declined')}
              aria-label="Close cookie banner"
              className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
