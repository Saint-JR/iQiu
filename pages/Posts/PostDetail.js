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
                    <Text>足球圈</Text>
                </View>
            </View>
        </View>
    )
}

const PostContent=(props)=>{
    const PostHeader=()=>{
        return(
            <View>
                <View style={postHeaderStyles.posterInfoView}>
                    <View style={postHeaderStyles.posterAvatarView}>
                        <Image source={require('../../static/avatar.jpg')} style={postHeaderStyles.posterAvatar}></Image>
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
            <Text>评论</Text>
            <Text>点赞</Text>
            <Text>分享</Text>
        </View>
        
    )
}

const PostDetail=()=>{
    

    return(
        <>
            <View style={mainStyles.view}>
                <Navigation/>
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
        height:20,
        width:20,
        borderRadius:7,
        borderStyle:'solid',
        borderColor:'rgba(50,50,50,0.1)',
        borderWidth:1,
        marginRight:5
    },
    community:{ 
        backgroundColor:'rgba(240,240,240,1)',
        padding: 10,
        borderRadius:100,
        margin:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    }
})

const postHeaderStyles=StyleSheet.create({
    posterInfoView:{
        margin:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:1,
    },
    posterAvatarView:{
        height:40,
        width:40,
        borderRadius:40,
        overflow:'hidden'
    },
    posterAvatar:{
        height:40,
        width:40,
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

    }
    
})

export default PostDetail;