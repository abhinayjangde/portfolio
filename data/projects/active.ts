
import { IProjects } from "@/types/Projects";

/**
 * Active projects - Currently maintained and deployed
 */
export const activeProjects: IProjects[] = [
  {
    id: 9,
    slug: "chocotimes",
    title: "Chocotimes",
    description:
      "A modern application for chocolate enthusiasts to discover and track their favorite chocolate products",
    longDescription: `ChocoTimes is a platform dedicated to chocolate lovers. Discover, review, and share your favorite chocolate products with a vibrant community.

## Key Features
- Browse chocolate product catalog
- Rate and review products
- User profiles and preferences
- Community recommendations
- Search and filter functionality`,
    features: [
      "Product discovery",
      "Rating and reviews",
      "User profiles",
      "Responsive design",
      "Community engagement",
    ],
    techstack: ["Next.js", "Tailwind", "TypeScript", "Node.js"],
    thumbnailUrl:
      "/chocotimes.jpg",
    githubUrl: "https://github.com/abhinayjangde/chocotimes",
    githubRepo: "abhinayjangde/chocotimes",
    liveLink: "https://choco.abhinayjangde.dev",
    isWorking: true,
  },
];
