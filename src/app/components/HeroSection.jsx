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
    link.href = "/Aryan S. Resume.pdf";
    link.download = "Aryan_Seth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section py-8 sticky h-auto bg-[#E6E6E1] md:py-20 px-4 md:px-6 lg:px-10">

      <div className="grid grid-cols-1 sm:grid-cols-12 pt-4 md:pt-10 gap-y-8 sm:gap-y-0">

        {/* ── Text Column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start order-2 sm:order-1"
        >
          <h1 className="text-[#000] head mb-4 text-3xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-normal font-serif font-extrabold">
            <span className="text-[#000] head bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
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

          <p className="text-[#3C2A21] text-sm sm:text-base lg:text-lg xl:text-xl mb-6 max-w-prose mx-auto sm:mx-0">
            Hi, I&apos;m <span className="font-semibold">Aryan Seth</span>, a web
            developer specializing in creating dynamic, responsive websites with
            HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
            I am passionate about writing clean, efficient code and delivering
            user-friendly web applications.
          </p>

          <div className="flex flex-col xs:flex-row items-center sm:items-start gap-3 mt-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full xs:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-black text-center text-sm sm:text-base"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              onClick={handleDownload}
              className="px-1 py-1 w-full xs:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white hover:text-black text-center"
            >
              <button className="w-full">
                <span className="span-mother hover:rounded-full w-auto px-4 py-2 block text-sm sm:text-base">
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

        {/* ── Image Column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center order-1 sm:order-2"
        >
          <div
            ref={boxRef}
            className="prof_img shadow-xl shadow-black rounded-full mx-auto bg-[#181818]
              w-[160px] h-[160px]
              xs:w-[200px] xs:h-[200px]
              sm:w-[220px] sm:h-[220px]
              md:w-[260px] md:h-[260px]
              lg:w-[350px] lg:h-[350px]
              xl:w-[400px] xl:h-[400px]
              relative"
          >
            <Image
              src="/images/latest picture.jpg"
              alt="Aryan Seth profile photo"
              className="prof_img shadow-lg rounded-full object-cover w-full h-full p-2"
              width={380}
              height={380}
              sizes="(max-width: 480px) 160px, (max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 380px"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;