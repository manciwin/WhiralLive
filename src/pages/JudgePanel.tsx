
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import JudgeCard from '../components/JudgeCard';
import { Award, Users, Star, Trophy } from 'lucide-react';
import  Footer  from '../components/Footer';
import Navbar from '@/components/Navbar';

const JudgePanel: React.FC = () => {
  const { currentTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const judges = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Senior Product Manager',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      expertise: ['AI/ML', 'Product Strategy', 'Innovation'],
      experience: '12+ years in tech'
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      title: 'Principal Engineer',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      expertise: ['Cloud Architecture', 'Scalability', 'DevOps'],
      experience: '15+ years in engineering'
    },
    {
      id: '3',
      name: 'Priya Patel',
      title: 'Design Director',
      company: 'Apple',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      expertise: ['UX Design', 'Human Interface', 'Accessibility'],
      experience: '10+ years in design'
    },
    {
      id: '4',
      name: 'David Rodriguez',
      title: 'VP Engineering',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      expertise: ['Enterprise Software', 'Team Leadership', 'Architecture'],
      experience: '18+ years in tech'
    },
    {
      id: '5',
      name: 'Elena Vasquez',
      title: 'Head of AI Research',
      company: 'OpenAI',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      expertise: ['Machine Learning', 'NLP', 'Research'],
      experience: '14+ years in AI'
    },
    {
      id: '6',
      name: 'James Park',
      title: 'CTO',
      company: 'Netflix',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face',
      expertise: ['Streaming Tech', 'Data Analytics', 'Performance'],
      experience: '16+ years in media tech'
    }
  ];

  const stats = [
    { icon: Users, label: 'Expert Judges', value: '50+' },
    { icon: Award, label: 'Companies', value: '25+' },
    { icon: Star, label: 'Years Experience', value: '20+' },
    { icon: Trophy, label: 'Competitions Judged', value: '100+' }
  ];

  return (
    <div 
      className="min-h-screen transition-all duration-1000 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${currentTheme.background} 0%, ${currentTheme.primary}15 50%, ${currentTheme.secondary}10 100%)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Curved SVG Background */}
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,300 C300,100 600,400 900,200 C1050,100 1150,300 1200,200 L1200,0 L0,0 Z"
            className="animate-float"
            style={{ fill: `${currentTheme.primary}20` }}
          />
          <path
            d="M0,500 C200,350 500,650 800,450 C950,350 1100,550 1200,450 L1200,800 L0,800 Z"
            className="animate-float-delayed"
            style={{ fill: `${currentTheme.secondary}15` }}
          />
        </svg>

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            style={{
              backgroundColor: i % 3 === 0 ? currentTheme.primary : i % 3 === 1 ? currentTheme.secondary : currentTheme.accent,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      <Navbar/>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className={`text-center py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span 
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg"
              style={{ 
                backgroundColor: `${currentTheme.primary}20`,
                color: currentTheme.primary
              }}
            >
              Meet Our Judges
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: currentTheme.foreground }}
          >
            World-Class
            <br />
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent animate-pulse-glow"
              style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
            >
              Expert Panel
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: `${currentTheme.foreground}cc` }}
          >
            Our distinguished panel of judges brings together decades of experience from the world's most innovative companies. 
            They evaluate competitions with expertise, fairness, and a keen eye for excellence.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ 
                  backgroundColor: `${currentTheme.background}80`,
                  borderColor: `${currentTheme.primary}30`
                }}
              >
                <stat.icon 
                  className="w-8 h-8 mx-auto mb-3 animate-bounce-subtle"
                  style={{ color: currentTheme.primary }}
                />
                <div 
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: currentTheme.foreground }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: `${currentTheme.foreground}80` }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Judges Grid */}
        <div className={`max-w-7xl mx-auto px-4 pb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <div
                key={judge.id}
                className="transform hover:z-10 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <JudgeCard judge={judge} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center py-16 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-sm border shadow-2xl"
            style={{ 
              backgroundColor: `${currentTheme.background}90`,
              borderColor: `${currentTheme.primary}30`
            }}
          >
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: currentTheme.foreground }}
            >
              Ready to compete?
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: `${currentTheme.foreground}80` }}
            >
              Join Whiral's next competition and get your work evaluated by industry experts.
            </p>
            <button 
              className="px-8 py-4 rounded-2xl font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` 
              }}
            >
              Join Competition
            </button>
          </div>
        </div>

      <Footer/>
      </div>
    </div>
  );
};

export default JudgePanel;
