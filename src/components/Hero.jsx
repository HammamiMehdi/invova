import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';


const Hero = () => {

const sliderContent = [
  'Digital transformation',
  'Data visualization',
  'Data scrapping ',
  'Software Development',
  'web Development',
  'mobile Development',
  'App Development',
  'business Development',
  'CRM Integrations',
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
    letterDiv.innerHTML = sliderContent[sliderCounter][i] ;

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

// return (
//   <div id="slider">
//     <div className="span">We excel at</div>
//     <div className="span" id="sliderValue"></div>
//   </div>
// );



  
  
    
  return (
    <motion.section   initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }} id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">FREE</span> Discount For{" "}
            <span className="text-white">1 Month</span> Deployement
          </p>
        </div>

        <div id="slider" className="flex flex-row justify-between items-center w-full">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Transforming  <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Ideas into</span>{" "}
          </h2>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 id='sliderValue' className="font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Digital Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Empowering businesses through innovative technology solutions. Let's build the future together.
      
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
};

export default Hero;
