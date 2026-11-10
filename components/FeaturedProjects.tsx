import { IProjects } from "@/types/Projects";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects({
    projects,
    title,
}: {
    projects: IProjects[];
    title: string;
}) {
    return (
        <section className="pb-2">
            <h2 className="section-rule editorial-heading text-3xl md:text-5xl my-6">
                {title}
            </h2>

            {/* Projects List */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <div
                        className="project-card group relative border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--primary)] transition-all duration-300"
                        key={project.id}
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full md:w-64 h-48 md:h-40 overflow-hidden shrink-0">
                                <Image
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover md:m-4 rounded-lg group-hover:scale-105 transition-all duration-500"
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
                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.techstack.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="border border-[var(--border)] text-[var(--muted-foreground)] rounded-full px-2 py-1 text-xs font-medium"
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
                                        className="bg-[var(--primary)] hover:brightness-110 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
                                    >
                                        Source Code
                                    </Link>
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="border border-[var(--border)] hover:border-[var(--primary)] font-semibold px-6 py-2 rounded-full text-sm transition-colors duration-200"
                                    >
                                        Live Link
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
