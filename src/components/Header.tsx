'use client'
import React, { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <div className="max-w-[1440px] lg:h-[83px]">
        <div className="px-6 md:px-16 py-4 lg:py-6  flex justify-between items-center">
          {/* logo */}
          <h1 className="bg-gradient-to-br from-yellow-100 to-yellow-600 text-transparent bg-clip-text text-3xl md:text-4xl">
            Farwa&#39;s.
          </h1>
          {/* Navbar */}
          <nav className="hidden md:flex space-x-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/skills"}>Skills</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <IoMdClose size={30} className="text-yellow-500"/> : <IoMdMenu size={30} className="text-yellow-500"/>}
            </button>
          </div>
        </div>
        {/* Mobile Navbar */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-2/6 mt-16 shadow-lg bg-yellow-500 text-black z-50 transform transition-transform duration-300 md:hidden">
            <nav className="flex flex-col items-center space-y-6 p-6 ">
              <Link href={"/"} onClick={() => setIsMenuOpen(false)} >
                Home
              </Link>
              <Link href={"/about"} onClick={() => setIsMenuOpen(false) }className="hover:-translate-y-1">
                About
              </Link>
              <Link href={"/skills"} onClick={() => setIsMenuOpen(false)} className="hover:-translate-y-1">
                Skills
              </Link>
              <Link href={"/contact"} onClick={() => setIsMenuOpen(false)} className="hover:-translate-y-1">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </main>
  );
};

export default Header;
