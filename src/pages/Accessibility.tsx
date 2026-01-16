import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Headphones, Eye, Hand, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accessibility = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VoiceBook is committed to making reading accessible to everyone.
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 16, 2026
            </p>

            {/* Accessibility Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio-First Experience</h3>
                <p className="text-gray-600 text-sm">
                  Our core mission is to transform written content into high-quality audio, making books accessible to those who cannot read traditional text.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Designed for users with visual impairments, featuring high contrast modes, scalable text, and full screen reader compatibility.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Hand className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Motor Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Voice commands and simplified gestures allow users with motor impairments to navigate and control playback hands-free.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cognitive Support</h3>
                <p className="text-gray-600 text-sm">
                  Adjustable reading speeds, bookmarking, and simple navigation help users with dyslexia, ADHD, and other cognitive differences.
                </p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-600 mb-4">
                VoiceBook was built with accessibility at its core. We believe everyone deserves access to the joy of reading, regardless of their abilities. Our team is committed to ensuring that our application meets or exceeds accessibility standards and provides an inclusive experience for all users.
              </p>
              <p className="text-gray-600">
                We continually improve the accessibility of our platform based on user feedback, new technologies, and evolving best practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conformance Standards</h2>
              <p className="text-gray-600 mb-4">
                VoiceBook aims to conform to the following accessibility standards:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">
                    <strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines for web and mobile applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">
                    <strong>Section 508:</strong> U.S. federal accessibility requirements for electronic and information technology
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">
                    <strong>EN 301 549:</strong> European accessibility requirements for ICT products and services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">
                    <strong>ADA Compliance:</strong> Americans with Disabilities Act requirements for digital accessibility
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Application</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Full VoiceOver (iOS) and TalkBack (Android) screen reader support</li>
                <li>Dynamic Type support for adjustable text sizes</li>
                <li>High contrast mode for better visibility</li>
                <li>Reduced motion option for users sensitive to animations</li>
                <li>Voice command support for hands-free navigation</li>
                <li>Customizable playback speeds (0.5x to 3x)</li>
                <li>Sleep timer with audio fade-out</li>
                <li>Offline mode for uninterrupted listening</li>
                <li>Chapter navigation and bookmarking</li>
                <li>Haptic feedback for interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Website</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Keyboard-accessible navigation throughout the site</li>
                <li>Skip navigation links for easier content access</li>
                <li>ARIA labels and landmarks for assistive technologies</li>
                <li>Color contrast ratios meeting WCAG AA standards</li>
                <li>Responsive design for all screen sizes</li>
                <li>Alternative text for all meaningful images</li>
                <li>Focus indicators for keyboard navigation</li>
                <li>No content relies solely on color to convey information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Assistive Technology Compatibility</h2>
              <p className="text-gray-600 mb-4">VoiceBook has been tested and is compatible with:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Screen Readers</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• VoiceOver (iOS/macOS)</li>
                    <li>• TalkBack (Android)</li>
                    <li>• NVDA (Windows)</li>
                    <li>• JAWS (Windows)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Voice Control</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Voice Control (iOS)</li>
                    <li>• Voice Access (Android)</li>
                    <li>• Dragon NaturallySpeaking</li>
                    <li>• Windows Speech Recognition</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Switch Control</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Switch Control (iOS)</li>
                    <li>• Switch Access (Android)</li>
                    <li>• External switch devices</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Display Adaptations</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Zoom magnification</li>
                    <li>• Inverted colors</li>
                    <li>• Grayscale mode</li>
                    <li>• Color filters</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Known Limitations</h2>
              <p className="text-gray-600 mb-4">
                While we strive for full accessibility, we are aware of the following limitations that we are actively working to address:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Some older PDF documents may not convert optimally for audio narration</li>
                <li>Complex tables and charts in documents are described but may lose some context</li>
                <li>Third-party embedded content may not meet our accessibility standards</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We are continuously working to improve these areas and welcome feedback on how we can enhance accessibility.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testing & Evaluation</h2>
              <p className="text-gray-600 mb-4">
                Our accessibility efforts include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Regular automated accessibility testing using industry-standard tools</li>
                <li>Manual testing with assistive technologies by trained accessibility specialists</li>
                <li>User testing with individuals who have disabilities</li>
                <li>Ongoing accessibility audits by third-party experts</li>
                <li>Continuous monitoring and improvement based on user feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback & Support</h2>
              <p className="text-gray-600 mb-4">
                We welcome your feedback on the accessibility of VoiceBook. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">Accessibility Support</h4>
                <p className="text-blue-800 text-sm">
                  For accessibility-related issues, we aim to respond within 2 business days.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>VoiceBook Accessibility Team</strong><br />
                  Email: accessibility@getvoicebook.app<br />
                  Phone: 1-800-VOICE-BK (1-800-864-2325)<br />
                  Website: getvoicebook.app/accessibility
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Formal Complaints</h2>
              <p className="text-gray-600">
                If you are not satisfied with our response to your accessibility concern, you may file a formal complaint. We take all complaints seriously and will investigate and respond within 30 days. Complaints can be sent to accessibility@getvoicebook.app with the subject line "Accessibility Complaint."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
              <p className="text-gray-600">
                Accessibility is not a destination but a journey. We are committed to continually improving the accessibility of VoiceBook and welcome your partnership in making reading accessible to everyone. This statement will be updated as we implement new accessibility features and address identified barriers.
              </p>
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

export default Accessibility;
