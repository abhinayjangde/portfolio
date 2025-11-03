import { IProjects } from "@/app/types/Projects";
import Image from "next/image";
import Link from "next/link";

export default function RecentWorks({
    projects,
    title,
}: {
    projects: IProjects[];
    title: string;
}) {
    return (
        <section className="pb-2">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none border-b-gray-200">
                {title}
            </h2>
            <div className="space-y-8">
                {projects.map((project) => (
                    <div
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                        key={project.id}
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-80 h-48 md:h-64">
                                <Image
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {project.isWorking && (
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                                        Working
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col justify-center flex-1 p-6 space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techstack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex md:flex-col justify-center items-center p-6 space-x-4 md:space-x-0 md:space-y-4">
                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="flex-1 md:flex-none text-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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
