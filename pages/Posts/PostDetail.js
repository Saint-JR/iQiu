import {View,Text,Pressable, StyleSheet,StatusBar,Image} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const Navigation=(props)=>{
    const navi=()=>{
        props.navigation.goBack()
    }

    return(
        <View style={naviStyles.navigationContainer}>
            <View style={{height:StatusBar.currentHeight}}></View>
            <View style={naviStyles.navigation}>
                <Pressable onPress={()=>{navi()}} style={naviStyles.back}>
                    <Image source={require('../../static/back.png')} style={naviStyles.backImage}/>
                </Pressable>
                
                <View style={naviStyles.community}>
                    
                    <Image source={require('../../static/football.png')} style={naviStyles.communityImage}/>
                    <Text style={naviStyles.communityText}>足球圈</Text>
                </View>
            </View>
        </View>
    )
}

const PostContent=(props)=>{
    const PostHeader=()=>{
        
        // let choiceAni= useRef(new Animated.Value(0)).current
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

        return(
            <View>
                <View style={postHeaderStyles.posterInfoView}>
                    <View style={postHeaderStyles.posterInfo}>
                        <View style={postHeaderStyles.posterAvatarView}>
                            <Image source={require('../../static/avatar.jpg')} 
                                style={postHeaderStyles.posterAvatar}/>
                        </View>
                        <View style={postHeaderStyles.posterNameContainer}>
                            <Text style={postHeaderStyles.posterName}>D1nNer-</Text>
                            <View style={postHeaderStyles.posterDetail}>
                                <Text style={postHeaderStyles.postDate}>11-30</Text>
                                <Text style={postHeaderStyles.postDate}>地点:上海</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View style={postHeaderStyles.detail}>
                        <Text style={postHeaderStyles.detailText}>详情</Text>
                    </View>
                </View>

                <View style={contentStyles.contentContainer}>
                    <Text style={contentStyles.title}>在高铁上出丑了</Text>
                    <Text style={contentStyles.content}>
                        北京时间12月1日凌晨3:00，卡塔尔世界杯小组赛C组波兰对阵阿根廷的比赛在974球场进行。凭借麦卡利斯特和阿尔瓦雷斯的进球，阿根廷2-0击败波兰，两胜一负积6分，以小组第一出线，波兰小组第二晋级。赛后，梅西表示：“罚丢那个点球之后，我的确很生气！但在我犯下那个错误之后，球队变得更加强大了。我们知道，一旦打破僵局之后，比赛进程就会被改变。”“与澳大利亚的比赛将会非常艰难，谁都有可能获胜，一切都非常公平，我们必须像往常一样以最好的状态准备比赛。”据悉，北京时间12月4日凌晨3点，阿根廷vs澳大利亚，梅西将迎来个人职业生涯第1000场比赛。
                    </Text>
                    <View style={contentStyles.operateView}>
                        <View style={contentStyles.operate}>
                            <Image source={require('../../static/share.png')} style={contentStyles.operateImage}/>
                            <Text style={contentStyles.operateText}>分享</Text>
                        </View>
                        <View style={contentStyles.operate}>
                            <Image style={contentStyles.operateImage} source={require('../../static/like.png')} />
                            <Text style={contentStyles.operateText}>点赞</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={contentStyles.contentDivider}></View>
                <View style={contentStyles.filterView}>
                    <View style={contentStyles.filter}>
                        <Text style={[contentStyles.filterText,contentStyles.selectedText]}>全部回复</Text>
                        <Text style={contentStyles.filterText}>只看楼主</Text>
                    </View>
                    <View style={contentStyles.orderView}>
                        <View style={contentStyles.selectView}></View>
                        <Text style={contentStyles.orderText}>热门</Text>
                        <Text style={[contentStyles.orderText,contentStyles.selectedText]}>正序</Text>
                        <Text style={contentStyles.orderText}>倒序</Text>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={postStyles.postView}>
            <FlatList style={postStyles.postScroll}
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent={()=><PostHeader/>}
            >

            </FlatList>
        </View>
        
    )
}

const Operation=(props)=>{
    return(
        <View style={operationStyles.operationView}>
            <View style={operationStyles.inputView}></View>
            <Image source={require('../../static/comment.png')} style={operationStyles.image}/>
            <Image source={require('../../static/like.png')} style={operationStyles.image}/>
            <Image source={require('../../static/share.png')} style={operationStyles.image}/>
        </View>
        
    )
}

const PostDetail=(props)=>{
    

    return(
        <>
            <View style={mainStyles.view}>
                <Navigation navigation={props.navigation}/>
                <PostContent/>
                <Operation/>
            </View>
        </>
    )
}


const mainStyles=StyleSheet.create({
    view:{
        height:'100%',
        width:'100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        display:'flex',
        // backgroundColor:'red'
    },
})


const naviStyles=StyleSheet.create({
    
    back:{
        position:'absolute',
        left:30
    },
    backImage:{
        height:30,
        width:30
    },
    navigationContainer:{
        backgroundColor:'white',
        
    },
    navigation:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
        borderColor:'rgba(100,100,100,0.1)',
        borderBottomWidth:1,
    },
    communityImage:{
        height:25,
        width:25,
        borderRadius:8,
        borderStyle:'solid',
        borderColor:'rgba(50,50,50,0.1)',
        borderWidth:1,
        marginRight:5
    },
    communityText:{
        fontSize:15,
        color:'rgba(0,0,0,0.8)'
    },
    community:{ 
        backgroundColor:'rgba(240,240,240,1)',
        padding: 7,
        paddingRight:15,
        paddingLeft:15,
        borderRadius:100,
        margin:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    }
})

const postHeaderStyles=StyleSheet.create({
    posterInfoView:{
        margin:20,
        marginLeft:15,
        marginRight:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:1,
    },
    posterInfo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    posterAvatarView:{
        height:50,
        width:50,
        borderRadius:50,
        overflow:'hidden'
    },
    posterAvatar:{
        height:50,
        width:50,
    },
    posterNameContainer:{
        marginLeft:10
    },
    posterName:{
        fontSize:16,
        color:'rgba(0,0,0,0.8)',
        marginBottom:5
    },
    posterDetail:{
        display:'flex',
        flexDirection:'row'
    },
    postDate:{
        color:'rgba(0,0,0,0.4)',
        marginRight:10
    },
    detail:{
        borderRadius:100,
        // height:30,
        backgroundColor:'rgba(54,134,231,0.4)',
        padding:8,
        paddingLeft:18,
        paddingRight:18,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    detailText:{
        fontSize:15,
        color:'#3686e7',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:1,
    }
})

const contentStyles=StyleSheet.create({
    contentContainer:{
        margin:15,
        marginTop:0,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    title:{
        fontSize:25,
        fontWeight:'900',
        color:'rgba(0,0,0,0.8)',
        marginBottom:20
    },
    content:{
        fontSize:16,
        color:'rgba(0,0,0,0.8)',
        letterSpacing:1,
        lineHeight:26
    },
    operateView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30
    },
    operate:{
        display:'flex',
        alignItems:'center'
    },
    operateText:{
        marginTop:5,
        fontSize:12
    },
    operateImage:{
        height:25,
        width:25
    },
    contentDivider:{
        width:'100%',
        marginTop:10,
        height:8,
        backgroundColor:'rgba(240,240,240,1)'
    },
    filterView:{
        margin:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    filter:{
        width:'43%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:'red'
    },
    filterText:{
        fontSize:15,
        color:'rgba(0,0,0,0.4)'
    },
    selectedText:{
        fontWeight:'700',
        color:'rgba(0,0,0,0.8)'
    },
    orderView:{
        width:'43%',
        display:'flex',
        flexDirection:'row',
        // padding:10,
        
        borderRadius:30,
        backgroundColor:'rgb(240,240,240)'
    },
    orderText:{
        flex:1,
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:13,
        color:'rgba(0,0,0,0.4)',
        paddingTop:5,
        paddingBottom:5,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    selectView:{
        position:'absolute',
        height:'100%',
        width:'33%',
        left:'33%',
        backgroundColor:'white',
        borderRadius:100,
        borderColor:'rgba(100,100,100,0.1)',
        borderWidth:1
    }
})

const postStyles=StyleSheet.create({
    postView:{
        height:'100%',
        width:'100%',
        flexShrink:0.5,
        backgroundColor:'white'
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    postScroll:{
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    }
})

const operationStyles=StyleSheet.create({
    operationView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
        padding:10,
        borderColor:'rgba(100,100,100,0.1)',
        borderTopWidth:1,
        borderStyle:'solid'
    },
    inputView:{
        width:'60%',
        height:40,
        backgroundColor:'rgb(240,240,240)',
        borderRadius:40,

    },
    image:{
        height:25,
        width:25
    }
    
})

export default PostDetail;