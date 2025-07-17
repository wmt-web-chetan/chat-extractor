import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const BlogSection: React.FC = () => {
  const [blogRef, blogInView] = useIntersectionObserver();
  const navigate = useNavigate();

  // All blog posts
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
    {
      id: "7",
      title: "How Successful Stock Traders Monitor High-Volume Chat Groups for an Edge",
      excerpt: "Discover how professional traders use AI to extract valuable insights from trading groups without drowning in noise.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Alex Thompson",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Trading",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  // Get 3 random blog posts for home page
  const getRandomPosts = (posts: typeof allBlogPosts, count: number) => {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const blogPosts = getRandomPosts(allBlogPosts, 3);

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section 
      id="blog" 
      ref={blogRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/5 to-[#C83FFF]/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#C83FFF]/5 to-[#874EFF]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <BookOpen className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">Latest Insights</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Tips &{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Real Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover productivity hacks, success stories, and insider knowledge from WhatsApp power users
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              onClick={() => handleBlogClick(post.id)}
              className={`group bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer ${
                blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
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

        {/* View All Posts */}
        <div className={`text-center mt-16 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want More Insights?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our complete collection of guides, tutorials, and success stories
            </p>
            <button 
              onClick={() => navigate('/blog')}
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;