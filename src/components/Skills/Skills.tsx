import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SKILL_ICONS, SKILLS } from "../../data/skills";
import { SectionHeader } from "../ui/SectionHeader";
import { SkillPill } from "./SkillPill";

export function Skills() {
	const { t } = useTranslation();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-50px" });
	const categories = Object.keys(SKILLS);
	const [activeTab, setActiveTab] = useState(categories[0]);

	return (
		<section id="skills" className="section">
			<div className="wrap">
				<SectionHeader
					label={t("skills.label")}
					title={t("skills.title")}
					subtitle={t("skills.subtitle")}
				/>

				{/* Tab nav */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 22 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
					className="flex flex-wrap gap-2 mb-8"
				>
					{categories.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => setActiveTab(cat)}
							className={`font-mono text-xs font-medium py-2 px-4 rounded-lg border cursor-pointer transition-all duration-180 flex items-center gap-1.75 ${
								activeTab === cat
									? "border-accent/35 bg-accent-dim text-accent"
									: "border-border bg-transparent text-text-2"
							}`}
						>
							<span>{SKILL_ICONS[cat] ?? "·"}</span>
							{cat}
						</button>
					))}
				</motion.div>

				{/* Active category panel */}
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
					className="bg-card border border-border rounded-2xl p-8"
				>
					<div className="flex items-center gap-2.5 mb-6">
						<span className="text-accent text-[18px]">
							{SKILL_ICONS[activeTab]}
						</span>
						<span className="font-mono text-[13px] text-text-2 font-medium">
							{activeTab}
						</span>
						<span className="ml-auto font-mono text-[11px] text-text-3">
							{SKILLS[activeTab].length} {t("skills.items")}
						</span>
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.2 }}
							className="flex flex-wrap gap-2.5"
						>
							{SKILLS[activeTab].map((skill, i) => (
								<SkillPill
									key={skill}
									skill={skill}
									index={i}
									inView={inView}
								/>
							))}
						</motion.div>
					</AnimatePresence>
				</motion.div>

				{/* Overview grid */}
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
					className="mt-5"
				>
					<div className="grid grid-cols-5 gap-2.5 max-[900px]:grid-cols-3 max-[540px]:grid-cols-2">
						{categories.map((cat) => (
							<button
								key={cat}
								type="button"
								onClick={() => setActiveTab(cat)}
								className={`rounded-[10px] py-3.5 px-4 cursor-pointer transition-all duration-180 text-left border ${
									activeTab === cat
										? "bg-accent-dim border-accent/25"
										: "bg-white/2 border-border"
								}`}
							>
								<div className="font-mono text-[10px] text-text-3 mb-1 tracking-[0.06em]">
									{SKILL_ICONS[cat]} {SKILLS[cat].length} itens
								</div>
								<div
									className={`text-xs font-semibold ${activeTab === cat ? "text-accent" : "text-text-2"}`}
								>
									{cat}
								</div>
							</button>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
