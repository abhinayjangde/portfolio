import { IProjects } from "@/app/types/Projects";
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
        <section className="pb-2 border-b border-b-gray-300">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none border-b-gray-200">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                        key={project.id}
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={project.thumbnailUrl}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {project.isWorking && (
                                <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                    Working
                                </span>
                            )}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 space-y-3">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.techstack
                                    .slice(0, 3)
                                    .map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-md px-2 py-1 text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                {project.techstack.length > 3 && (
                                    <span className="text-xs text-gray-500 dark:text-gray-400 py-1">
                                        +{project.techstack.length - 3} more
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="flex-1 text-center bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                >
                                    Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
