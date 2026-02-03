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

export const projects: IProjects[] = [
    {
        id: 7,
        slug: "spread",
        title: "Spread",
        description:
            "A social media platform like Twitter with real-time updates, GraphQL API, and OAuth authentication",
        longDescription: `Spread is a full-featured social media platform inspired by Twitter/X. It features real-time updates using GraphQL subscriptions, a modern UI built with Next.js and Tailwind CSS, and secure authentication via OAuth.

## Key Features
- Real-time feed updates with GraphQL subscriptions
- Tweet, retweet, and like functionality
- User profiles with follower/following system
- Image uploads and media support
- Dark/Light theme support`,
        features: [
            "Real-time GraphQL API",
            "OAuth authentication",
            "Prisma ORM with PostgreSQL",
            "Apollo Client & Server",
            "Responsive design",
        ],
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
        githubRepo: "abhinayjangde/spread",
        liveLink: "https://spread.codebhaiya.com",
        isWorking: true,
    },
    {
        id: 5,
        slug: "abhigpt",
        title: "AbhiGPT",
        description:
            "ChatGPT clone with web search functionality, context memory, and API rate limiting",
        longDescription: `AbhiGPT is an AI chatbot that combines the power of large language models with real-time web search. It uses Groq API for fast inference and Tavily for web search, providing accurate and up-to-date responses.

## Key Features
- Real-time web search integration
- Context memory for conversation continuity
- API rate limiting with NodeCache
- Streaming responses for better UX`,
        features: [
            "Web search with Tavily",
            "Groq API for fast LLM inference",
            "NodeCache rate limiting",
            "Streaming responses",
            "TypeScript backend",
        ],
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
        githubRepo: "abhinayjangde/abhigpt",
        liveLink: "https://chat.codebhaiya.com",
        isWorking: false,
    },
    {
        id: 4,
        slug: "codelayer",
        title: "CodeLayer",
        description:
            "Full-stack LeetCode clone with AI help assistant and code execution",
        longDescription: `CodeLayer is a coding practice platform similar to LeetCode. It features a built-in code editor, real-time code execution using Judge0, and an AI assistant to help with problem-solving.

## Key Features
- Monaco code editor with syntax highlighting
- Real-time code execution via Judge0
- AI-powered hints and explanations
- Problem difficulty levels and categories
- User progress tracking`,
        features: [
            "Judge0 code execution",
            "AI help assistant",
            "Monaco code editor",
            "Docker containerization",
            "PostgreSQL with Prisma",
        ],
        techstack: ["Next.js", "Prisma", "PostgreSQL", "Judge0", "Docker"],
        thumbnailUrl: imgCodelayer,
        githubUrl: "https://github.com/abhinayjangde/codelayer",
        githubRepo: "abhinayjangde/codelayer",
        liveLink: "/",
        isWorking: false,
    },
    {
        id: 1,
        slug: "codebhaiya",
        title: "CodeBhaiya",
        description:
            "Full-stack web app where users with creator role can write and publish blogs",
        longDescription: `CodeBhaiya is a blogging platform designed for developers. Creators can write and publish technical articles with rich markdown support, while readers can explore content by categories and topics.

## Key Features
- Rich markdown editor with preview
- Role-based access (Reader, Creator, Admin)
- OAuth authentication with multiple providers
- SEO-optimized blog pages
- Categories and tag system`,
        features: [
            "Markdown blog editor",
            "OAuth authentication",
            "Role-based access control",
            "SEO optimization",
            "MongoDB database",
        ],
        techstack: ["Next.js", "Tailwind", "MongoDB", "OAuth"],
        thumbnailUrl: imgCodebhaiya,
        githubUrl: "https://github.com/abhinayjangde/codebhaiya",
        githubRepo: "abhinayjangde/codebhaiya",
        liveLink: "https://codebhaiya.com",
        isWorking: true,
    },
    {
        id: 2,
        slug: "peertodo",
        title: "PeerTodo",
        description:
            "Organize your life with smart todos — a full-stack todo application",
        longDescription: `PeerTodo is a modern task management application that helps you organize your daily tasks. It features a clean UI, priority levels, and smart categorization.

## Key Features
- Create, edit, and delete todos
- Priority levels and due dates
- Category organization
- Responsive mobile-first design`,
        features: [
            "CRUD operations",
            "Priority levels",
            "Category system",
            "Express.js backend",
            "MongoDB storage",
        ],
        techstack: ["Node.js", "Express", "Tailwind", "MongoDB"],
        thumbnailUrl: imgPeertodo,
        githubUrl: "https://github.com/abhinayjangde/peer-todo",
        githubRepo: "abhinayjangde/peer-todo",
        liveLink: "https://todo.codebhaiya.com",
        isWorking: false,
    },
    {
        id: 3,
        slug: "crastone",
        title: "Crastone",
        description:
            "AI resume roast — backend built with FastAPI and OpenAI API with Redis caching",
        longDescription: `Crastone is a fun AI-powered tool that "roasts" your resume. Upload your resume and get humorous yet insightful feedback powered by OpenAI's GPT models.

## Key Features
- Resume PDF parsing
- AI-powered roast generation
- Redis caching for performance
- FastAPI async backend`,
        features: [
            "Resume PDF parsing",
            "OpenAI API integration",
            "Redis/Valkey caching",
            "FastAPI backend",
            "Docker deployment",
        ],
        techstack: ["FastAPI", "MongoDB", "Docker", "Valkey"],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/crastone",
        githubRepo: "abhinayjangde/crastone",
        liveLink: "/",
        isWorking: false,
    },
    {
        id: 6,
        slug: "url-shortener",
        title: "URL Shortener",
        description:
            "Full-stack URL shortener with Redis caching for improved performance",
        longDescription: `A high-performance URL shortener service with Redis caching. Create short links, track click analytics, and manage your URLs through a clean dashboard.

## Key Features
- Custom short URL generation
- Click analytics tracking
- Redis caching for fast redirects
- TypeScript backend`,
        features: [
            "Short URL generation",
            "Click analytics",
            "Redis caching",
            "Express.js API",
            "Docker deployment",
        ],
        techstack: [
            "Express",
            "TypeScript",
            "MongoDB",
            "Docker",
            "Redis",
        ],
        thumbnailUrl: imgCapstone,
        githubUrl: "https://github.com/abhinayjangde/url-shortener",
        githubRepo: "abhinayjangde/url-shortener",
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
