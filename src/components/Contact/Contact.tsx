import { useTranslation } from "react-i18next";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ContactCard } from "./ContactCard";

// TODO: Update with your personal contact info
const CONTACT_INFO = {
	// TODO: Update email
	email: "thomas@email.com",
	linkedin: {
		handle: "/in/thomas-silva-de-farias",
		href: "https://linkedin.com/in/thomas-silva-de-farias",
	},
	github: {
		// TODO: confirm GitHub username
		handle: "/thomasfarias19",
		href: "https://github.com/thomasfarias19",
	},
	whatsapp: {
		// TODO: add your phone number
		handle: "+55 (XX) X XXXX-XXXX",
		href: "https://wa.me/5500000000000",
	},
};

const CARDS = [
	{
		key: "linkedin" as const,
		icon: "💼",
		handle: CONTACT_INFO.linkedin.handle,
		href: CONTACT_INFO.linkedin.href,
		accentColor: "#0a66c2",
		accentDim: "rgba(10,102,194,0.1)",
	},
	{
		key: "github" as const,
		icon: "⌥",
		handle: CONTACT_INFO.github.handle,
		href: CONTACT_INFO.github.href,
		accentColor: "var(--accent)",
		accentDim: "var(--accent-dim)",
	},
	{
		key: "whatsapp" as const,
		icon: "◎",
		handle: CONTACT_INFO.whatsapp.handle,
		href: CONTACT_INFO.whatsapp.href,
		accentColor: "#25d366",
		accentDim: "rgba(37,211,102,0.1)",
	},
];

export function Contact() {
	const { t } = useTranslation();

	return (
		<section id="contato" className="section">
			<div className="wrap">
				<SectionHeader
					label={t("contact.label")}
					title={t("contact.title")}
					subtitle={t("contact.subtitle")}
					centered
				/>

				{/* Contact cards */}
				<ScrollReveal delay={0.1}>
					<div className="grid grid-cols-3 gap-4 max-[768px]:grid-cols-1">
						{CARDS.map((card) => (
							<ContactCard key={card.key} card={card} />
						))}
					</div>
				</ScrollReveal>

				{/* Email CTA */}
				<ScrollReveal delay={0.25}>
					<div className="mt-12 p-8 bg-[linear-gradient(135deg,rgba(99,102,241,0.08)_0%,rgba(99,102,241,0.03)_100%)] border border-accent/18 rounded-2xl flex items-center justify-between flex-wrap gap-5">
						<div>
							<div className="text-[1.05rem] font-semibold tracking-tight mb-1.5">
								{t("contact.preferEmail")}
							</div>
							<div className="text-[0.9rem] text-text-2">
								{t("contact.emailReply")}
							</div>
						</div>
						<a
							href={`mailto:${CONTACT_INFO.email}`}
							className="btn-primary shrink-0"
						>
							{t("contact.sendEmail")}
						</a>
					</div>
				</ScrollReveal>
			</div>

			{/* Footer */}
			<div className="mt-20 pt-6 wrap">
				<div className="divider mb-7" />
				<div className="flex justify-between items-center flex-wrap gap-3">
					<span className="font-mono text-[13px] text-text-3">
						<span className="text-text-3">&lt;</span>
						<span className="text-accent">thomas</span>
						<span className="text-text-3">/&gt;</span>
					</span>
					<span className="font-mono text-[11px] text-text-3">
						© 2026 Thomas Silva de Farias
					</span>
				</div>
			</div>
			<div className="h-10" />
		</section>
	);
}
