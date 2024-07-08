// Toggle between light and dark theme

import React, { createContext, useEffect, useState } from 'react';

export const ThemeMode = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log(`Theme changed to: ${theme}`);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggling theme');
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeMode.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeMode.Provider>
  );
};
