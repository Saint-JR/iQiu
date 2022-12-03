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
                    component={Community}
                    options={{
                        headerShown:false
                    }}
                >
                </Tab.Screen>

                <Tab.Screen 
                    name='Messages' 
                    component={Messages}
                    options={{
                        headerShown:false
                    }}
                >
                </Tab.Screen>

                <Tab.Screen 
                    name='My' 
                    component={My}
                    options={{
                        headerShown:false
                    }}
                >
                </Tab.Screen>

            </Tab.Navigator>
    )
}

export default MainPage;