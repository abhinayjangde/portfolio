import ProjectsSkillPage from "@/components/ProjectsSkillPage";
import imgCodebhaiya from "@/public/codebhaiya.png";
import imgPeertodo from "@/public/peertodo.png";
import imgCapstone from "@/public/capstone.png";
import imgCodelayer from "@/public/codelayer.png";
import imgSpread from "@/public/spread.png";

import { IProjects } from "@/app/types/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Abhinay Jangde",
    description:
        "Explore my portfolio of full-stack applications, AI-powered tools, and open-source projects built with Next.js, Node.js, and more.",
};

const projects: IProjects[] = [
    {
        id: 7,
        title: "Spread",
        description:
            "A social media platform like Twitter with real-time updates, GraphQL API, and OAuth authentication",
        techstack: [
            "Next.js",
            "Tailwind",
            "GraphQL",
            "OAuth",
            "Prisma",
            "PostgreSQL",
            "Apollo",
            "Node.js",
        ],
        thumbnailUrl: imgSpread,
        githubUrl: "https://github.com/abhinayjangde/spread",
        liveLink: "https://spread.codebhaiya.com",
        isWorking: true,
    },
    {
        id: 5,
        title: "AbhiGPT",
        description:
            "ChatGPT clone with web search functionality, context memory, and API rate limiting",
        techstack: [
            "Node.js",
            "NodeCache",
            "Express.js",
            "Groq API",
            "Tavily",
            "TypeScript",
            "Tailwind",
        ],
        thumbnailUrl:
            "https://drive.google.com/uc?id=1H3yEfRhlvOzT45pPtJxHSeT_mdwNxTpd",
        githubUrl: "https://github.com/abhinayjangde/abhigpt",
        liveLink: "https://chat.codebhaiya.com",
        isWorking: false,
    },
    {
        id: 4,
        title: "CodeLayer",
        description:
            "Full-stack LeetCode clone with AI help assistant and code execution",
        techstack: ["Next.js", "Prisma", "PostgreSQL", "Judge0", "Docker"],
        thumbnailUrl: imgCodelayer,
        githubUrl: "https://github.com/abhinayjangde/codelayer",
        liveLink: "/",
        isWorking: false,
    },
    {
        id: 1,
        title: "CodeBhaiya",
        description:
            "Full-stack web app where users with creator role can write and publish blogs",
        techstack: ["Next.js", "Tailwind", "MongoDB", "OAuth"],
        thumbnailUrl: imgCodebhaiya,
        githubUrl: "https://github.com/abhinayjangde/codebhaiya",
        liveLink: "https://codebhaiya.com",
        isWorking: true,
    },
    {
        id: 2,
        title: "PeerTodo",
        description:
            "Organize your life with smart todos — a full-stack todo application",
        techstack: ["Node.js", "Express", "Tailwind", "MongoDB"],
        thumbnailUrl: imgPeertodo,
        githubUrl: "https://github.com/abhinayjangde/peer-todo",
        liveLink: "https://todo.codebhaiya.com",
        isWorking: false,
    },
    {
        id: 3,
        title: "Crastone",
        description:
            "AI resume roast — backend built with FastAPI and OpenAI API with Redis caching",
        techstack: ["FastAPI", "MongoDB", "Docker", "Valkey"],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/crastone",
        liveLink: "/",
        isWorking: false,
    },
    {
        id: 6,
        title: "URL Shortener",
        description:
            "Full-stack URL shortener with Redis caching for improved performance",
        techstack: [
            "Express",
            "TypeScript",
            "MongoDB",
            "Docker",
            "Redis",
        ],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/url-shortener",
        liveLink: "/",
        isWorking: false,
    },
];

export default function Projects() {
    return (
        <main className="min-h-screen">
            <ProjectsSkillPage projects={projects} />
        </main>
    );
}

