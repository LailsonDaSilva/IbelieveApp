import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";
import { Welcome } from "../screens/Welcome";
import { Network } from "../screens/Network";
const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Signin: undefined;
      Network: undefined;
      Welcome: undefined;
      Signup: undefined;
    }
  }
}

const AppRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Network" component={Network} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
);
export default AppRoutes;
