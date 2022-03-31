import React from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Icon } from 'react-native-elements'

import ProductosStack from './ProductosStack'
import OfertasStack from './OfertasStack'
import PersonalizadosStack from './PersonalizadosStack'
import UbicacionStack from './UbicacionStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="restaurants"
              tabBarOptions={{
                  inactiveTintColor: '#646464',
                  activeTintColor: '#800080'
              }}
              screenOptions={({route})  => ({
                      tabBarIcon:({color})=>screenOptions(route,color)
              })}
            >
                <Tab.Screen name= 'ofertas' 
                component={OfertasStack}
                options={{title: "Ofertas del Día"}}
                />
                
                <Tab.Screen name= 'productos' 
                component={ProductosStack}
                options={{title: "Lista de Productos"}}
                />
            
                <Tab.Screen name= 'ubicacion' 
                component={UbicacionStack}
                options={{title: "Ubicación"}}
                />
                <Tab.Screen name= 'personalizados' 
                component={PersonalizadosStack}
                options={{title: "Productos personalizados"}}
                />       

                <Tab.Screen name='account' 
                component={AccountStack} 
                options={{title:"Cuenta"}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route,color){
    let iconName
    switch(route.name){
        
        case 'productos':
            iconName='book'
        break
        case 'ofertas':
            iconName='star-outline'
        break
        case 'ubicacion':
            iconName='compass-outline'
        break
        case 'personalizados':
            iconName='draw'
        break
        case 'account':
            iconName = 'home-outline'
        break
    }
    return(
        <Icon type='material-community' name={iconName} size={22} color={color}/>
    )
}