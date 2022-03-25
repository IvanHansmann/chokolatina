import React from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Icon } from 'react-native-elements'

import ChokolatinaStack from './ChocolatinaStack'
import ProductosStack from './ProductosStack'
import OfertasStack from './OfertasStack'
import PersonalizadosStack from './PersonalizadosStack'
import UbicacionStack from './UbicacionStack'


const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="restaurants"
              tabBarOptions={{
                  inactiveTintColor: '#646464',
                  activeTintColor: '#00a680'
              }}
              screenOptions={({route})  => ({
                      tabBarIcon:({color})=>screenOptions(route,color)
              })}
            >
                <Tab.Screen name= 'chokolatina' 
                component={ChokolatinaStack}
                options={{title: "Chokolatina"}}
                />
                <Tab.Screen name= 'productos' 
                component={ProductosStack}
                options={{title: "Lista de Productos"}}
                />
                <Tab.Screen name= 'ofertas' 
                component={OfertasStack}
                options={{title: "Ofertas del dia"}}
                />
                <Tab.Screen name= 'ubicacion' 
                component={UbicacionStack}
                options={{title: "Ubicacion"}}
                />
                <Tab.Screen name= 'personalizados' 
                component={PersonalizadosStack}
                options={{title: "Productos personalizados"}}
                />               
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route,color){
    let iconName
    switch(route.name){
        case 'chocolatina':
            iconName='compass-outline'
        break
        case 'productos':
            iconName='heart-outline'
        break
        case 'ofertas':
            iconName='star-outline'
        break
        case 'ubicacion':
            iconName='magnify'
        break
        case 'personalizados':
            iconName = 'home-outline'
        break
    }
    return(
        <Icon type='material-community' name={iconName} size={22} color={color}/>
    )
}