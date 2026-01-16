import { Play, Headphones, BookOpen, User, Library, Music } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onWatchDemo: () => void;
}

const Hero = ({ onWatchDemo }: HeroProps) => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-linear-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-900">Transform your reading</span>
              <br />
              <span className="text-gray-400">into listening</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
            >
              Experience your favorite books through the power of voice. Available on iOS and Android.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Download Now
              </a>
              <button
                onClick={onWatchDemo}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-100 sm:h-125 lg:h-150 hidden sm:block">
            {/* Audio Waveform Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 top-1/4 animate-float"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 w-48">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Audio Wave</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 70, 50, 80, 60, 90, 45, 75, 55, 85, 65, 40].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-linear-to-t from-blue-500 to-blue-300 rounded-full"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center App Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center animate-float-delayed">
                <Headphones className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
            </motion.div>

            {/* Now Playing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 top-1/3 animate-float-slow"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 w-56">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 truncate">The Great Gatsby</p>
                    <p className="text-xs text-gray-500">F. Scott Fitzgerald</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2:34:15</span>
                    <span>3:45:00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Library Grid Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-4 bottom-8 animate-float-delayed"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 w-44">
                <div className="flex items-center gap-2 mb-3">
                  <Library className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-medium text-gray-700">My Library</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'].map((color, i) => (
                    <div key={i} className={`aspect-3/4 ${color} rounded-md`} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* User Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute right-8 top-8 animate-float"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 w-40">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Your Stats</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Books Read</span>
                    <span className="font-semibold text-gray-900">24</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Hours</span>
                    <span className="font-semibold text-gray-900">156</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
