import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from "../global/styles/theme";
import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <Stack.Navigator 
    screenOptions={{ headerShown:false}}
    
    >
        <Stack.Screen  name='Signin' component={Signin} />
        <Stack.Screen  name='Signup' component={Signup} />
      </Stack.Navigator>
)
export default AppRoutes;