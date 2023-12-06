import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Activities';
import BottomTabs from '../ecrans/tabs';


const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName='home'
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={BottomTabs} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes