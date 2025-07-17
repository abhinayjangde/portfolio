import Image from "next/image";
import Link from "next/link";
import imgCodebhaiya from "@/public/codebhaiya.png";
import imgPeertodo from "@/public/peertodo.png";
import imgCapstone from "@/public/capstone.png"
const recentProject = [
    {
        id: 1,
        title: "CodeBhaiya",
        description: "Full Stack Web App where user with create role can write blogs",
        techstack: ["Next.js", "Tailwind", "Mongodb", "OAuth"],
        thumbnailUrl: imgCodebhaiya,
        githubUrl: "https://github.com/abhinayjangde/codebhaiya",
        liveLink: "https://codebhaiya.com",
    },
    {
        id: 2,
        title: "PeerTodo",
        description: "Organize Your Life with Smart Todos - FullStack Todo App",
        techstack: ["Nodejs", "Express", "Tailwind", "Mongodb"],
        thumbnailUrl: imgPeertodo,
        githubUrl: "https://github.com/abhinayjangde/peer-todo",
        liveLink: "https://todo.codebhaiya.com",
    },
    {
        id: 3,
        title: "Capstone",
        description: "This AI resume roast - complete backend build with FastAPI and OpenAI API",
        techstack: ["FastAPI", "Mongodb", "Docker", "Valkey"],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/capstone",
        liveLink: "/",
    },
];

export default function RecentWorks() {
    return (
        <section className="my-4 container">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none border-b-1 border-b-gray-200">
                recent works
            </h2>
            <div className="space-y-4">
                {recentProject.map((project) => (
                    <div
                        className="flex flex-col md:flex-row border rounded-lg overflow-hidden"
                        key={project.id}
                    >
                        <div className="relative w-full md:w-60 h-48 md:h-auto">
                            <Image
                                src={project.thumbnailUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center flex-1 p-4 space-y-2">
                            <h2 className="text-xl md:text-2xl font-semibold">
                                {project.title}
                            </h2>
                            <p className="text-base md:text-xl text-gray-600">
                                {project.description}
                            </p>
                            <div className="flex flex-row flex-wrap gap-2">
                                {project.techstack.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="border border-gray-200 rounded-2xl px-2 py-1 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex md:flex-col justify-center md:justify-evenly p-4 md:p-6 space-x-4 md:space-x-0 md:space-y-4">
                            <Link 
                                href={project.githubUrl}
                                target="_blank"
                                className="text-center border border-gray-400 bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-lg transition-colors"
                            >
                                GitHub
                            </Link>
                            <Link 
                                href={project.liveLink}
                                target="_blank"
                                className="text-center border border-gray-400 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg transition-colors"
                            >
                                Live
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
