import React from 'react'
import { ImageBackground, View, StyleSheet, Dimensions, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import InputCalendar from '../components/inputs/InputCalendar'
import Colors from '../styles/Colors'
import Default from '../styles/Default'
import { fontSize, translate } from '../util/Common'
import { IStore } from '../util/Interfaces'

const SearchTickets = (props) => {

    return (
        <View style={styles.viewData}>
            <Text style={styles.greetingText}>{translate("wellcome", { name: props.name })}</Text>

            <View style={styles.calendar}>
                <InputCalendar label={translate('outbound')}/>
                <InputCalendar label={translate('return')}/>
            </View>

        </View>
    )
}

export default connect((store: IStore) => ({ 
    name: store.name
}))(SearchTickets)

const styles = StyleSheet.create({
    viewData: {
        flex: 1
    },
    greetingText: {
        fontSize: fontSize(4),
        color: Colors.darkBlue,
        textAlign: 'center',
        fontWeight: '600'
    },
    calendar: {
        flexDirection: 'row'
    }
})