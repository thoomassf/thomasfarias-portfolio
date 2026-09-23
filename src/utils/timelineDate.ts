import type { Lang } from "../types";

const MONTHS: Record<Lang, string[]> = {
	pt: [
		"Jan",
		"Fev",
		"Mar",
		"Abr",
		"Mai",
		"Jun",
		"Jul",
		"Ago",
		"Set",
		"Out",
		"Nov",
		"Dez",
	],
	en: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
};

const PRESENT: Record<Lang, string> = {
	pt: "Momento",
	en: "Present",
};

function parseYearMonth(value: string): { year: number; month: number } {
	const [year, month] = value.split("-").map(Number);
	return { year, month: month - 1 };
}

function formatYearMonth(value: string, lang: Lang): string {
	const { year, month } = parseYearMonth(value);
	return `${MONTHS[lang][month]} ${year}`;
}

/**
 * Renders the "Jun 2026 – Momento" / "Jun 2026 – Present" label for a
 * timeline entry from its start/end dates.
 */
export function formatPeriod(
	startDate: string,
	endDate: string | null,
	lang: Lang,
): string {
	const start = formatYearMonth(startDate, lang);
	const end = endDate ? formatYearMonth(endDate, lang) : PRESENT[lang];
	return `${start} – ${end}`;
}

/**
 * Total whole months between startDate (inclusive) and endDate
 * (defaults to today when null, i.e. an ongoing role).
 */
function monthsBetween(startDate: string, endDate: string | null): number {
	const start = parseYearMonth(startDate);
	const end = endDate
		? parseYearMonth(endDate)
		: { year: new Date().getFullYear(), month: new Date().getMonth() };

	const totalMonths =
		(end.year - start.year) * 12 + (end.month - start.month) + 1;

	return Math.max(totalMonths, 1);
}

/**
 * Renders "1 ano e 8 meses" / "1 year 8 months" from a timeline entry's
 * start/end dates, recomputed on every render so it never goes stale.
 */
export function formatDuration(
	startDate: string,
	endDate: string | null,
	lang: Lang,
): string {
	const totalMonths = monthsBetween(startDate, endDate);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	if (lang === "pt") {
		const yearsPart =
			years > 0 ? `${years} ${years === 1 ? "ano" : "anos"}` : "";
		const monthsPart =
			months > 0 ? `${months} ${months === 1 ? "mês" : "meses"}` : "";

		if (yearsPart && monthsPart) return `${yearsPart} e ${monthsPart}`;
		return yearsPart || monthsPart || "1 mês";
	}

	const yearsPart =
		years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
	const monthsPart =
		months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";

	if (yearsPart && monthsPart) return `${yearsPart} ${monthsPart}`;
	return yearsPart || monthsPart || "1 month";
}

/** A role is the current one when it has no end date. */
export function isCurrentRole(endDate: string | null): boolean {
	return endDate === null;
}
