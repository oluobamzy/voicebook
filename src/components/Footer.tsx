import { Link } from 'react-router-dom';
import { config } from '../config';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#' },
      { name: 'Download', href: '#download' },
      { name: "What's New", href: '#' },
      { name: 'Roadmap', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: config.support.helpCenter },
      { name: 'Contact Us', href: '#support' },
      { name: 'FAQs', href: '#support' },
      { name: 'System Status', href: '#' },
      { name: 'Report a Bug', href: '#' }
    ],
    community: [
      { name: 'Discord', href: config.community.discord },
      { name: 'Slack', href: config.community.slack },
      { name: 'Twitter', href: config.social.twitter },
      { name: 'Instagram', href: config.social.instagram },
      { name: 'Blog', href: config.social.blog }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
      { name: 'Terms of Service', href: '/terms-of-service', isRoute: true },
      { name: 'Cookie Policy', href: '/cookie-policy', isRoute: true },
      { name: 'Accessibility', href: '/accessibility', isRoute: true }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="VoiceBook Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">VoiceBook</span>
            </a>
            <p className="text-gray-400 mb-4">
              Transform reading into listening
            </p>
            <p className="text-sm text-gray-500">
              getvoicebook.app
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 VoiceBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
