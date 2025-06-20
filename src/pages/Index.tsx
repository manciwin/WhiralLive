
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ArrowRight, Users, Award, Sparkles, Target } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppSection from '@/components/WhatsAppSection';

// import Footer from '@/components/Footer';

const Index = () => {
  const { currentTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
  }, []);
  

  const features = [
    {
      icon: Users,
      title: 'Expert Judges',
      description: 'World-class professionals from top tech companies',
    },
    {
      icon: Award,
      title: 'Fair Evaluation',
      description: 'Comprehensive and unbiased assessment process',
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Emphasis on creativity and cutting-edge solutions',
    },
    {
      icon: Target,
      title: 'Industry Relevance',
      description: 'Competitions aligned with real-world challenges',
    },
  ];

  return (
    <div 
      className="min-h-screen transition-all duration-1000 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${currentTheme.background} 0%, ${currentTheme.primary}10 50%, ${currentTheme.secondary}05 100%)`
      }}
    >
      <ThemeSwitcher />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,200 C400,50 800,350 1200,200 L1200,0 L0,0 Z"
            className="animate-float"
            style={{ fill: `${currentTheme.primary}15` }}
          />
          <path
            d="M0,600 C300,450 700,750 1200,600 L1200,800 L0,800 Z"
            className="animate-float-delayed"
            style={{ fill: `${currentTheme.secondary}10` }}
          />
        </svg>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-10 ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            style={{
              backgroundColor: i % 3 === 0 ? currentTheme.primary : currentTheme.accent,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className={`text-center py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
              style={{ color: currentTheme.foreground }}
            >
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent animate-pulse-glow"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
              >
                Whiral
              </span>
            </h1>
            <div 
              className="w-24 h-1 mx-auto rounded-full animate-pulse-glow"
              style={{ backgroundColor: currentTheme.primary }}
            />
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 
              className="text-2xl md:text-4xl font-semibold mb-6 leading-tight"
              style={{ color: currentTheme.foreground }}
            >
              Where Innovation Meets
              <br />
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})` }}
              >
                Expert Evaluation
              </span>
            </h2>
            
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: `${currentTheme.foreground}dd` }}
            >
              Join competitions judged by industry leaders from Google, Amazon, Microsoft, and more. 
              Showcase your skills, get expert feedback, and win amazing prizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/judges"
                className="group inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` 
                }}
              >
                Meet Our Judges
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button 
                className="px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                style={{ 
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                  backgroundColor: `${currentTheme.background}80`
                }}
              >
                View Competitions
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`max-w-6xl mx-auto px-4 py-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: currentTheme.foreground }}
            >
              Why Choose Whiral?
            </h3>
            <p 
              className="text-lg"
              style={{ color: `${currentTheme.foreground}cc` }}
            >
              Experience the difference of professional-grade competition evaluation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300 hover:shadow-xl "
                style={{ 
                  backgroundColor: `${currentTheme.background}90`,
                  borderColor: `${currentTheme.primary}30`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${currentTheme.primary}20` }}
                >
                  <feature.icon 
                    className="w-8 h-8"
                    style={{ color: currentTheme.primary }}
                  />
                </div>
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{ color: currentTheme.foreground }}
                >
                  {feature.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: `${currentTheme.foreground}80` }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>


<WhatsAppSection/>
        {/* CTA Section */}
        <div className={`text-center py-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-sm border shadow-2xl"
            style={{ 
              backgroundColor: `${currentTheme.background}95`,
              borderColor: `${currentTheme.primary}30`
            }}
          >
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: currentTheme.foreground }}
            >
              Ready to Get Started?
            </h3>
            <p 
              className="text-lg mb-8"
              style={{ color: `${currentTheme.foreground}80` }}
            >
              Join thousands of innovators who trust Whiral for fair, expert competition evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/judges"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` 
                }}
              >
                Explore Judge Panel
              </Link>
              <button 
                className="px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{ 
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                  backgroundColor: `${currentTheme.background}80`
                }}
              >
                Start Competition
              </button>
            </div>
          </div>
        </div>
        {/* <WhiralOpportunities/> */}
          <Footer/>
      </div>
      
    </div>
  );
};

export default Index;
