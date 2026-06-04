export type Lang = "pt" | "en";

export interface BilingualString {
	pt: string;
	en: string;
}

export interface BilingualStringArray {
	pt: string[];
	en: string[];
}

export interface CompanyProject {
	id: string;
	name: string;
	company: string;
	description: BilingualString;
	highlights: BilingualStringArray;
	stack: string[];
	link: string | null;
}

export interface GitHubRepo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	language: string | null;
	topics: string[];
	fork: boolean;
}

export interface TimelineEntry {
	company: string;
	role: BilingualString;
	period: string;
	duration: BilingualString;
	description: BilingualString;
	bullets: BilingualStringArray;
	current: boolean;
	concurrent: boolean;
}
