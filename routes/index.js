import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Activities';
import BottomTabs from '../ecrans/tabs';
import CreationVariableScreen from '../composantes/variable/creationVariable';


const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='home'
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="home" component={BottomTabs} />
                <Stack.Screen name ="creationVariable" component={CreationVariableScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes