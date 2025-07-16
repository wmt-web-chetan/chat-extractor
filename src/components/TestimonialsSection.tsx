import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TestimonialsSection: React.FC = () => {
  const [testimonialsRef, testimonialsInView] = useIntersectionObserver();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "WhatsApp Extractor has revolutionized how our team handles client communications. We save 3+ hours daily and never miss important updates anymore.",
      rating: 5,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Michael Rodriguez",
      role: "Sales Director",
      company: "GrowthLabs",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The AI summarization is incredibly accurate. It picks up on nuances and context that I would have missed scrolling through hundreds of messages.",
      rating: 5,
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Emily Watson",
      role: "Operations Lead",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Finally, a solution that understands the chaos of WhatsApp business communications. The question-answering feature is like having an AI assistant.",
      rating: 5,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      company: "InnovateCo",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The privacy-first approach gives us confidence to use this with sensitive client data. Everything stays local and secure.",
      rating: 5,
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Manager",
      company: "BrandForce",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Our team productivity has increased by 40% since implementing WhatsApp Extractor. It's become an essential part of our workflow.",
      rating: 5,
      gradient: "from-teal-500 to-green-600"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "ScaleUp Inc",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "This tool has transformed how we handle customer support and internal communications. The ROI was immediate and substantial.",
      rating: 5,
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={testimonialsRef}
      className="py-20 bg-gradient-to-br from-[#874EFF]/5 to-[#C83FFF]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-[#874EFF] mr-3" />
            <span className="bg-[#874EFF]/10 text-[#874EFF] px-4 py-2 rounded-full text-sm font-semibold">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how professionals across industries are transforming their WhatsApp workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-sm opacity-50`}></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          {[
            { number: "10,000+", label: "Happy Users" },
            { number: "50M+", label: "Messages Processed" },
            { number: "95%", label: "Accuracy Rate" },
            { number: "4.9/5", label: "User Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;