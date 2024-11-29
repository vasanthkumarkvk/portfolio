"use client";
import Image from "next/image";
import { Dock } from "primereact/dock";
import "primereact/resources/themes/saga-blue/theme.css"; // or your preferred theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

import image1 from "../../img/about2.png";
import user from "../../img/user.png";


import Skills from "./components/skills";




export default function Home() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home", // Updated icon
      command: () => (window.location.hash = "#home"),
    },
    {
      label: "About",
      icon: "pi pi-user", // Updated icon
      command: () => (window.location.hash = "#about"),
    },
    {
      label: "Skills",
      icon: "pi pi-briefcase", // Updated icon
      command: () => (window.location.hash = "#skills"),
    },
    {
      label: "Experience",
      icon: "pi pi-calendar", // Updated icon
      command: () => (window.location.hash = "/experience"),
    },
   
    {
      label: "Contact",
      icon: "pi pi-envelope", // Updated icon
      command: () => (window.location.hash = "/contact"),
    },
  ];


  

  return (
    <main className="" id="home">
      <Dock model={items} position="bottom" className="custom-dock fixed " />

      <div className="w-full sm:h-[100vh] " id="banner_bg">
        <div className="flex flex-col-reverse  sm:flex-row sm:w-full sm:h-[100%] ">
          <div className="sm:flex sm:w-[80%]   sm:p-[10px] ">
            <div className="flex  sm:justify-center sm:flex-col items-center  flex-col sm:p-[100px] sm:w-[100%] ">
              <div class="concept concept-two" >
                <div class="hover">
                  <h1>V</h1>
                </div>
                <div class="hover">
                  <h1>A</h1>
                </div>
                <div class="hover">
                  <h1>S</h1>
                </div>
                <div class="hover">
                  <h1>A</h1>
                </div>
                <div class="hover">
                  <h1>N</h1>
                </div>
                <div class="hover">
                  <h1>T</h1>
                </div>
                <div class="hover">
                  <h1>H</h1>
                </div>
                <div class="hover">
                  <h1></h1>
                </div>
                <div class="hover">
                  <h1>K</h1>
                </div>
              </div>
  

              <div className="text-white font-bold text-[15px] sm:text-[20px] text-center ">
                "Hi, I'm   <div class="concept concept-two flex" id="animate_name">
  <span class="animate-letter">V</span>
  <span class="animate-letter">A</span>
  <span class="animate-letter">S</span>
  <span class="animate-letter">A</span>
  <span class="animate-letter">N</span>
  <span class="animate-letter">T</span>
  <span class="animate-letter">H</span>

  <span class="animate-letter">K</span>
</div>, a Full-Stack Developer passionate about building <br /> scalable web solutions."
                </div>

              <div className="flex flex-row items-center justify-center gap-[25px] sm:pt-[30px] pt-[10px] sm:pb-[0px] pb-[10px] w-[100%] ">
                <div className="transition duration-500 ease-out hover:scale-[130%] ">
                  <TiSocialLinkedinCircular
                    color="#0A66C2"
                    size={38}
                    className="cursor-pointer   bg-white rounded-[10px] p-[3px] "
                  />
                </div>
                <div className="transition duration-500 ease-out hover:scale-[130%]">
                  {" "}
                  <FaGithub
                    size={38}
                    color="#181717"
                    className="cursor-pointer bg-white rounded-[10px] p-[3px] "
                  />
                </div>
                <div className="transition duration-500 ease-out hover:scale-[130%]">
                  <IoLogoWhatsapp
                    size={38}
                    color="#25D366"
                    className="cursor-pointer bg-white rounded-[10px] p-[3px]"
                  />
                </div>
              </div>
  

              <div className="h-[100px] w-full">
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center text-[20px] p-[6px] transition-all duration-500 ease-out pr-[20px] pl-[20px] bg-white rounded-[10px] group hover:bg-black hover:text-white">
        <button className="rounded-[10px]">Projects</button>
        <FaLongArrowAltRight className="ml-2 transform transition-all duration-500 ease-out group-hover:translate-x-4" />
      </div>
    </div>
  </div>

  <div className="flex w-full sm:mb-0 mb-[40px] ">
    <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-[30px] w-full ">
      <div className="flex flex-col bg-white sm:h-[172px] h-[172px] w-[270px] sm:w-[300px] rounded-[11px]" id="bg_imag1"></div>
      <div className="flex flex-col bg-white sm:h-[172px] h-[172px] w-[270px] sm:w-[300px] rounded-[11px]" id="bg_imag2"></div>
      <div className="flex flex-col bg-white sm:h-[172px] h-[172px] w-[270px] sm:w-[300px] rounded-[11px]" id="bg_imag3"></div>
    </div>
  </div>



            </div>
          </div>

          <div className="flex sm:w-[20%]   items-center justify-center sm:mb-[190px] sm:mr-[50px] ">
  <div className="flex items-center justify-center rounded-full  sm:shadow-xl shadow-cyan-500/50 overflow-hidden  ">
    <Image
      src={user}
      alt="User Image"
      className="object-cover sm:h-full sm:w-full w-[100%] h-[100%]"
    />
  </div>
</div>





        </div>

        <div class="custom-shape-divider-bottom-1725359123" >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>


{/* about section */}
      <div className="w-full bg-green-200 mb-[15px]" id="about">
  <div className="bg-white flex sm:flex-row flex-col items-center justify-center w-full sm:px-[100px] py-10">
  <div className="w-full sm:w-1/2 mb-8 sm:mb-0 sm:pr-8 overflow-hidden">
  <Image
    src={image1}
    alt="Vasanth"
    className="rounded-r-[45px] w-full h-auto shadow-lg animate-moveLeftRight"
  />
</div>

    <div className="w-full sm:w-1/2 text-center sm:text-left">
      <h2 className="text-4xl font-bold mb-4 text-center" >About Me...</h2>
      <h3 className="text-[20px] mb-6 sm:pl-[50px] sm:pr-[50px] text-center">VASANTH - Full Stack Developer from Chennai</h3>
      
      <p className="text-lg text-gray-700 sm:pl-[50px] sm:pr-[50px] leading-7 text-center">
      Hello! I’m Vasanth, a BE graduate from Chennai with a strong passion for web development. 
        After completing my studies, I pursued programming and began my career as a web developer. 
        Currently, I’m a Full Stack Developer at VSM Global. Over the years, I’ve honed my skills in 
        various technologies, including PHP, JavaScript, React, Next.js, MySQL, Bootstrap, Tailwind CSS, 
        and AJAX. I also have experience with WordPress and have built both frontend and full-stack websites.

        I’ve developed and published more than 15 websites online, demonstrating my expertise across 
        diverse platforms and frameworks. My journey from web development to full stack has equipped me 
        with a comprehensive understanding of the entire development process, from initial design to deployment.
</p>


    </div>
  </div>
</div>

{/* Skill Section */}
<Skills />


      <div className="w-full h-[400px] bg-yellow-200"> 

      </div>
    </main>
  );
}
