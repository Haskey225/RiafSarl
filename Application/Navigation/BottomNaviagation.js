import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home';
import Login from '../Screens/Auth/Login';
import Notification from '../Screens/Notification';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(props) {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#006938',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#EA712D",
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Acceuil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name='Exchange'
                component={Login}
                options={{
                    tabBarLabel: 'Exchange',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='exchange' size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='Notification'
                component={Notification}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='bell' size={size} color={color} />
                    ),
                    tabBarBadge: 10
                }}
            />
            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    tabBarLabel: 'Paramettre',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='cog' size={size} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}