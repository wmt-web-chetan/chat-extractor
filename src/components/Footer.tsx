import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/logoff.svg";
import twitterIcon from "../assets/twit.svg";
import linkedinIcon from "../assets/linkdn.svg";
import instagramIcon from "../assets/instagram.svg";
import mailIcon from "../assets/Mail.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: twitterIcon, href: '#twitter', label: 'Twitter' },
    { icon: linkedinIcon, href: '#linkedin', label: 'LinkedIn' },
    { icon: instagramIcon, href: '#instagram', label: 'Instagram' },
    { icon: mailIcon, href: '#email', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Row 1: Logo and Blurb */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src={img} alt="icon" width={50}/>
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-[#874EFF] to-[#C83FFF] bg-clip-text text-transparent">
            GistGem
            </span>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            AI-powered insights for your WhatsApp Web. Summarize, query, and automate.
          </p>
        </div>

        {/* Row 2: Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#874EFF] hover:to-[#C83FFF] transition-all duration-300 transform hover:scale-110"
            >
              <img src={social.icon} alt={social.label} className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Row 3: Copyright and Disclaimer */}
        <div className="text-center space-y-4">
          {/* Links Row */}
          <div className="flex justify-center space-x-8 mb-4">
            <Link
              to="/about"
              className="text-gray-400 hover:text-[#874EFF] transition-colors duration-300 text-sm"
            >
              About Us
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#874EFF] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          
          <div className="text-gray-400">
            © {currentYear} WhatsApp Extractor. All Rights Reserved.
          </div>
          <div className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> WhatsApp Extractor is an independent product and is not affiliated with, sponsored by, or endorsed by WhatsApp.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;