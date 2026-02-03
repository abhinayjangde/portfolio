"use client";

import { IProjects } from "@/app/types/Projects";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function ProjectsWithFilter({
    projects,
    title,
}: {
    projects: IProjects[];
    title: string;
}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState<string>("all");

    // Get all unique tech stack items
    const allTechStack = useMemo(() => {
        const techSet = new Set<string>();
        projects.forEach((project) => {
            project.techstack.forEach((tech) => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, [projects]);

    // Filter projects based on search and tech filter
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch =
                project.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                project.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

            const matchesTech =
                selectedTech === "all" ||
                project.techstack.includes(selectedTech);

            return matchesSearch && matchesTech;
        });
    }, [projects, searchQuery, selectedTech]);

    return (
        <section className="pb-8">
            {/* Page Header */}
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">
                    {title}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A collection of projects I&apos;ve built, from full-stack applications to AI-powered tools.
                </p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-8 space-y-5">
                {/* Search Input */}
                <div className="relative max-w-md">
                    <input
                        type="text"
                        placeholder="Search projects…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-11 rounded-xl search-input-enhanced outline-none transition-all text-sm"
                        autoComplete="off"
                        spellCheck={false}
                    />
                    <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>

                {/* Tech Filter Pills */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedTech("all")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            selectedTech === "all"
                                ? "filter-pill-active"
                                : "bg-secondary text-secondary-foreground hover:bg-accent"
                        }`}
                    >
                        All
                    </button>
                    {allTechStack.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(tech)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedTech === tech
                                    ? "filter-pill-active"
                                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <p className="text-sm text-muted-foreground tabular-nums">
                    Showing {filteredProjects.length} of {projects.length} projects
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProjects.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 rounded-full empty-state-icon flex items-center justify-center mb-6">
                            <svg
                                className="w-10 h-10 text-muted-foreground"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
                        <p className="text-muted-foreground max-w-sm">
                            Try adjusting your search or filter to find what you&apos;re looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedTech("all");
                            }}
                            className="mt-6 px-6 py-2 rounded-full btn-secondary-glow text-sm font-medium"
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className="card-gradient-border group animate-card-reveal"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden">
                                {/* Image Section */}
                                <div className="relative w-full h-48 overflow-hidden image-overlay">
                                    <Image
                                        src={project.thumbnailUrl}
                                        alt={`Screenshot of ${project.title}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    {project.isWorking && (
                                        <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg z-10">
                                            Live
                                        </span>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex-1 space-y-3">
                                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {project.techstack.slice(0, 4).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="tech-badge rounded-md px-2.5 py-1 text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techstack.length > 4 && (
                                                <span className="tech-badge rounded-md px-2.5 py-1 text-xs font-medium">
                                                    +{project.techstack.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-5 pt-4 border-t border-border">
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Code
                                        </Link>
                                        {project.liveLink && project.liveLink !== "/" && (
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-secondary-glow px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
                                            >
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                                Live
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}
