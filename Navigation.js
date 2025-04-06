import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import JogoDaVelha  from './src/Screens/JogoDaVelha';

import HumanoVsHumano from './src/Screens/HumanoVsHumano';
import HumanoVsMaquina from './src/Screens/HumanoVsMaquina';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JogoDaVelha">
      <Stack.Screen name="JogoDaVelha" component={JogoDaVelha} />
        <Stack.Screen name="HomemVsHomem" component={HumanoVsHumano} />
        <Stack.Screen name="HomemVsMaquina" component={HumanoVsMaquina} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
