import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react'

import Navigation from '../../component/Navigation'
import HomePage from './HomePage'
import Community from './Community'
import Messages from './Messages'
import My from './My'


const Tab = createBottomTabNavigator();

const MainPage=(StackProps)=>{
    // useEffect(()=>{
    //     console.log(StackProps)
    // },[])
    

    return(
            <Tab.Navigator tabBar={(TabProps)=><Navigation {...TabProps}/>}>
                <Tab.Screen 
                    name='HomePage' 
                    component={HomePage}
                    options={{
                        headerShown:false
                    }}
                >
                    
                </Tab.Screen>

                <Tab.Screen 
                    name='Community' 
                    options={{
                        headerShown:false
                    }}
                >
                    {()=><Community/>}
                </Tab.Screen>

                <Tab.Screen 
                    name='Messages' 
                    options={{
                        headerShown:false
                    }}
                >
                    {()=><Messages/>}
                </Tab.Screen>

                <Tab.Screen 
                    name='My' 
                    options={{
                        headerShown:false
                    }}
                >
                    {()=><My/>}
                </Tab.Screen>

            </Tab.Navigator>
    )
}

export default MainPage;