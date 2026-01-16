import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 16, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">VoiceBook uses cookies and similar technologies for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly, including authentication, security, and accessibility preferences</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous analytics data</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to provide a personalized experience</li>
                <li><strong>Marketing Cookies:</strong> Track your activity across websites to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
                <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                </div>
                <div className="px-6 py-4">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-700">session_id</td>
                        <td className="py-2 text-gray-600">Maintains your login session</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-700">csrf_token</td>
                        <td className="py-2 text-gray-600">Protects against cross-site request forgery</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-gray-700">cookie_consent</td>
                        <td className="py-2 text-gray-600">Stores your cookie preferences</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
                <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                </div>
                <div className="px-6 py-4">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-700">_ga</td>
                        <td className="py-2 text-gray-600">Google Analytics - distinguishes users</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-700">_ga_*</td>
                        <td className="py-2 text-gray-600">Google Analytics - maintains session state</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-gray-700">_gid</td>
                        <td className="py-2 text-gray-600">Google Analytics - distinguishes users</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Third-Party Cookies</h3>
                </div>
                <div className="px-6 py-4">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-700">tawk_*</td>
                        <td className="py-2 text-gray-600">Tawk.to - live chat functionality</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-gray-700">__stripe_*</td>
                        <td className="py-2 text-gray-600">Stripe - payment processing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookie Duration</h2>
              <p className="text-gray-600 mb-4">Cookies can be either session cookies or persistent cookies:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them manually</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in several ways. Please note that removing or blocking cookies may impact your user experience and some functionality may no longer be available.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                Most browsers allow you to view, manage, delete, and block cookies. Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Links</h3>
              <p className="text-gray-600 mb-4">You can opt out of specific third-party cookies:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Google Analytics:</strong>{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>
                  <strong>General Advertising:</strong>{' '}
                  <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Your Online Choices
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Mobile App Tracking</h2>
              <p className="text-gray-600">
                Our mobile applications may use similar technologies such as SDKs (Software Development Kits) and mobile identifiers. You can limit ad tracking on your mobile device through your device settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li><strong>iOS:</strong> Settings → Privacy & Security → Tracking</li>
                <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Do Not Track</h2>
              <p className="text-gray-600">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to be tracked. Our website currently responds to DNT signals by disabling non-essential cookies when detected.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our operations, or for other reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-100 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>VoiceBook</strong><br />
                  Email: privacy@getvoicebook.app<br />
                  Website: getvoicebook.app
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 VoiceBook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CookiePolicy;
