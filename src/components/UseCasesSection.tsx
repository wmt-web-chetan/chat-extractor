import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Clipboard, Megaphone, Store, Users, Crown, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const UseCasesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [useCasesRef, useCasesInView] = useIntersectionObserver();

  const useCases = [
    {
      id: 1,
      title: "Stock Trader & Crypto Investor",
      icon: TrendingUp,
      pain: "You're in a dozen high-volume trading groups where a five-minute delay means a missed opportunity. Trying to track buy signals, price targets, and market sentiment across thousands of messages is impossible, and the fear of missing out is constant.",
      solution: "You create a reusable Custom Prompt: \"Summarize all buy/sell signals for BTC, ETH, and SOL in the last hour.\" After syncing, you get one clean, actionable paragraph with the exact intel you need to make a trade, without ever scrolling through the noise.",
      color: "#10B981"
    },
    {
      id: 2,
      title: "Project Manager",
      icon: Clipboard,
      pain: "You're juggling chats for developers, clients, and the marketing team. Key decisions, progress blockers, and action items are buried under GIFs and side-conversations. Your first hour every morning is wasted just trying to get up to speed.",
      solution: "You use the Multi-Group feature to select all your project chats. With one click, you get a daily briefing summarizing yesterday's progress. Then, you use the Q&A to ask: \"List all action items assigned to Sarah,\" getting a clear to-do list in seconds.",
      color: "#3B82F6"
    },
    {
      id: 3,
      title: "Sales & Marketing Professional",
      icon: Megaphone,
      pain: "You need to track client feedback from multiple groups, monitor campaign sentiment, and pull lead updates for your weekly report. This means manually copy-pasting snippets into a spreadsheet—a tedious and soul-crushing task.",
      solution: "You sync the \"Client Feedback\" group for the last 7 days and ask: \"Summarize all positive and negative feedback about the new campaign.\" GistGem hands you a perfect, concise summary ready for your presentation slides.",
      color: "#F59E0B"
    },
    {
      id: 4,
      title: "Small Business Owner",
      icon: Store,
      pain: "You are the entire C-suite. You're in chats with suppliers, key customers, and your small team. Dropping the ball on a single message—like a client asking for a change or a supplier announcing a delay—could be disastrous.",
      solution: "You have GistGem provide an end-of-day summary for your \"Suppliers\" and \"Top Clients\" groups. Before logging off, you can instantly confirm you haven't missed a critical update, ensuring peace of mind and complete control.",
      color: "#EF4444"
    },
    {
      id: 5,
      title: "Community Manager",
      icon: Users,
      pain: "You manage a large online community for a course, brand, or hobby. The chat is always active. You need to identify recurring questions for an FAQ, gauge the overall mood, and find important user-generated content without reading every single message.",
      solution: "You run a weekly summary to get a pulse on the community's sentiment. You then use the Q&A to ask: \"What were the top 5 questions asked this week?\" to effortlessly create valuable support content that serves everyone.",
      color: "#8B5CF6"
    },
    {
      id: 6,
      title: "C-Level Executive / Team Lead",
      icon: Crown,
      pain: "You don't have time for the daily minutiae, but you need an unfiltered, high-level view of what's happening in key departments. You need to know about major decisions and roadblocks without waiting for a formal report.",
      solution: "You use GistGem to get a 30,000-foot view. By syncing with your main team chats, you can ask high-level questions like: \"What was the final decision on the Q4 hiring budget?\" and get the bottom line in seconds, enabling you to stay informed and strategic.",
      color: "#DC2626"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };


  return (
    <section 
      id="use-cases" 
      ref={useCasesRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden w-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23874EFF%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M0 0h40v40H0z%22/%3E%3Cpath d=%22M0 0h1v1H0zM39 39h1v1h-1z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${useCasesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-[#f3edff] backdrop-blur-sm border border-[#874EFF]/30 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <Briefcase className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">Use Cases</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Your Workflow, </span>
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Reimagined.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GistGem isn't just for summarizing, it's for transforming how you work. See how professionals across different fields are using GistGem to cut through the noise, save hours, and make smarter decisions. Find the use case that fits you.
          </p>
        </div>

        {/* Slider Container */}
        <div className={`relative transition-all duration-1000 ${useCasesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Slider Content */}
            <div className="relative overflow-hidden w-full">
              <div className="flex transition-transform duration-500 ease-in-out w-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {useCases.map((useCase) => (
                  <div key={useCase.id} className="w-full flex-shrink-0 min-w-0">
                    <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 min-h-[600px] w-full">
                      {/* Left Side - Icon and Title */}
                      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <div className="relative mb-8">
                          <div className="absolute inset-0 rounded-full blur-xl opacity-20" style={{ backgroundColor: useCase.color }}></div>
                          <div className="relative rounded-2xl p-6 flex items-center justify-center" style={{ backgroundColor: `${useCase.color}15`, border: `2px solid ${useCase.color}30` }}>
                            <useCase.icon className="h-12 w-12" style={{ color: useCase.color }} />
                          </div>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                          For the <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">{useCase.title}</span>
                        </h3>
                        
                        {/* Role Description */}
                        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                          <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center justify-center lg:justify-start">
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mr-2">⚠️</span>
                            The Pain
                          </h4>
                          <p className="text-gray-700 text-base leading-relaxed">
                            {useCase.pain}
                          </p>
                        </div>
                      </div>
                      
                      {/* Right Side - Solution */}
                      <div className="flex flex-col justify-center">
                        <div className="rounded-2xl p-6 shadow-lg border border-gray-100" style={{ backgroundColor: `${useCase.color}05` }}>
                          <h4 className="text-xl font-semibold mb-4 flex items-center justify-center lg:justify-start">
                            <span className="text-white px-3 py-1 rounded-full text-sm font-medium mr-2" style={{ backgroundColor: useCase.color }}>
                              ✨ The GistGem Solution
                            </span>
                          </h4>
                          <p className="text-gray-800 text-base leading-relaxed font-medium">
                            {useCase.solution}
                          </p>
                          
                          {/* Call to Action */}
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <button className="w-full lg:w-auto bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                              <span>Try GistGem Free</span>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 group-hover:text-[#874EFF] transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 group-hover:text-[#874EFF] transition-colors" />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#874EFF] w-10' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
          
          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} of {useCases.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;