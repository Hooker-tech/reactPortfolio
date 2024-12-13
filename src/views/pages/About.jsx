import React from "react";
import Labtopcode from "../../Assets/labtopcode.jpg"; 
import Games from "../../Assets/games.jpg"; 
import "./about.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img className="about-img" src={Labtopcode} alt="Laptop code" />
        </div>
        <div className="about-image">
          <img className="about-img" src={Games} alt="Gaming code" />
        </div>
        <div className="about-text">
          <h1 className="about-title">As A Developer</h1>
          <hr />
          <p className="about-description">
            My goal as a developer is to do as much as I possibly can! I am
            diversifying my skill set so that in today's ever-growing space, I am
            gaining education and training to solidify the possibility of staying
            ahead of the competitive market space. I am diversifying the skills
            that I have by creating. Creating is how you learn and grow as a
            developer. This space is unique and I love every error.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
