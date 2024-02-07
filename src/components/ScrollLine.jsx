// ScrollLine.js
import React, { useState, useEffect } from 'react';
import './Styles/scrollLine.css';

const ScrollLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-line" style={{ width: `${scrollPercentage}%` }} />;
};

export default ScrollLine;
