import React from 'react';
import { Quote, User } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface BetaTestimonialsSectionProps {
  scrollToSection: (sectionId: string) => void;
  onJoinWaitlist: () => void;
}

const BetaTestimonialsSection: React.FC<BetaTestimonialsSectionProps> = ({ scrollToSection, onJoinWaitlist }) => {
  const [testimonialsRef, testimonialsInView] = useIntersectionObserver();

  const testimonials = [
    {
      content: "This tool is a game-changer. I monitor three project groups, and getting a daily summary in the morning saves me at least an hour of scrolling. I can finally focus on what matters.",
      author: "Sarah K.",
      role: "Project Manager",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      content: "I used to miss crucial tips in my trading groups. Now, I run a custom prompt for 'trending stocks' every day. The accuracy is incredible. A must-have for any serious trader.",
      author: "David L.",
      role: "Independent Trader",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section 
      ref={testimonialsRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#C83FFF]/10 to-[#874EFF]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <Quote className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">Beta Feedback</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Loved by{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Busy Professionals
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative pt-4">
                {/* Quote Text */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-[#874EFF] transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-16 transition-all duration-1000 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Beta and Experience the Future of WhatsApp Communication
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Be among the first to transform your WhatsApp workflow with AI-powered insights.
            </p>
            <button 
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Join Beta Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaTestimonialsSection;