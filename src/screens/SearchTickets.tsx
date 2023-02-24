import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import InputCalendar from '../components/inputs/InputCalendar'
import FlyBook from '../components/utils/FlyBook'
import Colors from '../styles/Colors'
import { fontSize, translate } from '../util/Common'
import { IStore } from '../util/Interfaces'

const SearchTickets = (props) => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

    const renderItem = (item) => {
        return (
            <FlyBook />
        )
    }

    return (
        <View style={styles.viewData}>
            <Text style={styles.greetingText}>{translate("wellcome", { name: props.name })}</Text>

            <View style={styles.calendar}>
                <InputCalendar label={translate('outbound')}/>
                <InputCalendar label={translate('return')}/>
            </View>

            <FlatList
                data={DATA}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={item => item.id}
            />
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