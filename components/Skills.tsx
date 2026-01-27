import React from "react";
import {
    FaReact,
    FaPython,
    FaNodeJs,
    FaDocker,
    FaAws,
    FaDigitalOcean,
} from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiFastapi,
    SiPostman,
    SiHtml5,
    SiCss3,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiGithubactions, SiTrpc } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";

interface Skill {
    name: string;
    icon: React.ReactElement;
}

const skills: Skill[] = [
    {
        name: "JavaScript (ES6+)",
        icon: (
            <IoLogoJavascript className="size-7 text-yellow-300 rounded-lg" />
        ),
    },
    {
        name: "TypeScript",
        icon: <BiLogoTypescript className="size-7 text-blue-500 rounded-lg" />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="size-7 text-green-500 rounded-lg" />,
    },
    {
        name: "HTML5/CSS3",
        icon: <SiHtml5 className="size-7 text-yellow-500 rounded-lg" />,
    },
    {
        name: "Postman",
        icon: <SiPostman className="size-7 text-orange-500 rounded-lg" />,
    },
    {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="size-7 text-sky-500 rounded-lg" />,
    },
    {
        name: "Docker",
        icon: <FaDocker className="size-7 text-blue-500 rounded-lg" />,
    },
    {
        name: "Bootstrap",
        icon: <SiCss3 className="size-7 text-purple-500 rounded-lg" />,
    },
    {
        name: "Git/GitHub",
        icon: <DiGithubBadge className="size-7 text-gray-500 rounded-lg" />,
    },
    {
        name: "React",
        icon: <FaReact className="size-7 text-blue-500 rounded-lg" />,
    },
    {
        name: "Next.js",
        icon: (
            <RiNextjsFill className="size-7 dark:text-white text-black rounded-lg" />
        ),
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="size-7 text-green-500 rounded-lg" />,
    },
    {
        name: "Express",
        icon: <SiExpress className="size-7 text-gray-500 rounded-lg" />,
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql className="size-7 text-blue-500 rounded-lg" />,
    },
    {
        name: "AWS",
        icon: <FaAws className="size-7 text-orange-500 rounded-lg" />,
    },
    {
        name: "Digital Ocean",
        icon: <FaDigitalOcean className="size-7 text-blue-500 rounded-lg" />,
    },
    {
        name: "Python",
        icon: <FaPython className="size-7 text-yellow-500 rounded-lg" />,
    },
    {
        name: "FastAPI",
        icon: <SiFastapi className="size-7 text-blue-500 rounded-lg" />,
    },
    {
        name: "Linux",
        icon: <FcLinux className="size-7 text-gray-500 rounded-lg" />,
    },
    {
        name: "C/C++",
        icon: <TbBrandCpp className="size-7 text-gray-500 rounded-lg" />,
    },
    {
        name: "Redis",
        icon: <SiRedis className="size-7 text-red-500 rounded-lg" />,
    },
    {
        name: "GraphQL",
        icon: <GrGraphQl className="size-7 text-pink-500 rounded-lg" />,
    },
    {
        name: "GitHub Actions",
        icon: <SiGithubactions className="size-7 text-purple-500 rounded-lg" />,
    },
    {
        name: "tRPC",
        icon: <SiTrpc className="size-7 text-blue-500 rounded-lg" />,
    },
];

export default function Skills() {
    return (
        <section className="pb-2">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none border-b-gray-200">
                skills and techstack
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:bg-neutral-800 bg-neutral-100 p-1 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <div
                            className={` p-2 rounded-md flex items-center justify-center text-white`}
                        >
                            {skill.icon}
                        </div>
                        <span className="text-sm md:text-base pr-4 font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
