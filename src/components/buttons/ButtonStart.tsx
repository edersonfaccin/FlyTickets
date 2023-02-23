import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../styles/Colors';

interface IButtonStart {
    title: string
    onPress: () => void
}

const ButtonStart = (props: IButtonStart) => {
    
    return (
        <Button
            icon={
                <Icon
                    name="airplane-takeoff"
                    size={15}
                    color={Colors.background}
                />
            }
            title={props.title}
            onPress={props.onPress}
            titleStyle={styles.title}
        />
    )
}

export default ButtonStart

const styles = StyleSheet.create({
    title: {
        color: Colors.background
    }
})