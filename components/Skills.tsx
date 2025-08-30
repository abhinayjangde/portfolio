import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiFastapi } from "react-icons/si";
import { PiOpenAiLogo } from "react-icons/pi";

export default function Skills() {
    return (
        <section className="py-8 border-b border-b-gray-300 pb-2">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none  border-b-1 border-b-gray-200">skills & technologies</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8 justify-items-center">
                <BiLogoTypescript className="w-12 h-12 hover:scale-125 transition-all duration-300 text-blue-500 drop-shadow-lg" />
                <RiNextjsFill className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <IoLogoJavascript className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#F0DB4F] drop-shadow-lg" />
                <FaReact className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#61dbfb] drop-shadow-lg" />
                <FaNodeJs className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#3C873A] drop-shadow-lg" />
                <SiExpress className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <FaDocker className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#1D63ED] drop-shadow-lg" />
                <FaAws className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <SiMongodb className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#00684A] drop-shadow-lg" />
                <SiPostgresql className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#336791] drop-shadow-lg" />
                <RiTailwindCssFill className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#1f2937] drop-shadow-lg" />
                <FaGitAlt className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#f14e32] drop-shadow-lg" />
                <FaDigitalOcean className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#008bcf] drop-shadow-lg" />
                <FcLinux className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <TbBrandCpp className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <FaPython className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <SiFastapi className="w-12 h-12 hover:scale-125 transition-all duration-300 text-[#0098FF] drop-shadow-lg" />
                <PiOpenAiLogo className="w-12 h-12 hover:scale-125 transition-all duration-300 drop-shadow-lg" />
            </div>
        </section>
    );
}
