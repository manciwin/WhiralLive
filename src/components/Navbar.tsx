import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { currentTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Judges', href: '/judges' },
    // { name: 'About', href: '/about' },
    // { name: 'Blog', href: '/blog' },
    // { name: 'Careers', href: '/careers' },
    // { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        background: `${currentTheme.background}95`,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${currentTheme.primary}20`
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
            >
              Whiral
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'font-semibold'
                    : 'hover:scale-105'
                }`}
                style={{
                  color: location.pathname === link.href 
                    ? currentTheme.primary 
                    : `${currentTheme.foreground}80`,
                  backgroundColor: location.pathname === link.href 
                    ? `${currentTheme.primary}10` 
                    : 'transparent'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: currentTheme.foreground }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: `${currentTheme.primary}20` }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 rounded-lg transition-colors duration-300"
                style={{
                  color: location.pathname === link.href 
                    ? currentTheme.primary 
                    : `${currentTheme.foreground}80`,
                  backgroundColor: location.pathname === link.href 
                    ? `${currentTheme.primary}10` 
                    : 'transparent'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;