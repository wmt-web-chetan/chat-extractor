import React from 'react';
import { Check, Users, Brain, MessageCircle, Repeat, RefreshCw } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import firtFeature from "../assets/FirstFeature.png"
const FeaturesSection: React.FC = () => {
  const [featuresRef, featuresInView] = useIntersectionObserver();

  const features = [
    {
      icon: Users,
      title: "Multi-Group Chat Extraction",
      description: "Select multiple WhatsApp groups or individual profiles at once and extract chats for a specific date range.",
      image: firtFeature,
      color: "from-[#874EFF] to-[#C83FFF]",
      reverse: false
    },
    {
      icon: Brain,
      title: "AI-Powered Summarization",
      description: "Let our advanced AI automatically generate concise, context-rich overviews of your chat histories.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      reverse: true
    },
    {
      icon: MessageCircle,
      title: "Intelligent Q&A on Chats",
      description: "Ask direct questions based on the chat content and get accurate, AI-generated answers instantly.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      reverse: false
    },
    {
      icon: Repeat,
      title: "Reusable Custom Prompts",
      description: "Save your recurring queries and run them with a single click to get daily insights without retyping.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      reverse: true
    },
    {
      icon: RefreshCw,
      title: "On-Demand Sync",
      description: "You are in control. Click the sync button anytime to fetch the latest conversations and ensure your insights are always up-to-date.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      reverse: false
    }
  ];

  return (
    <section 
      id="features" 
      ref={featuresRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-[#874EFF] mr-3" />
            <span className="bg-[#874EFF]/10 text-[#874EFF] px-4 py-2 rounded-full text-sm font-semibold">
              Features
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Unlock a{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Smarter Way
            </span>{' '}
            to Use WhatsApp
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 transition-all duration-1000 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    Feature
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] opacity-20 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-semibold text-gray-800 animate-pulse">✨ AI Powered</span>
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] opacity-20 rounded-full animate-ping"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;