import React from 'react'
import {NavigationContainer} from "@react-navigation/native" 
 import {Welcome } from "../screens/welcome"
import { createStackNavigator } from '@react-navigation/stack';
 
export default function RootNavigation() {
 
const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

    return (
         <NavigationContainer>
              <Stack.Navigator screenOptions={screenOptions}>
                  <Stack.Screen name="Splash" component={Welcome} />   
                 
              </Stack.Navigator>
         </NavigationContainer>
    )
}
