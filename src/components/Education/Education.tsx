import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { EDUCATION } from "../../data/education";
import { SectionHeader } from "../ui/SectionHeader";
import { EducationItem } from "./EducationItem";

export function Education() {
	const { t } = useTranslation();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section id="formacao" className="section">
			<div className="wrap">
				<SectionHeader
					label={t("education.label")}
					title={t("education.title")}
					subtitle={t("education.subtitle")}
				/>

				<div ref={ref} className="relative">
					{/* Vertical line */}
					<div
						className="absolute left-4.75 top-8 bottom-8 w-px"
						style={{
							background:
								"linear-gradient(to bottom, var(--accent), var(--border) 60%, transparent)",
						}}
					/>

					<div className="flex flex-col mt-10">
						{EDUCATION.map((entry, i) => (
							<EducationItem
								key={entry.id}
								entry={entry}
								index={i}
								inView={inView}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
