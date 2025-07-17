import React from 'react';
import { Download, MessageSquare, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface HowItWorksSectionProps {
  scrollToSection: (sectionId: string) => void;
  onJoinWaitlist: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ scrollToSection, onJoinWaitlist }) => {
  const [howItWorksRef, howItWorksInView] = useIntersectionObserver();

  const steps = [
    {
      icon: Download,
      title: "Install the Chrome Extension",
      description: "Head to the Chrome Web Store and add the WhatsApp Extractor extension to your browser in one click.",
      emoji: "🚀",
      color: "from-[#874EFF] to-[#C83FFF]",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: MessageSquare,
      title: "Open WhatsApp Web & Sign Up",
      description: "Open WhatsApp Web as you normally would. The extractor will appear, allowing you to create a secure account with just your email.",
      emoji: "💬",
      color: "from-[#874EFF] to-[#C83FFF]",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: Zap,
      title: "Extract, Summarize & Query!",
      description: "You're all set! Select your groups, click \"Sync,\" and let our AI provide you with summaries, answer your questions, and run your custom prompts.",
      emoji: "⚡",
      color: "from-[#874EFF] to-[#C83FFF]",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={howItWorksRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${howItWorksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-[#874EFF] mr-3" />
            <span className="bg-[#874EFF]/10 text-[#874EFF] px-4 py-2 rounded-full text-sm font-semibold">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your WhatsApp experience in minutes with our easy setup process
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full opacity-20"></div>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full transition-all duration-2000 ${howItWorksInView ? 'w-full' : 'w-0'}`}></div>
              
              {/* Animated Dots */}
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full transition-all duration-1000 ${
                    howItWorksInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ 
                    left: `${(index * 100) / (steps.length - 1)}%`,
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full animate-ping"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ${
                  howItWorksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >

                {/* Icon */}
                <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  {step.title}
                  <span className="text-2xl animate-bounce-subtle">{step.emoji}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${howItWorksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your WhatsApp Experience?</h3>
            <p className="text-gray-600 mb-6">Join thousands of professionals who've already revolutionized their communication workflow.</p>
            <button 
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;