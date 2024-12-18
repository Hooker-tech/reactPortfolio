import React from "react";
import Puzzle from "../../Assets/puzzle.jpg";
import goldRubix from "../../Assets/goldRubix.jpg";
import matrix from "../../Assets/matrix.jpg";
import games from "../../Assets/games.jpg";

const Experience = () => {
  const projects = [Puzzle, goldRubix, games, matrix];
  const education = [
    "Rio Salado College (Associates in Arts, 2012-2022)",
    "Rio Salado College (Associates in Computer Technology: Level I, 2012)",
    "Rio Salado College (Certificate in Quality Customer Service, 2021)",
    "Persevere Now (MERN stack certification, 2022)",
  ];

  return (
    <div className="bg-[#fcf7ef] py-10 px-5">
      <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center  mr-10 mb-10 ml-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex justify-center items-center shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={project}
              alt={`Project ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="column text-center">
        <h2 className="text-[2rem] font-bold text-[#5a5959] mb-5">
          I've Learned From
        </h2>
        <ul className="list-disc list-inside text-left max-w-[600px] mx-auto text-[#5a5959] text-[1.2rem] leading-[1.6]">
          {education.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
