import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, BookOpen, X, Clock, Tag, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { submitEmailToGoogleSheets } from '../services/googleSheetsService';
import BlogHeader from './BlogHeader';
import Footer from './Footer';

const BlogPage: React.FC = () => {
  const [blogRef, blogInView] = useIntersectionObserver();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const allBlogPosts = [
    {
      id: "1",
      title: "How to Get a Daily Summary of Any WhatsApp Chat in Under 60 Seconds",
      excerpt: "Transform your morning chaos of 347 unread messages into a perfect summary in less time than it takes to brew coffee.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "2",
      title: "The Ultimate Guide to Automating Your Daily Information Gathering",
      excerpt: "Stop typing the same questions every day. Build a personal intelligence system that works with one click.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "Jan 10, 2024",
      readTime: "4 min read",
      category: "Automation",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "3",
      title: "From 500+ Unread Messages to a 3-Bullet Summary: A Real Transformation",
      excerpt: "Meet Sarah, who transformed her chaotic Monday mornings from 35 minutes of scrolling to 2 minutes of clarity.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emma Rodriguez",
      date: "Jan 5, 2024",
      readTime: "4 min read",
      category: "Case Study",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "4",
      title: "How to Find Anything in Your WhatsApp History (Even When Search Fails)",
      excerpt: "Stop the endless scrolling. Learn how to ask your chat history questions and get instant answers.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "David Kim",
      date: "Dec 28, 2023",
      readTime: "5 min read",
      category: "Search",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: "5",
      title: "The Project Manager's Playbook for High-Signal, Low-Noise Groups",
      excerpt: "Transform WhatsApp from a source of chaos into a powerful project management tool with clear rules and smart automation.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Lisa Park",
      date: "Dec 20, 2023",
      readTime: "6 min read",
      category: "Project Management",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "6",
      title: "Are WhatsApp Plugins & Extensions Safe? A 3-Point Security Checklist",
      excerpt: "Your WhatsApp contains private conversations and sensitive data. Learn how to choose safe extensions with confidence.",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "James Wilson",
      date: "Dec 15, 2023",
      readTime: "7 min read",
      category: "Security",
      gradient: "from-teal-500 to-green-500"
    },
    // {
    //   id: "7",
    //   title: "How Successful Stock Traders Monitor High-Volume Chat Groups for an Edge",
    //   excerpt: "Discover how professional traders use AI to extract valuable insights from trading groups without drowning in noise.",
    //   image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   author: "Alex Thompson",
    //   date: "Dec 10, 2023",
    //   readTime: "6 min read",
    //   category: "Trading",
    //   gradient: "from-yellow-500 to-orange-500"
    // }
  ];

  // Filter posts based on search only
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJoinWaitlist = () => {
    setShowModal(true);
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

  const handleModalSubmit = async (e: React.FormEvent) => {
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
      // Show the specific error message from Google Sheets
      setEmailError(error instanceof Error ? error.message : 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <BlogHeader onJoinWaitlist={handleJoinWaitlist} />
      
      {/* Modern Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#C83FFF]/10 to-[#874EFF]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <BookOpen className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">Knowledge Hub</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Insights &{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the latest trends, tutorials, and best practices for WhatsApp communication and data management
          </p>

          {/* Search Only */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles by title, content, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#874EFF] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section 
        ref={blogRef}
        className="pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredPosts.length === allBlogPosts.length 
                ? `Showing all ${filteredPosts.length} articles`
                : `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
              }
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-lg max-w-md mx-auto">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                  }}
                  className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                 Clear Search
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  onClick={() => handleBlogClick(post.id)}
                  className={`group bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer ${
                    blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
                        <Tag className="h-3 w-3 text-[#874EFF]" />
                        <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                      </div>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Clock className="h-3 w-3 text-white" />
                        <span className="text-xs font-medium text-white">{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#874EFF] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span className="truncate font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span className="truncate">{post.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More */}
                    <button className="flex items-center gap-2 text-[#874EFF] font-semibold hover:gap-3 transition-all duration-300 group/btn">
                      <span>Read Full Story</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
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
              Be among the first to experience the future of WhatsApp communication. 
              Get early access and exclusive updates!
            </p>
            <form onSubmit={handleModalSubmit} className="space-y-6">
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

export default BlogPage;