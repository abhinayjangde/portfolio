import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";
import imgCodebhaiya from "@/public/codebhaiya.png";
import imgPeertodo from "@/public/peertodo.png";
import imgCapstone from "@/public/capstone.png";
import imgSpread from "@/public/spread.png";
import { IProjects } from "./types/Projects";
import FeaturedProjects from "@/components/FeaturedProjects";

const recentProject: IProjects[] = [
    {
        id: 0,
        slug: "spread",
        title: "Spread",
        description: "Spread - A Social Media Platform like Twitter",
        techstack: [
            "Next.js",
            "Tailwind",
            "GraphQL",
            "OAuth",
            "Prisma",
            "PostgreSQL",
            "Apollo",
            "Nodejs",
        ],
        thumbnailUrl: imgSpread,
        githubUrl: "https://github.com/abhinayjangde/spread",
        githubRepo: "abhinayjangde/spread",
        liveLink: "https://spread.codebhaiya.com",
    },
    {
        id: 1,
        slug: "codebhaiya",
        title: "CodeBhaiya",
        description:
            "Full Stack Web App where user with creater role can write blogs",
        techstack: [
            "Next.js",
            "Typescript",
            "Tailwind",
            "Mongodb",
            "OAuth",
            "Aceternity UI",
        ],
        thumbnailUrl: imgCodebhaiya,
        githubUrl: "https://github.com/abhinayjangde/codebhaiya",
        githubRepo: "abhinayjangde/codebhaiya",
        liveLink: "https://www.codebhaiya.com",
    },
    {
        id: 2,
        slug: "peertodo",
        title: "PeerTodo",
        description: "Organize Your Life with Smart Todos - FullStack Todo App",
        techstack: ["Nodejs", "Express", "Tailwind", "Mongodb"],
        thumbnailUrl: imgPeertodo,
        githubUrl: "https://github.com/abhinayjangde/peer-todo",
        githubRepo: "abhinayjangde/peer-todo",
        liveLink: "https://todo.codebhaiya.com",
    },
    {
        id: 3,
        slug: "crastone",
        title: "Crastone",
        description:
            "This AI resume roast - complete backend build with FastAPI and OpenAI API",
        techstack: ["FastAPI", "Mongodb", "Docker", "Valkey"],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/crastone",
        githubRepo: "abhinayjangde/crastone",
        liveLink: "https://crastone.vercel.app",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="px-4 py-8 space-y-16">
                <WhoAmI />
                <Skills />
                <FeaturedProjects
                    projects={recentProject}
                    title={"featured projects"}
                />

                <Achievements />
            </div>
        </main>
    );
}
