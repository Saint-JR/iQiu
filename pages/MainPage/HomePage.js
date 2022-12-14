import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable ,FlatList, Image, Easing, Animated,Dimensions,RefreshControl} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { naviHeight } from '../../component/Navigation'
import { useEffect } from 'react';
import HomePosts from '../../component/HomePosts'
import Swiper from 'react-native-swiper';
import {getHomePosts} from '../../api/posts'


const ListHeader=(props)=>{

    return(
        <View style={headerStyles.headerView}>
            <View style={headerStyles.headerContainer}>
                <Pressable onPress={()=>props.onChoose(0)}>
                    <View style={headerStyles.headerTextView}>
                        {
                            props.choice==0&&<LinearGradient style={{width:5,height:'100%',position:'absolute',left:0,borderRadius:10,opacity:1}} colors={['#0dc2e3','#3686e7']}/>
                        }
                        <Text style={[headerStyles.headerText,props.choice==0?headerStyles.headerSelected:'']}>全部</Text>
                    </View>
                </Pressable>
                
                <Pressable onPress={()=>props.onChoose(1)}>
                    <View style={headerStyles.headerTextView}>
                        {
                            props.choice==1&&<LinearGradient style={{width:5,height:'100%',position:'absolute',left:0,borderRadius:10,opacity:1}} colors={['#0dc2e3','#3686e7']}/>
                        }
                        <Text style={[headerStyles.headerText,props.choice==1?headerStyles.headerSelected:'']}>闲聊</Text>
                    </View>
                </Pressable>
                
                <Pressable onPress={()=>props.onChoose(2)}>
                    <View style={headerStyles.headerTextView}>
                        {
                            props.choice==2&&<LinearGradient style={{width:5,height:'100%',position:'absolute',left:0,borderRadius:10,opacity:1}} colors={['#0dc2e3','#3686e7']}/>
                        }
                        <Text style={[headerStyles.headerText,props.choice==2?headerStyles.headerSelected:'']}>约球</Text>
                    </View>
                </Pressable>
                
                
                
                
            </View>
            
        </View>
    )
}


const HomePage = (props) => {

    let [postListFollow,setPostListFollow]=useState([])
    let [postListHot,setPostListHot]=useState([])
    let [postListAll,setPostListAll]=useState([])

    const widthInit=12
    let choiceAni= useRef(new Animated.Value(0)).current
    let left=choiceAni.interpolate({
        inputRange: [0, Dimensions.get('window').width*0.5,Dimensions.get('window').width*1,Dimensions.get('window').width*1.5,Dimensions.get('window').width*2],
        outputRange: [`${100/3/2-widthInit/2}%`,`${100/3/2-widthInit/2}%`,`${50-widthInit/2}%`,`${50-widthInit/2}%`, `${100-100/3/2-widthInit/2}%`],
        extrapolate: "clamp"
    });
    let width=choiceAni.interpolate({
        inputRange: [0, Dimensions.get('window').width*0.5,Dimensions.get('window').width*1,Dimensions.get('window').width*1.5,Dimensions.get('window').width*2],
        outputRange: [`${widthInit}%`, `${widthInit+100/3}%`,`${widthInit}%`,`${widthInit+100/3}%`,`${widthInit}%`],
        extrapolate: "clamp"
    });

    useEffect(()=>{
        getHomePosts().then((res)=>{
            setPostListFollow(res.map((item,index)=>{
                return item
            }))
            // setPostListHot(res.map((item,index)=>{
            //     return item
            // }))
            // setPostListAll(res.map((item,index)=>{
            //     return item
            // }))
        })
        // fetch('http://localhost:8081/data/postList.json').then((res)=>res.json())
        // .then((resJson)=>{
        //     setPostListFollow(resJson.data.map((item,index)=>{
        //         return item
        //     }))
        //     setPostListHot(resJson.data.map((item,index)=>{
        //         return item
        //     }))
        //     setPostListAll(resJson.data.map((item,index)=>{
        //         return item
        //     }))
        // }).catch((err)=>{
        //     console.log(err)
        // })
    },[])

    

    // postListFollow=postListHot=postListAll=[{
    //     postId:1,
    //     type:1,
    //     commuName:'足球圈',
    //     commuNum:[3854,16430],
    //     postTitle:'四川大学出版学院挂牌仪式举行',
    //     postContent:'北京时间11月30日凌晨，卡塔尔世界杯B组最后一轮两场比赛同时开打。最终英格兰队3比0击败威尔士队，笑傲英伦德比的前者以小组头名晋级，“欧洲红龙”威尔士队则被淘汰出局；另一场比赛美国队1比0小胜伊朗队，反超对手升至小组第二，也拿到了淘汰赛的资格。根据淘汰赛的对阵安排，B组头名出线的英格兰队将与A组第二的塞内加尔队展开对话，而B组第二名的美国队则将与A组第一的荷兰队展开交锋。',
    //     communityAvatar:require('../../static/football.png')
    // },{
    //     postId:2,
    //     type:1,
    //     commuName:'篮球圈',
    //     commuNum:[3855,16431],
    //     postTitle:'电子科技大学出版学院挂牌仪式举行',
    //     postContent:'四川大学出版学院挂牌仪式举行',
    //     communityAvatar:require('../../static/basketball.png')
    // },{
    //     postId:3,
    //     type:0,
    //     commuName:'足球圈',
    //     commuNum:[3856,16432],
    //     postTitle:'四川大学出版学院挂牌仪式举行',
    //     postContent:'四川大学出版学院挂牌仪式举行',
    //     communityAvatar:require('../../static/football.png')
    // },{
    //     postId:4,
    //     type:0,
    //     commuName:'乒乓球圈',
    //     commuNum:[3857,16433],
    //     postTitle:'四川大学出版学院挂牌仪式举行',
    //     postContent:'四川大学出版学院挂牌仪式举行',
    //     communityAvatar:require('../../static/tabletennis.png')
    // }]

    const naviToPost=(postId)=>{
        props.navigation.navigate("PostDetail",{postId:postId})
    }

    let [page,setPage]=useState(0)
    
    
    const changePage=(index)=>{
        setPage(index)
        // if(index==0){
        //     Animated.timing(choiceAni,{
        //         toValue:0,
        //         duration:300,
        //         useNativeDriver:false
        //     }).start()
        // }
        // else if(index==1){
        //     Animated.timing(choiceAni,{
        //         toValue:33,
        //         duration:300,
        //         useNativeDriver:false
        //     }).start()
        // }else if(index==2){
        //     Animated.timing(choiceAni,{
        //         toValue:66,
        //         duration:300,
        //         useNativeDriver:false
        //     }).start()
        // }
            
    }

    let [type,setType]=useState([0,0,0])
    const [refresh,setRefresh]=useState(false)
    const onRefresh=()=>{
        setRefresh(true)
        setTimeout(() => {
            getHomePosts().then((res)=>{
                setPostListFollow(res.map((item,index)=>{
                    return item
                }))
                // setPostListHot(res.map((item,index)=>{
                //     return item
                // }))
                // setPostListAll(res.map((item,index)=>{
                //     return item
                // }))
                setRefresh(false)
            })
        }, 2000);
    }

    return (
        <>
            <View style={[styles.background]}>
                <Image source={require('../../static/background.png')} style={styles.image}/>
            </View>


            <View style={[styles.mainPage]}>
                <View style={styles.header}>
                    <View style={{height:StatusBar.currentHeight}}></View>

                    <View style={styles.searchView}>
                        {/* <View style={styles.search}>

                        </View> */}
                        <View style={styles.commuChoice}> 
                            <Animated.Text style={[styles.commuChoiceText,page==0&&styles.choiceSelected]}>关注</Animated.Text>
                            <Text style={[styles.commuChoiceText,page==1&&styles.choiceSelected]}>热门</Text>
                            <Text style={[styles.commuChoiceText,page==2&&styles.choiceSelected]}>全部</Text>
                            <Animated.View style={[styles.choiceBorder,{left:left,width:width}]}>
                                {/* <View style={styles.borderContent}></View> */}
                            </Animated.View>
                        </View>
                        <Image source={require('../../static/search.png')} style={styles.search}></Image>
                        <Pressable style={styles.avatarView} onPress={()=>props.navigation.navigate("My")}>
                            <Image source={require('../../static/avatar.jpg')} style={styles.avatar}></Image>
                        </Pressable>
                        
                    </View>
                </View>
                

                <Swiper style={styles.swiper} loop={false} showsPagination={false} onIndexChanged={(index)=>changePage(index)}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: {
                                x: choiceAni
                            }
                        }
                    }],{
                        useNativeDriver:false
                    })}
                >
                    <FlatList
                        style={styles.postScroll}
                        showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={
                            ()=>(
                            <ListHeader 
                                choice={type[0]}
                                onChoose={(res)=>{
                                    setType(type.map((item,index)=>{
                                        return index==0?res:item
                                    }))
                                }} 
                            />
                        )}
                        ListFooterComponent={()=>{
                            return(
                                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                                    <Text>暂时只有这么多啦~</Text>
                                </View>
                            )
                        }}
                        refreshControl={
                            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                        }
                        data={postListFollow}
                        renderItem={({ item, index, separators }) => {
                            if(type[0]==0){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }else if(type[0]==1&&item.postType==0){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }else if(type[0]==2&&item.postType==1){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }
                        }}
                    />
                    <FlatList
                        style={styles.postScroll}
                        showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={
                            ()=>(
                            <ListHeader 
                                choice={type[1]}
                                onChoose={(res)=>
                                    setType(type.map((item,index)=>{
                                        return index==1?res:item
                                    }))
                                } 
                            />
                        )}
                        ListFooterComponent={()=>{
                            return(
                                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                                    <Text>暂时只有这么多啦~</Text>
                                </View>
                            )
                        }}
                        refreshControl={
                            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                        }
                        data={postListFollow}
                        renderItem={({ item, index, separators }) => {
                            if(type[1]==0){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }else if(type[1]==1&&item.postType==0){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }else if(type[1]==2&&item.postType==1){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }
                        }}
                    />
                    <FlatList
                        style={styles.postScroll}
                        showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={
                            ()=>(
                            <ListHeader
                                choice={type[2]}
                                onChoose={(res)=>
                                    setType(type.map((item,index)=>{
                                        return index==2?res:item
                                    }))
                                } 
                            />
                        )}
                        ListFooterComponent={()=>{
                            return(
                                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                                    <Text>暂时只有这么多啦~</Text>
                                </View>
                            )
                        }}
                        refreshControl={
                            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                        }
                        data={postListFollow}
                        renderItem={({ item, index, separators }) => {
                            if(type[2]==0){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }else if(type[2]==1&&item.postType==0){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }else if(type[2]==2&&item.postType==1){
                                return(
                                    <Pressable onPress={()=>{naviToPost(item.postId)}} key={item.postId}>
                                        <HomePosts {...item}></HomePosts>
                                    </Pressable>
                                )
                            }
                        }}
                    />
                </Swiper>
                

            </View>
        </>
    )
}

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        backgroundColor:'rgb(240,240,240)'
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    image:{
        width:'100%',

    },

    mainPage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    searchView: {
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        marginTop: 10,
        height: 50,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5
    },
    commuChoice:{
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        // marginTop: 10,
        width:'60%',
        // height:'100%',
        display:'flex',
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        flexDirection:'row',
        // justifyContent:'space-around',
        position:'relative'
    },
    commuChoiceText:{
        fontSize:17,
        color:'rgba(0,0,0,0.5)',
        // color:'white',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        flex:1,
        // display:'flex',
        fontWeight:'700',
        // justifyContent:'center',
        // alignItems:'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    choiceSelected:{
        fontSize:19,
        fontWeight:'900',
        color:'#3686e7',
    },
    choiceBorder:{
        // borderRadius:10,
        height:5,
        backgroundColor:'#3686e7',
        borderRadius:100,
        // backgroundColor:'white',
        // width:'33%',
        position:'absolute',
        bottom:0,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        // borderWidth:1,
        // borderColor:'red'
        // left:15
    },
    borderContent:{
        borderRadius:10,
        height:'100%',
        width:'30%',
        backgroundColor:'#3686e7',
    },
    search: {
        height:25,
        width:25,
        position:'absolute',
        right:40,
        opacity:0.5
    },
    avatarView:{
        position:'absolute',
        left:20,
        height:40,
        width:40,
        borderRadius:40,
        overflow:'hidden'
    },
    avatar:{
        height:40,
        width:'auto'
        
    },
    swiper:{
        // width: '100%',
        // height: '100%',
        // // borderStyle:'solid',
        // // borderColor:'red',
        // // borderWidth:2,
        // flexShrink: 0.5,
        // marginTop: 5,
    },
    postScroll: {
        width: '100%',
        height: '100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        // flexShrink: 0.5,
        // marginTop: 5,
    },
    
})


const headerStyles=StyleSheet.create({
    headerView:{
        margin: 10,
        marginBottom:0,
        width:'100%'
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    headerTextView:{
        width:60,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:16,
        width:38,
        
    },
    headerSelected:{
        fontSize:16,
        fontWeight:'700',
        color:'rgba(0,0,0,0.8)'
    }
})

export default HomePage;