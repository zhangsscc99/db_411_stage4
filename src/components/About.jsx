import React from "react";
import { FaArrowRight } from "react-icons/fa";
import pasta from "../assets/pasta.png";
import ticket1 from "../assets/ticket1.jpg";
import chef from "../assets/chef.jpg";
import ticket2 from "../assets/ticket2.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-2xl text-xl font-bold mb-6 " >
            Best ticket awaits you
          </div>
          <p className="text-sm opacity-70">
            
          </p>
          <div className="btn">
            <a href="" className="text-white text-[0.85rem]">
              Explore more
            </a>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <div className="md:row-start-1">
          <img src={ticket1} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Our team provides good service.
          </div>
          <p className="text-sm opacity-70">
           
          </p>
        </div>
        <div className="">
          <img src={ticket2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
