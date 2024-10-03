import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext/LanguageContext'

export const LanguageChanger = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <button onClick={changeLanguage}>Cambiar Idioma</button>
    )
}
