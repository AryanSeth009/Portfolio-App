import React from "react";
import About from "./About";
import "./Project.css";
import Skill from "./Skill";
function Projects() {
  return (
    <div id="" className="bg-[#131311]  mb-auto pb-20 text-[#D1D1C7] shadow-lg border-black rounded-3xl h-auto min-h-screen p-4">
      <About />
      <Skill/>
      <i id="project" class="ri-github-fill"></i>
      <div className="flex flex-col pb-20 ">
        <div className="flex items-center pl-20 gap-56 mb-40 ">
          <div className="loader">
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
          </div>
          <h2 className="text-center text-9xl font-semibold font-sans">
            PROJECTS <span className="text-[#D5FF3F]">.</span>
          </h2>
        </div>
      </div>
      <div className="space-y-96 ">
        {/* Project 1 */}
        <div className="flex flex-row">
          <div className="p-4 flex w-1/2 justify-center">
            <h2 className="text-[300px] text-[#D5FF3F] leading-none text-center">
              <span>01.</span>
            </h2>
          </div>
          <div className="flex w-auto h-[580px] relative pt-32 mr-20">
            <div className="relative flex justify-center items-center w-full h-full">
              <a
                href="https://pinterest-clone-six-psi.vercel.app/"
                className="relative"
              >
                <img
                  className="w-[850px] h-[700px] rounded-lg"
                  src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="v_1 absolute h- w-[650px] inset-0 m-auto"
                  src="./videos/pinterest.webm"
                ></video>
                <div className="flex flex-row  pt-2  ">
                  <h3 className="flex font-semibold  text-[50px] pb-20">
                    Pinterest Clone
                  </h3>
                  <a href="https://github.com/DevilAr69/Pinterest-clone" className="pt-4 ml-auto space-x-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="currentColor" className="flex justify-end items-end"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-row">
          <div className="p-4 flex w-1/2 justify-center">
            <h2 className="text-[300px] text-[#D5FF3F] leading-none text-center">
              <span>02.</span>
            </h2>
          </div>
          <div className="flex  w-auto h-[580px]  relative mr-20">
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="https://qdra-main.vercel.app/" className="relative">
                <img
                  className="w-[850px] h-[700px] rounded-lg"
                  src="https://i.pinimg.com/236x/21/bb/99/21bb992bfaebad836768cd49a53c1de2.jpg"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="v_1 absolute h-[600px] w-[650px] inset-0 m-auto"
                  src="./videos/qdra.webm"
                ></video>
                <div className="flex flex-row  pt-2  ">
                  <h3 className="flex font-semibold  text-[50px] pb-20">
                    QDRA App
                  </h3>
                  <a href="https://github.com/DevilAr69?tab=repositories" className="flex flex-end ml-auto   pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="currentColor"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                  </a>
                </div>
                {/* <h3 className="font-regular text-[30px]">QDRA App</h3> */}
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-row mb-4 pb-32">
          <div className="p-4 flex w-1/2 justify-center">
            <h2 className="text-[300px] text-[#D5FF3F] leading-none text-center">
              <span>03.</span>
            </h2>
          </div>
          <div className="flex w-auto h-[580px]  relative mr-20">
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="https://github.com/DevilAr69/express-system-app" className="relative">
                <img
                  className="w-[850px] h-[700px] rounded-lg"
                  src="https://images.pexels.com/photos/8064312/pexels-photo-8064312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="v_1 absolute h-[600px] w-[650px] inset-0 m-auto"
                  src="./videos/soon.mp4"
                ></video>
                 <div className="flex flex-row  pt-2  "> 
                <h3 className="flex font-semibold  text-[50px] pb-20">
                  Express System App
                </h3>
                <a href="" className="pt-4 ml-auto pl-44 space-x-10 items-end">      
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                </a>
                </div> 
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
