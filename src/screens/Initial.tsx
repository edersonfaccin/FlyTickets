import React from 'react'
import { ImageBackground, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ButtonStart from '../components/buttons/ButtonStart'
import Default from '../styles/Default'
import { translate } from '../util/Common'

const Initial = (props) => {
    
    const onSearch = () => {

    }

    return (
        <LinearGradient colors={['#285C8B','#092034']} style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/images/background.jpeg')} 
                style={Default.safeArea} imageStyle={{ opacity: 0.8 }}>
                    <Text>teste</Text>

                <ButtonStart
                    title={translate('searchTickets')} 
                    onPress={onSearch}
                />
            </ImageBackground>
        </LinearGradient>
    )
}

export default Initial