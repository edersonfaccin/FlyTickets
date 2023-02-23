import React from 'react'
import { AppRegistry, I18nManager, LogBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/screens/App';
import * as RNLocalize from "react-native-localize"
import { translate } from './src/util/Common';
import i18n from "i18n-js"

const translationGetters = {
    // eslint-disable-next-line no-undef
    en: () => require("./src/translations/en.json"),
    // eslint-disable-next-line no-undef
    pt: () => require("./src/translations/pt.json")
}

const setI18nConfig = () => {
    const fallback = { languageTag: "en", isRTL: false }  
    const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback

    translate.cache.clear()
    I18nManager.forceRTL(isRTL)
    i18n.translations = { [languageTag]: translationGetters[languageTag]() }
    i18n.locale = languageTag
}

setI18nConfig()

function HeadlessCheck({ isHeadless }) {
    if(isHeadless){
        return null
    }

    return <App />
}

AppRegistry.registerComponent(appName, () => HeadlessCheck)

LogBox.ignoreAllLogs(true)