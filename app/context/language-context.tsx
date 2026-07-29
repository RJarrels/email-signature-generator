"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations } from "@/app/scripts/language";

interface LanguageContextValue {
	language: Language;
	setLanguage: (lang: Language) => void;
	locale: typeof translations["en-us"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("en-us");

	// load saved language, falling back to the browser's language
	useEffect(() => {
		const saved = localStorage.getItem("language") as Language | null;
		if (saved && translations[saved]) {
			setLanguage(saved);
			return;
		}
		const browserLang = navigator.language.toLowerCase() as Language;
		if (translations[browserLang]) {
			setLanguage(browserLang);
		}
	}, []);

	// persist language
	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage, locale: translations[language] }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const ctx = useContext(LanguageContext);
	if (!ctx) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return ctx;
}
