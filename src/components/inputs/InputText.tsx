import React from 'react'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import Default from '../../styles/Default'
import Colors from '../../styles/Colors'
import { fontSize, translate } from '../../util/Common'

interface IInputText {
    autoFocus?: boolean
    refs?: any
    label?: string
    value: any
    maxLength?: number
    returnKeyType?: any
    onChange: (val: any) => void
    onSubmitEditing?: any
    showError?: boolean
    errorMessage?: string
    disabled?: boolean
    onBlur?: any
}

const InputText = (props: IInputText) => {
    return (
        <Input 
            autoFocus={props?.autoFocus}
            ref={props?.refs}
            placeholder={props?.label || translate('name')}
            autoCorrect={false}
            autoCapitalize={'words'}
            value={props.value} 
            maxLength={props?.maxLength || 100}
            returnKeyType={props?.returnKeyType || "next"}
            onChangeText={props.onChange}
            onSubmitEditing={props?.onSubmitEditing}
            style={Default.input}
            errorMessage={props?.showError ? props?.errorMessage : null}
            disabled={props?.disabled}
            errorStyle={Default.containerError}
            rightIcon={(
                <Icon
                    name='close'
                    size={fontSize(8)}
                    color={Colors.background}
                    onPress={() => props.onChange('')}
                />
            )}
        />
    )
}

export default InputText