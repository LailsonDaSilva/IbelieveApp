import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";
import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator

    screenOptions={{
       
        cardStyle: {
                backgroundColor: theme.color.secundary
        },
    }}
    >
        <stackRoutes.Screen
            name="Signin" 
            component={Signin}
        />
         <stackRoutes.Screen
            name="Signup" 
            component={Signup}
            
        />

    </stackRoutes.Navigator>
)
export default AppRoutes;