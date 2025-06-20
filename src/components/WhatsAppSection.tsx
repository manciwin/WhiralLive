import React from 'react';
import { MessageCircle, Bell, Briefcase, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const WhatsAppSection = () => {
  const { currentTheme } = useTheme();

  const features = [
    { icon: Briefcase, label: 'Jobs in the Market', count: '25,000+' },
    { icon: Trophy, label: 'Live Competitions', count: '1000+' },
    { icon: Calendar, label: 'Ongoing Events', count: '3000+' },
  ];

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(currentTheme.primary)}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" 
               style={{ backgroundColor: `${currentTheme.primary}20` }}>
            <Bell className="w-8 h-8 animate-bounce-subtle" style={{ color: currentTheme.primary }} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: currentTheme.foreground }}>
            Never Miss an 
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3"
                  style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}>
              Opportunity
            </span>
          </h2>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8" 
             style={{ color: `${currentTheme.foreground}80` }}>
            Join our exclusive WhatsApp channel to get handpicked existing opportunities from top sources including jobs, internships, competitions, and events in one place
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} 
                 className="text-center p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                 style={{ 
                   backgroundColor: `${currentTheme.background}90`,
                   borderColor: `${currentTheme.primary}30`
                 }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${currentTheme.primary}20` }}>
                <feature.icon className="w-6 h-6" style={{ color: currentTheme.primary }} />
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: currentTheme.foreground }}>
                {feature.count}
              </div>
              <div className="text-sm" style={{ color: `${currentTheme.foreground}70` }}>
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://whatsapp.com/channel/0029VazbcUG1SWsuQDiYMY0J"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 rounded-2xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{ 
              background: `linear-gradient(135deg, #25D366, #128C7E)` 
            }}
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Join WhatsApp Channel
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <p className="text-sm mt-3" style={{ color: `${currentTheme.foreground}60` }}>
            Join 5,000+ professionals already getting alerts
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSection;;