import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Terminal } from "./Terminal";

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.17, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" as const },
	},
};

export function Hero() {
	const { t } = useTranslation();

	return (
		<section id="home" className="min-h-screen flex items-center relative">
			<div className="w-full pt-20 px-10 pb-15 max-[768px]:pt-25 max-[768px]:px-5">
				<div className="grid grid-cols-2 gap-20 items-center w-full max-[900px]:grid-cols-1 max-[900px]:gap-11">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.div variants={itemVariants}>
							<div className="inline-flex items-center gap-2 font-mono text-xs text-green bg-green/7 border border-green/18 py-1.25 px-3.5 rounded-full mb-7">
								<span className="size-1.5 rounded-full bg-green shadow-[0_0_7px_var(--color-green)] shrink-0" />
								{t("hero.available")}
							</div>
						</motion.div>

						<motion.div className="flex gap-6 items-center mb-4">
							<motion.img
								src="https://github.com/thoomassf.png"
								width={200}
								className="rounded-full border-4 border-accent"
							/>

							<motion.h1
								variants={itemVariants}
								className="text-[clamp(2.5rem,4.8vw,4rem)] font-bold tracking-[-0.04em] leading-[1.04] mb-5"
							>
								Thomas Silva
								<br />
								<span className="text-text-2">de Farias</span>
							</motion.h1>
						</motion.div>

						<motion.p
							variants={itemVariants}
							className="text-[1.05rem] text-text-2 leading-[1.78] mb-10 max-w-92.5"
						>
							{t("hero.description")}
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex gap-3 flex-wrap"
						>
							<a href="#projetos" className="btn-primary">
								{t("hero.cta1")}
							</a>
							<a href="#contato" className="btn-ghost">
								{t("hero.cta2")}
							</a>
						</motion.div>
					</motion.div>

					{/* Right column — terminal */}
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.22, duration: 0.7, ease: "easeOut" }}
						className="flex justify-center"
					>
						<Terminal />
					</motion.div>
				</div>
			</div>

			{/* Scroll cue */}
			<div className="absolute bottom-7 left-1/2 -translate-x-1/2">
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
					className="flex flex-col items-center gap-1.5 font-mono text-[11px] text-text-3"
				>
					<span>scroll</span>
					<div className="w-px h-7 bg-linear-to-b from-text-3 to-transparent" />
				</motion.div>
			</div>
		</section>
	);
}
