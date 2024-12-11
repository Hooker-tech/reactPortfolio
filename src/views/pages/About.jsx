import React from "react";
import "./about.css";
import Labtopcode from "../../Assets/labtopcode.jpg";
import Games from "../../Assets/games.jpg";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <img
            className="puzzle"
            src={Labtopcode}
            alt="puzzle"
          />{" "}
        </div>
        <div className="column">
          <img
            className="puzzle"
            src={Games}
            alt="puzzle"
          />
        </div>
        <div className="column">
          <h1 className="item">As A Developer</h1>
          <hr />
          <p className="item">
            My goal as a Dev is to do as much as I possibly can! I am
            diversifying my skillset so that in today's ever growing space, I am
            gaining education and training to solidiy the possibility of staying
            ahead of the competitive marketspace. I am diversifying the skills
            that I have by creating. Creating is how you learn and grow as a
            dev. This space is unique and I love every error.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

