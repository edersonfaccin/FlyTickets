import memoize from "lodash.memoize"
import i18n from "i18n-js"
import { Dimensions } from "react-native"
import { format } from "date-fns"
import Colors from "../styles/Colors"

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

export const mountSelectedDatesObject = (dates: Date[]) => {
    let finalObject : object = {}

    for(var i = 0; i < dates.length; i++){
        var o = {};
 
        o[format(dates[i], 'yyyy-MM-dd')] = { color: Colors.darkBlue, startingDay: true, endingDay: true, textColor: Colors.white }
        
        finalObject = { ...finalObject, ...o}
    }

    return finalObject;
}