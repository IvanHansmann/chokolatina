import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Productos from "../screens/Productos/Productos";
import AddProductos from "../screens/Productos/AddProductos";

const Stack = createStackNavigator()

export default function ProductosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='productos'
            component={Productos}
            options={{title:'Productos'}}
            />
            <Stack.Screen
            name='add-productos'
            component={AddProductos}
            options={{title:'Create Restaurant'}}
            />
        </Stack.Navigator>
    )
}