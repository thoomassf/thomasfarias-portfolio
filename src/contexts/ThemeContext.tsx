import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
	theme: "dark",
	toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		try {
			return (localStorage.getItem("pf-theme") as Theme) || "dark";
		} catch {
			return "dark";
		}
	});

	useEffect(() => {
		document.documentElement.classList.toggle("theme-light", theme === "light");
		try {
			localStorage.setItem("pf-theme", theme);
		} catch {}
	}, [theme]);

	const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
