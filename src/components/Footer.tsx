import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { currentTheme } = useTheme();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Judge Panel', href: '/judges' },
      { name: 'Competitions', href: '#' },
      { name: 'Blog', href: '/blog' },
      { name: 'Resources', href: '#' }
    ]
  };

  const socialLinks = [
    // { icon: Twitter, href: '#' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/whiral' },
    { icon: MessageCircle, href: 'https://whatsapp.com/channel/0029VazbcUG1SWsuQDiYMY0J' }, // Using MessageCircle as WhatsApp icon substitute
    { icon: Instagram, href: 'https://www.instagram.com/thewhiral/' }
  ];

  return (
    <footer className="relative overflow-hidden py-12">
      <div className="absolute inset-0"
           style={{
             background: `linear-gradient(135deg, ${currentTheme.background} 0%, ${currentTheme.primary}05 50%, ${currentTheme.secondary}10 100%)`
           }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold"
                style={{ color: currentTheme.foreground }}>
              <span className="bg-gradient-to-r bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}>
                Whiral
              </span>
            </h2>
            <p className="text-sm leading-relaxed"
               style={{ color: `${currentTheme.foreground}80` }}>
              Connecting innovators with expert evaluators from the world's leading technology companies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: `${currentTheme.background}90`,
                    borderColor: `${currentTheme.primary}30`
                  }}
                >
                  <social.icon 
                    className="w-4 h-4" 
                    style={{ color: `${currentTheme.foreground}70` }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {/* <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3 capitalize"
                    style={{ color: currentTheme.foreground }}>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                        style={{ 
                          color: `${currentTheme.foreground}70`,
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.color = currentTheme.primary;
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.color = `${currentTheme.foreground}70`;
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6"
             style={{ borderColor: `${currentTheme.primary}20` }}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2"
                 style={{ color: `${currentTheme.foreground}60` }}>
              <span>© 2024 Whiral. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>
            
            <span className="text-sm" 
                  style={{ color: `${currentTheme.foreground}60` }}>
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;