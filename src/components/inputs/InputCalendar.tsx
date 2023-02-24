import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../styles/Colors'
import { fontSize, mountSelectedDatesObject, translate } from '../../util/Common'
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars'
import { format } from 'date-fns'
import ButtonAccept from '../buttons/ButtonAccept'
import InputSearch from './InputSearch'

interface IInputCalendar {
    label: string,
    onSelectedDates: (val: Date[]) => void
    onSelectedCity: (val: string) => void
}

const InputCalendar = (props: IInputCalendar) => {

    const atualDate : Date = new Date()

    const [ dates, setDates ] = useState<Date[]>([])
    const [ showCalendarModal, setShowCalendarModal ] = useState<boolean>(false)
    const [ selectedDates, setSelectedDates ] = useState<any>()
    const [ city, setCity ] = useState<string>()

    const onOpenCalendar = () => {
        setShowCalendarModal(true)
    }

    const onSave = () => {
        props.onSelectedDates(dates)
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

            setDates(atualDates)
            setSelectedDates(mountSelectedDatesObject(atualDates))
        }

        return (
            <Modal
                onBackdropPress={() => setShowCalendarModal(false)}
                isVisible={showCalendarModal}>
                <View style={styles.modal}>
                    <InputSearch 
                        value={city} 
                        onChange={val => {
                            setCity(val)
                            props.onSelectedCity(val)
                        }} 
                    />

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
                    <View style={{ paddingVertical: 18 }}>
                        <ButtonAccept onPress={onSave} title={translate('confirm')}/>
                    </View>
                </View>
            </Modal>
        )
    }

    const renderDateSlot = (position: number) => {
        if(dates.length > position){
            let sorted : Date[] = dates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
            let select: Date = sorted[position]

            return format(select, 'dd/MM')
        }

        return '--/--'
    }

    return (
        <TouchableOpacity onPress={onOpenCalendar} style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.labelCity}>{city || '---'}</Text>
            <View style={styles.slotDates}>
                <View style={styles.slotDateItem}>
                    <Icon
                        name='calendar-alt'
                        size={fontSize(8)}
                        color={Colors.background}
                    />
                </View>
                <View style={styles.slotDateItem}>
                    <Text style={styles.selectedDate}>{renderDateSlot(0)}</Text>
                </View>
                <View style={styles.slotDateItem}>
                    <Text style={styles.selectedDate}>{renderDateSlot(1)}</Text>
                </View>
                <View style={styles.slotDateItem}>
                    <Text style={styles.selectedDate}>{renderDateSlot(2)}</Text>
                </View>
                <View style={styles.slotDateItem}>
                    <Text style={styles.selectedDate}>{renderDateSlot(3)}</Text>
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
    labelCity: {
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: fontSize(4),
        color: Colors.lightBlue,
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
        marginVertical: 100,
        marginHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center'
    },
    selectedDate: {
        fontSize: fontSize(-4),
        fontWeight: '600'
    }
})