import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ubicacion from "../screens/Ubicacion";

const Stack = createStackNavigator()

export default function UbicacionStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='ubicación'
            component={Ubicacion}
            options={{title:'Ubicación'}}
            />
        </Stack.Navigator>
    )
}