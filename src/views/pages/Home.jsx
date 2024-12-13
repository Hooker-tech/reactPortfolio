import React from "react";
import { RiVipCrownLine } from "react-icons/ri";
import robot from "../../Assets/robot.jpg";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <div className="home-image">
          <img src={robot} alt="Illustration of a robot" />
        </div>
        <article className="home-description">
          <header>
            <h1>Angela Hooker</h1>
            <h2>Software Engineer</h2>
          </header>
          <p>
            I am a graphic designer based in Phoenix. My specialty is digital
            design and UI experience.
          </p>
        </article>
      </div>
      <div className="home-logo">
        <RiVipCrownLine />
      </div>
    </section>
  );
};

export default Home;
