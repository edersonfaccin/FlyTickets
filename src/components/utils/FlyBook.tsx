import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontSize } from '../../util/Common'

interface IFlyBook {
    
}

const FlyBook = (props: IFlyBook) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewDates}>
                <View style={styles.viewColumn}>
                    <Icon
                        name="airplane-takeoff"
                        size={25}
                        color={Colors.white}
                    />
                    <Text style={styles.textDates}>23/02 05:30</Text>
                </View>
                <View style={styles.viewColumn}>
                    <Icon
                        name="airplane-landing"
                        size={25}
                        color={Colors.white}
                    />
                    <Text style={styles.textDates}>25/02 15:00</Text>
                </View>
            </View>
            <View style={styles.viewDates}>
                <View style={styles.viewColumn}>
                    <Text style={styles.textSecondary}>1 conexao</Text>
                </View>
                <View style={styles.viewColumn}>
                    <Text style={styles.textSecondary}>duracao 9h 40m</Text>
                </View>
            </View>
            <View style={styles.viewValue}>
                <Text style={styles.textValue}>R$ 1.630,47</Text>
            </View>
        </View>
    )
}

export default FlyBook

const styles = StyleSheet.create({
    viewContainer: {
        width: '98%',
        backgroundColor: Colors.lightBlue,
        borderRadius: 6,
        margin: 4,
        padding: 4
    },
    viewDates: {
        flexDirection: 'row'
    },
    viewColumn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewValue: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    textDates: {
        color: Colors.white,
        fontWeight: '500',
        fontSize: fontSize(0)
    },
    textSecondary: {
        color: Colors.white,
        fontWeight: '400',
        fontSize: fontSize(-2) 
    },
    textValue: {
        color: Colors.white,
        fontWeight: '900',
        fontSize: fontSize(2) 
    }
})