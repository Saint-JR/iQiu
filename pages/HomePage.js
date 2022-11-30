import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable ,FlatList} from 'react-native'
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

    return (
        <>
            <View style={[styles.background]}>
                <LinearGradient style={styles.backColor} 
                    colors={["rgba(92,163,214,0.3)", "rgba(240,240,240,1)"]}
                    locations={[0.8,1]}
                ></LinearGradient>
                <View style={styles.backgroundBall1}></View>
                <View style={styles.backgroundBall2}></View>
                <BlurView style={styles.blur}
                    blurType="light"
                    blurAmount={30} />
            </View>


            <View style={[styles.mainPage]}>
                <View style={{height:StatusBar.currentHeight}}></View>

                <View style={styles.searchView}>
                    {/* <View style={styles.search}>

                    </View> */}
                    <View style={styles.commuChoice}> 
                        <Text style={[styles.commuChoiceText,styles.choiceSelected]}>关注</Text>
                        <Text style={styles.commuChoiceText}>热门</Text>
                        <Text style={styles.commuChoiceText}>全部</Text>
                        <View style={styles.choiceBorder}></View>
                    </View>
                    
                </View>

                <FlatList
                    style={styles.postScroll}
                    data={postList}
                    renderItem={({ item, index, separators }) => (
                        <Pressable onPress={()=>{naviToPost(index)}}>
                            <Post {...item}></Post>
                        </Pressable>
                    )}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 10,
        height: 50,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    commuChoice:{
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        marginTop: 10,
        width:'60%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    commuChoiceText:{
        fontSize:15,
        color:'rgba(0,0,0,0.8)',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        width:45,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    choiceSelected:{
        fontSize:17,
        fontWeight:'700',
        
    },
    choiceBorder:{
        borderRadius:10,
        height:7,
        backgroundColor:'#06d3e0',
        width:35,
        position:'absolute',
        bottom:0,
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
        marginTop: 10,
    },
    
})

export default HomePage;