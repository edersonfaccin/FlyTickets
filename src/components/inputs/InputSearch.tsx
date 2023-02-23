import React from 'react'
import { SearchBar } from 'react-native-elements'
import Default from '../../styles/Default'
import { translate } from '../../util/Common'

interface IInputSearch {
    value: any
    onChange: (val: any) => void
}

const InputSearch = (props: IInputSearch) => {
    return (
        <SearchBar 
            placeholder={translate('typeCity')}
            onChangeText={props.onChange}
            maxLength={100}
            value={props.value}
            style={Default.input}
        />
    )
}

export default InputSearch