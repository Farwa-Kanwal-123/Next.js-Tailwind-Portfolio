"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
        <Image
          className="lg:w-1/6 md:w-2/6 w-3/6 mb-12 object-cover object-center rounded-full shadow-shadow hover:shadow-sm"
          alt="hero"
          src="/pf2.jpg"
          width={100}
          height={100}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            As a dedicated web developer, I am passionate about crafting
            innovative and user-centric digital experiences. With a keen eye for
            detail and a strong foundation in HTML, CSS,JavaScript and
            Typescript, I specialize in creating responsive websites and web
            applications that captivate audiences and drive results. My
            expertise extends to React & Next.js enabling me to deliver
            cutting-edge solutions tailored to diverse needs. I thrive on
            collaboration and am committed to staying up-to-date with the latest
            industry trends to ensure optimal performance and user satisfaction.
          </p>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
