import React from "react";
import Labtopcode from "../../Assets/labtopcode.jpg";
import Games from "../../Assets/games.jpg";

const About = () => {
  return (
    <section className="bg-[#fcf7ef] py-10">
      <div className="about-content flex flex-wrap justify-center items-center gap-8 w-full max-w-[1200px] mx-auto">
        <div className="about-image flex-1 max-w-[45%] md:max-w-[80%]">
          <img
            className="about-img w-full h-auto rounded-[10px] shadow-[4px_12px_3px_#959595]"
            src={Labtopcode}
            alt="Laptop code"
          />
        </div>

        <div className="about-image flex-1 max-w-[45%] md:max-w-[80%]">
          <img
            className="about-img w-full h-auto rounded-[10px] shadow-[4px_12px_3px_#959595]"
            src={Games}
            alt="Gaming code"
          />
        </div>

        <div className="about-text flex-1 max-w-[45%] text-left p-5 md:max-w-[80%]">
          <h1 className="about-title text-[2.5em] text-[#5a5959] font-bold mb-3 md:text-[2em]">
            As A Developer
          </h1>
          <hr className="border-t-2 border-gray-400 mb-5" />
          <p className="about-description text-[1.2em] leading-[1.6] text-[#5a5959] md:text-[1.1em] sm:text-[1em]">
            My goal as a developer is to do as much as I possibly can! I am
            diversifying my skill set so that in today's ever-growing space, I
            am gaining education and training to solidify the possibility of
            staying ahead of the competitive market space. I am diversifying the
            skills that I have by creating. Creating is how you learn and grow
            as a developer. This space is unique and I love every error.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
