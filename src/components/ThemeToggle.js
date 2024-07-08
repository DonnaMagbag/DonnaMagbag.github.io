import React, { useContext } from 'react';

import { ThemeMode } from '../ThemeMode';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeMode);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggle;
