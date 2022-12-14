import { useEffect, useState } from "react"
import { StyleSheet, Text,View ,StatusBar,Image, FlatList,Pressable,Animated, ScrollView,RefreshControl} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { color } from "react-native-reanimated"
import MyPosts from '../../component/MyPosts'
import {FollowCommu} from '../MainPage/Community'
import {getMyPosts} from '../../api/posts'
import timeCalculate from '../../api/timeCalculate'
import { getFollowCommunity } from "../../api/community"

const Navigation=(props)=>{

    return(
        <View style={{position:'absolute',width:'100%',zIndex:3}}>
            <View>

                <Animated.View style={{opacity:props.opacity2,height:'100%',width:'100%',position:'absolute',display:'flex'}}>
                    <View style={{height:StatusBar.currentHeight}}></View>
                    <View style={[naviStyles.naviView,{flex:1,}]}>
                        <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>个人资料</Text>
                        <View style={naviStyles.operateView}>
                            <Image source={require('../../static/QR.png')} style={{width:30,height:20,resizeMode:'contain',marginLeft:10,tintColor:'white'}} />
                            <Image source={require('../../static/setting.png')} style={{width:30,height:20,resizeMode:'contain',marginLeft:10,tintColor:'white'}} />
                        </View>
                    </View>
                </Animated.View>
                
                <Animated.View style={{backgroundColor:'white',opacity:props.opacity1}}>
                    <View style={{height:StatusBar.currentHeight}}></View>
                    <View style={naviStyles.naviView}>
                        <View style={naviStyles.userInfo}>
                            <Image source={require('../../static/avatar.jpg')} style={naviStyles.userAvatar} />
                            <Text style={naviStyles.userName}>D1nNer-</Text>
                        </View>
                        <View style={naviStyles.operateView}>
                            <Image source={require('../../static/QR.png')} style={{width:30,height:20,resizeMode:'contain',marginLeft:10}} />
                            <Image source={require('../../static/setting.png')} style={{width:30,height:20,resizeMode:'contain',marginLeft:10}} />
                        </View>
                    </View>
                    
                    
                </Animated.View>
                
            </View>
            
        </View>
    )
}

const Header=(props)=>{

    return(
        <View>
            <LinearGradient style={{width:'100%',height:'95%',position:'absolute'}} colors={['#0dc2e3','#3686e7']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                <Image source={require('../../static/backicon2.png')} style={headerStyles.backicon}/>
            </LinearGradient>
            <View style={{height:200}}></View>
            <View style={headerStyles.headerContainer}>
                <Image source={require('../../static/avatar.jpg')}  style={headerStyles.userAvatar} />
                <View style={headerStyles.updateView}>
                    <View style={headerStyles.updateContainer}>
                        <Text style={headerStyles.updateText}>编辑资料</Text>
                    </View>
                </View>
                <View style={headerStyles.userNameView}>
                    <Text style={headerStyles.userName}>D1nNer-</Text>
                    <View style={headerStyles.follow}>
                        <Text style={headerStyles.followText}>关注</Text>
                    </View>
                </View>
                <View style={headerStyles.userInfo}>
                    <Text style={headerStyles.userText}>ID：0001</Text>
                    <Text style={headerStyles.userDivider}>|</Text>
                    <Text style={headerStyles.userText}>球龄：8年</Text>
                    <Text style={headerStyles.userDivider}>|</Text>
                    <Text style={headerStyles.userText}>♂</Text>
                    <Text style={headerStyles.userDivider}>|</Text>
                    <Text style={headerStyles.userText}>地点：上海</Text>
                </View>
                <Text style={headerStyles.signal}>嘉门</Text>
                <View style={headerStyles.followerView}>
                    <Text style={headerStyles.follower}>1438</Text>
                    <Text style={headerStyles.followerText}>获赞</Text>
                    <Text style={headerStyles.follower}>24</Text>
                    <Text style={headerStyles.followerText}>关注</Text>
                    <Text style={headerStyles.follower}>126</Text>
                    <Text style={headerStyles.followerText}>粉丝</Text>
                </View>

                <View style={headerStyles.divider}></View>

                <View style={headerStyles.choiceView}>
                    <View style={headerStyles.choiceContainer}>
                        <Pressable onPress={()=>props.onChange(0)}>
                            <Text style={[headerStyles.choice,props.choice==0&&headerStyles.selected]}>帖子 60</Text>
                        </Pressable>
                        <View style={[headerStyles.choiceTip,{opacity:props.choice==0?1:0}]}></View>
                    </View>
                    <View style={headerStyles.choiceContainer}>
                        <Pressable onPress={()=>props.onChange(1)}>
                            <Text style={[headerStyles.choice,props.choice==1&&headerStyles.selected]}>关注圈子</Text>
                        </Pressable>
                        <View style={[headerStyles.choiceTip,{opacity:props.choice==1?1:0}]}></View>
                    </View>
                </View>

            </View>
            
        </View>
    )
}

const My=(props)=>{

    let [postList,setPostList]=useState([])
    let [followCommunity,setFollowCommunity]=useState([])
    // setFollowCommunity([{

    // }])

    useEffect(()=>{
        getMyPosts(userId)
        .then((res)=>{
            setPostList(res!=null?res.map((item,index)=>{
                item.createTime=timeCalculate(item.createTime,"发布于")
                return item
            }):[])
        }).catch((err)=>{
            console.log(err)
        })

        getFollowCommunity(userId)
        .then((res)=>{
            setFollowCommunity(res.map((item,index)=>{
                return item
            }))
        }).catch((err)=>{
            console.log(err)
        })

        // fetch('http://localhost:8081/data/followCommunity.json').then((res)=>res.json())
        // .then((resJson)=>{
        //     setFollowCommunity(resJson.data.map((item,index)=>{
        //         return item
        //     }))
        // }).catch((err)=>{
        //     console.log(err)
        // })
    },[])


    const naviToPost=(postId)=>{
        // console.log(props)
        props.navigation.navigate("PostDetail",{postId:postId})
    }

    const naviToCommunity=(communityId)=>{
        // console.log(props)
        props.navigation.navigate("CommunityDetail",{communityId:communityId})
    }




    let scrollY = new Animated.Value(0);
    // let opacity=1

    let opacity1 = scrollY.interpolate({
        inputRange: [0,220],
        outputRange: [0,1],
        extrapolate: "clamp"
    });
    let opacity2 = scrollY.interpolate({
        inputRange: [0,220],
        outputRange: [1,0],
        extrapolate: "clamp"
    });

    let [choice,setChoice]=useState(0)
    const [refresh,setRefresh]=useState(false)
    const onRefresh=()=>{
        setRefresh(true)
        setTimeout(() => {
            getMyPosts(userId)
            .then((res)=>{
                setPostList(res!=null?res.map((item,index)=>{
                    item.createTime=timeCalculate(item.createTime,"发布于")
                    return item
                }):[])
                setRefresh(false)
            }).catch((err)=>{
                console.log(err)
            })
        }, 2000);
    }

    return(
        <>
            <Navigation navigation={props.navigation} opacity1={opacity1} opacity2={opacity2}/>
            <ScrollView
                style={{backgroundColor:'rgba(240,240,240,1)',width:'100%',height:'100%'}}
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                }
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: {
                            y: scrollY
                        }
                    }
                }],{
                    useNativeDriver:false
                })}
            >
                <Header onChange={(e)=>setChoice(e)} choice={choice} />

                {
                    choice==0?
                        postList.map((item,index)=>{
                            return(
                                <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                    <MyPosts {...item}/>
                                </Pressable>
                            )
                        })
                    :(
                        <View style={mainStyles.communityView}>
                            {
                                followCommunity.map((item,index)=>{
                                    return(
                                        <Pressable style={{width:'50%'}} onPress={()=>{naviToCommunity(item.communityId)}} key={item.communityId}>
                                            <FollowCommu {...item}/>
                                        </Pressable>
                                    )
                                })
                            }
                            
                        </View>
                    )
                    
                }

                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                    <Text>暂时只有这么多啦~</Text>
                </View>
            </ScrollView>
        </>
        
    )
}

const mainStyles=StyleSheet.create({
    list:{
        backgroundColor:'rgba(240,240,240,1)',
        // backgroundColor:'white'
    },
    communityView:{
        backgroundColor:'white',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        margin:10,
        paddingTop:10,
        paddingBottom:10,
    }
})

const naviStyles=StyleSheet.create({
    userName:{
        fontSize:19,
        color:'rgba(0,0,0,0.8)',
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
    },
    naviView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:25,
        marginRight:25,
    },
    userInfo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        
        // justifyContent:'space-between'
    },
    userAvatar:{
        height:35,
        width:35,
        borderRadius:20,
        borderWidth:0.7,
        borderColor:'rgba(0,0,0,0.6)'
    },
    operateView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }

})

const headerStyles=StyleSheet.create({

    backicon:{
        height:180,
        width:180,
        resizeMode:'contain',
        position:'absolute',
        right:40,
        top:20,
        opacity:0.6
    },

    userAvatar:{
        height:100,
        width:100,
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        position:'absolute',
        left:15,
        top:-50
    },

    headerContainer:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // backgroundColor:'white',
        // paddingTop:25,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        backgroundColor:'white'
    },

    updateView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:15,
        marginBottom:15,
    },
    updateContainer:{
        padding:6,
        paddingLeft:30,
        paddingRight:30,
        borderWidth:1,
        borderColor:'rgba(54,134,231,0.4)',
        borderRadius:100,
        marginRight:15,
        
    },
    updateText:{
        color:'#3686e7',
        fontSize:15,
    },
    userNameView:{
        margin:15,
        marginTop:0,
        marginBottom:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    userName:{
        color:'rgba(0,0,0,0.8)',
        fontSize:25,
        fontWeight:'700'
    },
    follow:{
        padding:5,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:100,
        backgroundColor:'rgba(54,134,231,0.4)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    followText:{
        color:'rgb(54,134,231)',
        fontSize:13,
    },
    userInfo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15,
    },
    userText:{
        color:'rgba(0,0,0,0.4)',
        fontSize:13,
    },
    userDivider:{
        marginLeft:10,
        marginRight:10,
        color:'rgba(0,0,0,0.1)',
        fontSize:11
    },
    signal:{
        marginTop:10,
        marginLeft:15,
        fontSize:15,
        color:'rgba(0,0,0,0.4)',
    },
    followerView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        marginLeft:15,
        marginTop:10
    },
    follower:{
        fontSize:22,
        color:'rgba(0,0,0,0.8)',
        fontWeight:'700',

    },
    followerText:{
        fontSize:13,
        color:'rgba(0,0,0,0.4)',
        marginLeft:10,
        marginRight:30
    },
    divider:{
        margin:15,
        borderColor:'rgba(240,240,240,1)',
        borderBottomWidth:0.8,

    },


    choiceView:{
        marginLeft:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // marginTop:15,
        // marginBottom:10

    },
    choiceContainer:{
        display:'flex',
        alignItems:'center',
        marginRight:30,
    },
    choice:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        
    },
    selected:{
        fontWeight:'700',
        color:'rgba(0,0,0,0.8)'
    },
    choiceTip:{
        height:5,
        width:20,
        borderRadius:5,
        backgroundColor:'#3686e7',
        marginTop:3
    }
})

export default My