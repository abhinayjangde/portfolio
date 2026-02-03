"use client";

import { IProjects } from "@/app/types/Projects";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
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
} from "react-icons/si";
import { VscCopilot } from "react-icons/vsc";
import { SiOpenai, SiClaude } from "react-icons/si";
import { RiRobot2Line, RiSparklingLine } from "react-icons/ri";
import { TbBrandVscode, TbTerminal2 } from "react-icons/tb";

// Tech icons mapping
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

// Agent icons for the "Available for these agents" section
const agentIcons = [
    { icon: VscCopilot, name: "GitHub Copilot" },
    { icon: TbBrandVscode, name: "VS Code" },
    { icon: RiRobot2Line, name: "AI Agents" },
    { icon: TbTerminal2, name: "Terminal" },
    { icon: RiSparklingLine, name: "Gemini" },
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
                        <h1 className="skills-title text-[3.5rem] md:text-[4.5rem] leading-none font-black tracking-tight mb-2">
                            PROJECTS
                        </h1>
                        <p className="text-[11px] tracking-[0.25em] text-[#666] uppercase font-medium mb-10">
                            The Open Source Portfolio Ecosystem
                        </p>

                        {/* Install Command Section */}
                        <div>
                            <p className="text-[11px] tracking-[0.2em] text-[#666] uppercase font-medium mb-3">
                                Install in one command
                            </p>
                            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-md flex items-center justify-between px-4 py-3 group hover:border-[#2a2a2a] transition-colors">
                                <code className="text-[13px] font-mono text-[#888]">
                                    <span className="text-[#555]">$ </span>
                                    <span className="text-[#ccc]">npx skills add</span>{" "}
                                    <span className="text-[#888]">&lt;owner/repo&gt;</span>
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
                        <p className="text-[1.35rem] md:text-[1.5rem] leading-[1.5] text-[#b0b0b0] mb-10">
                            Projects are reusable applications for developers. Explore them with a single command to enhance your learning with access to production-grade code.
                        </p>

                        {/* Available for these agents */}
                        <div>
                            <p className="text-[11px] tracking-[0.2em] text-[#666] uppercase font-medium mb-4">
                                Available for these Agents
                            </p>
                            <div className="flex items-center gap-8">
                                {agentIcons.map(({ icon: Icon, name }) => (
                                    <div
                                        key={name}
                                        className="text-[#555] hover:text-[#888] transition-colors cursor-pointer"
                                        title={name}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Skills Leaderboard Section */}
                <section>
                    <h2 className="text-[11px] tracking-[0.25em] text-[#666] uppercase font-medium mb-6">
                        Projects Leaderboard
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
                            className="w-full bg-transparent border-b border-[#1a1a1a] py-3 pl-7 pr-10 text-[14px] text-[#ccc] placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors font-mono"
                        />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#333] text-sm font-mono">
                            /
                        </span>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-6 mb-8">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`text-[13px] font-mono transition-colors pb-1 ${
                                activeFilter === "all"
                                    ? "text-white border-b border-white"
                                    : "text-[#555] hover:text-[#888]"
                            }`}
                        >
                            All Time{" "}
                            <span className="text-[#666]">({projects.length.toLocaleString()})</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter("recent")}
                            className={`text-[13px] font-mono transition-colors pb-1 ${
                                activeFilter === "recent"
                                    ? "text-white border-b border-white"
                                    : "text-[#555] hover:text-[#888]"
                            }`}
                        >
                            Recent
                        </button>
                        <button
                            onClick={() => setActiveFilter("featured")}
                            className={`text-[13px] font-mono transition-colors pb-1 ${
                                activeFilter === "featured"
                                    ? "text-white border-b border-white"
                                    : "text-[#555] hover:text-[#888]"
                            }`}
                        >
                            Featured
                        </button>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 text-[11px] text-[#444] uppercase tracking-wider py-3 border-b border-[#1a1a1a] font-mono">
                        <div className="col-span-1">#</div>
                        <div className="col-span-8">Project</div>
                        <div className="col-span-3 text-right">Installs</div>
                    </div>

                    {/* Project Rows */}
                    <div>
                        {filteredProjects.length === 0 ? (
                            <div className="py-16 text-center text-[#444] font-mono text-sm">
                                No projects found matching your search.
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <Link
                                    key={project.id}
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grid grid-cols-12 gap-4 py-4 items-center border-b border-[#111] hover:bg-[#0a0a0a] transition-colors group"
                                >
                                    {/* Rank */}
                                    <div className="col-span-1 text-[#444] text-sm font-mono tabular-nums">
                                        {index + 1}
                                    </div>

                                    {/* Project Info */}
                                    <div className="col-span-8">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white font-semibold text-[15px] group-hover:underline">
                                                {project.title.toLowerCase().replace(/\s+/g, "-")}
                                            </span>
                                            {project.isWorking && (
                                                <span className="text-green-500 text-xs">●</span>
                                            )}
                                        </div>
                                        <p className="text-[#555] text-[13px] font-mono mt-0.5">
                                            abhinayjangde/{project.title.toLowerCase().replace(/\s+/g, "-")}
                                        </p>
                                    </div>

                                    {/* Installs/Stars */}
                                    <div className="col-span-3 text-right">
                                        <span className="text-[#666] text-[14px] font-mono tabular-nums">
                                            {getStarCount(project.id)}K
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
