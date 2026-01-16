import { Car, GraduationCap, Users, Dumbbell, Accessibility, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const useCases = [
  {
    icon: Car,
    title: 'Daily Commuters',
    description: 'Turn your commute into productive learning time. Listen to professional development books while driving or on public transit.',
    color: 'bg-blue-500'
  },
  {
    icon: GraduationCap,
    title: 'Students & Learners',
    description: 'Absorb textbooks and study materials through audio. Perfect for auditory learners and multitasking students.',
    color: 'bg-purple-500'
  },
  {
    icon: Users,
    title: 'Busy Parents',
    description: 'Get through your reading list while doing chores, cooking, or during kids\' activities. Read more with limited time.',
    color: 'bg-pink-500'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Enthusiasts',
    description: 'Make your workouts more engaging. Listen to motivational books while running, at the gym, or doing yoga.',
    color: 'bg-orange-500'
  },
  {
    icon: Accessibility,
    title: 'Visually Impaired Users',
    description: 'Access written content with ease. High-quality narration makes all books accessible to everyone.',
    color: 'bg-green-500'
  },
  {
    icon: Briefcase,
    title: 'Professionals',
    description: 'Stay ahead in your industry. Listen to business books, reports, and articles during lunch breaks or between meetings.',
    color: 'bg-indigo-500'
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            How People Use VoiceBook
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From commuters to busy moms, discover how VoiceBook fits into your life
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
