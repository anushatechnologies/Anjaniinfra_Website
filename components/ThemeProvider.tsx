'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  isDark: false,
  isLight: true,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;
    root.setAttribute('data-theme', newTheme);

    if (newTheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      if (body) {
        body.setAttribute('data-theme', 'light');
        body.classList.remove('dark');
        body.classList.add('light');
      }
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      if (body) {
        body.setAttribute('data-theme', 'dark');
        body.classList.remove('light');
        body.classList.add('dark');
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('anjani_theme') as Theme | null;
    if (savedTheme === 'dark') {
      setThemeState('dark');
      applyTheme('dark');
    } else {
      // Default to Light Mode as requested
      setThemeState('light');
      applyTheme('light');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('anjani_theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  return (
    <ThemeContext.Provider value={{ theme, isDark, isLight, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
