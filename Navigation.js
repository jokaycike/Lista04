import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import NavegacaoAPI  from './src/Screens/NavegacaoAPI';

import HumanoVsHumano from './src/Screens/HumanoVsHumano';
import HumanoVsMaquina from './src/Screens/HumanoVsMaquina';
import ConversorMoedas from './src/Screens/ConversorMoedas';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavegacaoAPI">
      <Stack.Screen name="NavegacaoAPI" component={NavegacaoAPI} />
        <Stack.Screen name="HomemVsHomem" component={HumanoVsHumano} />
        <Stack.Screen name="HomemVsMaquina" component={HumanoVsMaquina} />
        <Stack.Screen name="ConversorMoedas" component={ConversorMoedas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
