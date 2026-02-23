import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const current = document.documentElement.getAttribute('data-theme');
    return (current === 'light' ? 'light' : 'dark');
  });

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? '[○ light]' : '[● dark]'}
    </button>
  );
};

export default ThemeToggle;
