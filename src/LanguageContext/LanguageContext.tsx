import { createContext, useState } from "react";

type LanguageContextType = {
    language: string,
    changeLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextType>({
    language: "English",
    changeLanguage: () => { }
})

type LanguageContextProviderProps = {
    children: React.ReactNode;
};

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
    const [language, setLanguage] = useState("English");

    const changeLanguage = () => {
        setLanguage(language === "English" ? "Spanish" : "English");

    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}