import { StyleSheet, Text,View ,StatusBar,Image, FlatList,Pressable,Animated,TextInput} from "react-native"

const Navigation=(props)=>{
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
                <Pressable style={naviStyles.pressable}>
                    <Text style={naviStyles.post}>发布</Text>
                </Pressable>
                
            </View>
        </View>
    )
}

const PostContent=()=>{
    return(
        <>
            <View style={postStyles.community}>
                <View style={postStyles.chooseCommunity}>
                    <Image source={require('../../static/community.png')} style={postStyles.communityAvatar} />
                    <Text style={postStyles.chooseText}>选择圈子</Text>
                    <View style={postStyles.chooseView}>
                        <Text style={postStyles.placeHolder}>选择合适的圈子会有更多的赞哦~</Text>
                    </View>
                </View>
                <Image source={require('../../static/back.png')} style={{height:15,width:15,resizeMode:'contain',transform:[{rotateY:'180deg'}]}} />
            </View>
            <TextInput placeholder="请输入完整帖子标题（5-31个字）" style={postStyles.title} maxLength={31}/>
            <TextInput placeholder="来吧，尽情发挥吧……" style={postStyles.content} multiline={true} maxLength={140} />
        </>
    )
}

const AddChatPosts=(props)=>{
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
    placeHolder:{
        color:'rgba(0,0,0,0.4)',
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

export default AddChatPosts