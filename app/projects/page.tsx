import { Metadata } from "next";
import ProjectsSkillPage from "@/components/ProjectsSkillPage";
import {projects} from "@/data/project-data"


export const metadata: Metadata = {
    title: "Projects | Abhinay Jangde",
    description:
        "Explore my portfolio of full-stack applications, AI-powered tools, and open-source projects built with Next.js, Node.js, and more.",
};

export default function Projects() {
    return (
        <main className="min-h-screen">
            <ProjectsSkillPage projects={projects} />
        </main>
    );
}
