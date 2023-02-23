import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../styles/Colors';

interface IButtonAccept {
    title: string
    onPress: () => void
}

const ButtonAccept = (props: IButtonAccept) => {
    
    return (
        <Button
            icon={
                <Icon
                    name="check"
                    size={25}
                    color={Colors.background}
                />
            }
            title={props.title}
            onPress={props.onPress}
            titleStyle={styles.title}
        />
    )
}

export default ButtonAccept

const styles = StyleSheet.create({
    title: {
        color: Colors.background
    }
})