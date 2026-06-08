import { useState, useEffect } from "react";
import axios from "axios";
import type { GitHubRepo } from "../types";

// TODO: Replace with your GitHub username
const GITHUB_USERNAME = "thoomassf";

interface UseGitHubReposReturn {
	repos: GitHubRepo[];
	loading: boolean;
	error: string | null;
}

export function useGitHubRepos(): UseGitHubReposReturn {
	const [repos, setRepos] = useState<GitHubRepo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const headers: Record<string, string> = {};
		const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}

		axios
			.get<GitHubRepo[]>(
				`https://api.github.com/users/${GITHUB_USERNAME}/repos`,
				{
					params: { sort: "updated", per_page: 12, type: "public" },
					signal: controller.signal,
					headers,
				},
			)
			.then((res) => {
				setRepos(res.data.filter((r) => !r.fork).slice(0, 6));
			})
			.catch((err: unknown) => {
				if (!axios.isCancel(err)) {
					setError("Could not load GitHub repos.");
				}
			})
			.finally(() => setLoading(false));

		return () => controller.abort();
	}, []);

	return { repos, loading, error };
}
