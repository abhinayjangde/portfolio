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
import { SiApachekafka } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiGithubactions, SiTrpc } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { FaRobot, FaBrain, FaDatabase } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

interface Skill {
    name: string;
    icon: React.ReactElement;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend & UI",
        skills: [
            {
                name: "JavaScript (ES6+)",
                icon: (
                    <IoLogoJavascript className="size-6 text-yellow-300 rounded-lg" />
                ),
            },
            {
                name: "TypeScript",
                icon: <BiLogoTypescript className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "React",
                icon: <FaReact className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "Next.js",
                icon: (
                    <RiNextjsFill className="size-6 dark:text-white text-black rounded-lg" />
                ),
            },
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill className="size-6 text-sky-500 rounded-lg" />,
            },
            {
                name: "HTML5/CSS3",
                icon: <SiHtml5 className="size-6 text-yellow-500 rounded-lg" />,
            },
            {
                name: "Bootstrap",
                icon: <SiCss3 className="size-6 text-purple-500 rounded-lg" />,
            },
            {
                name:"ShadcnUI",
                icon: <SiShadcnui className="size-6 text-black dark:text-white rounded-lg" />,
            }
        ],
    },
    {
        title: "Backend & Databases",
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs className="size-6 text-green-500 rounded-lg" />,
            },
            {
                name: "Express",
                icon: <SiExpress className="size-6 text-gray-500 rounded-lg" />,
            },
            {
                name: "Python",
                icon: <FaPython className="size-6 text-yellow-500 rounded-lg" />,
            },
            {
                name: "FastAPI",
                icon: <SiFastapi className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "C/C++",
                icon: <TbBrandCpp className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "GraphQL",
                icon: <GrGraphQl className="size-6 text-pink-500 rounded-lg" />,
            },
            {
                name: "tRPC",
                icon: <SiTrpc className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="size-6 text-green-500 rounded-lg" />,
            },
            {
                name: "Redis",
                icon: <SiRedis className="size-6 text-red-500 rounded-lg" />,
            },
            {
                name: "Apache Kafka",
                icon: <SiApachekafka className="size-6 text-red-500 rounded-lg" />,
            }
        ],
    },
    {
        title: "AI & Generative AI",
        skills: [
            {
                name: "GenAI & LLMs",
                icon: <FaBrain className="size-6 text-pink-500 rounded-lg" />,
            },
            {
                name: "LangChain & RAG",
                icon: <FaRobot className="size-6 text-indigo-500 rounded-lg" />,
            },
            {
                name: "OpenAI API",
                icon: <SiOpenai className="size-6 dark:text-white text-black rounded-lg" />,
            },
            {
                name: "Vector DBs",
                icon: <FaDatabase className="size-6 text-blue-400 rounded-lg" />,
            },
        ],
    },
    {
        title: "DevOps & Tools",
        skills: [
            {
                name: "Docker",
                icon: <FaDocker className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "AWS",
                icon: <FaAws className="size-6 text-orange-500 rounded-lg" />,
            },
            {
                name: "Digital Ocean",
                icon: <FaDigitalOcean className="size-6 text-blue-500 rounded-lg" />,
            },
            {
                name: "Linux",
                icon: <FcLinux className="size-6 text-gray-800 rounded-lg" />,
            },
            {
                name: "Git/GitHub",
                icon: <DiGithubBadge className="size-6 text-gray-800 dark:text-white rounded-lg" />,
            },
            {
                name: "GitHub Actions",
                icon: <SiGithubactions className="size-6 text-purple-500 rounded-lg" />,
            },
            {
                name: "Postman",
                icon: <SiPostman className="size-6 text-orange-500 rounded-lg" />,
            },
        ],
    },
];

export default function Skills() {
    return (
        <section className="py-6">
            <h2 className="text-3xl md:text-4xl my-6 md:border-none border-b-gray-200">
                skills and tech stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-default"
                                >
                                    <div className="flex items-center justify-center">
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
