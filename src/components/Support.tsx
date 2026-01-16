import { useState } from 'react';
import { BookOpen, MessageCircle, Headphones, Video, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';

interface SupportProps {
  onContactClick: () => void;
}

const faqs = [
  {
    question: 'How do I import my books?',
    answer: 'You can import books directly from your device, cloud storage (Google Drive, Dropbox, iCloud), or use our built-in browser to download from supported sources. We support drag-and-drop for desktop and share-sheet integration for mobile.'
  },
  {
    question: 'What file formats are supported?',
    answer: 'VoiceBook supports EPUB, PDF, MOBI, TXT, DOC, DOCX, and HTML files. Our AI can process and narrate content from all these formats with high accuracy.'
  },
  {
    question: 'How does the free trial work?',
    answer: 'Your 7-day free trial gives you full access to all premium features. No credit card required to start. You can cancel anytime before the trial ends without being charged.'
  },
  {
    question: 'Can I share my account with family?',
    answer: 'Yes! Our Family Plan allows up to 6 family members to share a subscription. Each member gets their own profile, library, and personalized recommendations.'
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription anytime from your account settings or through the App Store/Google Play. Your access continues until the end of your current billing period.'
  }
];

const Support = ({ onContactClick }: SupportProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const supportOptions = [
    {
      icon: BookOpen,
      title: 'Help Center',
      description: 'Browse FAQs and guides',
      buttonText: 'Visit Help Center',
      href: config.support.helpCenter,
      color: 'bg-blue-50 text-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Contact Support',
      description: 'Get personalized assistance',
      buttonText: 'Contact Us',
      onClick: onContactClick,
      color: 'bg-green-50 text-green-500'
    },
    {
      icon: Headphones,
      title: 'Live Chat',
      description: 'Chat with our team',
      buttonText: 'Start Chat',
      subtext: 'Mon-Fri, 9am-6pm EST',
      href: '#tawk-chat',
      color: 'bg-purple-50 text-purple-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Learn through videos',
      buttonText: 'Watch Tutorials',
      href: config.support.tutorials,
      color: 'bg-orange-50 text-orange-500'
    }
  ];

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Need Help? We're Here for You
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get the support you need, when you need it
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <option.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {option.description}
              </p>
              {option.subtext && (
                <p className="text-xs text-gray-500 mb-3">{option.subtext}</p>
              )}
              {option.onClick ? (
                <button
                  onClick={option.onClick}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors duration-300 text-sm"
                >
                  {option.buttonText}
                </button>
              ) : (
                <a
                  href={option.href}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors duration-300 text-sm"
                >
                  {option.buttonText}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Common Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Response Time Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 mt-8"
        >
          We typically respond within 24 hours
        </motion.p>
      </div>
    </section>
  );
};

export default Support;
