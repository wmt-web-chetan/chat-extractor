import React, { useState, useEffect } from 'react';
import { Heart, Target, Shield, Users, ArrowRight } from 'lucide-react';
import { X } from 'lucide-react';
import { submitEmailToGoogleSheets } from '../services/googleSheetsService';
import BlogHeader from './BlogHeader';
import Footer from './Footer';

const AboutUsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitToGoogleSheets = async (email: string) => {
    try {
      const result = await submitEmailToGoogleSheets(email);
      if (result.success) {
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
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await submitToGoogleSheets(email);
      setEmail('');
      setShowModal(false);
      setShowThankYou(true);
    } catch (error) {
      setEmailError(error instanceof Error ? error.message : 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinWaitlist = () => {
    setShowModal(true);
  };

  const principles = [
    {
      icon: Target,
      title: "Empower, Not Overwhelm",
      description: "Technology should serve you, not the other way around. Our goal is to give you control over your information, so you can focus on what you do best. We want to save you time, not give you another complex tool to manage."
    },
    {
      icon: Heart,
      title: "Champion Simplicity",
      description: "The tool had to be intuitive. No complicated manuals or steep learning curves. If it wasn't as easy as clicking a button, we weren't interested. It had to \"just work.\""
    },
    {
      icon: Shield,
      title: "Build on a Foundation of Trust",
      description: "This is our non-negotiable. We knew from day one that we would never, ever compromise on user privacy. That's why we built WhatsApp Extractor with a \"privacy-by-design\" architecture. We have a Zero Data Retention policy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader onJoinWaitlist={handleJoinWaitlist} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <Users className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">About Us</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            We Built This Because We{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Needed It
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Like you, we were drowning in WhatsApp messages. So we built a lifeline.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Story Begins with a Problem We All Share
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team is made up of project managers, independent traders, and community builders. Our work, our connections, and our opportunities live inside WhatsApp. But honestly, it was becoming a nightmare.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Every morning started the same way: with a deep breath and a long, endless scroll through hundreds of unread messages. We were trying to piece together critical information scattered across dozens of groups:
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] mt-2">•</span>
                  A developer's final update buried under weekend memes.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] mt-2">•</span>
                  A client's crucial feedback lost in a sea of "okays."
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] mt-2">•</span>
                  A market-moving tip that was already old news by the time we saw it.
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We were constantly stressed, feeling the pressure of being "always on" and the fear of missing out on that one key message. Information overload wasn't just a buzzword; it was our daily reality, draining our productivity and our focus.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              We looked for a solution, but everything we found felt clumsy or insecure. We thought, "There has to be a better way."
            </p>
          </div>
        </div>

        {/* What If Moment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The "What If?" Moment
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              One afternoon, during a brainstorming session (that was ironically being derailed by WhatsApp notifications), we started asking "What if?"
            </p>
            
            <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-2xl p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] font-bold">What if</span>
                  <span>instead of scrolling for 20 minutes, you could get a perfect, one-minute summary of a conversation?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] font-bold">What if</span>
                  <span>instead of frantically searching for a keyword, you could just ask your chat a question and get a direct answer?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] font-bold">What if</span>
                  <span>you could automate your daily information gathering with a single click?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#874EFF] font-bold">And most importantly, what if</span>
                  <span>all of this could be done with absolute, uncompromising privacy?</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              That conversation was the spark. We realized we weren't just complaining about a problem; we were designing the solution. That's when the mission for WhatsApp Extractor was born.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Mission: Clarity Without Compromise
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our mission is simple: To give individuals and teams the power to turn conversational chaos into actionable clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <principle.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join Us on the Journey
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              We are just getting started, and we're incredibly excited about the future. We believe we're at the beginning of a major shift in how we manage digital communication, using AI as a partner to help us focus on what truly matters.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              By joining our waitlist, you're not just signing up for a tool; you're becoming an early believer in a better way of working. You're joining a community that values its time, its focus, and its privacy.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Thank you for being here. Let's conquer the chaos together.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-3xl p-8 border border-[#874EFF]/20">
            <button
              onClick={handleJoinWaitlist}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Join Our Journey
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">To Clarity,</p>
              <p className="text-gray-900 font-semibold">The WhatsApp Extractor Team</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">🚀 Join Our Waitlist</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be among the first to experience the future of WhatsApp communication. Get early access and exclusive updates!
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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

      {/* Thank You Modal */}
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

export default AboutUsPage;