"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-0">
      <div className="max-w-7xl mx-auto flex py-10 md:flex-row flex-col-reverse items-center">
        <div className="flex-grow pr-8 md:w-1/2 lg:px-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font mb-4 font-medium text-gray-200 text-2xl">
            Hello, I am a
          </h1>
          <span
            className="inline-block lg:py-2 flex-grow bg-gradient-to-br from-yellow-100 to-yellow-600 text-transparent bg-clip-text lg:text-4xl
          "
          >
            <TypeAnimation
              sequence={["Web Developer!", 1000, "UI/UX Designer!", 1000]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </span>

          <p className="my-4 text-gray-300 leading-relaxed">
            As a dedicated web developer, I specialize in creating stunning,
            user-friendly websites that captivate audiences and drive results.
            With a keen eye for design and a passion for code, I transform
            complex ideas into elegant digital solutions.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-1 md:py-2 px-3 md:px-6 focus:outline-none hover:bg-gray-500 rounded text-lg font-semibold">
              Hire Me!
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-1 md:py-2 px-3 md:px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        {/* portfolio image */}
        <div className="mb-8 lg:max-w-lg lg:w-full md:w-1/2 w-4/6 md:pl-12 md:mt-0 ">
          <Image
            className=" object-cover object-center rounded-full shadow-shadow hover:shadow-sm "
            alt="hero"
            src="/pf.jpg"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
