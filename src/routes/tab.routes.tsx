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

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
    <AppTab.Navigator
        tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.heading,
            labelPosition: 'below-icon',
            style: {
                paddingVertical: 20,
                height: 88
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