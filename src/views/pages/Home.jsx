import React from "react";
import { RiVipCrownLine } from "react-icons/ri";
import robot from "../../Assets/robot.jpg";

const Home = () => {
  return (
    <section className="bg-[#fcf7ef] py-10 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-[1200px] px-5">
        <div className=" flex-1 max-w-[45%] md:max-w-[80%]">
          <img
            src={robot}
            alt="Illustration of a robot"
            className="w-full h-auto rounded-[10px] shadow-[4px_12px_3px_#959595]"
          />
        </div>

        <article className=" flex-1 max-w-[45%] text-left md:max-w-[80%]">
          <header className="mb-5">
            <h1 className="text-[2.5rem] font-bold text-[#5a5959] mb-2 md:text-[2rem]">
              Angela Hooker
            </h1>
            <h2 className="text-[1.8rem] text-[#777] md:text-[1.5rem]">
              Software Engineer
            </h2>
          </header>
          <p className="text-[1.2rem] text-[#5a5959] leading-[1.6] md:text-[1.1rem]">
            I am a graphic designer based in Phoenix. My specialty is digital
            design and UI experience.
          </p>
        </article>
      </div>

      <div className=" mr-0 mt-10 text-[#5a5959] text-[3rem] md:text-[2.5rem]">
        <RiVipCrownLine />
      </div>
    </section>
  );
};

export default Home;
