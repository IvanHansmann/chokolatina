import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Productos from "../screens/Productos";

const Stack = createStackNavigator()

export default function ProductosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='productos'
            component={Productos}
            options={{title:'Productos'}}
            />
        </Stack.Navigator>
    )
}