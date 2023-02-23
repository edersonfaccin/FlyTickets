import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Default from '../../styles/Default'
import Colors from '../../styles/Colors'
import { fontSize, mountSelectedDatesObject, translate } from '../../util/Common'
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars'
import { format } from 'date-fns'
import ButtonAccept from '../buttons/ButtonAccept'

interface IInputCalendar {
    label: string
}

const InputCalendar = (props: IInputCalendar) => {

    const atualDate : Date = new Date()

    const [ dates, setDates ] = useState<Date[]>([])
    const [ showCalendarModal, setShowCalendarModal ] = useState<boolean>(false)
    const [ selectedDates, setSelectedDates ] = useState<any>()
    const [ loading, setLoading ] = useState<boolean>(false)

    const onOpenCalendar = () => {
        setShowCalendarModal(true)
    }

    const onSave = () => {
        //TODO
        setShowCalendarModal(false)
    }

    const renderModalCalendar = () => {

        const onDayPress = (day: number, month: number, year: number) => {
            let atualDates: Date[] = dates

            let idx: number = dates.findIndex((x: Date) => x.getDate() === day && x.getMonth() === month && x.getFullYear() === year)

            if(idx === -1){
                if(atualDates.length === 4){
                    Alert.alert(translate('information'), translate('limitDateSelected'))
                    return
                }

                atualDates.push(new Date(year, month, day))
            }else{
                atualDates.splice(idx, 1)
            }
            
            setLoading(true)
            setDates(atualDates)
            setSelectedDates(mountSelectedDatesObject(atualDates))
            setLoading(false)
        }

        return (
            <Modal
                onBackdropPress={() => setShowCalendarModal(false)}
                isVisible={showCalendarModal}
                style={styles.modal}>
                <Calendar
                    style={{ borderRadius: 10 }}
                    initialDate={format(atualDate, 'yyyy-MM-dd')}
                    minDate={format(atualDate, 'yyyy-MM-dd')}
                    onDayPress={dateSelected => {
                        const { day, month, year } = dateSelected

                        onDayPress(day, month-1, year)
                    }}
                    monthFormat={'MMMM yyyy'}
                    firstDay={1}
                    markingType={'period'}
                    markedDates={selectedDates}
                />
                <ButtonAccept onPress={onSave} title={translate('confirm')}/>
            </Modal>
        )
    }

    return (
        <TouchableOpacity onPress={onOpenCalendar} style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.slotDates}>
                <View style={styles.slotDateItem}>
                    <Icon
                        name='calendar-alt'
                        size={fontSize(8)}
                        color={Colors.background}
                    />
                </View>
                <View style={styles.slotDateItem}>
                    <Text>1</Text>
                </View>
                <View style={styles.slotDateItem}>
                    <Text>2</Text>
                </View>
                <View style={styles.slotDateItem}>
                    <Text>3</Text>
                </View>
                <View style={styles.slotDateItem}>
                    <Text>4</Text>
                </View>

                { renderModalCalendar() }
            </View>
        </TouchableOpacity>
    )
}

export default InputCalendar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4
    },
    label: {
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: fontSize(4),
        color: Colors.darkBlue,
        textAlign: 'center'
    },
    slotDates: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    slotDateItem: {
        flex: 1,
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        marginVertical: 100,
        marginHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: Colors.lightBlue
    }
})