import { def } from '@vue/shared'
import { useEffect, useState,useRef } from 'react'
import {View,Text,StyleSheet,Image,Animated, Easing} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export const naviHeight=8

const Navigation=(props)=>{

    let bottomAni= useRef(new Animated.Value(0)).current
    let widthAni= useRef(new Animated.Value(60)).current
    let rotateAni=useRef(new Animated.Value(0)).current
    let colorAni=useRef(new Animated.Value(0)).current

    let rotate=rotateAni.interpolate({
        inputRange: [0, 135],
        outputRange: ['0deg', '135deg'],
    });

    let rgb=colorAni.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(54,134,231)', 'rgb(229,138,146)'],
    });

    let Ani={
        bottom:bottomAni,
        width:widthAni,
        transform:[{rotate:rotate}],
        backgroundColor:rgb,
    }
    
    let opacity=useRef(new Animated.Value(0)).current


    // let plusAni= useRef(new Animated.Value(0)).current
    // let left=choiceAni.interpolate({
    //     inputRange: [0, 66],
    //     outputRange: ['0%', '66%'],
    // });
    
    // const changePage=(index)=>{
    //     setPage(index)
    //     if(index==0){
    //         Animated.timing(choiceAni,{
    //             toValue:0,
    //             duration:300,
    //             useNativeDriver:false
    //         }).start()
    //     }
    //     else if(index==1){
    //         Animated.timing(choiceAni,{
    //             toValue:33,
    //             duration:300,
    //             useNativeDriver:false
    //         }).start()
    //     }else if(index==2){
    //         Animated.timing(choiceAni,{
    //             toValue:66,
    //             duration:300,
    //             useNativeDriver:false
    //         }).start()
    //     }
            
    // }

    let [selectPost,setSelectPost]=useState(false)
    let [select,setSelect]=useState(1)

    const navigate=(index)=>{
        if(index==1){
            props.navigation.navigate('HomePage')
            setSelect(1)
        }else if(index==2){
            props.navigation.navigate('Community')
            setSelect(2)
        }else if(index==4){
            props.navigation.navigate('Messages')
            setSelect(4)
        }else if(index==5){
            props.navigation.navigate('My')
            setSelect(5)
        }else if(index==3){
            setSelectPost(!selectPost)
            if(selectPost){
                Animated.parallel([
                    Animated.timing(bottomAni,{
                        toValue:30,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(widthAni,{
                        toValue:50,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(rotateAni,{
                        toValue:135,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(colorAni,{
                        toValue:1,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(opacity,{
                        toValue:1,
                        duration:400,
                        useNativeDriver:false,
                        // easing:Easing.bezier(.27,0,1,.05)
                    }).start(),
                ],{
                    stopTogether:false
                })
            }else{
                Animated.parallel([
                    Animated.timing(bottomAni,{
                        toValue:0,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(widthAni,{
                        toValue:60,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(rotateAni,{
                        toValue:0,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(colorAni,{
                        toValue:0,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                    Animated.timing(opacity,{
                        toValue:0,
                        duration:400,
                        useNativeDriver:false
                    }).start(),
                ],{
                    stopTogether:false
                })
            }
                
            
        }
    }

    

    return(
        <View style={{height:`${naviHeight}%`,width:'100%'}}>
            <View style={styles.back}>
                <Animated.View 
                    style={[styles.mainball,{transform:[{rotate:rotate}],opacity:opacity}]}
                    pointerEvents={selectPost?'none':'auto'}
                >
                    <View style={[styles.ball,{left:-40},{transform:[{rotate:'-90deg'}]}]}>
                        <Image source={require('../static/chatPost.png')} style={styles.postImage}/>
                        <Text style={styles.postText}>闲聊</Text>
                    </View>
                    <View style={[styles.ball,{bottom:-40},{transform:[{rotate:'180deg'}]}]}>
                        <Image source={require('../static/ballPost.png')} style={styles.postImage}/>
                        <Text style={styles.postText}>约球</Text>
                    </View>
                </Animated.View>
            </View>

            <View style={styles.navi}>
                <Pressable onPress={()=>{navigate(1)}}>
                    <View style={styles.buttonView}>
                        <Image source={require('../static/home.png')} style={styles.buttonImage}/>
                        <Text style={[styles.buttonText,select==1?styles.select:'']}>首页</Text>
                    </View>
                    
                </Pressable>
                <Pressable onPress={()=>navigate(2)}>
                    <View style={styles.buttonView}>
                        <Image source={require('../static/community.png')} style={styles.buttonImage}/>
                        <Text style={[styles.buttonText,select==2?styles.select:'']}>圈子</Text>
                    </View>
                </Pressable>

                <View style={{height:50,width:60,display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    
                    
                    <Pressable onPress={()=>navigate(3)} style={styles.pressablePost}>
                        <Animated.View style={[styles.post,{...Ani}]}>
                            <Text style={styles.postPlus}>
                                +
                            </Text>
                        </Animated.View>
                    </Pressable>
                </View>
                
                <Pressable onPress={()=>{navigate(4)}}>
                    <View style={styles.buttonView}>
                        <Image source={require('../static/message.png')} style={styles.buttonImage}/>
                        <Text style={[styles.buttonText,select==4?styles.select:'']}>消息</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigate(5)}>
                    <View style={styles.buttonView}>
                        <Image source={require('../static/my.png')} style={styles.buttonImage}/>
                        <Text style={[styles.buttonText,select==5?styles.select:'']}>我的</Text>
                    </View>
                </Pressable>
            </View>
        </View>
        
    )
}

const styles=StyleSheet.create({
    back:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    navi:{
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        // height:'10%',
        position:'absolute',
        // bottom:0,
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        // backgroundColor:'rgba(113,144,229,0.3)'
        backgroundColor:'white',
        borderTopColor:'rgba(200,200,200,0.2)',
        borderTopWidth:1,
        borderStyle:'solid'
    },
    pressablePost:{
        position:'absolute',
        // backgroundColor:'red',

    },
    post:{
        
        // bottom:0,
        height:50,
        // width:60,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:7,
        backgroundColor:'#3686e7',
        borderRadius:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    postPlus:{
        fontSize:30,
        fontWeight:'900',
        color:'white'
    },
    buttonView:{
        display:'flex',
        alignItems:'center'
    },
    buttonText:{
        fontSize:11,
        color:'rgba(0,0,0,0.8)'
    },
    buttonImage:{
        height:27,
        width:27,
        marginBottom:3
    },
    select:{
        fontWeight:'900'
    },
    mainball:{
        position:'absolute',
        height:170,
        width:170,
        borderRadius:170,
        // backgroundColor:'red',
        bottom:-30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    ball:{
        position:'absolute',
        height:80,
        width:80,
        borderRadius:80,
        backgroundColor:'white',
        borderColor:'rgb(240,240,240)',
        borderWidth:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        alignItems:'center'
    },
    postText:{
        fontSize:12,
        marginTop:5
    },
    postImage:{
        width:35,
        height:35,
    }
})

export default Navigation;