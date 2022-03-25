import React from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Chokolatina from '../screens/Chokolatina'
import Productos from '../screens/Productos'
import Ofertas from '../screens/Ofertas'
import Personalzados from '../screens/Personalizados'
import Ubicacion from '../screens/Ubicacion'


const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name= 'chokolatina' 
                component={Chokolatina}
                options={{title: "Chokolatina"}}
                />
                <Tab.Screen name= 'productos' 
                component={Productos}
                options={{title: "Lista de Productos"}}
                />
                <Tab.Screen name= 'ofertas' 
                component={Ofertas}
                options={{title: "Ofertas del dia"}}
                />
                <Tab.Screen name= 'ubicacion' 
                component={Ubicacion}
                options={{title: "Ubicacion"}}
                />
                <Tab.Screen name= 'personalizados' 
                component={Personalzados}
                options={{title: "Productos personalizados"}}
                />               
            </Tab.Navigator>
        </NavigationContainer>
    )
}