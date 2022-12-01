import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable ,FlatList, Image, Easing, Animated} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { naviHeight } from '../component/Navigation'
import { useEffect } from 'react';
import Post from '../component/Post'
import {ListHeader} from '../component/Post'
import Swiper from 'react-native-swiper';

const HomePage = (props) => {

    let postList=[]

    postList=[{
        pid:1,
        commuName:'足球圈',
        commuNum:[3854,16430],
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'北京时间11月30日凌晨，卡塔尔世界杯B组最后一轮两场比赛同时开打。最终英格兰队3比0击败威尔士队，笑傲英伦德比的前者以小组头名晋级，“欧洲红龙”威尔士队则被淘汰出局；另一场比赛美国队1比0小胜伊朗队，反超对手升至小组第二，也拿到了淘汰赛的资格。根据淘汰赛的对阵安排，B组头名出线的英格兰队将与A组第二的塞内加尔队展开对话，而B组第二名的美国队则将与A组第一的荷兰队展开交锋。',
        avatar:require('../static/football.png')
    },{
        pid:2,
        commuName:'篮球圈',
        commuNum:[3855,16431],
        postTitle:'电子科技大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../static/basketball.png')
    },{
        pid:3,
        commuName:'足球圈',
        commuNum:[3856,16432],
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../static/football.png')
    },{
        pid:4,
        commuName:'乒乓球圈',
        commuNum:[3857,16433],
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../static/tabletennis.png')
    }]

    const naviToPost=(index)=>{
        props.navigation.navigate("PostDetail")
    }

    let [page,setPage]=useState(0)
    let choiceAni= useRef(new Animated.Value(16)).current
    
    const changePage=(index)=>{
        setPage(index)
        if(index==0){
            Animated.timing(choiceAni,{
                toValue:16,
                duration:300,
                useNativeDriver:false
            }).start()
        }
        else if(index==1){
            Animated.timing(choiceAni,{
                toValue:95,
                duration:300,
                useNativeDriver:false
            }).start()
        }else if(index==2){
            Animated.timing(choiceAni,{
                toValue:174,
                duration:300,
                useNativeDriver:false
            }).start()
        }
            
    }


    return (
        <>
            <View style={[styles.background]}>
                <Image source={require('../static/background.png')} style={styles.image}/>
            </View>


            <View style={[styles.mainPage]}>
                <View style={styles.header}>
                    <View style={{height:StatusBar.currentHeight}}></View>

                    <View style={styles.searchView}>
                        {/* <View style={styles.search}>

                        </View> */}
                        <View style={styles.commuChoice}> 
                            <Text style={[styles.commuChoiceText,page==0?styles.choiceSelected:'']}>关注</Text>
                            <Text style={[styles.commuChoiceText,page==1?styles.choiceSelected:'']}>热门</Text>
                            <Text style={[styles.commuChoiceText,page==2?styles.choiceSelected:'']}>全部</Text>
                            <Animated.View style={[styles.choiceBorder,{left:choiceAni}]}></Animated.View>
                        </View>
                        <Image source={require('../static/search.png')} style={styles.search}></Image>
                        <View style={styles.avatarView}>
                            <Image source={require('../static/avatar.jpg')} style={styles.avatar}></Image>
                        </View>
                        
                    </View>
                </View>
                

                <Swiper style={styles.swiper} loop={false} showsPagination={false} onIndexChanged={(index)=>changePage(index)}
                    onTouchEnd={(e,state,context)=>{console.log(e,state,context)}}
                    // onScrollBeginDrag={(e,state,context)=>{console.log(e,state,context)}}
                >
                    <FlatList
                        style={styles.postScroll}
                        showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={()=><ListHeader/>}
                        data={postList}
                        renderItem={({ item, index, separators }) => (
                            <Pressable onPress={()=>{naviToPost(index)}}>
                                <Post {...item}></Post>
                            </Pressable>
                        )}
                    />
                    <FlatList
                        style={styles.postScroll}
                        showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={()=><ListHeader/>}
                        data={postList}
                        renderItem={({ item, index, separators }) => (
                            <Pressable onPress={()=>{naviToPost(index)}}>
                                <Post {...item}></Post>
                            </Pressable>
                        )}
                    />
                    <FlatList
                        style={styles.postScroll}
                        showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={()=><ListHeader/>}
                        data={postList}
                        renderItem={({ item, index, separators }) => (
                            <Pressable onPress={()=>{naviToPost(index)}}>
                                <Post {...item}></Post>
                            </Pressable>
                        )}
                    />
                </Swiper>
                

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    // header:{
    //     backgroundColor:'#3686e7'
    // },
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
    blur: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(220,220,220,0.2)',
        blurRadius: 20,
        position: 'absolute',
        top: 0,
    },
    backColor: {
        // backgroundColor: 'rgba(92,163,214,0.3)',
        width: '100%',
        height: '100%'
    },
    backgroundBall1: {
        height: 170,
        width: 170,
        borderRadius: 170,
        position: 'absolute',
        top: -30,
        left: 0,
        backgroundColor: 'rgba(255,0,107,0.25)'
    },
    backgroundBall2: {
        height: 170,
        width: 170,
        borderRadius: 170,
        position: 'absolute',
        right: 0,
        top: -30,
        backgroundColor: 'rgba(95,132,247,0.3)'
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
        height:'100%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    commuChoiceText:{
        fontSize:17,
        color:'rgba(0,0,0,0.8)',
        // color:'white',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        width:45,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    choiceSelected:{
        fontSize:19,
        fontWeight:'900',
        
    },
    choiceBorder:{
        borderRadius:10,
        height:7,
        backgroundColor:'#3686e7',
        // backgroundColor:'white',
        width:40,
        position:'absolute',
        bottom:5,
        // left:15
    },
    search: {
        height:25,
        width:25,
        position:'absolute',
        right:40,
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

export default HomePage;