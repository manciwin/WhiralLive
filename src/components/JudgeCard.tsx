
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Judge {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  expertise: string[];
  experience: string;
}

interface JudgeCardProps {
  judge: Judge;
  index: number;
}

const JudgeCard: React.FC<JudgeCardProps> = ({ judge, index }) => {
  const { currentTheme } = useTheme();

  const getCompanyLogo = (company: string) => {
    const logos: { [key: string]: string } = {
      'Google': 'https://logo.clearbit.com/google.com',
      'Amazon': 'https://logo.clearbit.com/amazon.com',
      'Microsoft': 'https://logo.clearbit.com/microsoft.com',
      'Apple': 'https://logo.clearbit.com/apple.com',
      'Meta': 'https://logo.clearbit.com/meta.com',
      'Netflix': 'https://logo.clearbit.com/netflix.com',
      'Tesla': 'https://logo.clearbit.com/tesla.com',
      'OpenAI': 'https://logo.clearbit.com/openai.com',
      'Spotify': 'https://logo.clearbit.com/spotify.com',
      'Adobe': 'https://logo.clearbit.com/adobe.com'
    };
    return logos[company] || '🏢';
  };

  const animationDelay = `${index * 0.2}s`;
  const floatAnimation = index % 2 === 0 ? 'animate-float' : 'animate-float-delayed';

  return (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2  border`}
      style={{ 
        animationDelay,
        borderColor: `${currentTheme.primary}30`,
        background: `linear-gradient(135deg, ${currentTheme.background}f0, ${currentTheme.primary}10)`
      }}
    >
      {/* Decorative Corner */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl opacity-20"
        style={{ backgroundColor: currentTheme.accent }}
      />

      {/* Company Logo Badge */}
     <div 
  className="absolute -top-3 -right-3 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300"
  style={{ backgroundColor: currentTheme.primary }}
>
  <img
    src={getCompanyLogo(judge.company)} // 👈 This is the image URL from Clearbit or similar
    alt={judge.company}
    className="w-8 h-8 object-contain"   // 👈 Ensures the image fits without stretching
    onError={(e) => (e.currentTarget.src = '/logos/default.png')} // 👈 Optional fallback
  />
</div>

      {/* Profile Image */}
      <div className="relative mb-4">
        <div 
          className="w-20 h-20 rounded-2xl mx-auto overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-8 transition-all duration-300"
          style={{ backgroundColor: `${currentTheme.secondary}30` }}
        >
          <img 
            src={judge.image} 
            alt={judge.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 w-20 h-20 rounded-2xl mx-auto opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-glow"
          style={{ backgroundColor: currentTheme.primary }}
        />
      </div>

      {/* Judge Info */}
      <div className="text-center space-y-2">
        <h3 
          className="text-lg font-bold group-hover:scale-105 transition-transform duration-300"
          style={{ color: currentTheme.foreground }}
        >
          {judge.name}
        </h3>
        
        <p 
          className="text-sm font-medium"
          style={{ color: currentTheme.primary }}
        >
          {judge.title}
        </p>
        
        <p 
          className="text-xs font-semibold tracking-wide uppercase"
          style={{ color: currentTheme.accent }}
        >
          {judge.company}
        </p>

        <p 
          className="text-xs opacity-75"
          style={{ color: currentTheme.foreground }}
        >
          {judge.experience}
        </p>
      </div>

      {/* Expertise Tags */}
      <div className="mt-4 flex flex-wrap gap-1 justify-center">
        {judge.expertise.slice(0, 2).map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="text-xs px-2 py-1 rounded-full font-medium group-hover:animate-bounce-subtle"
            style={{ 
              backgroundColor: `${currentTheme.primary}20`,
              color: currentTheme.primary,
              animationDelay: `${skillIndex * 0.1}s`
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover Overlay */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: currentTheme.primary }}
      />
    </div>
  );
};

export default JudgeCard;
