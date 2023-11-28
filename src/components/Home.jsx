import React from "react";
import hero from "../assets/hero.png";
import ticket1 from "../assets/ticket1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { heroIcons } from "../Data";

const Home = () => {
  return (
    <div
      className="section flex items-center xl:justify-center justify-start flex-wrap"
      id="home"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
          Convenient- <br /> One click to book  <br /> your ticket
        </div>
        <div className="btn">
          <a href="#">View All Tickets</a>
          <FaArrowRight />
        </div>
        <div className="flex md:gap-6 gap-2">
          {heroIcons.map((heroIcon, index) => {
            return (
              <div
                className="w-[3rem] h-[3rem] bg-black text-white flex items-center justify-center md:text-3xl text-xl rounded-md"
                key={index}
              >
                {heroIcon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="min-w-[200px] justify-self-center md:w-[600px]">
        <img src={ticket1} alt="" />
      </div>
    </div>
  );
};

export default Home;
