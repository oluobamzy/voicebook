import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Community', href: '#community' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="VoiceBook Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">VoiceBook</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Download Button - Desktop */}
          <a
            href="#download"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/25"
          >
            Download Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 mt-2"
              >
                Download Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
