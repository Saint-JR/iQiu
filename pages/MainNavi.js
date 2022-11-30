import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react'

import MainPage from './MainPage'
import PostDetail from './PostDetail'



const Stack = createNativeStackNavigator();

const MainNavi=()=>{

    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='MainPage' 
                        component={MainPage} 
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name='PostDetail' 
                        component={PostDetail}
                        options={{
                            headerShown:false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavi;