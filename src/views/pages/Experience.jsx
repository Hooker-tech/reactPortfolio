import React from "react";
import Puzzle from "../../Assets/puzzle.jpg";
import goldRubix from "../../Assets/goldRubix.jpg";
import matrix from "../../Assets/matrix.jpg";
import games from "../../Assets/games.jpg";

import "./experience.css";

const Experience = () => {
  const projects = [Puzzle, goldRubix, games, matrix];
  const education = [
    "Rio Salado College (Associates in Arts, 2012-2022)",
    "Rio Salado College (Associates in Computer Technology: Level I, 2012)",
    "Rio Salado College (Certificate in Quality Customer Service, 2021)",
    "Persevere Now (MERN stack certification, 2022)",
  ];
  return (
    <div className="experience-container">
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img
              className="project-image"
              src={project}
              alt={`Project ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="column">
        <h2>I've Learned From</h2>
        <ul>
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
