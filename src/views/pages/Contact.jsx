import React from "react";
import Puzzle from "../../Assets/puzzle.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Work with Me</h1>
          <ul className="contact-list">
            <li>Address: 431 W Guinea Ct., Casa Grande, AZ 85122</li>
            <li>Phone: (480) 431-7699</li>
            <li>Email: hookerangela40@gmail.com</li>
          </ul>
        </div>
        <div className="contact-image">
          <img src={Puzzle} className="contact-photo" alt="Laptop with code" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
