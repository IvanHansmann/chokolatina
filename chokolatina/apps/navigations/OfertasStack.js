import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ofertas from "../screens/Ofertas";

const Stack = createStackNavigator()

export default function OfertasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='ofertas'
            component={Ofertas}
            options={{title:'Ofertas'}}
            />
        </Stack.Navigator>
    )
}