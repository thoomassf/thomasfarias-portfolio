import type { TimelineEntry } from "../types";

export const TIMELINE: TimelineEntry[] = [
	{
		company: "Luby",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		startDate: "2026-06",
		endDate: null,
		description: {
			pt: "Desenvolvimento de plataforma de microsserviços em Go num domínio financeiro, com arquitetura serverless event-driven na AWS.",
			en: "Development of a Go microservices platform in a financial domain, with an event-driven serverless architecture on AWS.",
		},
		bullets: {
			pt: [
				"Desenvolvimento de plataforma de microsserviços em Go (Clean Architecture, Echo, sqlc/PostgreSQL, Redis, wire) num domínio financeiro.",
				"Arquitetura serverless event-driven na AWS (Lambda, SNS, SQS, DynamoDB, S3, Secrets Manager, API Gateway, Cognito, EKS, KMS, ECR, CloudFront) com Terraform e LocalStack.",
				"Implementação de observabilidade com OpenTelemetry (traces/metrics/logs, exporters OTLP, métricas customizadas) integrada a Grafana, Jaeger, Loki, Mimir e Elastic APM.",
				"Frontends em Next.js 15/React e React 19/Vite com TypeScript, TanStack Query, Zustand, Tailwind e testes automatizados.",
				"CI/CD com GitHub Actions, Docker multi-stage, Helm/Kubernetes, SonarQube e boas práticas de engenharia (Conventional Commits, hooks, lint, testes property-based).",
			],
			en: [
				"Development of a Go microservices platform (Clean Architecture, Echo, sqlc/PostgreSQL, Redis, wire) in a financial domain.",
				"Event-driven serverless architecture on AWS (Lambda, SNS, SQS, DynamoDB, S3, Secrets Manager, API Gateway, Cognito, EKS, KMS, ECR, CloudFront) with Terraform and LocalStack.",
				"Implementation of observability with OpenTelemetry (traces/metrics/logs, OTLP exporters, custom metrics) integrated with Grafana, Jaeger, Loki, Mimir, and Elastic APM.",
				"Frontends in Next.js 15/React and React 19/Vite with TypeScript, TanStack Query, Zustand, Tailwind, and automated testing.",
				"CI/CD with GitHub Actions, multi-stage Docker, Helm/Kubernetes, SonarQube, and engineering best practices (Conventional Commits, hooks, lint, property-based testing).",
			],
		},
		concurrent: false,
	},
	{
		company: "Magazine Luiza",
		role: { pt: "Desenvolvedor FullStack Pleno", en: "FullStack Developer" },
		startDate: "2025-07",
		endDate: "2026-06",
		description: {
			pt: "Atuação na vertical de logistíca do Magalu Entregas",
			en: "Product engineering at one of Brazil's largest e-commerce platforms.",
		},
		bullets: {
			pt: [
				"Desenvolvimento de novas funcionalidades e sustentação de micro frontends em React de sistemas diversos (stacks recentes) e projetos legados Next.js 12, garantindo entregas contínuas com ownership da task até o deploy em produção.",
				"Participação ativa no desenvolvimento do VAPT (entrega rápida em até 2 horas), novo microserviço de logística construído em Django/Python, contribuindo na modelagem de domínio e implementação de endpoints REST.",
				"Manutenção de serviços em Java com o framework Quarkus, atuando em um ambiente polilíngua com múltiplos microserviços.",
				"Gestão de pipelines de CI/CD no GitLab, sendo responsável direto pelo deploy em ambiente produtivo e garantindo a estabilidade e integridade dos sistemas.",
				"Trabalho com Docker para containerização de aplicações, sempre com foco em escalabilidade e performance.",
			],
			en: [
				"Development of new features and maintenance of React micro frontends across various systems (modern stacks) and legacy Next.js 12 projects, ensuring continuous deliveries with full task ownership through production deployment.",
				"Active participation in the development of VAPT (rapid delivery within 2 hours), a new logistics microservice built with Django/Python, contributing to domain modeling and REST endpoint implementation.",
				"Maintenance of Java services using the Quarkus framework, operating in a polyglot environment with multiple microservices.",
				"Management of CI/CD pipelines in GitLab, acting as the direct owner of production deployments and ensuring system stability and integrity.",
				"Working with Docker for application containerization, always focused on scalability and performance.",
			],
		},
		concurrent: false,
	},
	{
		company: "Sempre IT",
		role: {
			pt: "Analista de Desenvolvimento Pleno",
			en: "Full Developer Analysis",
		},
		startDate: "2024-06",
		endDate: "2025-07",
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
				"Next.js + TypeScript front-end",
				"Django/Python back-end for APIs",
				"Azure DevOps with GitFlow",
				"Agile delivery with a dedicated squad",
			],
		},
		concurrent: true,
	},
	{
		company: "TEAjudo Healthtech",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		startDate: "2024-07",
		endDate: "2025-07",
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
		concurrent: true,
	},
	{
		company: "Grupo Unimed SC",
		role: { pt: "Desenvolvedor FullStack", en: "FullStack Developer" },
		startDate: "2022-09",
		endDate: "2024-05",
		description: {
			pt: "Desenvolvimento de sistemas internos e plataformas de saúde para uma das maiores cooperativas médicas do Brasil.",
			en: "Development of internal systems and healthcare platforms for one of Brazil's largest medical cooperatives.",
		},
		bullets: {
			pt: [
				"Criação de interfaces SPA com React.js, Next.js, TypeScript, Tailwind CSS e Styled-Components, com foco em performance e UX/UI.",
				"Desenvolvimento de scripts Python para RPA com Automation Edge e Power Automate, reduzindo em 40% o tempo de processos manuais.",
				"Atuação em squads Scrum com Git/GitHub para versionamento e CI/CD.",
			],
			en: [
				"Development of SPA interfaces with React.js, Next.js, TypeScript, Tailwind CSS, and Styled-Components, focused on performance and UX/UI.",
				"Development of Python scripts for RPA using Automation Edge and Power Automate, reducing manual process time by 40%.",
				"Working in Scrum squads with Git/GitHub for version control and CI/CD.",
			],
		},
		concurrent: false,
	},
];
