import { useTranslation } from "react-i18next";
import { SectionHeader } from "../ui/SectionHeader";
import { CompanyCard } from "./CompanyCard";
// import { GitHubCard } from "./GitHubCard";
import { COMPANY_PROJECTS } from "../../data/companyProjects";
// import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import { GITHUB_URL } from "@/constants";

// function SkeletonCard() {
// 	return (
// 		<div className="card flex flex-col gap-3 min-h-30">
// 			<div className="h-4 bg-border-light rounded-md w-3/5 animate-pulse" />
// 			<div className="h-3 bg-border rounded-md w-[90%] animate-pulse [animation-delay:0.1s]" />
// 			<div className="h-3 bg-border rounded-md w-3/4 animate-pulse [animation-delay:0.2s]" />
// 		</div>
// 	);
// }

export function Projects() {
	const { t } = useTranslation();
	// const { repos, loading, error } = useGitHubRepos();

	return (
		<section id="projetos" className="">
			<div>
				<SectionHeader
					label={t("projects.label")}
					title={t("projects.title")}
					subtitle={t("projects.subtitle")}
				/>

				<div className="mb-18">
					<div className="flex items-center gap-3 mb-7">
						<span className="font-mono text-xs text-text-3 uppercase">
							{t("projects.sectionCompanies")}
						</span>
						<div className="section-divider-line" />
					</div>
					<div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
						{COMPANY_PROJECTS.map((p, i) => (
							<CompanyCard key={p.id} project={p} delay={i * 0.1} />
						))}
					</div>
				</div>

				<div>
					<div className="flex items-center gap-3 mb-7">
						<span className="font-mono text-xs text-text-3 uppercase">
							{t("projects.sectionGithub")}
						</span>
						<div className="flex-1 h-px bg-border" />
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="font-mono text-xs text-accent bg-accent-dim border border-accent/18 py-1 px-3 rounded-md transition-colors duration-200 shrink-0"
						>
							{t("projects.viewAll")}
						</a>
					</div>

					{/* {error && (
						<p className="font-mono text-xs text-text-3 mb-4">{error}</p>
					)}

					<div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
						{loading
							? Array.from({ length: 3 }).map((_, i) => (
									<SkeletonCard key={i} />
								))
							: repos.map((repo, i) => (
									<GitHubCard key={repo.id} repo={repo} delay={i * 0.08} />
								))}
					</div> */}
				</div>
			</div>
		</section>
	);
}
