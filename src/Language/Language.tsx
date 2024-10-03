import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext/LanguageContext'

export const Language = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <p>{language === "English" ? "Your current language is " : "Tu lenguaje actual es "} {language}</p>
    )
}
