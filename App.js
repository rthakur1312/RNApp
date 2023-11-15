import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import RecipesOverview from './screens/RecipesOverview';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <>
    <StatusBar style='dark' />  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Recipes" component={RecipesOverview} />
      </Stack.Navigator>
     </NavigationContainer>
    </>
  )

}
