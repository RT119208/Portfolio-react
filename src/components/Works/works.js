import React from 'react';
import './works.css';
import Portfolio1 from "../../assets/portfolio-1.jpg";

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Welcome to my portfolio website, where I showcase my five years of invaluable experience at LBC Inc alongside my ongoing journey of self-studying website development, driven by my passion for pursuing a career in this field.</span>
        <div className="worksImgs">
          <img src={Portfolio1} alt="portfolio1" className="worksImg"/>
        </div>
        
        <div className="popup-image">
          <span className="close">&times;</span>
          <img src={Portfolio1} alt="portfolio1" className="worksImgA" />
        </div>
    </section>
  );
}

export default Works;