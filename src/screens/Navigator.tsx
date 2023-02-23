import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Colors from '../styles/Colors'
import { translate } from '../util/Common'
import Initial from './Initial'
import SearchTickets from './SearchTickets'

const Stack = createStackNavigator()

const Navigator = (props) => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={'Initial'} 
                screenOptions={{
                    headerTintColor: Colors.darkBlue,
                    headerStyle: { backgroundColor: Colors.lightBlue },
                    ...TransitionPresets.SlideFromRightIOS
                }}>
                <Stack.Screen 
                    name="Initial" 
                    component={Initial} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="SearchTickets" 
                    component={SearchTickets} 
                    options={{
                        title: translate('searchTickets')
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator