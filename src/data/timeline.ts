import type { TimelineEntry } from "../types";

export const TIMELINE: TimelineEntry[] = [
	{
		company: "Magazine Luiza",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		period: "Jul 2025 – Jun 2026",
		duration: { pt: "11 meses", en: "11 months" },
		description: {
			pt: "Engenharia de produto em uma das maiores plataformas de e-commerce do Brasil.",
			en: "Product engineering at one of Brazil's largest e-commerce platforms.",
		},
		bullets: {
			pt: ["Uma das maiores plataformas de e-commerce do Brasil"],
			en: ["One of Brazil's largest e-commerce platforms"],
		},
		current: true,
		concurrent: false,
	},
	{
		company: "Sempre IT",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		period: "Jun 2024 – Jul 2025",
		duration: { pt: "1 ano e 1 mês", en: "1 year 1 month" },
		description: {
			pt: "Produto RedWolf AI — plataforma low code de automação de testes com IA, reativada e adotada pela CVC.",
			en: "RedWolf AI — low code AI test automation platform, reactivated and adopted by CVC.",
		},
		bullets: {
			pt: [
				"Front-end com Next.js + TypeScript",
				"Back-end Django/Python para APIs",
				"Azure DevOps com GitFlow",
				"Entrega ágil com squad dedicado",
			],
			en: [
				"Front-end with Next.js + TypeScript",
				"Django/Python back-end for APIs",
				"Azure DevOps with GitFlow",
				"Agile delivery with dedicated squad",
			],
		},
		current: false,
		concurrent: true,
	},
	{
		company: "TEAjudo Healthtech",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		period: "Jul 2024 – Jul 2025",
		duration: { pt: "1 ano", en: "1 year" },
		description: {
			pt: "Responsabilidade full stack desde o MVP até a maturidade, com produto em contratos com Unimeds.",
			en: "Full stack ownership from MVP to market maturity, with product under health cooperative contracts.",
		},
		bullets: {
			pt: [
				"Next.js/TypeScript + Django/Python",
				"AWS (EC2, S3, IAM) + Pulumi IaC",
				"CI/CD com GitHub Actions",
				"Testes com Vitest e Cypress",
			],
			en: [
				"Next.js/TypeScript + Django/Python",
				"AWS (EC2, S3, IAM) + Pulumi IaC",
				"CI/CD with GitHub Actions",
				"Testing with Vitest and Cypress",
			],
		},
		current: false,
		concurrent: true,
	},
	{
		company: "Grupo Unimed SC",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		period: "Set 2022 – Mai 2024",
		duration: { pt: "1 ano e 8 meses", en: "1 year 8 months" },
		description: {
			pt: "Desenvolvimento de sistemas internos e plataformas de saúde para uma das maiores cooperativas médicas do Brasil.",
			en: "Development of internal systems and healthcare platforms for one of Brazil's largest medical cooperatives.",
		},
		bullets: {
			pt: [
				"Desenvolvimento front-end e back-end de sistemas internos",
				"Times ágeis e entrega contínua",
			],
			en: [
				"Front-end and back-end development of internal systems",
				"Agile teams and continuous delivery",
			],
		},
		current: false,
		concurrent: false,
	},
];
