import React, { useEffect } from 'react';
import { Shield, Database, Cpu, Eye, Lock, CheckCircle } from 'lucide-react';
import BlogHeader from './BlogHeader';
import Footer from './Footer';

const PrivacyPage: React.FC = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleJoinWaitlist = () => {
    // Handle waitlist signup
    console.log('Join waitlist clicked');
  };

  const sections = [
    {
      id: 'core-promise',
      icon: Shield,
      title: 'The Core of Our Privacy Promise: Information We DO NOT Collect',
      content: [
        'We want to be crystal clear about what we do not do. Our Service was built with a "privacy-by-design" architecture.',
        'We DO NOT collect, store, save, or log the content of your WhatsApp chats, messages, or media.',
        'We DO NOT collect your contacts or phone number.',
        'We DO NOT collect your personal information from your WhatsApp profile (like your name or profile picture).',
        'All processing of your chat content is done on-demand and locally within your browser on your computer. This data is never sent to our servers and is immediately discarded after you close the extension or end your session. This is our Zero Data Retention promise.'
      ]
    },
    {
      id: 'what-we-collect',
      icon: Database,
      title: 'Information We DO Collect (And Why)',
      content: [
        'To operate our Service, we collect a very limited amount of information:',
        'Account Information: When you create an account, we collect your email address. We use this to: Allow you to log in to your account, manage your subscription status (e.g., your free lifetime access or a paid plan), and communicate with you about important updates to the Service, security, or your account.',
        'Payment Information (for paid plans): If you subscribe to a paid plan, we use a secure third-party payment processor (e.g., Stripe). We do not collect or store your full credit card information ourselves. Our payment processor handles this, and we only receive information necessary to confirm your payment and manage your subscription, such as the last four digits of your card and its expiration date.',
        'Anonymous Usage Analytics: We may collect anonymous, aggregated data about how users interact with the features of our Service (e.g., which buttons are clicked most often, how many groups are typically summarized at once). This data is completely divorced from your chat content and helps us understand what features are useful so we can improve the Service. It does not contain any personal information.'
      ]
    },
    {
      id: 'how-we-use',
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'We use the limited information we collect to:',
        '• Provide, maintain, and improve our Service',
        '• Process transactions and manage subscriptions',
        '• Communicate with you about your account and our Service',
        '• Enforce our Terms and Conditions and prevent abuse'
      ]
    },
    {
      id: 'data-sharing',
      icon: Lock,
      title: 'Data Sharing',
      content: [
        'We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share information only in the following limited circumstances:',
        'With Service Providers: We may share information with third-party vendors who perform services on our behalf, such as payment processing and website analytics. These vendors are contractually obligated to protect your data and use it only to provide their services to us.',
        'For Legal Reasons: We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect our rights, or prevent fraud.'
      ]
    }
  ];

  const additionalSections = [
    {
      title: 'Data Security',
      content: 'We implement industry-standard security measures to protect the limited information we do store. This includes using encryption (SSL/TLS) for data transmitted between your browser and our servers. However, no method of transmission or electronic storage is 100% secure.'
    },
    {
      title: 'Your Data Rights (GDPR & CCPA)',
      content: 'Depending on your location, you may have certain rights regarding your personal information. These include: The right to access (you can request a copy of the personal information we hold about you), the right to rectification (you can request that we correct any inaccurate information), and the right to erasure (you can request that we delete your account and associated email address). To exercise these rights, please contact us at privacy@whatsappextractor.com. Please note that since we do not store your chat content, we cannot provide, correct, or delete it.'
    },
    {
      title: 'Children\'s Privacy',
      content: 'Our Service is not intended for use by children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children.'
    },
    {
      title: 'Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and, if you have an account, by sending you an email.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about this Privacy Policy or our privacy practices, please do not hesitate to contact us at privacy@whatsappextractor.com.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <BlogHeader onJoinWaitlist={handleJoinWaitlist} />
      
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#C83FFF]/10 to-[#874EFF]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                  <Shield className="h-5 w-5 text-[#874EFF] animate-bounce-subtle" />
                  <span className="text-[#874EFF] font-semibold">Privacy Policy</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Privacy is Our{' '}
              <span className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
                Foundation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Last Updated: January 2024
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your privacy is our foundation. This Privacy Policy explains how WhatsApp Extractor ("we," "us," or "our") handles information in connection with your use of the WhatsApp Extractor website and Chrome Extension (the "Service").
            </p>
            
            <div className="mt-8 bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-2xl p-6 border border-[#874EFF]/20">
              <p className="text-lg font-semibold text-gray-900">
                Our guiding principle is to collect the absolute minimum information necessary to provide and improve our Service, while ensuring your chat data remains completely private and under your control.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Main Sections */}
        <div className="space-y-12 mb-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {index + 1}. {section.title}
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 ml-16">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-8">
          {additionalSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#874EFF]" />
                {sections.length + index + 1}. {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed ml-7">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#874EFF]/10 to-[#C83FFF]/10 rounded-3xl p-8 border border-[#874EFF]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Our Privacy Practices?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're committed to transparency and are here to help with any privacy concerns.
            </p>
            <a
              href="mailto:privacy@whatsappextractor.com"
              className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;