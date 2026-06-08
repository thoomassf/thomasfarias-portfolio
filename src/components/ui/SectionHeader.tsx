import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
	label: string;
	title: string;
	subtitle: string;
	centered?: boolean;
}

export function SectionHeader({
	label,
	title,
	subtitle,
	centered = false,
}: SectionHeaderProps) {
	return (
		<ScrollReveal className={`mb-[60px]${centered ? " text-center" : ""}`}>
			<span className="font-mono text-xs text-text-3 uppercase block mb-3">
				{label}
			</span>
			<h2 className="section-title">{title}</h2>
			<p className={`section-sub${centered ? " mx-auto" : ""}`}>{subtitle}</p>
		</ScrollReveal>
	);
}
