import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chokolatina from "../screens/Chokolatina";

const Stack = createStackNavigator()

export default function ChocolatinaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='chocolatina'
            component={Chokolatina}
            options={{title:'Chocolatina'}}
            />
        </Stack.Navigator>
    )
}