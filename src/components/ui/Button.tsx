import { AnimatePresence, motion } from "framer-motion";

interface ButtonProps {
	href: string;
	title: string;
}

export function Button({ href, title }: ButtonProps) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ y: -1, background: "rgba(99,102,241,0.18)" }}
			className="font-mono text-xs font-semibold text-accent bg-accent-dim border border-accent/22 py-1.75 px-4 rounded-lg tracking-[0.01em] shrink-0"
		>
			{title}
		</motion.a>
	);
}
