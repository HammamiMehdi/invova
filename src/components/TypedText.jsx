import React, {useState, useEffect} from 'react'
import './Styles/typedText.css'

const TypedText = () => {
    const sliderContent = [
        'Web Development',
        'mobile Development',
        'App Development',
        'business Development',
        'Data Scrapping',
        'Data Visualization'
      ];
    
      let sliderCounter = 0;
    
      const slide = () => {
        if (sliderCounter >= sliderContent.length) {
          sliderCounter = 0;
        }
    
        const sliderValue = document.querySelector('#sliderValue');
        sliderValue.innerHTML = '';
    
        sliderValue.classList.remove('holder-animation');
        void sliderValue.offsetWidth;
        sliderValue.classList.add('holder-animation');
    
        for (let i = 0; i < sliderContent[sliderCounter].length; i++) {
          let letterDiv = document.createElement('div');
          letterDiv.innerHTML = sliderContent[sliderCounter][i];
    
          if (letterDiv.innerHTML === ' ') {
            letterDiv.innerHTML = '&nbsp;';
          }
          letterDiv.classList.add('start');
          letterDiv.classList.add('animation');
          letterDiv.style.animationDelay = i / 10 + 's';
          sliderValue.appendChild(letterDiv);
        }
    
        sliderCounter++;
      };
    
      useEffect(() => {
        slide();
        const intervalId = setInterval(slide, 4000);
    
        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);
    
      return (
        <div id="slider">
          <div className="span">We excel at</div>
          <div className="span" id="sliderValue"></div>
        </div>
      );
};


export default TypedText