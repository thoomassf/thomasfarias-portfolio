import type { EducationEntry } from "../types";

export const EDUCATION: EducationEntry[] = [
	{
		id: "fiap-mle",
		institution: "FIAP",
		degree: { pt: "Pós-graduação", en: "Postgraduate degree" },
		course: {
			pt: "Machine Learning Engineering",
			en: "Machine Learning Engineering",
		},
		startDate: "2026-10",
		endDate: "2027-09",
		status: "in_progress",
		description: {
			pt: "Especialização em engenharia de Machine Learning: do desenvolvimento de modelos ao deploy e operação em produção.",
			en: "Specialization in Machine Learning engineering: from model development to deployment and operation in production.",
		},
		// TODO: ajustar à grade real do curso
		topics: [
			"Python",
			"MLOps",
			"Deep Learning",
			"NLP",
			"Cloud",
			"Data Pipelines",
		],
	},
	{
		id: "graduacao",
		institution: "Centro Universitário Senac",
		degree: { pt: "Graduação", en: "Bachelor's degree" },
		course: { pt: "Sistemas de Informação", en: "Information Systems" },
		startDate: "2020-02",
		endDate: "2023-12",
		status: "completed",
		description: {
			pt: "Graduado em Sistemas de Informação, com foco em desenvolvimento de software.",
			en: "Graduated in Information Systems, with a focus on software development.",
		},
		topics: [],
	},
	{
		id: "tecnico",
		institution: "Etec Abdias do Nascimento",
		degree: { pt: "Técnico", en: "Technical degree" },
		course: { pt: "Informática", en: "Computer Science" },
		startDate: "2016-02",
		endDate: "2018-12",
		status: "completed",
		description: {
			pt: "Curso técnico em Informática, com foco em desenvolvimento de software.",
			en: "Technical course in Computer Science, with a focus on software development.",
		},
		topics: [],
	},
];
