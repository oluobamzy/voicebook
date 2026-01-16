import { Bot, Smartphone, RefreshCw, Bookmark, Zap, Moon, Library, BarChart3, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Narration',
    description: 'Natural-sounding voices with emotion and pacing. Upload 2min voice to guide your persona.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Smartphone,
    title: 'Offline Listening',
    description: 'Download books for offline playback. No internet? No problem.',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: RefreshCw,
    title: 'Cross-Device Sync',
    description: 'Seamless syncing across iPhone, iPad, and Android. Pick up exactly where you left off.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Bookmark,
    title: 'Smart Bookmarks',
    description: 'Automatic bookmarking and note-taking. Never lose your place.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Zap,
    title: 'Speed Control',
    description: 'Adjust playback speed from 0.5x to 3x. Time-saving without losing comprehension.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Moon,
    title: 'Sleep Timer',
    description: 'Fall asleep to your favorite book. Auto-stop after set duration.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Library,
    title: 'Library Management',
    description: 'Organize books into custom collections. Easy search and filtering.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50'
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Track listening time and books completed. Set and achieve reading goals.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50'
  },
  {
    icon: MessageCircle,
    title: 'Share & Discover',
    description: 'Share favorite passages. Discover recommendations from friends.',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Powerful Features for Every Listener
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for the perfect listening experience
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
