import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactCardData {
	key: "linkedin" | "github" | "whatsapp";
	icon: string;
	handle: string;
	href: string;
	accentColor: string;
	accentDim: string;
}

interface ContactCardProps {
	card: ContactCardData;
}

export function ContactCard({ card }: ContactCardProps) {
	const { t } = useTranslation();
	const [hovered, setHovered] = useState(false);

	return (
		<motion.a
			href={card.href}
			target="_blank"
			rel="noopener noreferrer"
			className="card flex flex-col gap-4 transition-[border-color,box-shadow] duration-250"
			whileHover={{ y: -3 }}
			transition={{ type: "spring", stiffness: 400, damping: 25 }}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			style={{
				borderColor: hovered ? card.accentColor : undefined,
				boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.25)" : undefined,
			}}
		>
			<motion.div
				animate={{ scale: hovered ? 1.08 : 1 }}
				transition={{ duration: 0.2 }}
				className="size-11 rounded-xl flex items-center justify-center text-[20px]"
				style={{
					background: card.accentDim,
					border: `1px solid ${card.accentColor}33`,
				}}
			>
				{card.icon}
			</motion.div>

			<div>
				<div className="text-base font-bold tracking-tight mb-1">
					{t(`contact.cards.${card.key}.label`)}
				</div>
				<div
					className="font-mono text-xs mb-2"
					style={{ color: card.accentColor }}
				>
					{card.handle}
				</div>
				<div className="text-sm text-text-2 leading-[1.6]">
					{t(`contact.cards.${card.key}.desc`)}
				</div>
			</div>

			<div
				className="mt-auto font-mono text-xs transition-colors duration-200"
				style={{ color: hovered ? card.accentColor : "var(--text-3)" }}
			>
				{t("contact.access")}
			</div>
		</motion.a>
	);
}
