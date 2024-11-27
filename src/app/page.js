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

import image1 from "../../img/about2.jpg";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";




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
      label: "Portfolio",
      icon: "pi pi-briefcase", // Updated icon
      command: () => (window.location.hash = "/portfolio"),
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

      <div className="w-full sm:h-[100vh] sm:bg-[#1f4f66] bg-[#1f4f66] sm:rounded-[0px] rounded-b-[10px]">
        <div className="flex flex-col-reverse  sm:flex-row sm:w-full sm:h-[100%] ">
          <div className="sm:flex sm:w-[50%]  sm:p-[10px] ">
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
              </div>
              <p className="text-white font-bold text-[22px] text-center ">
                "Hi, I'm , a Full-Stack Developer passionate about building scalable web solutions."
                </p>

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



            </div>
          </div>

        <div className="flex sm:w-[50%] items-center mt-[30px] sm:mt-[0] justify-center sm:p-[150px]">
  <div className="sm:w-[100%]  w-[70%] bg-white flex items-center justify-center h-[100%] rounded-[20px] sm:shadow-xl shadow-cyan-500/50">
    <img
      src="https://i.ibb.co/rZNcVdY/photo.jpg"
      className="sm:p-[10px] p-[10px] sm:rounded-[0px] rounded-[25px] h-[100%] w-[90%]"
      alt="Descriptive Alt Text"
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
      <h2 className="text-[29px] font-bold mb-4">About Me...</h2>
      <h3 className="text-[20px] mb-6 sm:pl-[50px] sm:pr-[50px]">VASANTH - Full Stack Developer from Chennai</h3>
      
      <p className="text-[18px] text-gray-700 sm:pl-[50px] sm:pr-[50px] leading-7">
  Hello! I’m Vasanth, a BE graduate from Chennai with a strong passion for web development. 
  After completing my studies, I pursued programming and began my career as a web developer. 
  Currently, I’m a Full Stack Developer at VSM Global. Over the years, I’ve honed my skills in 
  various technologies, including:
  <span className="ruby sm:inline-flex items-center gap-2">
    <FaHtml5 className="text-orange-600" title="HTML" />HTML,
    <FaCss3Alt className="text-blue-600" title="CSS" />CSS,
    <TbBrandJavascript className="text-yellow-500" title="JavaScript" />JavaScript,
    <FaBootstrap className="text-purple-700" title="Bootstrap" />Bootstrap,
    <RiNextjsFill className="text-black" title="Next.js" /> Next.js,
    <RiTailwindCssFill className="text-blue-400" title="Tailwind CSS"/>
  </span>
  Tailwind CSS.
  <span className="inline-flex items-center gap-2">
    <FaPhp className="text-indigo-600" title="PHP" /> PHP,
    <SiMysql className="text-blue-500" title="MySQL" /> MySQL,
    <span className="text-gray-700">AJAX</span>, 
    <span className="text-gray-700">jQuery</span>.
  </span>
  I also have experience with 
  <span className="inline-flex items-center gap-2">
    <FaWordpress className="text-blue-600" title="WordPress" /> WordPress
  </span>
  and have built both frontend and full-stack websites.
</p>


    </div>
  </div>
</div>

{/* skill section */}


<div className="bg-blue-200 h-full w-full">

<div>

<div><FaHtml5 /></div>
<div></div>
<div></div>
<div></div>
</div>

<div>

<div></div>
<div></div>
<div></div>
</div>

</div>



      <div className="w-full h-[400px] bg-yellow-200"> 

      </div>
    </main>
  );
}
