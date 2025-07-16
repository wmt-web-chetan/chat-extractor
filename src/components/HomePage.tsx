import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { submitEmailToGoogleSheets } from '../services/googleSheetsService';

// Components
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import PricingSection from './PricingSection';
import PrivacySecuritySection from './PrivacySecuritySection';
import BetaTestimonialsSection from './BetaTestimonialsSection';
import BlogSection from './BlogSection';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupEmail, setPopupEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitToGoogleSheets = async (email: string) => {
    try {
      const result = await submitEmailToGoogleSheets(email);
      if (result.success) {
        console.log('Email submitted successfully:', email);
        return { success: true };
      } else {
        // Pass the specific error message from Google Sheets
        throw new Error(result.error || 'Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      // Re-throw with the original error message
      throw error;
    }
  };

  const handlePopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setIsSubmitting(true);
    
    if (!validateEmail(popupEmail)) {
      setEmailError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await submitToGoogleSheets(popupEmail);
      setPopupEmail('');
      setShowPopup(false);
      setShowThankYou(true);
    } catch (error) {
      // Show the specific error message from Google Sheets
      setEmailError(error instanceof Error ? error.message : 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinWaitlist = () => {
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-white   ">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <div className="overflow-x-hidden">
      <HeroSection scrollToSection={scrollToSection} />
      
      <VideoSection />
      <ProblemSection scrollToSection={scrollToSection} />
      <SolutionSection scrollToSection={scrollToSection} />
      <HowItWorksSection scrollToSection={scrollToSection} />
      <FeaturesSection />
      <PrivacySecuritySection scrollToSection={scrollToSection} />
      <BetaTestimonialsSection scrollToSection={scrollToSection} />
      <PricingSection onJoinWaitlist={handleJoinWaitlist} />
      <BlogSection />
      
      <Footer />

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">🚀 Join Our Waitlist</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be among the first to experience the future of WhatsApp communication. 
              Get early access and exclusive updates!
            </p>
            <form onSubmit={handlePopupSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={popupEmail}
                  onChange={(e) => {
                    setPopupEmail(e.target.value);
                    setEmailError('');
                  }}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#874EFF]'
                  }`}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : '🎯 Secure My Spot'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
                <p className="text-gray-600 leading-relaxed">
                  You've successfully joined our waitlist! We'll notify you as soon as we launch.
                </p>
              </div>
              <button
                onClick={() => setShowThankYou(false)}
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;