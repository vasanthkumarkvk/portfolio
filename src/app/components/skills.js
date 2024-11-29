import React from "react";
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaBootstrap, FaWordpress } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "PHP", icon: <FaPhp size={40} color="#777BB4" /> },
    { name: "Next.js", icon: <RiNextjsFill size={40} color="#000000" /> },
    { name: "WordPress", icon: <FaWordpress size={40} color="#21759B" /> },
    { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },

    { name: "HTML5", icon: <FaHtml5 size={40} color="#E44D26" /> },
    { name: "JavaScript", icon: <TbBrandJavascript size={40} color="#F7DF1E" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={40} color="#38B2AC" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },

  ];

  return (
    <section id="skills" className="w-full bg-gray-100 py-10">
     <h1 className="text-4xl font-bold text-center mb-6">My Technical Skills</h1>
<p className="text-center text-lg text-gray-700 mb-10">
  Here are the core technologies, frameworks, and tools that power my web development expertise:
</p>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110"
            >
              <div className="p-4 bg-white rounded-full shadow-lg cursor-pointer">
                {skill.icon}
              </div>
              <p className="mt-3 text-lg  text-[#4f2339] font-bold ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
