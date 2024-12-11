import React from "react";
import { RiVipCrownLine } from "react-icons/ri";
import robot from "../../Assets/robot.jpg";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <img className="img" alt="robot" src={robot} />
        </div>
        <div className="column">
          <div id="jobDesc">
            <h1>Angela Hooker</h1>
            <h2> Software Engineer</h2>
            <h3>
              i am a graphic designer based in Phoenix. My specialty is digital
              design and UI experience.
            </h3>
          </div>
        </div>
      </div>
      <div className="logo">
        <RiVipCrownLine />
      </div>
    </>
  );
};

export default Home;
