import { I18nextProvider } from "react-i18next";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Hero } from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Timeline } from "./components/Timeline/Timeline";
import { ThemeProvider } from "./contexts/ThemeContext";
import i18n from "./i18n/index";

export function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<ThemeProvider>
				<Nav />
				<main className="max-w-400 mx-auto">
					<Hero />
					<Projects />
					<Timeline />
					<Skills />
					<Education />
					<Contact />
				</main>
			</ThemeProvider>
		</I18nextProvider>
	);
}
