import React, {useEffect} from 'react'
import './Styles/teamSection.css'
import { logo } from "../assets";

import Swiper from 'swiper';



const TeamSection = () => {
    useEffect(() => {
        // Initialize Swiper when the component mounts
        const swiper = new Swiper('.swiper', {
          effect: 'cards',
          grabCursor: true,
          initialSlide: 2,
          loop: true,
          rotate: true,
          mousewheel: {
            invert: false,
          },
        });
    
        // return () => {
        //   // Destroy Swiper when the component unmounts to prevent memory leaks
        //   swiper.destroy();
        // };
      }, []); // Empty dependency array ensures the effect runs only once
    
      return (
        <section className='sectionContainer'>
  {/* <div className="content">
    <div className="info">
      <p>Join us for a fantastic <span className="movie-night">movie night</span> filled with popcorn, laughter, and great company! Whether you're a fan of thrilling action, heartwarming dramas, or side-splitting comedies, we've got a film lineup to cater to all tastes. Save the date and bring your favorite snacks to make it a memorable evening.</p>
      <button className="btn">Join</button>
    </div>
    <div className="swiper">
      <div className="swiper-wrapper">
        
        <div className="swiper-slide">
          <span>8.5</span>
          <h2>The Queen's Gambit</h2>
        </div>

        <div className="swiper-slide">
          <span>9.5</span>
          <h2>Breaking Bad</h2>
        </div>

        <div className="swiper-slide">
          <span>8.1</span>
          <h2>Wednesday</h2>
        </div>

        <div className="swiper-slide">
          <span>8.7</span>
          <h2>Stranger Things</h2>
      </div>
        
      <div className="swiper-slide">
          <span>8.6</span>
          <h2>Anne with an E</h2>
      </div>
        
      <div className="swiper-slide">
          <span>8.9</span>
          <h2>Friends</h2>
      </div>
        
       <div className="swiper-slide">
          <span>8.6</span>
          <h2>The Crown</h2>
      </div>
        
        <div className="swiper-slide">
          <span>8.7</span>
          <h2>House M.D.</h2>
      </div>
        
        <div className="swiper-slide">
          <span>9.2</span>
          <h2>Game of Thrones</h2>
        </div>
    </div>
  </div>

</div> */}
  
  <ul className="circlesTeamSection">
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
    <li><img src={logo}/></li>
  </ul>

  <div className="cube-container">
  <div className="cube">
    <div className="face front">BI </div>
    <div className="face back"> WEB </div>
    <div className="face right">Mobile </div>
    <div className="face left">Graphic </div>
    <div className="face top">Analytics </div>
    <div class="face bottom">DATA </div>
  </div>
</div>

  <div className="text-white text-center mb-12">
      <h2 className="text-5xl font-bold">Our Experts</h2>
      <p>Our expert team comprises dedicated professionals with extensive expertise in various domains including Business Intelligence (BI), Mobile App Development, Web Development, Data Analysis, and Graphic Design. With a diverse skill set and a passion for innovation, our team collaborates seamlessly to deliver exceptional solutions tailored to meet the unique needs of our clients. </p>
    </div>
    <div className="cube-container">
  <div className="cube">
    <div className="face front">BI </div>
    <div className="face back"> WEB </div>
    <div className="face right">Mobile </div>
    <div className="face left">Graphic </div>
    <div className="face top">Sécurity </div>
    <div class="face bottom">DATA </div>
  </div>
</div>
</section>
      );
}

export default TeamSection