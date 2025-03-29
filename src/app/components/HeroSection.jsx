"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import "./HeroSection.css";
import { gsap } from "gsap";

const HeroSection = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      opacity: 2,

      duration: 2,
      repeat: 4,
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Aryan_Seth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-8 lg:py-10 sticky h-auto bg-[#E6E6E1] md:py-20 sm:py-20 px-4 md:pl-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-4 md:pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#000] head mb-4 text-3xl sm:text-4xl lg:text-8xl lg:leading-normal font-serif font-extrabold">
            <span className="text-[#000] head bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Aryan Seth",
                1000,
                "Web Developer",
                1000,
                "Competitive Coder",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#3C2A21] text-sm sm:text-base lg:text-xl mb-6">
            Hi, I'm <span className="font-semibold">Aryan Seth</span>, a web
            developer specializing in creating dynamic, responsive websites with
            HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
            I am passionate about writing clean, efficient code and delivering
            user-friendly web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-black text-center"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              onClick={handleDownload}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center"
            >
              <button className="w-full">
                <span className="span-mother w-auto p-2">
                  <span>D</span>
                  <span>o</span>
                  <span>w</span>
                  <span>n</span>
                  <span>l</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d </span>
                  <span>C </span>
                  <span>V </span>
                </span>
                <span className="span-mother2">
                  <span>D</span>
                  <span>o</span>
                  <span>w</span>
                  <span>n</span>
                  <span>l</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d </span>
                  <span>C </span>
                  <span>V </span>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-12 lg:mt-0"
        >
          <div
            ref={boxRef}
            className="prof_img shadow-xl shadow-black rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/bg_shirt.jpg"
              alt="hero image"
              className="prof_img shadow-lg absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
