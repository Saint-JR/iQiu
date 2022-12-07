import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react'

import MainPage from '../MainPage/MainPage'
import PostDetail from '../Posts/PostDetail'
import CommunityDetail from '../Communities/CommunityDetail'
import AddBallPosts from '../AddPosts/AddBallPosts'
import AddChatPosts from '../AddPosts/AddChatPosts'



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
                    <Stack.Screen 
                        name='CommunityDetail' 
                        component={CommunityDetail}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name='AddBallPosts' 
                        component={AddBallPosts}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name='AddChatPosts' 
                        component={AddChatPosts}
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