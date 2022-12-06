import { useEffect, useState } from "react"
import { StyleSheet, Text,View ,StatusBar,Image, FlatList,Pressable,Animated} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { color } from "react-native-reanimated"
import CommunityPost from '../../component/CommunityPost'

const Navigation=(props)=>{

    const emitHeight=(e)=>{
        // console.log(e.nativeEvent.layout.height)
        props.onGetHeight(e.nativeEvent.layout.height)
    }

    return(
        <View style={{position:'absolute',width:'100%',zIndex:3}} onLayout={(e)=>{emitHeight(e)}}>
            <Animated.View style={[naviStyles.naviContainer,{opacity:props.opacity1}]}>
                <View style={{height:StatusBar.currentHeight}}></View>
                <View style={naviStyles.naviView}>
                    <View style={naviStyles.backView}>
                        <Image source={require('../../static/back.png')} style={[naviStyles.backImage,{tintColor:'white'}]} />
                    </View>
                    <View style={naviStyles.opeView}>
                        <Image source={require('../../static/search.png')}  style={[naviStyles.backImage,{tintColor:'white'}]}/>
                        <Image source={require('../../static/message.png')}  style={[naviStyles.backImage,{tintColor:'white'}]}/>
                        <Image source={require('../../static/share.png')}  style={[naviStyles.backImage,{tintColor:'white'}]}/>
                    </View>
                </View>
            </Animated.View>
            <Animated.View style={[naviStyles.naviContainer2,{opacity:props.opacity2}]}>
                <View style={{height:StatusBar.currentHeight}}></View>
                <View style={naviStyles.naviView}>
                    <View style={naviStyles.backView}>
                        <Pressable onPress={()=>props.navigation.goBack()}>
                            <Image source={require('../../static/back.png')} style={naviStyles.backImage} />
                        </Pressable>
                        
                        <Text style={naviStyles.commuName}>足球圈吧</Text>
                    </View>
                    <View style={naviStyles.opeView}>
                        <Image source={require('../../static/search.png')}  style={naviStyles.backImage}/>
                        <Image source={require('../../static/message.png')}  style={naviStyles.backImage}/>
                        <Image source={require('../../static/share.png')}  style={naviStyles.backImage}/>
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}

const Header=(props)=>{
    return(
        <>
            <LinearGradient style={{width:'100%',height:'100%',position:'absolute'}} colors={['#0dc2e3','#3686e7']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                <Image source={require('../../static/backicon.png')} style={headerStyles.backicon}/>
            </LinearGradient>
            <View>
                <View style={{height:props.occupyHeight}}></View>
                <View style={headerStyles.commuInfoView}>
                    <View style={headerStyles.commuInfoContainer}>
                        <Image source={require('../../static/football.png')} style={headerStyles.commuAvatar}  />
                        <View style={headerStyles.commuInfo}>
                            <Text style={headerStyles.commuName}>足球圈</Text>
                            <Text style={headerStyles.commuLevel}>LV1  初来乍到</Text>
                            <View style={{marginTop:5}}>
                                <View style={headerStyles.levelAll}></View>
                                <View style={headerStyles.level}></View>
                            </View>
                        </View>
                    </View>
                    <View style={headerStyles.followView}>
                        <Text style={headerStyles.followText}>关注</Text>
                    </View>
                </View>
            </View>
            <View style={headerStyles.headerContainer}>
                <View style={headerStyles.topPost}>
                    <View style={headerStyles.topView}>
                        <Text style={{color:'white',fontSize:10}}>圈规</Text>
                    </View>
                    <Text style={{color:'rgba(0,0,0,0.8)',fontSize:15,marginLeft:10}}>【足球圈圈规】6月17日更新 发帖必读</Text>
                </View>
                <View style={headerStyles.topPost}>
                    <View style={headerStyles.topView}>
                        <Text style={{color:'white',fontSize:10}}>置顶</Text>
                    </View>
                    <Text style={{color:'rgba(0,0,0,0.8)',fontSize:15,marginLeft:10}}>【足球】2022年7月至12月封禁名单</Text>
                </View>

                <View style={headerStyles.divider}></View>
                <View style={headerStyles.choiceView}>
                    <View style={headerStyles.choiceContainer}>
                        <Text style={[headerStyles.choice,headerStyles.selected]}>热门</Text>
                        <View style={[headerStyles.choiceTip,{opacity:1}]}></View>
                    </View>
                    
                    <View style={headerStyles.choiceContainer}>
                        <Text style={[headerStyles.choice]}>最新</Text>
                        <View style={[headerStyles.choiceTip,{opacity:0}]}></View>
                    </View>
                    <View style={headerStyles.choiceContainer}>
                        <Text style={[headerStyles.choice]}>全部</Text>
                        <View style={[headerStyles.choiceTip,{opacity:0}]}></View>
                    </View>
                </View>
            </View>
            
        </>
    )
}

const CommutyDetail=(props)=>{

    let communityInfo={}

    communityInfo={
        commuName:'足球圈',
        commuAvatar:require('../../static/football.png'),
    }

    let postData=[]

    postData=[{
        pid:1,
        userName:'D1nNer-',
        time:'1小时前',
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'北京时间11月30日凌晨，卡塔尔世界杯B组最后一轮两场比赛同时开打。最终英格兰队3比0击败威尔士队，笑傲英伦德比的前者以小组头名晋级，“欧洲红龙”威尔士队则被淘汰出局；另一场比赛美国队1比0小胜伊朗队，反超对手升至小组第二，也拿到了淘汰赛的资格。根据淘汰赛的对阵安排，B组头名出线的英格兰队将与A组第二的塞内加尔队展开对话，而B组第二名的美国队则将与A组第一的荷兰队展开交锋。',
        avatar:require('../../static/avatar.jpg')
    },{
        pid:2,
        userName:'D1nNer-',
        time:'2小时前',
        postTitle:'电子科技大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../../static/avatar.jpg')
    },{
        pid:3,
        userName:'D1nNer-',
        time:'3小时前',
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../../static/avatar.jpg')
    },{
        pid:4,
        userName:'D1nNer-',
        time:'4小时前',
        postTitle:'四川大学出版学院挂牌仪式举行',
        postContent:'四川大学出版学院挂牌仪式举行',
        avatar:require('../../static/avatar.jpg')
    }]

    const naviToPost=(index)=>{
        // console.log(props)
        props.navigation.navigate("PostDetail")
    }


    let [occupyHeight,setOccupyHeight]=useState(100)
    let scrollY = new Animated.Value(0);
    // let opacity=1
    let opacity1 = scrollY.interpolate({
        inputRange: [0,220],
        outputRange: [1,0],
        extrapolate: "clamp"
    });

    let opacity2 = scrollY.interpolate({
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
            <Navigation onGetHeight={(e)=>setOccupyHeight(e)} navigation={props.navigation} opacity1={opacity1} opacity2={opacity2}/>
            <FlatList 
                style={mainStyles.list}
                ListHeaderComponent={()=><Header occupyHeight={occupyHeight}/>}
                data={postData}
                renderItem={({ item, index, separators }) => (
                    <Pressable onPress={()=>{naviToPost(index)}} key={item.pid}>
                        <CommunityPost {...item}></CommunityPost>
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
    naviView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        marginBottom:20,
        // backgroundColor:'white'
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    naviContainer:{
        position:'absolute',
        width:'100%'
    },
    naviContainer2:{
        backgroundColor:'white'
    },
    backView:{
        width:'30%',
        marginLeft:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    backImage:{
        height:25,
        width:25
    },
    commuName:{
        fontSize:17,
        color:'rgba(0,0,0,0.8)',
        marginLeft:10,
    },
    opeView:{
        display:'flex',
        flexDirection:'row',
        width:'30%',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:15,
    },

})

const headerStyles=StyleSheet.create({
    commuInfoView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:15,
        marginRight:15,
        marginBottom:20,
    },
    backicon:{
        height:180,
        width:180,
        resizeMode:'contain',
        position:'absolute',
        right:40,
        top:20,
        opacity:0.6
    },
    commuInfoContainer:{
        display:'flex',
        flexDirection:'row',
    },
    commuAvatar:{
        height:70,
        width:70,
        borderRadius:25,
        borderWidth:1,
        borderColor:'white',
    },
    commuInfo:{
        marginLeft:15,
    },
    commuName:{
        fontSize:21,
        color:'white',
        fontWeight:'700'
    },
    commuLevel:{
        marginTop:5,
        fontSize:11,
        color:'white',

    },
    levelAll:{
        width:80,
        height:3,
        backgroundColor:'white'
    },
    level:{
        width:'50%',
        height:3,
        backgroundColor:'#e6b800',
        position:'absolute'
    },
    followView:{
        padding:6,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:100,
        backgroundColor:'white'
    },
    followText:{
        fontSize:15,
        color:'rgba(0,0,0,0.8)'
    },
    headerContainer:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'rgba(240,240,240,1)',
        paddingTop:25
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    topPost:{
        display:'flex',
        margin:15,
        marginTop:0,
        flexDirection:'row',
        alignItems:'center'

    },
    topView:{
        borderRadius:5,
        padding:3,
        paddingLeft:6,
        paddingRight:6,
        backgroundColor:'#3686e7'
    },
    divider:{
        borderStyle:'solid',
        borderColor:'rgba(230,230,230,1)',
        borderWidth:0.7,
        // width:'100%',
        // height:10,
        // backgroundColor:'red'
    },
    choiceView:{
        marginLeft:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
        // marginBottom:15

    },
    choiceContainer:{
        display:'flex',
        alignItems:'center',
        marginRight:20,
    },
    choice:{
        fontSize:15,
        color:'rgba(0,0,0,0.6)',
        
    },
    selected:{
        fontWeight:'700',
        color:'rgba(0,0,0,0.8)'
    },
    choiceTip:{
        height:4,
        width:17,
        borderRadius:4,
        backgroundColor:'#3686e7'
    }
})

export default CommutyDetail