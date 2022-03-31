import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ubicacion from "../screens/Ubicacion";

const Stack = createStackNavigator()

export default function UbicacionStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='ubicacion'
            component={Ubicacion}
            options={{title:'Ubicacion'}}
            />
        </Stack.Navigator>
    )
}