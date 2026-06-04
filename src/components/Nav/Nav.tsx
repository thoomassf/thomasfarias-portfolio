import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const GITHUB_URL = "https://github.com/thoomassf";

function SunIcon() {
	return (
		<svg
			aria-hidden="true"
			width="15"
			height="15"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			aria-hidden="true"
			width="15"
			height="15"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

export function Nav() {
	const { t, i18n } = useTranslation();
	const { theme, toggleTheme } = useTheme();
	const active = useScrollSpy();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const isLight = theme === "light";

	const links = [
		{ id: "projetos", href: "#projetos", label: t("nav.projects") },
		{ id: "experiencia", href: "#experiencia", label: t("nav.experience") },
		{ id: "skills", href: "#skills", label: t("nav.skills") },
		{ id: "contato", href: "#contato", label: t("nav.contact") },
	];

	const toggleLang = () => {
		const next = i18n.language === "pt" ? "en" : "pt";
		i18n.changeLanguage(next);
		try {
			localStorage.setItem("pf-lang", next);
		} catch {}
	};

	return (
		<nav
			className={`fixed inset-x-0 top-0 z-100 h-15 flex items-center px-10 max-[700px]:px-4 transition-[background,border-color] duration-300 border-b ${
				scrolled
					? `backdrop-blur-[20px] border-border ${isLight ? "bg-[rgba(243,243,248,0.90)]" : "bg-[rgba(8,8,16,0.88)]"}`
					: "bg-transparent border-transparent"
			}`}
		>
			{/* Logo */}
			<a
				href="#home"
				className="font-mono text-[15px] font-semibold tracking-[-0.02em] text-text"
			>
				<span className="text-text-3">&lt;</span>
				<span className="text-accent">thomas</span>
				<span className="text-text-3">/&gt;</span>
			</a>

			<div className="flex-1" />

			{/* Nav links */}
			<div className="flex items-center gap-7 mr-6 max-[700px]:hidden">
				{links.map((l) => {
					const isActive = active === l.id;
					return (
						<a
							key={l.href}
							href={l.href}
							className={`text-sm font-medium tracking-[-0.01em] transition-colors duration-200 relative pb-1 ${
								isActive ? "text-text" : "text-text-2"
							}`}
						>
							{l.label}
							<AnimatePresence>
								{isActive && (
									<motion.span
										layoutId="nav-underline"
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-[1px]"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									/>
								)}
							</AnimatePresence>
						</a>
					);
				})}
			</div>

			{/* Controls */}
			<div className="flex items-center gap-2">
				{/* Theme toggle */}
				<motion.button
					type="button"
					onClick={toggleTheme}
					title={isLight ? "Dark mode" : "Light mode"}
					whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }}
					className="size-8.5 flex items-center justify-center bg-transparent border border-border rounded-lg text-text-2 cursor-pointer shrink-0"
				>
					{isLight ? <MoonIcon /> : <SunIcon />}
				</motion.button>

				{/* Language toggle */}
				<div className="flex rounded-lg overflow-hidden border border-border shrink-0">
					{(["pt", "en"] as const).map((l) => (
						<button
							key={l}
							type="button"
							onClick={() => i18n.language !== l && toggleLang()}
							className={`px-3.25 h-8.5 font-mono text-[11px] font-bold tracking-[0.06em] uppercase border-0 cursor-pointer transition-all duration-200 ${
								i18n.language === l
									? "bg-accent text-white"
									: "bg-transparent text-text-2"
							}`}
						>
							{l}
						</button>
					))}
				</div>

				{/* GitHub */}
				<motion.a
					href={GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ y: -1, background: "rgba(99,102,241,0.18)" }}
					className="font-mono text-xs font-semibold text-accent bg-accent-dim border border-accent/22 py-1.75 px-4 rounded-lg tracking-[0.01em] shrink-0"
				>
					GitHub ↗
				</motion.a>
			</div>
		</nav>
	);
}
