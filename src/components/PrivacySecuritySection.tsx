import React from 'react';
import { Shield, Database, Cpu, Eye, Lock, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PrivacySecuritySectionProps {
  scrollToSection: (sectionId: string) => void;
}

const PrivacySecuritySection: React.FC<PrivacySecuritySectionProps> = ({ scrollToSection }) => {
  const [privacyRef, privacyInView] = useIntersectionObserver();

  const privacyFeatures = [
    {
      icon: Database,
      title: "Zero Data Retention",
      description: "We do not store, save, or log any of your WhatsApp chats or personal messages. All processing is done on-demand, and your conversation data is discarded the moment you close the extension.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      badgeColor: "bg-[#874EFF]",
      glowColor: "hover:shadow-[#874EFF]/20"
    },
    {
      icon: Cpu,
      title: "Local Processing",
      description: "The extension works within your browser on your computer. Your chats are processed locally and are never uploaded or exposed to our servers.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      badgeColor: "bg-[#874EFF]",
      glowColor: "hover:shadow-[#874EFF]/20"
    },
    {
      icon: Eye,
      title: "Complete Confidentiality",
      description: "Your conversations are never shared, sold, or analyzed by third parties. Your privacy is absolute and non-negotiable.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      badgeColor: "bg-[#874EFF]",
      glowColor: "hover:shadow-[#874EFF]/20"
    },
    {
      icon: Lock,
      title: "Secure & Encrypted",
      description: "All interactions with our tool are fully encrypted to protect your account information and ensure your activity remains secure from unauthorized access.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#874EFF] to-[#C83FFF]",
      badgeColor: "bg-[#874EFF]",
      glowColor: "hover:shadow-[#874EFF]/20"
    }
  ];

  return (
    <section 
      id="privacy" 
      ref={privacyRef}
      className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-400/30 to-transparent animate-slide-left"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${privacyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
                <Shield className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-white font-semibold">Privacy & Security</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Your Privacy is Our{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We understand your conversations are private and sensitive. That's why WhatsApp Extractor was built with a privacy-first architecture, ensuring your data remains yours and yours alone.
          </p>
        </div>

        {/* Privacy Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 ${feature.glowColor} ${
                privacyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Small Icon */}
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-10 h-10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#874EFF] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className={`text-center transition-all duration-1000 ${privacyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto group hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6  transition-colors duration-300">
                You can use WhatsApp Extractor with complete confidence.
              </h3>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[#874EFF]/25 transform hover:scale-105 transition-all duration-300"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecuritySection;