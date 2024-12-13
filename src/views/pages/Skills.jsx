import React from "react";
import code from "../../Assets/code.jpg";
// import businessContact from "../../Assets/code.jpg";

import { TbBrandJavascript } from "react-icons/tb";
import { SiCreatereactapp, SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./skills.css";

const Skills = () => {
  const technologies = [
    { icon: <FaLinkedin />, name: "LinkedIn" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <TbBrandJavascript />, name: "JavaScript" },
    { icon: <SiCreatereactapp />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ];

  return (
    <section className="skills-container">
      <div className="top-image-container">
        <img src={code} className="top-image" alt="Skills Overview" />
      </div>

      <div className="technologies" size={60}>
        {technologies.map((tech, index) => (
          <div key={index} className="technology-item">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      {/* <div className="additional-image-container">
        <img src={businessContact} className="additional-image" alt="Additional Skills" />
      </div> */}
    </section>
  );
};

export default Skills;
