import Achievements from "@/components/Achievements";
import RecentWorks from "@/components/RecentWorks";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import WhoAmI from "@/components/WhoAmI";
import imgCodebhaiya from "@/public/codebhaiya.png";
import imgPeertodo from "@/public/peertodo.png";
import imgCapstone from "@/public/capstone.png"
import { IProjects } from "./types/Projects";

const recentProject: IProjects[] = [
    {
        id: 1,
        title: "CodeBhaiya",
        description: "Full Stack Web App where user with creater role can write blogs",
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
        title: "Crastone",
        description: "This AI resume roast - complete backend build with FastAPI and OpenAI API",
        techstack: ["FastAPI", "Mongodb", "Docker", "Valkey"],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/crastone",
        liveLink: "/",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-8 space-y-16">
                <WhoAmI/>
                <Socials/>
                <Skills/>
                <RecentWorks projects={recentProject} title={"recent works"}/>
                <Achievements/>
            </div>
        </main>
    );
}
