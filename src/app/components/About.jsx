"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Tag from "./Tag";

function About() {
  const boxRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    // Image animation
    gsap.to(boxRef.current, {
      delay: 2,
      y: -120,
      duration: 2,
    });

    // Text animation with ScrollTrigger
    // gsap.to(paraRef.current, {
    //   scale: 0.9, // Scale up the text
    //   opacity: 1, // Fade in the text
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: '.about',
    //     start: 'top center',
    //     end: 'top 80%', // Adjust end position as needed
    //   },
    // });
    gsap.to(".para", {
      y: -70,
      ease: "power2.out",
      delay: 1,
      yoyo: true,
      // Scale up the text
      opacity: 1, // Fade in the text
      duration: 4,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top 80%", // Adjust end position as needed
      },
    });
  }, []);

  return (
    <div
      id="about"
      className="about scroll-smooth flex pb-0 h-auto p-3 justify-items-end w-full text-[] -mb-20"
    >
      <div className="w-full">
        <h2 className="text-4xl md:text-7xl lg:text-9xl tracking-tighter font-sans font-semibold mb-10 md:mb-20 uppercase h-auto leading-tight md:leading-[120px] font-regular pt-4 text-center md:text-left md:pl-4 lg:pl-96">
          Developer , <br /> Programmer
        </h2>
        <div className="flex items-center spinner bottom-72 left-32 align-middle pb-6 md:pb-10 justify-center md:justify-start">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4">
          <img
            ref={boxRef}
            className="h-[300px] md:h-[600px] pt-4 p-4 w-auto !rounded-2xl mx-auto md:mx-0"
            src="./images/developer page.jpg"
            alt=""
          />
          <div className="text_part mt-6 md:mt-0">
            <p
              className="para font-medium flex flex-col h-auto w-full pr-4 align-top items-start text-lg md:text-2xl lg:text-3xl font-regular"
              ref={paraRef}
            >
              Hello, I'm Aryan, a full-stack developer with a passion for
              continuous learning and professional growth. While my foundation
              lies in the MERN stack, I am actively exploring advanced topics in
              web development such as performance optimization, serverless
              architectures, and progressive web apps (PWAs).
            </p>
            <div className="flex h-auto text-[#A19D9A] pt-6 md:pt-10">
              <p className="para flex flex-wrap gap-4 md:gap-8 font-thin text-base md:text-xl lg:text-2xl justify-start w-full md:w-[600px] items-start">
                ( ABOUT ME ){" "}
                <span className="flex flex-wrap text-base md:text-xl leading-10 lg:text-2xl">
                  Creating great websites and giving users a better experience
                  is my primary focus. I ensure each project leaves users a good
                  sensation through
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
