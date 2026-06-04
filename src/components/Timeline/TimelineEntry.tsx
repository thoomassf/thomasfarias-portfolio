import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Lang, TimelineEntry as TimelineEntryType } from "../../types";

interface TimelineEntryProps {
	entry: TimelineEntryType;
	index: number;
	inView: boolean;
}

export function TimelineEntry({ entry, index, inView }: TimelineEntryProps) {
	const { t, i18n } = useTranslation();
	const [expanded, setExpanded] = useState(false);
	const lang = i18n.language as Lang;

	const dotBg = entry.current
		? "bg-accent"
		: entry.concurrent
			? "bg-[#a78bfa]"
			: "bg-border-light";

	const dotBorder = entry.current
		? "border-[3px] border-accent/30"
		: "border-2 border-border-light";

	const dotShadow = entry.current
		? "shadow-[0_0_12px_rgba(99,102,241,0.5)]"
		: "";

	return (
		<motion.div
			initial={{ opacity: 0, y: 22 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 0.65,
				delay: Math.min(index * 0.12, 0.5),
				ease: "easeOut",
			}}
			className="flex gap-7 pb-10"
		>
			{/* Dot */}
			<div className="shrink-0 w-10 flex flex-col items-center">
				<div
					className={`size-3.5 rounded-full mt-1.5 shrink-0 transition-all duration-300 ${dotBg} ${dotBorder} ${dotShadow}`}
				/>
			</div>

			{/* Content card */}
			<button
				type="button"
				className={`flex-1 w-full text-left rounded-[14px] cursor-pointer transition-all duration-250 border ${
					expanded
						? "bg-card border-border-light py-5 px-6"
						: "bg-transparent border-transparent p-0"
				}`}
				onClick={() => setExpanded((e) => !e)}
			>
				{/* Header row */}
				<div className="flex flex-wrap gap-2.5 items-start justify-between">
					<div>
						<div className="flex items-center gap-2.5 mb-1 flex-wrap">
							<h3 className="text-[1.05rem] font-bold tracking-tight">
								{entry.company}
							</h3>
							{entry.current && (
								<span className="font-mono text-[10px] font-semibold text-accent bg-accent-dim border border-accent/25 py-0.5 px-2.25 rounded-full">
									{t("timeline.current")}
								</span>
							)}
							{entry.concurrent && !entry.current && (
								<span className="font-mono text-[10px] font-semibold text-[#a78bfa] bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] py-0.5 px-2.25 rounded-full">
									{t("timeline.concurrent")}
								</span>
							)}
						</div>
						<div className="text-[0.9rem] text-text-2 tracking-[-0.01em]">
							{entry.role[lang]}
						</div>
					</div>

					<div className="text-right shrink-0">
						<div className="font-mono text-xs text-text-3 mb-0.5">
							{entry.period}
						</div>
						<div className="font-mono text-[11px] text-text-3 opacity-60">
							{entry.duration[lang]}
						</div>
					</div>
				</div>

				{/* Expandable body */}
				<AnimatePresence initial={false}>
					{expanded && (
						<motion.div
							key="content"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="overflow-hidden"
						>
							<div className="mt-3.5 pt-3.5 border-t border-border">
								<p className="text-[0.9rem] text-text-2 leading-[1.72] mb-3.5">
									{entry.description[lang]}
								</p>
								<ul className="list-none flex flex-col gap-1.5">
									{entry.bullets[lang].map((b) => (
										<li
											key={b}
											className="flex gap-2.5 text-sm text-text-2 leading-[1.55]"
										>
											<span className="text-accent shrink-0">→</span>
											<span>{b}</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div
					className={`${expanded ? "mt-2.5" : "mt-2"} font-mono text-[11px] text-text-3`}
				>
					{expanded ? t("timeline.close") : t("timeline.expand")}
				</div>
			</button>
		</motion.div>
	);
}
