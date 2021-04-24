import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Confirmation } from '../pages/confirmation';
import { MyPlants } from '../pages/myPlants';
import { PlantSave } from '../pages/plantSave';
import { UserIdentification } from '../pages/userIdentification';
import { Welcome } from '../pages/welcome';
import colors from '../styles/colors';
import AuthRoutes from './tab.routes';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name='Welcome'
            component={Welcome}
        />

        <stackRoutes.Screen
            name='UserIdentification'
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name='Confirmation'
            component={Confirmation}
        />

        <stackRoutes.Screen
            name='PlantSelect'
            component={AuthRoutes}
        />

        <stackRoutes.Screen
            name='PlantSave'
            component={PlantSave}
        />

        <stackRoutes.Screen
            name='MyPlants'
            component={AuthRoutes}
        />
    </stackRoutes.Navigator>
);

export default AppRoutes;