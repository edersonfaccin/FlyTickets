import memoize from "lodash.memoize"
import i18n from "i18n-js"
import { Dimensions } from "react-native"

export const translate = memoize((key: any, config?: any) => 
    i18n.t(key, config), (key, config) => (config ? key + JSON.stringify(config) : key)
)

export const fontSize = (size: number) => {
    var width = Dimensions.get('screen').width

    if (width <= 320) {
      return 13 + size
    }

    return 16 + size
}