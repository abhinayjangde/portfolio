import { GitHubStats } from "@/app/types/Projects";
import { env } from "@/config/env";

const GITHUB_API_BASE = "https://api.github.com";

/**
 * Fetch repository statistics from GitHub API
 * Rate limit: 60/hour unauthenticated, 5000/hour with token
 */
export async function getRepoStats(githubRepo: string): Promise<GitHubStats | null> {
    try {
        const headers: HeadersInit = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-App",
        };

        // Use GitHub token if available for higher rate limits
        if (env.githubToken) {
            headers["Authorization"] = `Bearer ${env.githubToken}`;
        }

        const response = await fetch(`${GITHUB_API_BASE}/repos/${githubRepo}`, {
            headers,
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            // 404 is expected for private repos or non-existent repos - not an error
            if (response.status !== 404) {
                console.warn(`GitHub API error for ${githubRepo}: ${response.status}`);
            }
            return null;
        }

        const data = await response.json();

        return {
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            watchers: data.watchers_count || 0,
            language: data.language || "Unknown",
            topics: data.topics || [],
            description: data.description || "",
            updatedAt: data.updated_at || "",
        };
    } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
        return null;
    }
}

/**
 * Fetch repository README content
 */
export async function getRepoReadme(githubRepo: string): Promise<string | null> {
    try {
        const headers: HeadersInit = {
            "Accept": "application/vnd.github.v3.raw",
            "User-Agent": "Portfolio-App",
        };

        if (env.githubToken) {
            headers["Authorization"] = `Bearer ${env.githubToken}`;
        }

        const response = await fetch(`${GITHUB_API_BASE}/repos/${githubRepo}/readme`, {
            headers,
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            return null;
        }

        return await response.text();
    } catch (error) {
        console.error("Failed to fetch README:", error);
        return null;
    }
}

/**
 * Format number with K suffix (e.g., 1500 -> 1.5K)
 */
export function formatNumber(num: number): string {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
}
