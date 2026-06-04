import { useState, useEffect } from "react";

const SECTIONS = [
	"home",
	"projetos",
	"experiencia",
	"skills",
	"contato",
] as const;
type SectionId = (typeof SECTIONS)[number];

export function useScrollSpy(): SectionId {
	const [active, setActive] = useState<SectionId>("home");

	useEffect(() => {
		const onScroll = () => {
			for (let i = SECTIONS.length - 1; i >= 0; i--) {
				const el = document.getElementById(SECTIONS[i]);
				if (el && el.getBoundingClientRect().top <= 120) {
					setActive(SECTIONS[i]);
					return;
				}
			}
			setActive("home");
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return active;
}
