import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Welcome } from '../pages/welcome';
import { UserIdentification } from '../pages/userIdentification';
import { Confirmation } from '../pages/confirmation';
import { PlantSelect } from '../pages/plantSelect';
import { PlantSave } from '../pages/plantSave';
import { MyPlants } from '../pages/myPlants';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
    <AppTab.Navigator
        tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.heading,
            labelPosition: 'beside-icon',
            style: {
                paddingVertical: Platform.OS == 'ios' ? 20 : 0,
                height: Platform.OS == 'ios' ? 88 : 60
            }
        }}
    >

        <AppTab.Screen 
            name='Nova planta'
            component={PlantSelect}
            options={{
                tabBarIcon: (({size, color})=> (
                    <MaterialIcons 
                        name="add-circle-outline"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />

        <AppTab.Screen 
            name='Minhas plantas'
            component={MyPlants}
            options={{
                tabBarIcon: (({size, color})=> (
                    <MaterialIcons 
                        name="format-list-bulleted"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />
        
    </AppTab.Navigator>
);

export default AuthRoutes;