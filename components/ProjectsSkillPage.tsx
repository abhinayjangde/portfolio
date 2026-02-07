"use client";

import { IProjects } from "@/app/types/Projects";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues
const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), {
    ssr: false,
    loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg"></div>,
});
import {
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiTypescript,
    SiGraphql,
    SiRedis,
    SiFastapi,
    SiExpress,
    SiPrisma,
    SiPostman,
    SiHtml5,
    SiCss3,
    SiGithubactions,
    SiTrpc,
} from "react-icons/si";
import { FaReact, FaPython, FaNodeJs, FaDocker, FaAws, FaDigitalOcean } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";

// Tech icons mapping for project cards
const techIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    Tailwind: SiTailwindcss,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Docker: SiDocker,
    TypeScript: SiTypescript,
    GraphQL: SiGraphql,
    Redis: SiRedis,
    FastAPI: SiFastapi,
    Express: SiExpress,
    Prisma: SiPrisma,
};

// All tech stack icons for the marquee
const techStackIcons = [
    { icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: BiLogoTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: RiNextjsFill, name: "Next.js", color: "dark:text-white text-black" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
    { icon: SiRedis, name: "Redis", color: "text-red-500" },
    { icon: GrGraphQl, name: "GraphQL", color: "text-pink-500" },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "text-cyan-400" },
    { icon: FaDocker, name: "Docker", color: "text-blue-500" },
    { icon: FaPython, name: "Python", color: "text-yellow-400" },
    { icon: SiFastapi, name: "FastAPI", color: "text-teal-400" },
    { icon: FaAws, name: "AWS", color: "text-orange-400" },
    { icon: FaDigitalOcean, name: "Digital Ocean", color: "text-blue-400" },
    { icon: DiGithubBadge, name: "GitHub", color: "text-gray-400" },
    { icon: SiGithubactions, name: "GitHub Actions", color: "text-blue-400" },
    { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    { icon: SiTrpc, name: "tRPC", color: "text-blue-400" },
    { icon: TbBrandCpp, name: "C++", color: "text-blue-500" },
    { icon: FcLinux, name: "Linux", color: "text-white" },
    { icon: SiPrisma, name: "Prisma", color: "text-white" },
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
];

type FilterType = "all" | "recent" | "featured";

export default function ProjectsSkillPage({
    projects,
}: {
    projects: IProjects[];
}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [copied, setCopied] = useState(false);

    // Get unique tech stack for icons display
    const uniqueTechStack = useMemo(() => {
        const techSet = new Set<string>();
        projects.forEach((project) => {
            project.techstack.forEach((tech) => techSet.add(tech));
        });
        return Array.from(techSet).filter((tech) => techIcons[tech]);
    }, [projects]);

    // Filter projects
    const filteredProjects = useMemo(() => {
        let result = projects;

        // Search filter
        if (searchQuery) {
            result = result.filter(
                (project) =>
                    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Tab filter
        if (activeFilter === "featured") {
            result = result.filter((p) => p.isWorking);
        } else if (activeFilter === "recent") {
            result = result.slice(0, 4);
        }

        return result;
    }, [projects, searchQuery, activeFilter]);

    // Keyboard shortcut for search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
                e.preventDefault();
                document.getElementById("project-search")?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const copyCommand = () => {
        navigator.clipboard.writeText("npx skills add abhinayjangde/<repo>");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Generate random star count for demo
    const getStarCount = (id: number) => {
        const counts = [89.8, 86.0, 65.2, 61.2, 34.5, 19.9, 18.0];
        return counts[id % counts.length];
    };

    return (
        <div className="min-h-screen text-[#e0e0e0]">
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Hero Section - Two Column Layout */}
                <header className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 mb-20">
                    {/* Left Column - Title & Command */}
                    <div>
                        {/* Pixel Art Title */}
                        <h1 className="text-[3.5rem] md:text-[4.5rem] text-black dark:text-white leading-none font-black tracking-tight mb-2">
                            PROJECTS
                        </h1>
                        <p className="text-sm text-[#666] mb-10">
                            Powered by Abhinay Jangde
                        </p>

                        {/* Install Command Section */}
                        <div>
                            <p className="text-sm uppercase font-semibold text-[#666] mb-3">
                                Find Me
                            </p>
                            <div className="dark:bg-[#0d0d0d] bg-[#f1f1f1] dark:border-[#1a1a1a] rounded-md flex items-center justify-between px-4 py-3 group hover:border-[#2a2a2a] transition-colors">
                                <code className="text-[13px]  text-[#888]">
                                    <span className="text-[#555]">$ </span>
                                    <span className="dark:text-[#ccc] text-black">curl</span>{" "}
                                    <span className="dark:text-[#ccc] text-black">https://abhinayjangde.dev</span>{" "}
                                </code>
                                <button
                                    onClick={copyCommand}
                                    className="ml-4 p-1.5 text-[#555] hover:text-[#999] transition-colors"
                                    title="Copy to clipboard"
                                >
                                    {copied ? (
                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Description & Agent Icons */}
                    <div className="flex flex-col justify-start pt-2">
                        <p className="text-[1.35rem] md:text-[1.5rem] leading-normal text-[#b0b0b0] mb-10">
                            Bridging the gap between complex architectures and developer efficiency. Explore a library of production-grade projects, battle-tested patterns, and modular systems—all just one command away.
                        </p>

                        {/* Tech Stack and Tools - Animated Marquee */}
                        <div className="mt-4">
                            <p className="text-sm text-[#666] font-semibold uppercase mb-4">
                                Tech Stack and Tools
                            </p>
                            <div className="relative overflow-hidden w-full max-w-[400px]">
                                {/* Gradient masks for smooth fade effect - adapts to theme */}
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                                
                                {/* Scrolling container */}
                                <div className="flex items-center gap-6 animate-marquee">
                                    {/* First set of icons */}
                                    {techStackIcons.map(({ icon: Icon, name, color }) => (
                                        <div
                                            key={name}
                                            className={`shrink-0 ${color} hover:scale-110 transition-transform cursor-pointer`}
                                            title={name}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless loop */}
                                    {techStackIcons.map(({ icon: Icon, name, color }) => (
                                        <div
                                            key={`${name}-dup`}
                                            className={`shrink-0 ${color} hover:scale-110 transition-transform cursor-pointer`}
                                            title={name}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* GitHub Activity Graph */}
                <section className="mb-16">
                    <h2 className="text-sm text-[#666] font-semibold uppercase mb-6">
                        GitHub Activity
                    </h2>
                    <div className="overflow-x-auto">
                        {/* Dark mode calendar */}
                        <div className="hidden dark:block">
                            <GitHubCalendar
                                username="abhinayjangde"
                                colorScheme="dark"
                                blockSize={12}
                                blockMargin={4}
                                fontSize={14}
                                showWeekdayLabels
                            />
                        </div>
                        {/* Light mode calendar */}
                        <div className="block dark:hidden">
                            <GitHubCalendar
                                username="abhinayjangde"
                                colorScheme="light"
                                blockSize={12}
                                blockMargin={4}
                                fontSize={14}
                                showWeekdayLabels
                            />
                        </div>
                    </div>
                </section>

                {/* Skills Leaderboard Section */}
                <section>
                    <h2 className="text-3xl text-gray-900 dark:text-gray-100 md:text-4xl my-4 md:border-none border-b-gray-200 uppercase">
                        Projects You Love
                    </h2>

                    {/* Search Input */}
                    <div className="relative mb-6">
                        <svg
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            id="project-search"
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-b border-[#1a1a1a] py-3 pl-7 pr-10 text-[14px] text-[#ccc] placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors"
                        />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#333] text-sm ">
                            /
                        </span>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-6 mb-8">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`text-[13px] text-black transition-colors pb-1 ${
                                activeFilter === "all"
                                    ? "dark:text-white border-b border-white"
                                    : "dark:text-[#555] hover:text-[#888]"
                            }`}
                        >
                            All Time{" "}
                            <span className="text-[#666]">({projects.length.toLocaleString()})</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter("recent")}
                            className={`text-[13px]  transition-colors pb-1 ${
                                activeFilter === "recent"
                                    ? "text-white border-b border-white"
                                    : "text-[#555] hover:text-[#888]"
                            }`}
                        >
                            Recent
                        </button>
                        <button
                            onClick={() => setActiveFilter("featured")}
                            className={`text-[13px]  transition-colors pb-1 ${
                                activeFilter === "featured"
                                    ? "text-white border-b border-white"
                                    : "text-[#555] hover:text-[#888]"
                            }`}
                        >
                            Featured
                        </button>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 text-[11px] text-[#444] uppercase tracking-wider py-3 border-b border-[#1a1a1a] ">
                        <div className="col-span-1">#</div>
                        <div className="col-span-8">Project</div>
                        <div className="col-span-3 text-right">Other</div>
                    </div>

                    {/* Project Rows */}
                    <div>
                        {filteredProjects.length === 0 ? (
                            <div className="py-16 text-center text-black dark:text-white  text-sm">
                                No projects found matching your search.
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.slug}`}
                                    className="grid grid-cols-12 gap-4 py-4 items-center border-b border-[#111] dark:hover:bg-[#0a0a0a] transition-colors group"
                                >
                                    {/* Rank */}
                                    <div className="col-span-1 text-[#444] text-sm  tabular-nums">
                                        {index + 1}
                                    </div>

                                    {/* Project Info */}
                                    <div className="col-span-8">
                                        <div className="flex items-center gap-3">
                                            <span className="dark:text-white text-black font-semibold text-[15px] group-hover:underline">
                                                {project.title.toLowerCase().replace(/\s+/g, "-")}
                                            </span>
                                            {project.isWorking && (
                                                <span className="text-green-500 text-xs">●</span>
                                            )}
                                        </div>
                                        <p className="text-[#555] text-[13px]  mt-0.5">
                                            abhinayjangde/{project.title.toLowerCase().replace(/\s+/g, "-")}
                                        </p>
                                    </div>

                                    {/* Installs/Stars */}
                                    <div className="col-span-3 text-right">
                                        <span className="text-[#666] text-[14px]  tabular-nums">
                                            live
                                        </span>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
