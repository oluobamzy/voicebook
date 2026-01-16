import { Twitter, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Join the VoiceBook Community
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow listeners, share recommendations, and stay updated
          </p>
        </motion.div>

        {/* Community Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discord Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#5865F2] rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Discord Community</h3>
                <p className="text-gray-600">Join 50,000+ members</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Book clubs & reading challenges
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Live discussions & events
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Early beta features access
              </li>
            </ul>
            <a
              href={config.community.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] transition-colors duration-300"
            >
              Join Discord Server
            </a>
          </motion.div>

          {/* Slack Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
                  <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
                  <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
                  <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Slack Workspace</h3>
                <p className="text-gray-600">Professional network</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Industry-specific channels
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Author AMAs & interviews
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Productivity tips & workflows
              </li>
            </ul>
            <a
              href={config.community.slack}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-300"
            >
              Join Slack
            </a>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Twitter, href: config.social.twitter, label: 'Twitter', hoverColor: 'hover:bg-[#1DA1F2] hover:text-white' },
              { icon: Instagram, href: config.social.instagram, label: 'Instagram', hoverColor: 'hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white' },
              { icon: Facebook, href: config.social.facebook, label: 'Facebook', hoverColor: 'hover:bg-[#1877F2] hover:text-white' },
              { icon: Linkedin, href: config.social.linkedin, label: 'LinkedIn', hoverColor: 'hover:bg-[#0A66C2] hover:text-white' },
              { icon: Youtube, href: config.social.youtube, label: 'YouTube', hoverColor: 'hover:bg-[#FF0000] hover:text-white' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 ${social.hoverColor}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
