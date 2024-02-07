import React from 'react'
import styles, { layout } from "../style";
import { apple, bill, digitalisation, google } from "../assets";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import './Styles/craftsmanship.css'

const cssCode = `/* Your CSS code goes here */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.subtitle {
  font-size: 18px;
  color: #666;
}

.button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}`;

const Craftsmanship = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <div className="cardCraftsmanship">
  <div className="headerCraftsmanship">
    <div className="topCraftsmanship">
      <div className="circleCraftsmanship">
        <span className="red circle2"></span>
      </div>
      <div className="circleCraftsmanship">
        <span className="yellow circle2"></span>
      </div>
      <div className="circleCraftsmanship">
        <span className="green circle2"></span>
      </div>
      <div className="titleCraftsmanship">
        <p id="title2">style.css</p>
      </div>
    </div>
  </div>
  <div className="code-container">
    <textarea readOnly="" name="code" id="code" className="area" value={cssCode}>
</textarea>
  </div>
</div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
  <h2 className={`${styles.heading2} animatedTitle`}>
  Code Craftsmanship <br className="sm:block hidden" /> 
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5 animatedParagraph`}>
  At <b>Invova</b>, we pride ourselves on our commitment to delivering impeccably crafted code. With a meticulous eye for detail and a passion for excellence, our team ensures that every line of code is written with precision and care. 
  </p>

  <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
    <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
    <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
  </div>
</div>
  </section>
);

export default Craftsmanship