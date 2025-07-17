import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FAQSection: React.FC = () => {
  const [faqRef, faqInView] = useIntersectionObserver();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is WhatsApp Extractor and how does it work?",
      answer: "WhatsApp Extractor is a Google Chrome Extension that acts as your personal AI assistant for WhatsApp Web. It securely reads the chats you select directly within your browser, uses advanced AI to create summaries, and allows you to ask questions about the content. It's designed to save you hours of scrolling by turning long conversations into concise, actionable insights."
    },
    {
      question: "Is my data safe? Do you read or store my private conversations?",
      answer: "Your privacy is our number one priority. We operate on a Zero Data Retention policy. This means: We do not store, save, or log any of your WhatsApp chats or personal messages. All processing is done locally in your browser and on-demand. Your conversation data is never uploaded to our servers and is immediately discarded once you close the extension or end your session. Your conversations are never shared, sold, or viewed by anyone. Your privacy is absolute."
    },
    {
      question: "Does this work on my mobile phone (iOS or Android)?",
      answer: "No. WhatsApp Extractor is a Chrome Extension, which means it works on a desktop or laptop computer using the Google Chrome browser and the official WhatsApp Web interface. It does not currently function on mobile devices."
    },
    {
      question: "Is this an official WhatsApp product? Could my account get banned for using it?",
      answer: "WhatsApp Extractor is an independent, third-party tool and is not affiliated with, sponsored by, or endorsed by WhatsApp Inc. Our extension is designed to work as an overlay on WhatsApp Web, using standard browser functionalities to read on-screen text in a secure manner. We do not modify the WhatsApp application or violate its terms of service. We have built it with security and compliance in mind to ensure a safe user experience."
    },
    {
      question: "How does the AI Q&A and Summarization feature actually work?",
      answer: "Once you select your groups and a date range, the extension temporarily reads the chat text for that session. This text is then processed by our advanced AI models to identify key topics, decisions, and action items, which are then presented to you as a summary. When you ask a question, the AI scans that same temporary text to find the most relevant and accurate answer. The AI only has access to the information from the chats you have actively synced in that session."
    },
    {
      question: "What does 'Join the Waitlist' mean? Is the free lifetime subscription really free?",
      answer: "Yes, it's absolutely free for our early supporters! By joining the waitlist, you will be notified the moment we launch. As a thank you for being an early adopter, you will receive a free, lifetime subscription to our Pro plan, which includes unlimited access to all features. There is no credit card required and no hidden cost—it's our way of building a community around our product from day one."
    },
    {
      question: "Why do I need to create an account with my email?",
      answer: "Your account is used to manage your subscription status (like your free lifetime Pro access!), save your reusable custom prompts, and personalize your settings. Your email is for account management purposes only and is kept completely separate from your WhatsApp activity. We will never link your email to your chat content."
    },
    {
      question: "How up-to-date are the summaries? What if new messages come in?",
      answer: "Your insights are as current as your last sync. WhatsApp Extractor features an \"On-Demand Sync\" button. You are in complete control. Whenever you want to analyze the latest conversations, simply click the sync button, and the extension will fetch all new messages from your selected groups, ensuring your summaries and Q&A responses are based on the most current information."
    },
    {
      question: "Are there any limits on how many groups or messages I can extract?",
      answer: "For our early adopters who join the waitlist, your free lifetime subscription gives you access to the Pro plan, which includes: Unlimited group extractions. Unlimited AI-powered summaries and Q&A queries. The ability to create and save unlimited custom prompts. Future plans may have different limits, but by signing up now, you lock in unlimited access forever."
    },
    {
      question: "What kind of questions can I ask the AI?",
      answer: "You can ask almost anything related to the content of your synced chats! It's best for finding specific information. For example: \"What was the final decision on the marketing budget?\", \"List all the action items for Sarah from today's chat.\", \"Which stocks were mentioned as a 'buy' this week?\", \"Summarize the client feedback from the 'Project Phoenix' group.\", \"Was a meeting time decided for next week?\""
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={faqRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#C83FFF]/10 to-[#874EFF]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                <HelpCircle className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                <span className="text-[#874EFF] font-semibold">Got Questions?</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
              Questions (FAQs)
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are answers to some of the most common questions about WhatsApp Extractor. If you don't find your answer here, feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#874EFF]/20 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-700 pr-4 hover:text-[#874EFF] transition-colors duration-200">
                    {index + 1}. {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#874EFF] transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-3xl p-8 border border-[#874EFF]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our support team is here to help you get the most out of WhatsApp Extractor.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:support@whatsappextractor.com"
                className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;