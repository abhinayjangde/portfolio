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
        <section className="pb-2">
            <h2 className="text-3xl md:text-4xl my-6 md:border-none border-b-gray-200">
                {title}
            </h2>

            {/* Projects List */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <div
                        className="group relative border-gray-200 bg-gray-100 dark:border-gray-700 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-neutral-800"
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
                ))}
            </div>
        </section>
    );
}
