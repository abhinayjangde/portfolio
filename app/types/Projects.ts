import { StaticImageData } from "next/image"


export interface IProjects {
    id: number
    title: string
    description: string
    techstack: string[]
    thumbnailUrl: string | StaticImageData,
    githubUrl: string,
    liveLink: string
    isWorking?: boolean
}
