import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from 'expo-font'

import RecipesOverview from './screens/RecipesOverview';
import RecipesScreen from './screens/RecipesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="RecipesDetail" component={RecipesOverview} options={({route, navigate}) => {
            return {
              title: ''
            }
        }} />
      </Stack.Navigator>
     </NavigationContainer>
    </>
  )

}
