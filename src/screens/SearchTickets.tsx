import React, { useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import InputCalendar from '../components/inputs/InputCalendar'
import FlyBook from '../components/utils/FlyBook'
import Colors from '../styles/Colors'
import { checkDatesConflit, fontSize, translate } from '../util/Common'
import { IFlight, IStore } from '../util/Interfaces'
import ButtonStart from '../components/buttons/ButtonStart'
import { getFlights } from '../data/api'

const SearchTickets = (props) => {

    const [ selectedDatesStart, setSelectedDatesStart ] = useState<Date[]>([])
    const [ selectedDatesEnd, setSelectedDatesEnd ] = useState<Date[]>([])
    const [ selectedCityOrigin, setSelectedCityOrigin ] = useState<string>()
    const [ selectedCityDestination, setSelectedCityDestination ] = useState<string>()

    const [ listFlights, setListFlights ] = useState<IFlight[] | any[]>([])

    const onSearchTickets = () => {
        if(!selectedCityOrigin){
            alert(translate('originRequired'))
            return
        }

        if(!selectedCityDestination){
            alert(translate('destinationRequired'))
            return
        }

        if(!checkDatesConflit(selectedDatesStart, selectedDatesEnd)){
            alert(translate('conflitDatesOriginAndDestination'))
            return
        }

        let auxFlights = getFlights(selectedDatesStart, selectedDatesEnd, selectedCityOrigin!, selectedCityDestination!)
        setListFlights(auxFlights!)
    }

    const renderItem = (item) => {
        return (
            <FlyBook 
                start={item.start} 
                end={item.end} 
                connections={item.connections} 
                duration={item.duration} 
                value={item.value} 
            />
        )
    }

    return (
        <View style={styles.viewData}>
            <Text style={styles.greetingText}>{translate("wellcome", { name: props.name })}</Text>

            <View style={styles.calendar}>
                <InputCalendar 
                    label={translate('outbound')}
                    onSelectedDates={setSelectedDatesStart}
                    onSelectedCity={setSelectedCityOrigin}
                />
                <InputCalendar 
                    label={translate('return')}
                    onSelectedDates={setSelectedDatesEnd}
                    onSelectedCity={setSelectedCityDestination}
                />
            </View>

            <ButtonStart 
                title={translate('searchTickets')} 
                onPress={onSearchTickets}
            />

            <FlatList
                data={listFlights}
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