import React from 'react';
import { Clock, Search, Eye, ScanSearch, AlertTriangle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ChromeIcon from '../assets/Chrome.svg';

interface ProblemSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ scrollToSection }) => {
  const [problemRef, problemInView] = useIntersectionObserver();

  const problems = [
    {
      icon: Clock,
      title: "Endlessly Scrolling",
      description: "Wasting precious time trying to catch up on hundreds of unread messages.",
      color: "#874EFF"
    },
    {
      icon: Search,
      title: "Missing Key Information", 
      description: "Overlooking critical decisions, deadlines, and opportunities buried in conversation.",
      color: "#874EFF"
    },
    {
      icon: Eye,
      title: "Feeling the FOMO",
      description: "Constantly worried you've missed an important update in a high-volume group.",
      color: "#874EFF"
    },
    {
      icon: ScanSearch,
      title: "Searching Manually",
      description: "Frantically trying to find a specific piece of information you know was shared last week.",
      color: "#874EFF"
    }
  ];

  return (
    <section 
      id="problem" 
      ref={problemRef}
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23874EFF%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M0 0h40v40H0z%22/%3E%3Cpath d=%22M0 0h1v1H0zM39 39h1v1h-1z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-[#f3edff] backdrop-blur-sm border border-[#874EFF]/30 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <AlertTriangle className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">The Problem</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            <span className="text-white">Sound Familiar?</span>{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              The Group Chat Struggle is Real.
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            You rely on WhatsApp for work, investments, and communities, but the constant stream of messages is overwhelming. You find yourself:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8 hover:bg-gray-800/40 hover:border-[#874EFF]/20 transition-all duration-500 group h-full shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-[#874EFF]/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <problem.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#874EFF] transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-10 max-w-4xl mx-auto hover:bg-gray-800/50 hover:border-[#874EFF]/30 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Break Free from the Chaos?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your WhatsApp experience from overwhelming to organized with AI-powered insights.
            </p>
            <button 
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-[#874EFF]/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
              <img src={ChromeIcon} alt="Chrome" className="h-6 w-6" />
              Add to Chrome
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;