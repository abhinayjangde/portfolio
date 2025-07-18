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
        <section className="my-4">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none border-b-1 border-b-gray-200">skills</h2>
            <div className="flex flex-wrap space-y-2 text-4xl space-x-2">
                <BiLogoTypescript className="w-10 hover:scale-110 transition-all duration-300 text-blue-500" />
                <RiNextjsFill className="w-12 hover:scale-110 transition-all duration-300" />
                <IoLogoJavascript className="w-10 hover:scale-110 transition-all duration-300 text-[#F0DB4F]" />
                <FaReact className="w-10 hover:scale-110 transition-all duration-300 text-[#61dbfb]" />
                <FaNodeJs className="w-10 hover:scale-110 transition-all duration-300 text-[#3C873A]" />
                <SiExpress className="w-10 hover:scale-110 transition-all duration-300" />
                <FaDocker className="w-10 hover:scale-110 transition-all duration-300 text-[#1D63ED]" />
                <FaAws className="w-10 hover:scale-110 transition-all duration-300" />
                <SiMongodb className="w-10 hover:scale-110 transition-all duration-300 text-[#00684A]" />
                <SiPostgresql className="w-8 hover:scale-110 transition-all duration-300 text-[#336791]" />
                <RiTailwindCssFill className="w-10 hover:scale-110 transition-all duration-300 text-[#1f2937]" />
                <FaGitAlt className="w-10 hover:scale-110 transition-all duration-300 text-[#f14e32]" />
                <FaDigitalOcean className="w-8 hover:scale-110 transition-all duration-300 text-[#008bcf]" />
                <FcLinux className="w-10 hover:scale-110 transition-all duration-300 text-yellow-400" />
                <TbBrandCpp className="w-10 hover:scale-110 transition-all duration-300" />
                <FaPython className="w-8 hover:scale-110 transition-all duration-300" />
                <SiFastapi className="w-8 hover:scale-110 transition-all duration-300 text-[#0098FF]" />
                <PiOpenAiLogo className="w-8 hover:scale-110 transition-all duration-300"  />
            </div>
        </section>
    );
}
