import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Through countless hours of self-study, I've been practicing my skills in both front-end and back-end development, delving into the intricacies of HTML, CSS, ReactJs, and more. My creative flair extends to designing visually appealing and user-friendly interfaces, ensuring that every website I craft is not just functional but also aesthetically pleasing.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>E-commerce Project Demo</h2>
              <p>My first E-commerce website</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>This demo text can be change while making the production ready website.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>You can write text related to mobile app development.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills