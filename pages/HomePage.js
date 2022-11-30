import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";
import { naviHeight } from '../component/Navigation'
import { useEffect } from 'react';
import Post from '../component/Post'

const HomePage = (props) => {

    let postList=[]

    postList=[{
        pid:1,
        commuName:'足球圈',
        commuNum:[3854,16430],
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行'
    },{
        pid:2,
        commuName:'足球圈',
        commuNum:[3855,16431],
        postTitle:'电子科技大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行'
    },{
        pid:3,
        commuName:'足球圈',
        commuNum:[3856,16432],
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行'
    },{
        pid:4,
        commuName:'足球圈',
        commuNum:[3857,16433],
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行'
    }]

    const naviToPost=(index)=>{
        props.navigation.navigate("PostDetail")
    }

    return (
        <>
            <View style={[styles.background]}>
                <LinearGradient style={styles.backColor} 
                    colors={["rgba(92,163,214,0.3)", "rgba(200,200,200,0.2)"]}
                    locations={[0.8,1]}
                ></LinearGradient>
                <View style={styles.backgroundBall1}></View>
                <View style={styles.backgroundBall2}></View>
                <BlurView style={styles.blur}
                    blurType="light"
                    blurAmount={20} />
            </View>


            <View style={[styles.mainPage]}>
                <View style={{height:StatusBar.currentHeight}}></View>

                <View style={styles.searchView}>
                    <View style={styles.search}>

                    </View>
                </View>

                <ScrollView style={styles.postScroll} 
                    keyboardDismissMode="on-drag"
                >
                    {
                        postList.map((post,index)=>{
                            return(
                                <Pressable key={index} onPress={()=>{naviToPost(index)}}>
                                    <Post {...post}></Post>
                                </Pressable>
                                
                            )
                        })
                    }
                </ScrollView>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pressable:{
        borderStyle:'solid',
        borderColor:'red',
        borderWidth:2,
    },
    background: {
        width: '100%',
        height: '100%',
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
        marginTop: 20,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        height: '100%',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 50
    },
    postScroll: {
        width: '100%',
        height: '100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        flexShrink: 0.5,
        marginTop: 20,
    },
    
})

export default HomePage;