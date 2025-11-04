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
        <section className="pb-2">
            <h2 className="text-3xl md:text-4xl my-6 md:border-none border-b-gray-200">
                {title}
            </h2>

            {/* Search and Filter Section */}
            <div className="mb-6 space-y-4">
                {/* Search Input */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>

                {/* Tech Filter */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedTech("all")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedTech === "all"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        All
                    </button>
                    {allTechStack.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(tech)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                selectedTech === tech
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing {filteredProjects.length} of {projects.length}{" "}
                    projects
                </p>
            </div>

            {/* Projects List */}
            <div className="space-y-6">
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No projects found matching your criteria.
                        </p>
                    </div>
                ) : (
                    filteredProjects.map((project) => (
                        <div
                            className="group relative rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-neutral-800 bg-gray-100"
                            key={project.id}
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image Section */}
                                <div className="relative w-full md:w-64 h-48 md:h-40 overflow-hidden shrink-0">
                                    <Image
                                        src={project.thumbnailUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover m-4"
                                    />
                                    {project.isWorking && (
                                        <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                            Working
                                        </span>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-5 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.techstack.map(
                                                (tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-md px-2 py-1 text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-4">
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                        >
                                            Source Code
                                        </Link>
                                        <Link
                                            href={project.liveLink}
                                            target="_blank"
                                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                        >
                                            Live Link
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
