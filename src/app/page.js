"use client";
import Image from "next/image";
import { Dock } from "primereact/dock";
import "primereact/resources/themes/saga-blue/theme.css"; // or your preferred theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";


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
              <p className="text-white font-bold text-[22px] ">
                {" "}
                FULLSTACK DEVELOPER
              </p>
              <p className="text-white text-[22px] "> test text here ???</p>

              <div className="flex flex-row items-center justify-center gap-[25px] sm:pt-[30px] pt-[10px] sm:pb-[0px] pb-[10px] w-[100%] ">
                <div className="transition duration-150 ease-out hover:scale-[130%] ">
                  <TiSocialLinkedinCircular
                    color="#0A66C2"
                    size={38}
                    className="cursor-pointer   bg-white rounded-[10px] p-[3px] "
                  />
                </div>
                <div className="transition duration-150 ease-out hover:scale-[130%]">
                  {" "}
                  <FaGithub
                    size={38}
                    color="#181717"
                    className="cursor-pointer bg-white rounded-[10px] p-[3px] "
                  />
                </div>
                <div className="transition duration-150 ease-out hover:scale-[130%]">
                  <IoLogoWhatsapp
                    size={38}
                    color="#25D366"
                    className="cursor-pointer bg-white rounded-[10px] p-[3px]"
                  />
                </div>
              </div>
            </div>
          </div>

        <div className="flex sm:w-[50%] items-center mt-[30px] sm:mt-[0] justify-center sm:p-[150px]">
  <div className="sm:w-[100%] w-[70%] bg-white h-[100%] rounded-[20px] sm:shadow-xl shadow-cyan-500/50">
    <img
      src="https://i.ibb.co/rZNcVdY/photo.jpg"
      width="500"
      height="300"
      className="sm:p-[30px] p-[10px] sm:rounded-[0px] rounded-[25px]"
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

      <div className="w-full  bg-green-200 mb-[15px]" id="about" >
        <div className="bg-white flex items-center justify-center w-full  sm:pl-[100px] sm:pr-[100px] flex-col text-center">
        <h2 className="text-[29px] font-bold text-center">About Me...</h2>

        <h3 className="text-[20px]sm: p-[20px]">VASANTH - Full Stack Developer from Chennai</h3>
        
          <p className="text-center sm:pl-[50px] sm:pr-[50px] text-[18px] p-[10px]">

Hello! I’m Vasanth, a BE graduate from Chennai with a strong
 passion for web development. After completing my studies,
  I pursued programming and began my career as a web developer. Currently,
   I’m a Full Stack Developer at VSM Global. Over the years,
    I’ve honed my skills in various technologies, including PHP, 
    JavaScript, React, Next.js, MySQL, Bootstrap, Tailwind CSS, and AJAX.
     I also have experience with WordPress and have built both frontend and full-stack websites.

I’ve developed and published more than 15 websites online, demonstrating my 
expertise across diverse platforms and frameworks. My journey from web development 
to full stack has equipped me with a comprehensive understanding of the entire development 
process, from initial design to deployment </p>
        </div>
      </div>

      <div className="w-full h-[400px] bg-yellow-200"> 

      </div>
    </main>
  );
}
