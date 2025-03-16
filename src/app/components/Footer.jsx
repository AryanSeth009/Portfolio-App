// components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#E6E6E1] rounded-lg text-[#000] p-4 md:p-0 justify-between items-center min-h-[300px] md:h-[400px] w-full relative">
      <div className="flex flex-col justify-center items-center text-center w-full mb-8 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2">
        <p className="text-base md:text-lg mb-2 md:mb-4">
          Got a project? Need an unfair advantage?
        </p>
        <h3 className="text-4xl md:text-6xl lg:text-9xl font-medium">
          <a
            href="#contact"
            className="hover:opacity-90 transition-opacity inline-block"
          >
            GET IN T<span className="font-semibold">O</span>UCH
          </a>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20 w-full justify-center md:justify-between px-4 md:px-20 mt-auto">
        <div className="flex items-center gap-4 md:gap-20">
          <a href="/" className="text-body-secondary text-decoration-none">
            <svg className="bi" width="24" height="24" viewBox="0 0 24 24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="text-sm md:text-base text-body-secondary">
            @ setharyan53@gmail.com
          </span>
        </div>

        <ul className="flex gap-6 md:gap-8 items-center list-none p-0 m-0">
          <li>
            <a
              className="text-body-secondary hover:opacity-70 transition-opacity"
              href="https://x.com/Aryanseth41"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size={20} className="md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a
              className="text-body-secondary hover:opacity-70 transition-opacity"
              href="https://www.instagram.com/aryanseth_02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={20} className="md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a
              className="text-body-secondary hover:opacity-70 transition-opacity"
              href="https://www.facebook.com/aryan.seth.3720/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={20} className="md:w-6 md:h-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
