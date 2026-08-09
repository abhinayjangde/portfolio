import { IProjects } from "@/types/Projects";

// Re-export project lists
export { activeProjects } from "./active";
export { inactiveProjects } from "./inactive";

import { activeProjects } from "./active";
import { inactiveProjects } from "./inactive";

/**
 * All projects combined (active + inactive)
 * Active projects are prioritized first for featured sections
 */
export const allProjects: IProjects[] = [...activeProjects, ...inactiveProjects];

/**
 * Utility functions for project filtering
 */
export const getActiveProjects = () => activeProjects;
export const getInactiveProjects = () => inactiveProjects;
export const getAllProjects = () => allProjects;

export const getProjectBySlug = (slug: string) =>
  allProjects.find((p) => p.slug === slug);

export const getProjectsByTechstack = (tech: string) =>
  allProjects.filter((p) => p.techstack.includes(tech));

export const getFeaturedProjects = (limit: number = 3) =>
  activeProjects.slice(0, limit);
