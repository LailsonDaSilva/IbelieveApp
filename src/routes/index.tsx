import React from "react";
import { NavigationContainer} from "@react-navigation/native"

import  StackRoutes from './stack.routes';
import { Signin } from "../screens/Signin";

const Routes = () => (
    <NavigationContainer>
        <Signin/>
    </NavigationContainer>
)
export default Routes;