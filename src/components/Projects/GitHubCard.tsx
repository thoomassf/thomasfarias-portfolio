import { motion } from "framer-motion";
import type { GitHubRepo } from "../../types";

interface GitHubCardProps {
	repo: GitHubRepo;
	delay?: number;
}

export function GitHubCard({ repo, delay = 0 }: GitHubCardProps) {
	const tags = [repo.language, ...(repo.topics ?? []).slice(0, 2)].filter(
		Boolean,
	) as string[];

	return (
		<motion.a
			href={repo.html_url}
			target="_blank"
			rel="noopener noreferrer"
			className="card flex flex-col gap-2.5 cursor-pointer"
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.65, delay, ease: "easeOut" }}
			whileHover={{ y: -3 }}
		>
			<div className="flex justify-between items-start">
				<h4 className="text-[0.95rem] font-semibold tracking-[-0.02em]">
					{repo.name}
				</h4>
				<span className="text-text-3 text-sm shrink-0">↗</span>
			</div>

			{repo.description && (
				<p className="text-[0.85rem] text-text-2 leading-[1.65] flex-1">
					{repo.description}
				</p>
			)}

			{tags.length > 0 && (
				<div className="flex flex-wrap gap-1.5 mt-1">
					{tags.map((tag) => (
						<span key={tag} className="tag-muted">
							{tag}
						</span>
					))}
				</div>
			)}

			{repo.stargazers_count > 0 && (
				<div className="font-mono text-[11px] text-text-3">
					★ {repo.stargazers_count}
				</div>
			)}
		</motion.a>
	);
}
