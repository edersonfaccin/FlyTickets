import React, { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-elements'
import { getLocations } from '../../data/api'
import Default from '../../styles/Default'
import { translate } from '../../util/Common'

interface IInputSearch {
    value: any
    onChange: (val: any) => void
}

const InputSearch = (props: IInputSearch) => {

    const [ city, setCity ] = useState<string>(props.value)

    useEffect(() => {
        if(city){
            let searchLocation = getLocations(city)

            if(searchLocation?.length === 1) {
                props.onChange(searchLocation[0].city)
                setCity(searchLocation[0].city)
            }
        }
    }, [city])

    return (
        <>
            <SearchBar 
                placeholder={translate('typeCity')}
                onChangeText={val => setCity(val)}
                maxLength={100}
                value={city}
                style={Default.input}
            />
        </>
    )
}

export default InputSearch