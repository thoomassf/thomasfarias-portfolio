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
	/** Format: "YYYY-MM" */
	startDate: string;
	/** Format: "YYYY-MM", or null when the role is the current one */
	endDate: string | null;
	description: BilingualString;
	bullets: BilingualStringArray;
	concurrent: boolean;
}

export type EducationStatus = "in_progress" | "completed";

export interface EducationEntry {
	id: string;
	institution: string;
	degree: BilingualString;
	course: BilingualString;
	/** Format: "YYYY-MM" */
	startDate: string;
	/** Format: "YYYY-MM" — expected end date while the program is in progress */
	endDate: string;
	status: EducationStatus;
	description: BilingualString;
	topics: string[];
}
