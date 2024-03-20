import React from 'react';
import './intro.css';
import bg from '../../assets/image1.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName"> Reggie</span> <br />Web Designer</span>
            <p className="introPara">I did a self study on website designing/website developer as <br /> I expand my learnings to pursue this career and this is my first Porftfolio Website.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
