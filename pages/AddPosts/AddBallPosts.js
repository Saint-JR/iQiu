import { useState } from "react"
import { StyleSheet, Text,View ,StatusBar,Image, FlatList,Pressable,Animated,TextInput} from "react-native"
import ActionSheet from 'react-native-actionsheet'

const Navigation=(props)=>{
    return(
        <View>
            <View style={{height:StatusBar.currentHeight}}></View>
            <View style={naviStyles.naviView}>
                <Pressable onPress={()=>props.navigation.goBack()} style={{position:'absolute',left:0,}}>
                    <Image source={require('../../static/back.png')} style={naviStyles.backImage}/>
                </Pressable>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Image source={require('../../static/ballPost.png')} style={{height:20,width:20,resizeMode:'contain',marginRight:5}} />
                    <Text style={naviStyles.chatPost}>发布约球</Text>
                </View>
                
                <Pressable style={naviStyles.pressable}>
                    <Text style={naviStyles.post}>发布</Text>
                </Pressable>
                
            </View>
        </View>
    )
}

const PostContent=()=>{
    const ball=['足球', '篮球','乒乓球','羽毛球','台球','其他', '取消']
    const peopleCount=['1人', '2-5人','6-10人','11-15人','16-20人','20人以上', '取消']

    let [ballSelected,setBallSelected]=useState(-1)
    let [countSelected,setCountSelected]=useState(-1)
    let [communitySelected,setCommunitySelected]=useState(-1)


    let model=new Animated.Value(0)
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


    let [communityChoice,setCommunityChoice]=useState(0)

    let followCommu=[]
    followCommu=[{
        cid:1,
        commuAvatar:require('../../static/football.png'),
        communityName:'足球圈',
    },{
        cid:2,
        commuAvatar:require('../../static/basketball.png'),
        communityName:'篮球圈',
    },{
        cid:3,
        commuAvatar:require('../../static/tabletennis.png'),
        communityName:'乒乓球圈',
    },]

    const FollowCommu=(props)=>{
        return(
            <View style={modelStyles.communityView}>
                <Image source={props.commuAvatar} style={modelStyles.commuAvatar} />
                <Text style={modelStyles.commuName}>{props.communityName}</Text>
                <Image source={require('../../static/level.png')} style={modelStyles.level} />
            </View>
        )
    }

    return(
        <>
            <Pressable style={postStyles.community} onPress={()=>getCommunity(true)}>
                <View style={postStyles.chooseCommunity}>
                    <Image source={require('../../static/community.png')} style={postStyles.communityAvatar} />
                    <Text style={postStyles.chooseText}>选择圈子</Text>
                    <View style={communitySelected!=-1?postStyles.selectView:postStyles.chooseView}>
                        <Text style={communitySelected!=-1?postStyles.selectHolder:postStyles.placeHolder}>
                            {communitySelected!=-1?followCommu[communitySelected].communityName:'选择合适的圈子会有更多的赞哦~'}
                        </Text>
                    </View>
                </View>
                <Image source={require('../../static/back.png')} style={{height:15,width:15,resizeMode:'contain',transform:[{rotateY:'180deg'}]}} />
            </Pressable>


            <Pressable style={postStyles.community} onPress={()=>{this.ActionSheet1.show()}}>
                <View style={postStyles.chooseCommunity}>
                    <Image source={require('../../static/ballIcon.png')} style={postStyles.communityAvatar} />
                    <Text style={postStyles.chooseText}>选择球类</Text>
                    <View style={ballSelected!=-1?postStyles.selectView:postStyles.chooseView}>
                        <Text style={ballSelected!=-1?postStyles.selectHolder:postStyles.placeHolder}>
                            {ballSelected!=-1?ball[ballSelected]:'选择球类，施展身手~'}
                        </Text>
                    </View>
                </View>
                <Image source={require('../../static/back.png')} style={{height:15,width:15,resizeMode:'contain',transform:[{rotateY:'180deg'}]}} />
            </Pressable>

            <Pressable style={postStyles.community} onPress={()=>{this.ActionSheet2.show()}}>
                <View style={postStyles.chooseCommunity}>
                    <Image source={require('../../static/memberIcon.png')} style={postStyles.communityAvatar} />
                    <Text style={postStyles.chooseText}>选择人数</Text>
                    <View style={countSelected!=-1?postStyles.selectView:postStyles.chooseView}>
                        <Text style={countSelected!=-1?postStyles.selectHolder:postStyles.placeHolder}>
                            {countSelected!=-1?peopleCount[countSelected]:'选择合适的人数参与球局吧~'}
                        </Text>
                    </View>
                </View>
                <Image source={require('../../static/back.png')} style={{height:15,width:15,resizeMode:'contain',transform:[{rotateY:'180deg'}]}} />
            </Pressable>

            <View style={postStyles.community}>
                <View style={postStyles.chooseCommunity}>
                    <Image source={require('../../static/locationIcon.png')} style={postStyles.communityAvatar} />
                    <Text style={postStyles.chooseText}>填写地点</Text>
                    <TextInput placeholder="填写您想约球的场馆地点" style={{padding:0,flex:1}} />
                </View>
            </View>

            <TextInput placeholder="请输入完整帖子标题（5-31个字）" style={postStyles.title} maxLength={31}/>
            <TextInput placeholder="请输入帖子内容" style={postStyles.content} multiline={true} maxLength={140} />

            <ActionSheet
                ref={o => this.ActionSheet1 = o}
                title={'选择球类'}
                options={ball}
                cancelButtonIndex={6}
                destructiveButtonIndex={6}
                onPress={(index) => { index==6?setBallSelected(-1):setBallSelected(index)}}
            />
            <ActionSheet
                ref={o => this.ActionSheet2 = o}
                title={'选择人数'}
                options={peopleCount}
                cancelButtonIndex={6}
                destructiveButtonIndex={6}
                onPress={(index) => { index==6?setCountSelected(-1):setCountSelected(index)}}
            />

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
                    data={followCommu}
                    renderItem={({ item, index, separators }) => (
                        <Pressable  key={item.pid} 
                            onPress={()=>{
                                getCommunity(false)
                                setTimeout(()=>setCommunitySelected(index),600)
                                
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

const AddBallPosts=(props)=>{
    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
            <Navigation navigation={props.navigation} />
            <PostContent />
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
    
})

const postStyles=StyleSheet.create({
    community:{
        marginLeft:15,
        marginRight:15,
        paddingBottom:10,
        marginBottom:5,
        marginTop:5,
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

export default AddBallPosts