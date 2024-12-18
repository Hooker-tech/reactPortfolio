import React from "react";
import businessContact from "../../Assets/businessContact.jpg"

const Contact = () => {
  return (
    <div className="bg-[#fcf7ef] min-h-screen m-0 p-0 font-[Geneva,sans-serif]">
      <div className="p-5 flex flex-col items-center h-full">
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]">
          <div className="flex-1 max-w-[45%] text-left p-5 md:max-w-[80%] md:mb-5">
            <h1 className="text-[3.5em] text-[#5a5959] mb-5 md:text-[2.5em] sm:text-[2em]">
              Work With Me
            </h1>
            <ul className="font-bold list-none p-0">
              <li className="text-[1.2em] leading-[1.6] text-[#5a5959] mb-2 sm:text-[1em]">
                <b>Email:</b> hookerangela40@gmail.com
              </li>
              <li className="text-[1.2em] leading-[1.6] text-[#5a5959] mb-2 sm:text-[1em]">
                <b>Phone:</b> 480 431 7699
              </li>
              <li className="text-[1.2em] leading-[1.6] text-[#5a5959] mb-2 sm:text-[1em]">
                <b>431 W. Guinea court</b> Casa Grande, AZ. 85122
              </li>
            </ul>
          </div>

          <div className="flex-2 max-w-[45%] md:max-w-[80%]">
            <img
              src={businessContact}
              alt="Contact"
              className="w-full h-auto rounded-[10px] shadow-[4px_12px_3px_#959595]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

