import React from 'react';
import { useState, useEffect } from 'react';
import { Play, MessageCircle, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  onJoinWaitlist: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection, onJoinWaitlist }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Instant Insights', 'Pure Signal', 'Clear Actions'];
  
  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 30 : 80);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative overflow-x-hidden bg-gradient-to-br from-[#874EFF]/10 to-[#C83FFF]/10 py-20 sm:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Chat Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <MessageCircle className="h-8 w-8 text-white/30" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-32 right-20 animate-float">
          <MessageSquare className="h-6 w-6 text-purple-300/40" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-60 left-1/4 animate-float">
          <MessageCircle className="h-10 w-10 text-blue-300/30" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-40 right-10 animate-float">
          <MessageSquare className="h-7 w-7 text-indigo-300/35" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-60 left-16 animate-float">
          <MessageCircle className="h-9 w-9 text-purple-400/25" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float">
          <MessageSquare className="h-5 w-5 text-blue-400/30" style={{ animationDelay: '2.5s' }} />
        </div>
        <div className="absolute top-80 left-1/3 animate-float">
          <MessageCircle className="h-6 w-6 text-white/20" style={{ animationDelay: '3s' }} />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float">
          <MessageSquare className="h-8 w-8 text-indigo-400/25" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/20 to-[#C83FFF]/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#C83FFF]/15 to-[#874EFF]/15 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-[#C83FFF]/20 to-[#874EFF]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23874EFF%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 animate-pulse"></div>
        
        {/* Moving Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#874EFF]/30 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#C83FFF]/30 to-transparent animate-slide-left"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Turn WhatsApp Chaos into
          </h1>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center px-4 ">
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent text-center break-words max-w-full leading-tight">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Drowning in unread messages? WhatsApp Extractor is a powerful Chrome Extension that uses AI to instantly summarize chats from multiple groups, answer your questions, and automate your daily information gathering on WhatsApp Web. Stop scrolling and start understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join the Waitlist
            </button>
            <button
              onClick={() => scrollToSection('video')}
              className="flex items-center justify-center gap-2 border-2 border-[#874EFF] text-[#874EFF] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#874EFF] hover:text-white transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;