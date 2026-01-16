import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '../config';

const testimonials = [
  {
    quote: "VoiceBook has completely changed how I consume books. I've read more in the last month than the entire previous year!",
    author: "Sarah M.",
    role: "Busy Mom & Entrepreneur"
  },
  {
    quote: "The AI narration is incredibly natural. I forget I'm not listening to a human narrator.",
    author: "James K.",
    role: "Daily Commuter"
  },
  {
    quote: "As someone with visual impairments, VoiceBook has opened up a world of literature I couldn't access before.",
    author: "Maria L.",
    role: "Accessibility Advocate"
  },
  {
    quote: "Perfect for my morning runs. The speed control feature is a game-changer for getting through my reading list.",
    author: "David R.",
    role: "Fitness Enthusiast"
  }
];

const Download = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Get VoiceBook Today
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Start your audio journey on your favorite platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8"
        >
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={config.appStore.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-400">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </a>
            
            <a
              href={config.appStore.android}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-400">GET IT ON</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </a>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center border border-gray-200">
              <QrCode className="w-16 h-16 text-gray-900" />
            </div>
            <p className="text-sm text-gray-600">Scan to download</p>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">Join 5,000+ listeners worldwide</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.8/5</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="relative bg-gray-50 rounded-2xl p-8 sm:p-10">
            <div className="text-center">
              <p className="text-lg sm:text-xl text-gray-700 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</p>
                <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
