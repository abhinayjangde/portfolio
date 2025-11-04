import ProjectsWithFilter from "@/components/ProjectsWithFilter";
import imgCodebhaiya from "@/public/codebhaiya.png";
import imgPeertodo from "@/public/peertodo.png";
import imgCapstone from "@/public/capstone.png";
import imgCodelayer from "@/public/codelayer.png";

import { IProjects } from "@/app/types/Projects";

const projects: IProjects[] = [
    {
        id: 4,
        title: "CodeLayer",
        description: "Full Stack Leetcode Clone with AI Help Assistant",
        techstack: ["Next.js", "PrismaORM", "PostgreSQL", "Judge0", "Docker"],
        thumbnailUrl: imgCodelayer,
        githubUrl: "https://github.com/abhinayjangde/codelayer",
        liveLink: "/",
        isWorking: true,
    },
    {
        id: 1,
        title: "CodeBhaiya",
        description:
            "Full Stack Web App where user with creater role can write blogs",
        techstack: ["Next.js", "Tailwind", "Mongodb", "OAuth"],
        thumbnailUrl: imgCodebhaiya,
        githubUrl: "https://github.com/abhinayjangde/codebhaiya",
        liveLink: "https://codebhaiya.com",
        isWorking: false,
    },
    {
        id: 2,
        title: "PeerTodo",
        description: "Organize Your Life with Smart Todos - FullStack Todo App",
        techstack: ["Nodejs", "Express", "Tailwind", "Mongodb"],
        thumbnailUrl: imgPeertodo,
        githubUrl: "https://github.com/abhinayjangde/peer-todo",
        liveLink: "https://todo.codebhaiya.com",
        isWorking: false,
    },
    {
        id: 3,
        title: "Crastone",
        description:
            "This AI resume roast - complete backend build with FastAPI and OpenAI API",
        techstack: ["FastAPI", "Mongodb", "Docker", "Valkey"],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/crastone",
        liveLink: "/",
        isWorking: false,
    },
];

export default function Projects() {
    return (
        <div className="p-2">
            <ProjectsWithFilter projects={projects} title="all projects" />
        </div>
    );
}
