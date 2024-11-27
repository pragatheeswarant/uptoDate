import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Logo />
    </div>
  );
};

export default App;
