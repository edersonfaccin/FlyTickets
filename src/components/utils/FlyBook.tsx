import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontSize } from '../../util/Common'
import { IFlight } from '../../util/Interfaces';

const FlyBook = (props: IFlight) => {

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewDates}>
                <View style={styles.viewColumn}>
                    <Icon
                        name="airplane-takeoff"
                        size={25}
                        color={Colors.white}
                    />
                    <Text style={styles.textDates}>{props.start}</Text>
                </View>
                <View style={styles.viewColumn}>
                    <Icon
                        name="airplane-landing"
                        size={25}
                        color={Colors.white}
                    />
                    <Text style={styles.textDates}>{props.end}</Text>
                </View>
            </View>
            <View style={styles.viewDates}>
                <View style={styles.viewColumn}>
                    <Text style={styles.textSecondary}>{props.connections}</Text>
                </View>
                <View style={styles.viewColumn}>
                    <Text style={styles.textSecondary}>{props.duration}</Text>
                </View>
            </View>
            <View style={styles.viewValue}>
                <Text style={styles.textValue}>{props.value}</Text>
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