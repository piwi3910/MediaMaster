import { createContext, useContext, useState, ReactNode } from 'react';

type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export function ColorSchemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}