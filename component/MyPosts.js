import {View,Text,StyleSheet, Image} from 'react-native'
import {useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'

const MyPosts=(props)=>{

    return(
        <View style={styles.post}>
            <View style={styles.userInfoContainer}>
                <Image source={{uri:props.userAvatar}} style={styles.avatar}></Image>
                <View style={styles.userInfo}>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.userName}>{props.userName}</Text>
                        {/* <Image source={require('../static/community.png')} style={{height:15,width:15,marginLeft:5,opacity:0.5,resizeMode:'contain'}}/> */}
                    </View>
                    
                    <Text style={styles.time}>{props.time}</Text>
                </View>
            </View>
            
            <View style={styles.postInfo}>
                <Text numberOfLines={1} ellipsizeMode = 'tail' style={styles.postTitle}>{props.postTitle}</Text>
                <Text numberOfLines={4} ellipsizeMode = 'tail' style={styles.postContent}>{props.postContent}</Text>
            </View>
            
            {
                props.type==1&&(
                    <>
                        <View style={typeStyle.typeView}>
                            <LinearGradient style={typeStyle.linear} colors={['#0dc2e3','#3686e7']}/>
                            <Text style={typeStyle.typeText}>球类</Text>
                            <View style={typeStyle.typeContainer}>
                                <Text style={typeStyle.text}>{props.ballType}</Text>
                            </View>
                            
                        </View>
                        <View style={typeStyle.typeView}>
                        <LinearGradient style={typeStyle.linear} colors={['#0dc2e3','#3686e7']}/>
                            <Text style={typeStyle.typeText}>人数</Text>
                            <View style={typeStyle.typeContainer}>
                                <Text style={typeStyle.text}>{props.peopleCount}</Text>
                            </View>
                        </View>
                        <View style={typeStyle.typeView}>
                            <LinearGradient style={typeStyle.linear} colors={['#0dc2e3','#3686e7']}/>
                            <Text style={typeStyle.typeText}>地点</Text>
                            <Text style={typeStyle.location}>{props.ballPosition}</Text>
                        </View>
                    </>
                    
                )
            }

            <View style={{display:'flex',flexDirection:'row',marginLeft:15,marginBottom:15,}}>
                <View style={styles.communityView}>
                    <Image source={require('../static/community_done.png')} style={styles.communityImage} />
                    <Text style={styles.communityName}>{props.communityName}</Text>
                </View>
                <View style={styles.postType}>
                    <Image source={props.type==0?require('../static/chatPost.png'):require('../static/ballPost.png')} style={styles.postImage} />
                    <Text style={styles.postTypeText}>{props.type==0?'闲聊帖':'约球帖'}</Text>
                </View>
            </View>
            
            <View style={styles.operate}>
                <View style={styles.operateContainer}>
                    <Image style={styles.operateImage} source={require('../static/share.png')}/>
                    <Text style={styles.operateText}>分享</Text>
                </View>
                <View style={styles.operateContainer}>
                    <Image style={styles.operateImage} source={require('../static/comment.png')}/>
                    <Text style={styles.operateText}>评论</Text>
                </View>
                <View style={styles.operateContainer}>
                    <Image style={styles.operateImage} source={require('../static/like.png')}/>
                    <Text style={styles.operateText}>点赞</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    post: {
        // height: 200,
        // width:'100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        margin: 10,
        marginBottom:0,
        backgroundColor: 'white',
        borderRadius: 10
    },
    postTypeView:{
        display:'flex',
        flexDirection:'row',
        marginBottom:10,
        marginLeft:15
    },
    postType:{
        borderWidth:1,
        borderColor:'#3686e7',
        borderRadius:100,
        padding:5,
        paddingLeft:8,
        paddingRight:8,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15
    },
    postImage:{
        height:15,
        width:15,
        resizeMode:'contain',
        marginRight:5
    },
    postTypeText:{
        color:'#3686e7',
        fontSize:13,
    },
    userInfoContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:50,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        margin:15,
        marginBottom:0
    },
    avatar:{
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        
        height:40,
        width:40,
        borderStyle:'solid',
        borderColor:'rgba(50,50,50,0.1)',
        borderWidth:1,
        borderRadius:15
    },
    userInfo:{
        height:50,
        display:'flex',
        marginLeft:10,
        justifyContent:'center',
    },
    userName:{
        fontSize:15,
        color:'rgba(0,0,0,0.8)'
    },
    time:{
        fontSize:12,
        color:'rgba(0,0,0,0.4)',
        letterSpacing:0
    },
    postInfo:{
        margin:15,
        marginTop:5,
        marginBottom:10,
    },
    postTitle:{
        fontSize:16,
        fontWeight:'900',
        letterSpacing:0,
        color:'rgba(0,0,0,0.7)'

    },
    postContent:{
        fontSize:15,
        lineHeight:25,
        marginTop:5,
        letterSpacing:0,
        color:'rgba(0,0,0,0.8)'
    },
    communityView:{
        
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#3686e7',
        borderWidth:1,
        borderRadius:100,
        padding:5,
        paddingLeft:8,
        paddingRight:8

    },
    communityImage:{
        height:15,
        width:15,
        resizeMode:'contain'
    },
    communityName:{
        color:'#3686e7',
        fontSize:13,
        marginLeft:5
    },
    operate:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        marginBottom:20
    },
    operateContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    operateText:{
        fontSize:13,
        color:'rgba(0,0,0,0.4)',
        marginLeft:5
    },
    operateImage:{
        height:18,
        width:18
    }
})

const typeStyle=StyleSheet.create({
    typeView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15,
        marginBottom:15
    },
    linear:{
        width:5,
        height:'100%',
        borderRadius:10,
        opacity:1
    },
    typeText:{
        color:'rgba(0,0,0,0.8)',
        fontWeight:'900',
        fontSize:16,
        marginLeft:7
    },
    typeContainer:{
        marginLeft:20,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#3686e7',
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#3686e7',
        fontSize:12
    },
    location:{
        color:'rgba(0,0,0,0.5)',
        fontSize:14,
        marginLeft:20
    }
})

export default MyPosts;