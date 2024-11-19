"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandCss3,TbBrandTypescript} from "react-icons/tb";
import { RiJavascriptLine ,RiNextjsLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import Footer from "@/components/Footer";


const Skills = () => {
  return (
    <section className="text-gray-200 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          {/* 1st skill */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-bold text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              {/*html icon */}
              <AiOutlineHtml5 className="w-12 h-12" />
            </div>
            {/* discription html skill */}
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                HTML:
              </h2>
              <p className="leading-relaxed">
                I am skilled in crafting well-structured and semantic HTML
                markup, ensuring optimal accessibility and SEO. I have a deep
                understanding of HTML5 elements, attributes, and best practices,
                enabling me to create clean, maintainable, and efficient code
              </p>
            </div>
          </div>
        </div>

        {/* 2nd css skill */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-bold text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              {/* icon css */}
              <TbBrandCss3 className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                CSS:
              </h2>
              <p className="leading-relaxed">
                I am proficient in crafting visually appealing and responsive
                web layouts using CSS. I am skilled in utilizing CSS properties
                like flexbox and grid to create dynamic and flexible designs. I
                am also experienced in using CSS preprocessors like Sass and
                Less to write efficient and maintainable stylesheets.
                Additionally, I am proficient in using Tailwind CSS, a
                utility-first CSS framework, to rapidly build custom user
                interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* 3 :Javascript skill */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-bold text-sm">
            3
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              {/* icon javascript */}
              <RiJavascriptLine className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                Javascript:
              </h2>
              <p className="leading-relaxed">
                I am proficient in creating dynamic and interactive web
                applications. I have a strong understanding of core JavaScript
                concepts, including DOM manipulation, asynchronous programming,
                and object-oriented programming. I am experienced in working
                with popular JavaScript frameworks like React and Angular, and I
                am skilled in utilizing libraries like jQuery and TypeScript to
                enhance productivity and code quality.
              </p>
            </div>
          </div>
        </div>

        {/* 4:Typescript skill */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-bold text-sm">
            4
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              {/* icon typescript */}
              <TbBrandTypescript className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                Typescript
              </h2>
              <p className="leading-relaxed">
                I am proficient in using TypeScript&#39;s advanced features such as
                interfaces, classes, generics, and modules to improve code
                quality and reduce errors. I am experienced in working with
                popular TypeScript frameworks like React and Angular, and I am
                skilled in utilizing tools like TypeScript Compiler and linting
                tools to ensure code quality and consistency.
              </p>
            </div>
          </div>
        </div>

        {/* 5: React skill */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-bold text-sm">
            5
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              {/* react icon */}
              <FaReact className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                React:
              </h2>
              <p className="leading-relaxed">
                I am proficient in using React&#39;s core concepts such as JSX,
                props, state, and hooks to create efficient and reusable
                components. I am experienced in working with popular React
                libraries like Redux and React Router to manage complex state
                and navigation. Additionally, I am skilled in optimizing React
                applications for performance and accessibility, ensuring a
                seamless user experience.
              </p>
            </div>
          </div>
        </div>

        {/* 5:Next.js*/}

        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-bold text-sm">
            6
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              {/* 6 :Next.js icon  */}
              <RiNextjsLine className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                Next.js:
              </h2>
              <p className="leading-relaxed">
                As a skilled Next.js developer, I leverage its server-side
                rendering (SSR) and static site generation (SSG) capabilities to
                build fast, secure, and SEO-friendly web applications. I am
                proficient in using Next.js features like routing, data
                fetching, and image optimization to create high-performance
                websites. I am experienced in integrating Next.js with other
                technologies like React, TypeScript, and GraphQL to build
                complex and scalable web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Skills;
