import { useState ,useRef ,useEffect } from "react"
import { StyleSheet, Text,View ,StatusBar,Image, FlatList,Pressable,Animated,TextInput} from "react-native"
import { getCommunityInfo, getFollowCommunity } from "../../api/community"
import {insertPost} from '../../api/posts'

const PostContent=(props)=>{

    const Navigation=()=>{
        return(
            <View>
                <View style={{height:StatusBar.currentHeight}}></View>
                <View style={naviStyles.naviView}>
                    <Pressable onPress={()=>props.navigation.goBack()} style={{position:'absolute',left:0,}}>
                        <Image source={require('../../static/back.png')} style={naviStyles.backImage}/>
                    </Pressable>
                    <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Image source={require('../../static/chatPost.png')} style={{height:20,width:20,resizeMode:'contain',marginRight:5}} />
                        <Text style={naviStyles.chatPost}>发布闲聊</Text>
                    </View>
                    <Pressable style={naviStyles.pressable} onPress={()=>submit()}>
                        <Text style={naviStyles.post}>发布</Text>
                    </Pressable>
                    
                </View>
                <Animated.View style={[naviStyles.tipsView,{top:top}]} >
                    <View style={{height:StatusBar.currentHeight}}></View>
                    <View style={naviStyles.tipsContainer}>
                        <Image source={warning.state==-1?require('../../static/warning.png'):require('../../static/correct.png')} style={naviStyles.warningImage} />
                        <Text style={[naviStyles.warningText,{color:warning.state==-1?'rgb(216,30,6)':'#0fae34'}]}>{warning.text}</Text>
                    </View>
                </Animated.View>
            </View>
        )
    }


    const [communitySelected,setCommunitySelected]=useState(-1)
    let title=''
    let content=''
    const [warning,setWarning]=useState({
        state:-1,
        text:'请正确填写'
    })
    const tip=useRef(new Animated.Value(0)).current
    let top=tip.interpolate({
        inputRange:[0,1],
        outputRange:['-110%','0%']
    })

    const submit=()=>{
        if(communitySelected!=-1&&title.length>=5){
            console.log(1)
            let currentTime=new Date()
            let post={
                posterId:userId,
                title:title,
                content:content,
                postType:0,
                createTime:currentTime,
                lastCommentTime:currentTime,
                communityId:followCommunity[communitySelected].communityId,
            }
            insertPost(post)
            .then((res)=>{
                console.log(res)
                setWarning({
                    state:1,
                    text:'发送成功'
                })
                Animated.timing(tip,{
                    toValue:1,
                    duration:200,
                    useNativeDriver:false
                }).start()
                setTimeout(()=>{
                    Animated.timing(tip,{
                        toValue:0,
                        duration:200,
                        useNativeDriver:false
                    }).start()
                    props.navigation.goBack()
                },2000)
                
            }).catch((err)=>{
                console.log(err)
                setWarning({
                    state:-1,
                    text:'发送失败'
                })
                Animated.timing(tip,{
                    toValue:1,
                    duration:200,
                    useNativeDriver:false
                }).start()
                setTimeout(()=>{
                    Animated.timing(tip,{
                        toValue:0,
                        duration:200,
                        useNativeDriver:false
                    }).start()
                },2000)
            })
        }else if(communitySelected==-1){
            console.log(2)
            setWarning({
                state:-1,
                text:'请正确填写'
            })
            // console.log(1)
            Animated.timing(tip,{
                toValue:1,
                duration:200,
                useNativeDriver:false
            }).start()
            setTimeout(()=>{
                Animated.timing(tip,{
                    toValue:0,
                    duration:200,
                    useNativeDriver:false
                }).start()
            },2000)
        }else if(title.length<5){
            console.log(3)
            setWarning({
                state:-1,
                text:'标题字数不得少于五字'
            })
            Animated.timing(tip,{
                toValue:1,
                duration:200,
                useNativeDriver:false
            }).start()
            setTimeout(()=>{
                Animated.timing(tip,{
                    toValue:0,
                    duration:200,
                    useNativeDriver:false
                }).start()
            },2000)
        }
    }

    let model=useRef(new Animated.Value(0)).current
    let opacity=model.interpolate({
        inputRange:[0,1],
        outputRange:[0,0.6]
    })
    let bottom=model.interpolate({
        inputRange:[0,1],
        outputRange:['-100%','0%']
    })
    const getCommunity=(bool)=>{
        if(bool){
            Animated.timing(model,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(model,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }).start()
        }
    }


    const [followCommunity,setFollowCommunity]=useState([])
    useEffect(()=>{
        // fetch('http://localhost:8081/data/followCommunity.json').then((res)=>res.json())
        // .then((resJson)=>{
        //     console.log(resJson)
        //     setFollowCommunity(resJson.data.map((item,index)=>{
        //         return item
        //     }))
        // }).catch((err)=>{
        //     console.log(err)
        // })
        getFollowCommunity(userId)
        .then((res)=>{
            setFollowCommunity(res.map((item,index)=>{
                return item
            }))
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    const FollowCommu=(props)=>{
        return(
            <View style={modelStyles.communityView}>
                <Image source={{uri:props.communityAvatar}} style={modelStyles.commuAvatar} />
                <Text style={modelStyles.commuName}>{props.communityName}</Text>
                <Image source={require('../../static/level.png')} style={modelStyles.level} />
            </View>
        )
    }

    const [communityChoice,setCommunityChoice]=useState(0)

    return(
        <>
            <Navigation />
            <Pressable style={postStyles.community} onPress={()=>getCommunity(true)}>
                <View style={postStyles.chooseCommunity}>
                    <Image source={require('../../static/community.png')} style={postStyles.communityAvatar} />
                    <Text style={postStyles.chooseText}>选择圈子</Text>
                    <View style={communitySelected!=-1?postStyles.selectView:postStyles.chooseView}>
                        <Text style={communitySelected!=-1?postStyles.selectHolder:postStyles.placeHolder}>
                            {communitySelected!=-1?followCommunity[communitySelected].communityName:'选择合适的圈子会有更多的赞哦~'}
                        </Text>
                    </View>
                </View>
                <Image source={require('../../static/back.png')} style={{height:15,width:15,resizeMode:'contain',transform:[{rotateY:'180deg'}]}} />
            </Pressable>
            <TextInput placeholder="请输入完整帖子标题（5-31个字）" style={postStyles.title} maxLength={31} onChangeText={(e)=>title=e}/>
            <TextInput placeholder="来吧，尽情发挥吧……" style={postStyles.content} multiline={true} maxLength={140}  onChangeText={(e)=>content=e}/>

            <Animated.View style={[modelStyles.mask,{opacity}]} pointerEvents='none'></Animated.View>
            <Animated.View style={[modelStyles.modelView,{bottom}]}>
                <View style={modelStyles.title}>
                    <Pressable style={{position:'absolute',left:15}} onPress={()=>getCommunity(false)}>
                        <Image source={require('../../static/back.png')} style={modelStyles.backImage} />
                    </Pressable>
                    <Text style={modelStyles.titleText}>选择圈子</Text>
                </View>

                <View style={modelStyles.choiceView}>
                    <Pressable style={modelStyles.choiceContainer} onPress={()=>setCommunityChoice(0)}>
                        <Text style={[modelStyles.choice,communityChoice==0?modelStyles.selected:'']}>关注圈子</Text>
                        <View style={[modelStyles.choiceTip,{opacity:communityChoice==0?1:0}]}></View>
                    </Pressable>
                    <Pressable style={modelStyles.choiceContainer} onPress={()=>setCommunityChoice(1)}>
                        <Text style={[modelStyles.choice,communityChoice==1?modelStyles.selected:'']}>热门圈子</Text>
                        <View style={[modelStyles.choiceTip,{opacity:communityChoice==1?1:0}]}></View>
                    </Pressable>
                </View>

                <FlatList
                    showsVerticalScrollIndicator = {false}
                    ListFooterComponent={()=>{
                        return(
                            <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                                <Text>暂时只有这么多啦~</Text>
                            </View>
                        )
                    }}
                    data={followCommunity}
                    renderItem={({ item, index, separators }) => (
                        <Pressable  key={item.communityId} 
                            onPress={()=>{
                                getCommunity(false)
                                setCommunitySelected(index)
                                // setTimeout(()=>,600)
                                
                            }}
                        >
                            <FollowCommu {...item}></FollowCommu>
                        </Pressable>
                    )}
                    />

            </Animated.View>
        </>
    )
}

const AddChatPosts=(props)=>{
    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
            {/* <Navigation navigation={props.navigation} /> */}
            <PostContent navigation={props.navigation} />
        </View>
    )
}

const naviStyles=StyleSheet.create({
    naviView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        marginBottom:25
    },
    backImage:{
        
        height:20,
        width:20,
        resizeMode:'contain'
    },
    chatPost:{
        fontSize:17,
        color:'rgba(0,0,0,0.8)',
    },
    pressable:{
        padding:5,
        paddingLeft:15,
        paddingRight:15,
        borderWidth:1,
        borderColor:'#3686e7',
        borderRadius:100,
        position:'absolute',
        right:0,
    },
    post:{
        
        fontSize:13,
        color:'#3686e7'
    },
    tipsView:{
        width:'100%',
        height:'100%',
        position:'absolute',
        display:'flex',
        backgroundColor:'white',
        elevation:10
    },
    tipsContainer:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    warningImage:{
        height:23,
        width:23,
        resizeMode:'contain',
        marginRight:5

    },
    warningText:{
        fontSize:17,

    }
    
})

const postStyles=StyleSheet.create({
    community:{
        marginLeft:15,
        marginRight:15,
        paddingBottom:10,
        marginBottom:5,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'rgba(240,240,240,1)',
        borderBottomWidth:0.8,
    },
    chooseCommunity:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    communityAvatar:{
        height:20,
        width:20,
        resizeMode:'contain',
        marginRight:10
    },
    chooseText:{
        fontSize:14,
        color:'rgba(0,0,0,0.8)',
        marginRight:10
    },
    chooseView:{
        backgroundColor:'rgba(245,245,245,1)',
        borderRadius:100,
        padding:5,
        paddingLeft:10,
        paddingRight:10
    },
    selectView:{
        borderColor:'#3686e7',
        borderWidth:1,
        borderRadius:100,
        padding:5,
        paddingLeft:10,
        paddingRight:10
    },
    placeHolder:{
        color:'rgba(0,0,0,0.4)',
        fontSize:11,
    },
    selectHolder:{
        color:'#3686e7',
        fontSize:11,
    },
    title:{
        // backgroundColor:'red',
        marginLeft:15,
        marginRight:15,
        fontSize:16,
        fontWeight:'900',
        color:'rgba(0,0,0,0.8)',
        paddingBottom:10,
        borderBottomWidth:0.8,
        borderColor:'rgba(240,240,240,1)',
        marginBottom:5
    },
    content:{
        // backgroundColor:'red',
        marginLeft:15,
        marginRight:15,
        fontSize:15,
        // fontWeight:'900',
        color:'rgba(0,0,0,0.8)',
        // paddingBottom:10,
        // borderBottomWidth:0.8,
        // borderColor:'rgba(240,240,240,1)',
        // marginBottom:15
    }

})

const modelStyles=StyleSheet.create({
    mask:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        
    },
    modelView:{
        position:'absolute',
        width:'100%',
        height:'90%',
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    title:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
    },
    titleText:{
        fontSize:16,
        color:'rgba(0,0,0,0.8)',
    },
    backImage:{
        height:20,
        width:20,
        resizeMode:'contain',
    },
    choiceView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15,
    },
    choiceContainer:{
        display:'flex',
        alignItems:'center',
        marginRight:20
    },
    choice:{
        fontSize:16,
        color:'rgba(0,0,0,0.4)',

    },  
    selected:{
        color:'rgba(0,0,0,0.8)',
        fontWeight:'700'
    },
    choiceTip:{
        height:4,
        borderRadius:10,
        backgroundColor:'#3686e7',
        width:20,
        marginTop:3
    },
    communityView:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        margin:15,
        marginBottom:0,
    },
    commuAvatar:{
        height:50,
        width:50,
        borderRadius:17,
        resizeMode:'contain',
    },
    commuName:{
        fontSize:16,
        color:'rgba(0,0,0,0.8)',
        marginLeft:10
    },
    level:{
        height:15,
        width:15,
        resizeMode:'contain',
        marginLeft:5
    }
})

export default AddChatPosts