// Reusable technology stacks to avoid duplication
export const TECH_STACKS = {
  NEXTJS_FULLSTACK: ["Next.js", "Tailwind", "MongoDB", "Node.js"],
  NEXTJS_GRAPHQL: [
    "Next.js",
    "Tailwind",
    "GraphQL",
    "Apollo",
    "Prisma",
    "PostgreSQL",
  ],
  NODEJS_EXPRESS: ["Node.js", "Express", "Tailwind", "MongoDB"],
  FASTAPI_PYTHON: ["FastAPI", "MongoDB", "Docker", "Valkey"],
  AI_INTEGRATION: ["Node.js", "NodeCache", "Express.js", "Groq API", "Tavily"],
} as const;

export type TechStackKey = keyof typeof TECH_STACKS;
