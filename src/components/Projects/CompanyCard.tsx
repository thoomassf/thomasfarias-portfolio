import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { CompanyProject, Lang } from "../../types";

interface CompanyCardProps {
	project: CompanyProject;
	delay?: number;
}

export function CompanyCard({ project, delay = 0 }: CompanyCardProps) {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as Lang;

	return (
		<motion.div
			className="card card-accent flex flex-col"
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.65, delay, ease: "easeOut" }}
			whileHover={{ y: -3 }}
		>
			<div className="flex justify-between items-start mb-4 gap-3">
				<div>
					<div className="font-mono text-[11px] text-text-3 mb-1.5">
						{project.company}
					</div>
					<h3 className="text-[1.3rem] font-bold tracking-[-0.03em] leading-[1.2]">
						{project.name}
					</h3>
				</div>
				{project.link ? (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center font-mono text-[11px] text-accent bg-accent-dim border border-accent/20 py-1.25 px-3 rounded-lg shrink-0 transition-colors duration-200"
					>
						{t("projects.site")}
					</a>
				) : (
					<span className="font-mono text-[11px] text-text-3 bg-white/3 border border-border py-1.25 px-3 rounded-lg shrink-0">
						{t("projects.private")}
					</span>
				)}
			</div>

			<p className="text-[0.92rem] text-text-2 leading-[1.72] mb-4.5">
				{project.description[lang]}
			</p>

			<ul className="list-none flex flex-col gap-1.75 mb-5 flex-1">
				{project.highlights[lang].map((h) => (
					<li
						key={h}
						className="flex gap-2.5 text-[0.88rem] text-text-2 leading-normal"
					>
						<span className="text-green shrink-0 mt-px">✓</span>
						<span>{h}</span>
					</li>
				))}
			</ul>

			<div className="flex flex-wrap gap-1.5 mt-auto">
				{project.stack.map((tag) => (
					<span key={tag} className="tag">
						{tag}
					</span>
				))}
			</div>
		</motion.div>
	);
}
