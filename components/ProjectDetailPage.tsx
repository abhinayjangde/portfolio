"use client";

import { IProjects, GitHubStats } from "@/app/types/Projects";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
import { FiStar, FiGitBranch, FiEye, FiExternalLink, FiArrowLeft, FiCopy, FiCheck } from "react-icons/fi";

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

interface ProjectDetailPageProps {
    project: IProjects;
    githubStats: GitHubStats | null;
}

export default function ProjectDetailPage({ project, githubStats }: ProjectDetailPageProps) {
    const [copied, setCopied] = useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText(`git clone ${project.githubUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatNumber = (num: number): string => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    };

    return (
        <div className="min-h-screen text-[#e0e0e0]">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-[#666] hover:text-black dark:hover:text-white transition-colors mb-8 text-sm font-mono"
                >
                    <FiArrowLeft className="w-4 h-4" />
                    Back to projects
                </Link>

                {/* Header - Project Name */}
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 font-mono">
                        {project.slug}
                    </h1>
                    <p className="text-[#666] text-sm font-mono">
                        {project.githubRepo}
                    </p>
                </header>

                {/* Install Command Box */}
                <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-md mb-10">
                    <div className="flex items-center justify-between px-4 py-3">
                        <code className="text-[13px] font-mono text-[#888]">
                            <span className="text-[#555]">$ </span>
                            <span className="text-[#ccc]">git clone</span>{" "}
                            <span className="text-[#888]">{project.githubUrl}</span>
                        </code>
                        <button
                            onClick={copyCommand}
                            className="ml-4 p-1.5 text-[#555] hover:text-[#999] transition-colors"
                            title="Copy to clipboard"
                        >
                            {copied ? (
                                <FiCheck className="w-4 h-4 text-green-500" />
                            ) : (
                                <FiCopy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>

                {/* GitHub Stats Bar */}
                {githubStats && (
                    <div className="flex items-center gap-6 mb-10 pb-6 border-b border-[#1a1a1a]">
                        <div className="flex items-center gap-2 text-[#888]">
                            <FiStar className="w-4 h-4" />
                            <span className="text-sm font-mono">{formatNumber(githubStats.stars)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#888]">
                            <FiGitBranch className="w-4 h-4" />
                            <span className="text-sm font-mono">{formatNumber(githubStats.forks)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#888]">
                            <FiEye className="w-4 h-4" />
                            <span className="text-sm font-mono">{formatNumber(githubStats.watchers)}</span>
                        </div>
                        {githubStats.language && (
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                <span className="text-sm font-mono text-[#888]">{githubStats.language}</span>
                            </div>
                        )}
                        {project.isWorking && (
                            <span className="ml-auto px-3 py-1 dark:bg-green-900/30 bg-green-500/30 text-green-400 dark:text-green-400 text-xs rounded-full font-mono">
                                Live
                            </span>
                        )}
                    </div>
                )}

                {/* Main Title & Description */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                    <p className="text-[#313131] dark:text-[#b0b0b0] text-lg leading-relaxed">
                        {project.description}
                    </p>
                </section>

                {/* Long Description / README-like content */}
                {project.longDescription && (
                    <section className="mb-10 prose prose-invert max-w-none">
                        <div className="text-[#313131] dark:text-[#b0b0b0] leading-relaxed whitespace-pre-wrap font-mono text-sm">
                            {project.longDescription.split('\n').map((line, i) => {
                                if (line.startsWith('## ')) {
                                    return (
                                        <h3 key={i} className="text-white text-lg font-bold mt-8 mb-4 font-mono">
                                            {line.replace('## ', '')}
                                        </h3>
                                    );
                                }
                                if (line.startsWith('- ')) {
                                    return (
                                        <div key={i} className="flex items-start gap-2 ml-4 my-1">
                                            <span className="text-[#666]">•</span>
                                            <span>{line.replace('- ', '')}</span>
                                        </div>
                                    );
                                }
                                if (line.trim() === '') {
                                    return <div key={i} className="h-4" />;
                                }
                                return <p key={i} className="my-2">{line}</p>;
                            })}
                        </div>
                    </section>
                )}

                {/* Features List */}
                {project.features && project.features.length > 0 && (
                    <section className="mb-10">
                        <h3 className="text-[11px] text-black dark:text-white tracking-[0.2em] uppercase font-medium mb-4">
                            Key Features
                        </h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3  text-[#313131] dark:text-[#999]">
                                    <span className="text-green-500 text-xs">✓</span>
                                    <span className="font-mono text-sm">{feature}</span>    
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Tech Stack */}
                <section className="mb-10">
                    <h3 className="text-[11px] tracking-[0.2em] text-[#666] uppercase font-medium mb-4">
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {project.techstack.map((tech) => {
                            const Icon = techIcons[tech];
                            return (
                                <div
                                    key={tech}
                                    className="flex items-center gap-2 px-3 py-2 bg-[#111] border border-[#222] rounded-md text-[#888] hover:text-white hover:border-[#333] transition-colors"
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span className="text-sm font-mono">{tech}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Project Thumbnail */}
                {project.thumbnailUrl && (
                    <section className="mb-10">
                        <h3 className="text-[11px] tracking-[0.2em] text-[#666] uppercase font-medium mb-4">
                            Preview
                        </h3>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#222]">
                            <Image
                                src={project.thumbnailUrl}
                                alt={`${project.title} preview`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </section>
                )}

                {/* Action Buttons */}
                <section className="flex flex-wrap gap-4 pt-6 border-t border-[#1a1a1a]">
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex border items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors text-sm"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                    </Link>
                    {project.liveLink && project.liveLink !== "/" && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex text-black dark:text-white items-center gap-2 px-6 py-3 bg-transparent border border-[#333] dark:border-[#333] font-semibold rounded-md hover:bg-[#c7c7c7] transition-colors text-sm"
                        >
                            <FiExternalLink className="w-4 h-4" />
                            View Live Demo
                        </Link>
                    )}
                </section>
            </div>
        </div>
    );
}
