/**
 * Main project data export
 * Organized into active and inactive projects for better maintainability
 * 
 * Usage:
 * - getActiveProjects() - Projects currently maintained
 * - getInactiveProjects() - Archived/learning projects
 * - getAllProjects() - All projects combined
 * - getProjectBySlug(slug) - Find specific project
 * - getFeaturedProjects(limit) - Get featured projects
 * - getProjectsByTechstack(tech) - Filter by technology
 */

export {
  activeProjects,
  inactiveProjects,
  allProjects,
  getActiveProjects,
  getInactiveProjects,
  getAllProjects,
  getProjectBySlug,
  getProjectsByTechstack,
  getFeaturedProjects,
} from "./projects";

// Backwards compatibility - export as 'projects'
export { allProjects as projects } from "./projects";