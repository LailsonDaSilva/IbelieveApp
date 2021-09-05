import React from "react";
import { NavigationContainer} from "@react-navigation/native"

import  StackRoutes from './stack.routes';
import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";
import AppRoutes from "./stack.routes";

const Routes = () => (
    <NavigationContainer >
        <AppRoutes/>
    </NavigationContainer>
)
export default Routes;