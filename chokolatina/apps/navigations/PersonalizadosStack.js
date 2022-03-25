import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Personalizados from "../screens/Personalizados";

const Stack = createStackNavigator()

export default function PersonalizadosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='personalisados'
            component={Personalizados}
            options={{title:'Personalizados'}}
            />
        </Stack.Navigator>
    )
}