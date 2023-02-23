import { StyleSheet, Dimensions } from 'react-native'
import { fontSize } from '../util/Common'
import Colors from './Colors'

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    input: {
        color: Colors.background, 
        fontSize: fontSize(0),
        height: 48
    },
    containerError: { 
        color: Colors.red, 
        fontSize: fontSize(-4)
    }
})