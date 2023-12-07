import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Activities';
import Metric from '../Metrics';
import Parametres from '../Parametres';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator();
  return (
    
        <Tab.Navigator
            initialRouteName="tabs_home"
            barStyle={{ backgroundColor: 'lightgrey' }}
            color="white"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                activeColor: 'red',
                headerShown: false,
                inactiveColor: 'grey',
            }}
        >
          <Tab.Screen
            name="tabs_home"
            component={Home}
            options={{
              tabBarLabel: 'Activités',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="table-clock" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="tabs_Home1"
            component={Metric}
            options={{
              tabBarLabel: 'Variables',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="table-headers-eye" color={color} size={25} />
              ),
              tabBarBadge: 1,
            }}
          />
          <Tab.Screen
            name="tabs_home2"
            component={Parametres}
            options={{
              tabBarLabel: 'Paramètres',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings-outline" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      );
  
}

export default BottomTabs