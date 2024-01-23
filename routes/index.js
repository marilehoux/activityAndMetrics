import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Activities';
import BottomTabs from '../ecrans/tabs';
import CreationVariableScreen from '../composantes/variable/creationVariable';
import CreateSessionScreen from '../ecrans/Metrics/createSession';


const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='user'
                screenOptions={{headerShown: true}}>
                <Stack.Screen name="Amandine DOE" component={BottomTabs} />
                <Stack.Screen name ="creationVariable" component={CreationVariableScreen} initialParams={{ page: 'typeSaisie' }}/>
                <Stack.Screen name="creationSession" component={CreateSessionScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes