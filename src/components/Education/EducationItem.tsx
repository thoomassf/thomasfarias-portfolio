import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { EducationEntry, Lang } from "../../types";
import { formatPeriod } from "../../utils/timelineDate";

interface EducationItemProps {
	entry: EducationEntry;
	index: number;
	inView: boolean;
}

export function EducationItem({ entry, index, inView }: EducationItemProps) {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as Lang;
	const inProgress = entry.status === "in_progress";

	return (
		<motion.div
			initial={{ opacity: 0, y: 22 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 0.65,
				delay: Math.min(index * 0.12, 0.5),
				ease: "easeOut",
			}}
			className="flex gap-7 pb-10 last:pb-0 max-[540px]:gap-4"
		>
			{/* Dot */}
			<div className="shrink-0 w-10 flex flex-col items-center">
				<div
					className={`size-3.5 rounded-full mt-6 shrink-0 ${
						inProgress
							? "bg-accent border-[3px] border-accent/30 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
							: "bg-green border-2 border-green/30"
					}`}
				/>
			</div>

			{/* Content card */}
			<div className="flex-1 min-w-0 bg-card border border-border rounded-[14px] py-5 px-6 max-[540px]:px-4">
				<div className="flex flex-wrap gap-2.5 items-start justify-between">
					<div>
						<div className="flex items-center gap-2.5 mb-1 flex-wrap">
							<h3 className="text-[1.05rem] font-bold tracking-tight">
								{entry.course[lang]}
							</h3>
							{inProgress ? (
								<span className="font-mono text-[10px] font-semibold text-accent bg-accent-dim border border-accent/25 py-0.5 px-2.25 rounded-full">
									{t("education.inProgress")}
								</span>
							) : (
								<span className="font-mono text-[10px] font-semibold text-green bg-green/10 border border-green/25 py-0.5 px-2.25 rounded-full">
									{t("education.completed")}
								</span>
							)}
						</div>
						<div className="text-[0.9rem] text-text-2 tracking-[-0.01em]">
							{entry.degree[lang]} · {entry.institution}
						</div>
					</div>

					<div className="font-mono text-xs text-text-3 shrink-0">
						{formatPeriod(entry.startDate, entry.endDate, lang)}
						{inProgress && ` (${t("education.expected")})`}
					</div>
				</div>

				<p className="mt-3.5 pt-3.5 border-t border-border text-[0.9rem] text-text-2 leading-[1.72]">
					{entry.description[lang]}
				</p>

				{entry.topics.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mt-3.5">
						{entry.topics.map((topic) => (
							<span key={topic} className="tag">
								{topic}
							</span>
						))}
					</div>
				)}
			</div>
		</motion.div>
	);
}
