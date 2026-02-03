import { projects } from "../page";
import { getRepoStats } from "@/lib/github";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Abhinay Jangde`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Fetch GitHub stats
    const githubStats = await getRepoStats(project.githubRepo);

    return (
        <main className="min-h-screen">
            <ProjectDetailPage project={project} githubStats={githubStats} />
        </main>
    );
}
