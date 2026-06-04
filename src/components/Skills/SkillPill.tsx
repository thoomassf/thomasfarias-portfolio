import { motion } from "framer-motion";

interface SkillPillProps {
	skill: string;
	index: number;
	inView: boolean;
}

export function SkillPill({ skill, index, inView }: SkillPillProps) {
	return (
		<motion.span
			initial={{ opacity: 0, scale: 0.92 }}
			animate={inView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
			className="font-mono text-[12.5px] font-medium text-text bg-white/4 border border-border-light py-1.75 px-3.5 rounded-lg cursor-default inline-block transition-[border-color,color] duration-200 hover:border-accent hover:text-accent"
		>
			{skill}
		</motion.span>
	);
}
