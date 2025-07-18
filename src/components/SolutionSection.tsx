import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, Search, Zap, ArrowRight, Clock, Users, Bot } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SolutionSectionProps {
  scrollToSection: (sectionId: string) => void;
  onJoinWaitlist: () => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ scrollToSection, onJoinWaitlist }) => {
  const [solutionRef, solutionInView] = useIntersectionObserver();
  const [activeFeature, setActiveFeature] = useState(0);

  // Reset active feature if it's the hidden one on mobile
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768 && activeFeature === 2) {
        setActiveFeature(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [activeFeature]);

  const solutions = [
    {
      id: 0,
      icon: MessageSquare,
      title: "Digest Hours in Seconds",
      description: "Get instant AI-powered summaries from all your important groups at once.",
      color: "from-[#874EFF] to-[#C83FFF]",
      bgColor: "from-[#874EFF]/5 to-[#C83FFF]/5",
      mockup: {
        title: "Auto-Summarize group chats",
        subtitle: "AI Processing Active",
        groups: [
          { name: "Team Updates", messages: "15 new messages", color: "bg-blue-100" },
          { name: "Project Alpha", messages: "8 new messages", color: "bg-green-100" },
          { name: "Client Feedback", messages: "12 new messages", color: "bg-purple-100" }
        ],
        summary: "Key Updates: Project Alpha deadline moved to Friday. Client approved design changes. Team meeting scheduled for 2 PM tomorrow. Budget approved for Q1 initiatives.",
        stat: "95% accuracy",
        processing: "Summarizing 35 messages..."
      }
    },
    {
      id: 1,
      icon: Search,
      title: "Find Answers Instantly",
      description: "Ask direct questions about your chats and get accurate answers without searching.",
      color: "from-[#874EFF] to-[#C83FFF]",
      bgColor: "from-[#874EFF]/5 to-[#C83FFF]/5",
      mockup: {
        title: "Ask questions like \"what did I miss yesterday?\"",
        subtitle: "AI Question Answering",
        groups: [
          { name: "Marketing Team", messages: "Question answered", color: "bg-green-100" },
          { name: "Sales Updates", messages: "3 relevant results", color: "bg-blue-100" },
          { name: "Product Roadmap", messages: "2 key mentions", color: "bg-orange-100" }
        ],
        summary: "Yesterday's key updates: New product launch scheduled for next month. Marketing campaign budget increased by 20%. Sarah joined as new team lead.",
        stat: "3x faster",
        processing: "Analyzing chat history..."
      }
    },
    {
      id: 2,
      icon: Zap,
      title: "Automate Your Routine",
      description: "Use reusable prompts to get daily insights from your most important groups with a single click.",
      color: "from-[#874EFF] to-[#C83FFF]",
      bgColor: "from-[#874EFF]/5 to-[#C83FFF]/5",
      mockup: {
        title: "Custom prompts like \"show upcoming events\"",
        subtitle: "Automated Daily Insights",
        groups: [
          { name: "Events & Meetings", messages: "5 upcoming events", color: "bg-orange-100" },
          { name: "Deadlines", messages: "3 this week", color: "bg-red-100" },
          { name: "Action Items", messages: "7 pending tasks", color: "bg-yellow-100" }
        ],
        summary: "Upcoming: Team standup (Mon 9 AM), Client presentation (Wed 2 PM), Project deadline (Fri). Action items: Review designs, Update documentation, Schedule follow-up.",
        stat: "10x efficiency",
        processing: "Running daily automation..."
      }
    }
  ];

  // Auto-cycle cards on large screens
  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 768;
    
    if (isLargeScreen) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % solutions.length);
      }, 4000); // Change every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [solutions.length]);

  const currentSolution = solutions[activeFeature];

  return (
    <section 
      id="solution" 
      ref={solutionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#C83FFF]/10 to-[#874EFF]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 bg-[#874EFF]/10 text-[#874EFF] px-4 py-2 rounded-full text-sm font-semibold">
             AI-Powered Solution
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Introducing WhatsApp Extractor:{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Your Personal AI Assistant
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Reclaim your time and focus. WhatsApp Extractor lives in your browser and works directly with WhatsApp Web to cut through the noise. Our intelligent tool empowers you to:
          </p>
        </div>

        {/* Main Demo Section - Hidden on mobile */}
        <div className={`hidden md:block mb-16 transition-all duration-1000 ${solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#874EFF] to-[#C83FFF] rounded-3xl p-2 shadow-xl">
                <div className="bg-white rounded-2xl p-6">
                  {/* Mock WhatsApp Interface */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">WhatsApp Web</div>
                        <div className="text-sm text-gray-500">{currentSolution.mockup.subtitle}</div>
                      </div>
                      <div className="ml-auto">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Mock Chat Groups */}
                    <div className="space-y-2 mb-4">
                      {currentSolution.mockup.groups.map((group, index) => (
                        <div key={index} className={`${group.color} p-3 rounded-lg text-sm transition-all duration-300`}>
                          <div className="font-medium text-gray-900">{group.name}</div>
                          <div className="text-gray-600">{group.messages}</div>
                        </div>
                      ))}
                    </div>

                    {/* Processing Indicator */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm text-blue-700">{currentSolution.mockup.processing}</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Summary Panel */}
                  <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <currentSolution.icon className="h-5 w-5 text-[#874EFF]" />
                      <span className="font-semibold text-gray-900">{currentSolution.mockup.title}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {currentSolution.mockup.stat}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      <strong>AI Response:</strong> {currentSolution.mockup.summary}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Indicator */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Feature Details */}
            <div className="space-y-6">
              <div className={`bg-gradient-to-r ${currentSolution.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300`}>
                <currentSolution.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900">{currentSolution.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentSolution.description}
              </p>
              
              <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                {currentSolution.mockup.stat}
              </div>

              <button 
                onClick={onJoinWaitlist}
                className={`bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onClick={(e) => {
                if (window.innerWidth >= 768) {
                  setActiveFeature(index);
                }
              }}
              className={`md:cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 border-2 ${
                activeFeature === index 
                  ? 'md:border-[#874EFF] md:ring-4 md:ring-[#874EFF]/20 border-gray-100' 
                  : 'border-gray-100 hover:border-[#874EFF]/30'
              } ${
                solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Demo/Mockup for Mobile - Show on top of each card */}
              <div className="md:hidden mb-4">
                <div className="bg-gradient-to-br from-[#874EFF] to-[#C83FFF] rounded-t-2xl p-2">
                  <div className="bg-white rounded-xl p-4">
                    {/* Mock WhatsApp Interface */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">WhatsApp Web</div>
                          <div className="text-xs text-gray-500">{solution.mockup.subtitle}</div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Mock Chat Groups */}
                      <div className="space-y-1 mb-3">
                        {solution.mockup.groups.map((group, gIndex) => (
                          <div key={gIndex} className={`${group.color} p-2 rounded-lg text-xs`}>
                            <div className="font-medium text-gray-900">{group.name}</div>
                            <div className="text-gray-600">{group.messages}</div>
                          </div>
                        ))}
                      </div>

                      {/* Processing Indicator */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-xs text-blue-700">{solution.mockup.processing}</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Summary Panel */}
                    <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <solution.icon className="h-4 w-4 text-[#874EFF]" />
                        <span className="font-semibold text-gray-900 text-sm">{solution.mockup.title}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {solution.mockup.stat}
                        </span>
                      </div>
                      <div className="text-xs text-gray-700 leading-relaxed">
                        <strong>AI Response:</strong> {solution.mockup.summary}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className={`bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 ${
                  activeFeature === index ? 'md:scale-110' : 'md:group-hover:scale-110'
                }`}>
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  activeFeature === index ? 'md:text-[#874EFF] text-gray-900' : 'text-gray-900 md:hover:text-[#874EFF]'
                }`}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`text-center transition-all duration-1000 ${solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-[#874EFF]/5 to-[#C83FFF]/5 rounded-3xl p-8 border border-[#874EFF]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transform information overload into a strategic advantage.
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Stop drowning in messages and start making informed decisions with AI-powered insights.
            </p>
            <button 
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;