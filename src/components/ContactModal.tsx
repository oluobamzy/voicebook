import { useEffect, useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        reset();
        setIsSubmitted(false);
        setFileName(null);
      }, 300);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: FormData) => {
    // Using Formspree with direct email endpoint
    // This sends form submissions directly to oluobamzy@gmail.com
    
    try {
      const response = await fetch('https://formspree.io/f/xvzzgedn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          category: data.category,
          message: data.message,
          _subject: `VoiceBook Contact: ${data.category}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Contact Support
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Get personalized assistance from our team
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        id="category"
                        {...register('category', { required: 'Please select a category' })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.category ? 'border-red-500' : 'border-gray-200'
                        } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white`}
                      >
                        <option value="">Select a category</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing</option>
                        <option value="feature">Feature Request</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.category && (
                        <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message', {
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters'
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message ? 'border-red-500' : 'border-gray-200'
                        } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none`}
                        placeholder="Describe your issue or question..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* File Attachment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Attachment (optional)
                      </label>
                      <label className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-dashed border-gray-300 hover:border-blue-500 cursor-pointer transition-colors bg-gray-50 hover:bg-blue-50">
                        <Upload className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {fileName || 'Upload a file'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept="image/*,.pdf,.doc,.docx"
                        />
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We typically respond within 24 hours
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
