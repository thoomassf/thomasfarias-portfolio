import type { CompanyProject } from "../types";

export const COMPANY_PROJECTS: CompanyProject[] = [
	{
		id: "redwolf",
		name: "RedWolf AI",
		company: "Sempre IT",
		description: {
			pt: "Plataforma low code de automação de testes via Inteligência Artificial, reativada após 2 anos parada.",
			en: "Low-code test automation platform powered by Artificial Intelligence, reactivated after 2 years of inactivity",
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
			"React Query",
			"TypeScript",
			"Django",
			"Python",
			"Azure DevOps",
			"GitFlow",
		],
		link: "https://redwolfai.com.br/",
	},
	{
		id: "teajudo",
		name: "TEAjudo",
		company: "TEAjudo Healthtech",
		description: {
			pt: "Startup de gestão da linha de cuidado para TEA (Transtorno do Espectro Autista) — do MVP ao mercado.",
			en: "Healthtech startup focused on care pathway management for ASD (Autism Spectrum Disorder) — from MVP to market.",
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
			"React Query",
			"TailwindCSS",
			"TypeScript",
			"Django",
			"AWS",
			"Pulumi",
			"Cypress",
			"Vitest",
		],
		link: "https://teajudo.tech",
	},
	{
		id: "freelancer",
		name: "CRM Integrity",
		company: "Freelancer",
		description: {
			pt: "Plataforma de CRM de funil de vendas para corretores de plano de saúde",
			en: "Sales funnel CRM platform for health insurance brokers.",
		},
		highlights: {
			pt: [
				"Arquitetura SaaS Multi-tenant",
				"Front-end React + back-end: Node.js",
				"Infraestrutura na AWS",
				"CI/CD automatizado com GitHub Actions",
			],
			en: [
				"Multi-tenant SaaS Architecture",
				"React front-end + back-end: Node.js",
				"AWS Infrastructure",
				"Automated CI/CD with GitHub Actions",
			],
		},
		stack: [
			"React.js",
			"React Router",
			"React Query",
			"Node.js",
			"Fastify",
			"Zod",
			"TailwindCss",
			"Vitest",
			"AWS",
			"Github Actions",
			"Docker",
			"PostgreSQL",
		],
		link: null,
	},
];
