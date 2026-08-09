import { StaticImageData } from "next/image"


export interface IProjects {
    id: number
    slug: string
    title: string
    description: string
    longDescription?: string
    features?: string[]
    techstack: string[]
    thumbnailUrl: string | StaticImageData
    screenshots?: string[]
    videoUrl?: string
    githubUrl: string
    githubRepo: string  // Format: "owner/repo"
    liveLink: string
    isWorking?: boolean
}

export interface GitHubStats {
    stars: number
    forks: number
    watchers: number
    language: string
    topics: string[]
    description: string
    updatedAt: string
}
