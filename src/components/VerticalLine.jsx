import React, { useState, useEffect } from "react";
import styles from "../style";



const VerticalLine = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollableHeight = documentHeight - windowHeight;
        const progress = (scrollTop / scrollableHeight) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div
        className={`${styles.verticalLine} ${
          scrollProgress > 0 ? styles.animateLine : ""
        }`}
        style={{ top: `${scrollProgress}%` }}
      ></div>
    );
  };

export default VerticalLine;
