import React from "react";
import { RiVipCrownLine } from "react-icons/ri";
// import { astrorobot } from "../../Assets/astrorobot.jpg";
import Puzzle from "../../Assets/puzzle.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <h1>Work with Me</h1>
          <div className="column">
            <ul className="listitem1">
              <li>
                <b>Address</b>
              </li>
              <li>431 W Guinea Ct.</li>
              <li>Casa grande AZ. 85122</li>
              <br />
              <li className="listitem">
                <b>Phone</b>
              </li>
              <li>(480)431-7699</li>
              <br />
              <li className="listItem">
                <b>Email</b>
              </li>
              <li>hookerangela40@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="logo">
            <RiVipCrownLine />
          </div>
        </div>
        <div className="column">
          <img
            src={Puzzle}
            className="photo"
            alt="labtop with code on the screen"
          />
        </div>
        
      </div>
    </>
  );
};

export default Contact;
