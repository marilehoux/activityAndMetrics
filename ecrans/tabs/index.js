import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Activities';
import Metric from '../Metrics';
import Parametres from '../Variables';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator();
  return (
    
        <Tab.Navigator
            initialRouteName="tabs_home"
            barStyle={{ backgroundColor: 'lightgrey' }}
            color="white"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                activeColor: '#4287f5',
                headerShown: false,
                inactiveColor: 'red',
            }}
        >
          <Tab.Screen
            name="tabs_home"
            component={Home}
            options={{
              tabBarLabel: 'Activités',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="table-clock" color={color} size={30} />
              ),
                // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="tabs_Home1"
            component={Metric}
            options={{
              tabBarLabel: 'Sessions',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="table-headers-eye" color={color} size={30} />
              ),
              //  tabBarBadge: 8,
            }}
          />
          <Tab.Screen
            name="tabs_home2"
            component={Parametres}
            options={{
              tabBarLabel: 'Variables',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings-outline" color={color} size={30} />
              ),
              //  tabBarBadge: 1,

            }}
          />
        </Tab.Navigator>
      );
  
}

export default BottomTabs