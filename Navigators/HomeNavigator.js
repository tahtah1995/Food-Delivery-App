
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react' ;
import ProductContainer  from '../Screens/Products/ProductContainer' ;
import SingleProduct from '../Screens/Products/SingleProduct' ;
const Stack  = createStackNavigator()

function Mystack () {
return(
    <Stack.Navigator>
        <Stack.Screen
        
        name= 'Home'
        component = {ProductContainer}
        options = {{
            headerShown: false ,

        }}
        
        />
           <Stack.Screen
        
        name= 'Product Detail'
        component = {SingleProduct}
        options = {{
            headerShown: false ,

        }}
        
        />


       
    </Stack.Navigator>
)
}
export default  function HomeNavigator() {
    return <Mystack />
}