import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: 'light',
  toggleTheme: () => {},
});

export const ThemeProviderCustom = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = Appearance.getColorScheme();
  const [mode, setMode] = useState<ThemeMode>(systemTheme === 'dark' ? 'dark' : 'light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
