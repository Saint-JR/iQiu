import { useEffect, useState } from "react"
import { StyleSheet, Text,View ,StatusBar,Image, FlatList,Pressable,Animated} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { color } from "react-native-reanimated"
import MyPosts from '../../component/MyPosts'

const Navigation=(props)=>{

    return(
        <View style={{position:'absolute',width:'100%',zIndex:3}}>
            <Animated.View style={{backgroundColor:'white',opacity:props.opacity}}>
                <View style={{height:StatusBar.currentHeight}}></View>
                <View style={naviStyles.userInfo}>
                    <Image source={require('../../static/avatar.jpg')} style={naviStyles.userAvatar} />
                    <Text style={naviStyles.userName}>D1nNer-</Text>
                </View>
                
            </Animated.View>
        </View>
    )
}

const Header=(props)=>{
    return(
        <>
            <LinearGradient style={{width:'100%',height:'100%',position:'absolute'}} colors={['#0dc2e3','#3686e7']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                        <Text style={[headerStyles.choice,headerStyles.selected]}>帖子 60</Text>
                        <View style={[headerStyles.choiceTip,{opacity:1}]}></View>
                    </View>
                    <View style={headerStyles.choiceContainer}>
                        <Text style={[headerStyles.choice]}>关注圈子</Text>
                        <View style={[headerStyles.choiceTip,{opacity:0}]}></View>
                    </View>
                </View>

            </View>
            
        </>
    )
}

const My=(props)=>{

    let postData=[]

    postData=[{
        pid:1,
        type:0,
        userName:'D1nNer-',
        time:'12-06',
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'北京时间11月30日凌晨，卡塔尔世界杯B组最后一轮两场比赛同时开打。最终英格兰队3比0击败威尔士队，笑傲英伦德比的前者以小组头名晋级，“欧洲红龙”威尔士队则被淘汰出局；另一场比赛美国队1比0小胜伊朗队，反超对手升至小组第二，也拿到了淘汰赛的资格。根据淘汰赛的对阵安排，B组头名出线的英格兰队将与A组第二的塞内加尔队展开对话，而B组第二名的美国队则将与A组第一的荷兰队展开交锋。',
        avatar:require('../../static/avatar.jpg'),
        commuName:'足球圈'
    },{
        pid:2,
        type:0,
        userName:'D1nNer-',
        time:'12-06',
        postTitle:'电子科技大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../../static/avatar.jpg'),
        commuName:'足球圈'
    },{
        pid:3,
        type:0,
        userName:'D1nNer-',
        time:'12-06',
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../../static/avatar.jpg'),
        commuName:'足球圈'
    },{
        pid:4,
        type:0,
        userName:'D1nNer-',
        time:'12-06',
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../../static/avatar.jpg'),
        commuName:'足球圈'
    }]

    const naviToPost=(index)=>{
        // console.log(props)
        props.navigation.navigate("PostDetail")
    }



    let scrollY = new Animated.Value(0);
    // let opacity=1

    let opacity = scrollY.interpolate({
        inputRange: [0,220],
        outputRange: [0,1],
        extrapolate: "clamp"
    });

    // const getOpacity=(e)=>{
    //     if(e.nativeEvent.contentOffset.y<220){
    //         setOpacity((220-e.nativeEvent.contentOffset.y)/220)
    //     }
    // }

    return(
        <>
            <Navigation navigation={props.navigation} opacity={opacity}/>
            <FlatList 
                style={mainStyles.list}
                ListHeaderComponent={()=><Header/>}
                ListFooterComponent={()=>{
                    return(
                        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                            <Text>暂时只有这么多啦~</Text>
                        </View>
                    )
                }}
                data={postData}
                renderItem={({ item, index, separators }) => (
                    <Pressable onPress={()=>{naviToPost(index)}} key={item.pid}>
                        <MyPosts {...item}></MyPosts>
                    </Pressable>
                )}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: {
                            y: scrollY
                        }
                    }
                }],{
                    useNativeDriver:false
                })}
                // scrollEventThrottle={500}
            />
        </>
        
    )
}

const mainStyles=StyleSheet.create({
    list:{
        backgroundColor:'rgba(240,240,240,1)'
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
    userInfo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:25,
    },
    userAvatar:{
        height:35,
        width:35,
        borderRadius:20,
        borderWidth:0.7,
        borderColor:'rgba(0,0,0,0.6)'
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