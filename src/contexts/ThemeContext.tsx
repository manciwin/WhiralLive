
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  accent: string;
  curve: string;
  gradient: string;
}

export const themes: Theme[] = [
  {
    id: 'ocean',
    name: 'Ocean Blue',
    primary: '#3B82F6',
    secondary: '#60A5FA',
    background: '#F8FAFC',
    foreground: '#1E293B',
    accent: '#0EA5E9',
    curve: '#2563EB',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    primary: '#F97316',
    secondary: '#FB923C',
    background: '#FFF7ED',
    foreground: '#9A3412',
    accent: '#EA580C',
    curve: '#DC2626',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 'forest',
    name: 'Forest Green',
    primary: '#10B981',
    secondary: '#34D399',
    background: '#F0FDF4',
    foreground: '#14532D',
    accent: '#059669',
    curve: '#047857',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    primary: '#8B5CF6',
    secondary: '#A78BFA',
    background: '#FAF5FF',
    foreground: '#581C87',
    accent: '#7C3AED',
    curve: '#6D28D9',
    gradient: 'from-purple-400 to-indigo-600'
  },
  {
    id: 'rose',
    name: 'Rose Pink',
    primary: '#F43F5E',
    secondary: '#FB7185',
    background: '#FFF1F2',
    foreground: '#881337',
    accent: '#E11D48',
    curve: '#BE185D',
    gradient: 'from-pink-400 to-rose-600'
  },
  {
    id: 'midnight',
    name: 'Midnight Dark',
    primary: '#60A5FA',
    secondary: '#93C5FD',
    background: '#0F172A',
    foreground: '#F8FAFC',
    accent: '#3B82F6',
    curve: '#1D4ED8',
    gradient: 'from-blue-600 to-indigo-800'
  },
  {
    id: 'cyber',
    name: 'Cyber Neon',
    primary: '#00D9FF',
    secondary: '#7DD3FC',
    background: '#0C1222',
    foreground: '#F0F9FF',
    accent: '#0EA5E9',
    curve: '#0284C7',
    gradient: 'from-cyan-400 to-blue-600'
  },
  {
    id: 'golden',
    name: 'Golden Hour',
    primary: '#F59E0B',
    secondary: '#FBD34D',
    background: '#FFFBEB',
    foreground: '#78350F',
    accent: '#D97706',
    curve: '#B45309',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'cosmic',
    name: 'Cosmic Purple',
    primary: '#C084FC',
    secondary: '#DDD6FE',
    background: '#1E1B4B',
    foreground: '#F3F4F6',
    accent: '#A855F7',
    curve: '#7C3AED',
    gradient: 'from-purple-600 to-indigo-800'
  },
  {
    id: 'arctic',
    name: 'Arctic Ice',
    primary: '#06B6D4',
    secondary: '#67E8F9',
    background: '#F0F9FF',
    foreground: '#164E63',
    accent: '#0891B2',
    curve: '#0E7490',
    gradient: 'from-cyan-300 to-blue-500'
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
    document.documentElement.style.setProperty('--theme-background', theme.background);
    document.documentElement.style.setProperty('--theme-foreground', theme.foreground);
    document.documentElement.style.setProperty('--theme-accent', theme.accent);
    document.documentElement.style.setProperty('--theme-curve', theme.curve);
  };

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
