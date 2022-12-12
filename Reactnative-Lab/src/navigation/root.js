import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Palette from '../screens/Palette'
import Users from '../screens/users';
import Details from '../screens/details';
const stack = createNativeStackNavigator();

export default function Root(){
    return(
    <stack.Navigator>
        <stack.Screen name="users" component={Users}/>
        <stack.Screen name="details" component={Details}/>
        <stack.Screen name="home" component={Home}/>
        <stack.Screen name="palette" component={Palette}/>
    </stack.Navigator>
    )
}