
import React, { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();

  return (
    <>
      {/* Theme Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 bg-white/90 backdrop-blur-sm border border-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        style={{ backgroundColor: `${currentTheme.primary}20` }}
      >
        <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" style={{ color: currentTheme.primary }} />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Theme Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div 
          className="h-full backdrop-blur-xl border-l shadow-2xl p-6 overflow-y-auto"
          style={{ 
            backgroundColor: `${currentTheme.background}f0`,
            borderColor: `${currentTheme.primary}30`
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent" 
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}>
              Choose Theme
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5" style={{ color: currentTheme.foreground }} />
            </button>
          </div>

          {/* Theme Grid */}
          <div className="space-y-4">
            {themes.map((theme, index) => (
              <div
                key={theme.id}
                className={`group cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-right ${
                  currentTheme.id === theme.id 
                    ? 'ring-2 ring-offset-2 shadow-lg' 
                    : 'hover:border-opacity-50'
                }`}
                style={{ 
                  backgroundColor: theme.background,
                  borderColor: currentTheme.id === theme.id ? theme.primary : `${theme.primary}30`,
                  ringColor: theme.primary,
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => setTheme(theme)}
              >
                <div className="flex items-center space-x-3">
                  {/* Color Preview */}
                  <div className="flex space-x-1">
                    <div 
                      className="w-4 h-4 rounded-full ring-1 ring-white shadow-sm"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <div 
                      className="w-4 h-4 rounded-full ring-1 ring-white shadow-sm"
                      style={{ backgroundColor: theme.secondary }}
                    />
                    <div 
                      className="w-4 h-4 rounded-full ring-1 ring-white shadow-sm"
                      style={{ backgroundColor: theme.accent }}
                    />
                  </div>

                  {/* Theme Name */}
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:scale-105 transition-transform duration-200" 
                        style={{ color: theme.foreground }}>
                      {theme.name}
                    </h3>
                  </div>

                  {/* Active Indicator */}
                  {currentTheme.id === theme.id && (
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse-glow"
                      style={{ backgroundColor: theme.primary }}
                    />
                  )}
                </div>

                {/* Preview Bar */}
                <div className="mt-3 h-2 rounded-full overflow-hidden bg-gray-200">
                  <div 
                    className={`h-full bg-gradient-to-r ${theme.gradient} group-hover:animate-pulse`}
                    style={{ width: currentTheme.id === theme.id ? '100%' : '70%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: `${currentTheme.primary}10` }}>
            <p className="text-sm text-center" style={{ color: currentTheme.foreground }}>
              🎨 Customize your experience with beautiful themes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
