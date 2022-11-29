import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react'

import Navigation from '../component/Navigation'
import HomePage from './HomePage'
import Community from './Community'


const Stack = createStackNavigator();

const MainPage=()=>{
    useEffect(()=>{
        console.log(Stack.Navigator)
    },[])

    const navigate=(e)=>{
        // if(e==1){
        //     Stack.
        // }else if(e==2){
        //     Stack.push("Community")
        // }
    }

    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='Home' 
                        component={HomePage} 
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name='Community' 
                        component={Community}
                        options={{
                            headerShown:false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

            <Navigation onNavigate={(e)=>navigate(e)} />
        </>
    )
}

export default MainPage;