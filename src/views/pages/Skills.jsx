import React from "react";
import code from "../../Assets/code.jpg";

import { TbBrandJavascript } from "react-icons/tb";
import { SiCreatereactapp, SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaNodeJs, FaLinkedin, FaGithub } from "react-icons/fa";

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
    <section className="bg-[#fcf7ef] py-10 px-5">
      <div className="flex justify-center mb-8">
        <img
          src={code}
          alt="labtob with womans hand hovering"
          className="w-full max-w-[600px] h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="text-[#5a5959] text-center max-w-[800px] mx-auto mb-8 px-4 text-[1.1rem] leading-[1.7]">
        Throughout my journey as a Developer I have persevered through a boot
        camp, many years of college, and a long journey through personal
        education. Each of these endeavors has helped me get closer tomy goal as
        a developer. I am eager to learn more and adapt to any environment. I
        love to learn and i easpecially love to code. I can't wit to see where
        my path leads me.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-5 w-32 h-32 text-[#5a5959] hover:bg-[#f9f1e8] transition-all"
          >
            <div className="text-[2.5rem] mb-2">{tech.icon}</div>
            <span className="text-center font-semibold text-[1rem]">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
