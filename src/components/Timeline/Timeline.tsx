import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../ui/SectionHeader";
import { TimelineEntry } from "./TimelineEntry";
import { TIMELINE } from "../../data/timeline";

export function Timeline() {
	const { t } = useTranslation();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section
			id="experiencia"
			className="section"
			style={{ background: "rgba(255,255,255,0.012)" }}
		>
			<div className="wrap">
				<SectionHeader
					label={t("timeline.label")}
					title={t("timeline.title")}
					subtitle={t("timeline.subtitle")}
				/>

				<div ref={ref} style={{ position: "relative" }}>
					<div
						style={{
							position: "absolute",
							left: "19px",
							top: "8px",
							bottom: "8px",
							width: "1px",
							background:
								"linear-gradient(to bottom, var(--accent), var(--border) 60%, transparent)",
						}}
					/>

					<div className="flex flex-col mt-10">
						{TIMELINE.map((entry, i) => (
							<TimelineEntry
								key={`${entry.company}-${i}`}
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
