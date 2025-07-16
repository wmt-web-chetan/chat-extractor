import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Search, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Auto-Summarize group chats',
    description: 'Get instant, intelligent summaries of your WhatsApp conversations with key insights highlighted automatically.',
    color: 'from-[#874EFF] to-[#C83FFF]',
    stats: '95% accuracy',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Search,
    title: 'Ask questions like "what did I miss yesterday?"',
    description: 'Ask natural language questions about your chat history and get accurate, context-aware answers instantly.',
    color: 'from-blue-500 to-cyan-500',
    stats: '10M+ queries',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Zap,
    title: 'Custom prompts like "show upcoming events"',
    description: 'Create personalized prompts to extract specific information and insights from your chats automatically.',
    color: 'from-green-500 to-emerald-500',
    stats: '500+ templates',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Bot,
    title: 'Works inside WhatsApp Web. No copy-paste needed.',
    description: 'Seamlessly integrated into WhatsApp Web interface. All processing happens locally for complete privacy.',
    color: 'from-orange-500 to-red-500',
    stats: '100% local',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const SolutionSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-8"
          >
            <Bot className="w-5 h-5 text-[#874EFF] mr-2" />
            <span className="text-[#874EFF] font-semibold">The Solution</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Your{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              AI Sidekick
            </span>{' '}
            for WhatsApp Web
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your WhatsApp experience with intelligent automation that works seamlessly within your browser
          </p>
        </motion.div>

        {/* Main Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Feature Image/Demo */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating UI Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className={`bg-gradient-to-r ${features[activeFeature].color} p-2 rounded-lg w-fit mb-2`}>
                  {React.createElement(features[activeFeature].icon, {
                    className: "w-5 h-5 text-white"
                  })}
                </div>
                <div className="text-sm font-semibold text-gray-900">AI Processing</div>
                <div className="text-xs text-gray-600">{features[activeFeature].stats}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-green-500/90 backdrop-blur-sm rounded-xl p-4 shadow-lg text-white"
              >
                <div className="text-sm font-semibold">Status: Active</div>
                <div className="text-xs opacity-90">Processing complete</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Details */}
          <motion.div
            key={`details-${activeFeature}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className={`bg-gradient-to-r ${features[activeFeature].color} p-4 rounded-2xl w-fit mb-6`}>
                {React.createElement(features[activeFeature].icon, {
                  className: "w-8 h-8 text-white"
                })}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {features[activeFeature].description}
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="text-sm text-gray-500 mb-2">Performance Metric</div>
                <div className="text-3xl font-bold text-gray-900">{features[activeFeature].stats}</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${features[activeFeature].color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center space-x-2`}
              >
                <span>Try This Feature</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Feature Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveFeature(index)}
              className={`group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                activeFeature === index ? 'border-[#874EFF] ring-4 ring-purple-100' : 'border-gray-100'
              }`}
            >
              <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#874EFF] transition-colors">
                {feature.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#874EFF] bg-purple-50 px-3 py-1 rounded-full">
                  {feature.stats}
                </span>
                {activeFeature === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 bg-[#874EFF] rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your WhatsApp Experience?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already extracting valuable insights from their WhatsApp conversations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Download Extension
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                Join Waitlist
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};