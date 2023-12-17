import { apple, bill, digitalisation, google } from "../assets";
import styles, { layout } from "../style";
import "../components/Styles/billing.css"; 
import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';


const Billing = () => (
  
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <img
      src={digitalisation}
      alt="billing"
      className="w-[100%] h-[100%] relative z-[5] animatedImage"
    />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
  <h2 className={`${styles.heading2} animatedTitle`}>
    Unleash Possibilities with <br className="sm:block hidden" /> Our Digital Transformation Expertise
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5 animatedParagraph`}>
    Unlock unparalleled growth and efficiency with <b>Invova</b>'s Digital Transformation services.
    Our innovative approach redefines the way businesses operate, seamlessly integrating cutting-edge technologies to propel you into the digital era.
  </p>

  <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
    <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
    <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
  </div>
</div>
  </section>
);

export default Billing;
