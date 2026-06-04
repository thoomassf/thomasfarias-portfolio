import type { CompanyProject } from "../types";

export const COMPANY_PROJECTS: CompanyProject[] = [
	{
		id: "redwolf",
		name: "RedWolf AI",
		company: "Sempre IT",
		description: {
			pt: "Plataforma low code de automação de testes via Inteligência Artificial, reativada após 2 anos parada.",
			en: "Low code platform for AI-powered test automation, reactivated after 2 years on hold.",
		},
		highlights: {
			pt: [
				"80% de aceleração na construção e execução de testes",
				"Adotado pela CVC após 6 meses de desenvolvimento",
				"Squad do zero: front-end Next.js + back-end Django/Python",
			],
			en: [
				"80% acceleration in test construction and execution",
				"Adopted by CVC after 6 months of development",
				"Squad from scratch: Next.js front-end + Django/Python back-end",
			],
		},
		stack: [
			"Next.js",
			"TypeScript",
			"Django",
			"Python",
			"Azure DevOps",
			"GitFlow",
		],
		link: null,
	},
	{
		id: "teajudo",
		name: "TEAjudo",
		company: "TEAjudo Healthtech",
		description: {
			pt: "Startup de gestão da linha de cuidado para TEA (Transtorno do Espectro Autista) — do MVP ao mercado.",
			en: "ASD care management startup — from MVP to market, contracted by major health cooperatives.",
		},
		highlights: {
			pt: [
				"Contratos firmados com Unimeds de MG e SC",
				"Infraestrutura AWS completa com Pulumi (IaC)",
				"CI/CD automatizado com GitHub Actions",
			],
			en: [
				"Contracts signed with Unimed health cooperatives in MG and SC",
				"Complete AWS infrastructure with Pulumi (IaC)",
				"Automated CI/CD pipelines with GitHub Actions",
			],
		},
		stack: [
			"Next.js",
			"TypeScript",
			"Django",
			"AWS",
			"Pulumi",
			"Cypress",
			"Vitest",
		],
		link: "https://teajudo.tech",
	},
];
