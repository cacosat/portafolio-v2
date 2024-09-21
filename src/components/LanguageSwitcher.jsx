import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ props }) {
    const {i18n} = useTranslation();
    const currentLng = i18n.language;

    return (
        <div className="flex gap-2">
            <button className={`hover:underline hover:font-semibold ${currentLng.slice(0, 2) === 'es' ? 'underline font-semibold' : ''}`} onClick={() => i18n.changeLanguage('es')}>Español</button>
            <button className={`hover:underline hover:font-semibold ${currentLng.slice(0, 2) === 'en' ? 'underline font-semibold' : ''}`} onClick={() => i18n.changeLanguage('en')}>English</button>
        </div>
    )
}