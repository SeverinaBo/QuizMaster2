import i18n from "i18next";
import {initReactI18next} from "react-i18next";


const translationLt = {qName: "Vardas", qPassw: "Slaptažodis"};

const translationEn = {qName: "Name", qPassw: "Password"};

i18n.use(initReactI18next).init({
        resources: {
            en: {translation: translationEn},
            lt: {translation: translationLt}
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {escapeValue: false}
    })

export {i18n};