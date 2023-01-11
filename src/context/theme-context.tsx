import React from 'react';

interface ThemeContextProps {
  theme: 'light' | 'dark';
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
});

interface ThemeProviderProps extends ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: scheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme: scheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
