import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";
import imgCodebhaiya from "@/public/codebhaiya.png";
import imgPeertodo from "@/public/peertodo.png"; // Placeholder for AbhiGPT
import imgCapstone from "@/public/capstone.png";
import imgSpread from "@/public/spread.png";
import { IProjects } from "./types/Projects";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

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
            "Prisma",
            "PostgreSQL",
            "AWS S3",
            "Supabase",
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
            "TypeScript",
            "Tailwind",
            "PostgreSQL",
            "Redux",
            "Digital Ocean",
        ],
        thumbnailUrl: imgCodebhaiya,
        githubUrl: "https://github.com/abhinayjangde/codebhaiya",
        githubRepo: "abhinayjangde/codebhaiya",
        liveLink: "https://www.codebhaiya.com",
    },
    {
        id: 2,
        slug: "abhigpt",
        title: "AbhiGPT",
        description: "Agentic AI chat application with tool-calling for live web search and both a browser UI and CLI interface.",
        techstack: ["Node.js", "Groq LLMs", "Tavily API", "Agentic AI"],
        thumbnailUrl: imgPeertodo, 
        githubUrl: "https://github.com/abhinayjangde/abhigpt",
        githubRepo: "abhinayjangde/abhigpt",
        liveLink: "https://github.com/abhinayjangde/abhigpt", 
    },
    {
        id: 3,
        slug: "crastone",
        title: "Crastone (AI Resume Generator)",
        description:
            "LLM-powered AI Resume Generator built with FastAPI, OpenAI API, and Redis.",
        techstack: ["FastAPI", "OpenAI API", "Redis", "MongoDB", "Docker"],
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
                <Experience />
                <Skills />
                <FeaturedProjects
                    projects={recentProject}
                    title={"featured projects"}
                />

                <Achievements />
                <Education />
            </div>
        </main>
    );
}
