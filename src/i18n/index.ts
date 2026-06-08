import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";
import i18n from "i18next";

const savedLang = (() => {
	try {
		return localStorage.getItem("pf-lang") ?? "pt";
	} catch {
		return "pt";
	}
})();

i18n.use(initReactI18next).init({
	resources: {
		pt: { translation: pt },
		en: { translation: en },
	},
	lng: savedLang,
	fallbackLng: "pt",
	interpolation: { escapeValue: false },
});

export default i18n;
