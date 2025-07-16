import React from 'react';
import { useState } from 'react';
import { Check, Star, Zap, Gift, Users, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { submitEmailToGoogleSheets } from '../services/googleSheetsService';

interface PricingSectionProps {
  onJoinWaitlist: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onJoinWaitlist }) => {
  const [pricingRef, pricingInView] = useIntersectionObserver();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      features: [
        { icon: Users, text: "1 group", available: true },
        { icon: MessageSquare, text: "Daily summaries", available: true },
        { icon: HelpCircle, text: "Limited Q&A", available: true },
        { icon: Sparkles, text: "Default prompts", available: true }
      ],
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      popular: false
    },
    {
      name: "Pro",
      description: "For power users and professionals",
      features: [
        { icon: Users, text: "Unlimited groups", available: true },
        { icon: MessageSquare, text: "Instant + Digest summaries", available: true },
        { icon: HelpCircle, text: "Unlimited Q&A", available: true },
        { icon: Sparkles, text: "Custom prompts", available: true }
      ],
      gradient: "from-[#874EFF] to-[#C83FFF]",
      bgGradient: "from-[#874EFF]/5 to-[#C83FFF]/5",
      popular: true
    }
  ];

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
        throw new Error(result.error || 'Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      throw error;
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setIsSubmitting(true);
    
    if (!email.trim()) {
      setEmailError('Email address is required');
      setIsSubmitting(false);
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await submitToGoogleSheets(email);
      setEmail('');
      setShowThankYou(true);
    } catch (error) {
      setEmailError(error instanceof Error ? error.message : 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="pricing" 
      ref={pricingRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <Gift className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">Early Adopter Offer</span>
              </div>
            </div>
          </div>
          

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
                    You've successfully secured your free lifetime access! We'll notify you as soon as we launch.
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
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Be an Early Adopter.{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Get It For Free.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are launching soon! To thank our early supporters, we are offering a <strong>free lifetime subscription</strong> to everyone who joins our waitlist today. No spam, just a notification when we go live and your free access key.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className={`max-w-2xl mx-auto mb-16 transition-all duration-1000 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                placeholder="Enter your email address"
                className={`w-full px-6 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-lg ${
                  emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#874EFF]'
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="hidden sm:inline">
                  {isSubmitting ? 'Submitting...' : '🎁 Claim My Free Subscription Now'}
                </span>
                <span className="sm:hidden">
                  {isSubmitting ? 'Submitting...' : '🎁 Claim Free Access'}
                </span>
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              100% free, no credit card required. Lock in your lifetime deal today!
            </p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className={`mb-16 transition-all duration-1000 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What You'll Get</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-[#874EFF] scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-6 sm:px-8 py-2 sm:py-2 rounded-full text-sm sm:text-sm font-semibold flex items-center gap-2 sm:gap-2 whitespace-nowrap">
                      <Star className="h-4 w-4 sm:h-4 sm:w-4" />
                      Free Lifetime Access
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`bg-gradient-to-r ${plan.name === 'Free' ? 'from-[#874EFF]/10 to-[#C83FFF]/10' : plan.gradient} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className={`h-4 w-4 ${plan.name === 'Free' ? 'text-[#874EFF]' : 'text-white'}`} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {plan.popular && (
                  <div className="mt-6 text-center">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                      ✨ Yours Free Forever
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-3xl p-8 border border-[#874EFF]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Miss Out on This Limited-Time Offer
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of early adopters who are securing their free lifetime access today.
            </p>
            <button
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Secure My Free Lifetime Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;