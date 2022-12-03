import {View,Text,StyleSheet, Image} from 'react-native'
import {useEffect} from 'react'

const HomePosts=(props)=>{
    // useEffect(()=>{
    //     console.log(props)
    // },[])

    return(
        <View style={styles.post}>
            <View style={styles.community}>
                <Image source={props.avatar} style={styles.avatar}></Image>
                <View style={styles.commuInfo}>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.commuName}>{props.commuName}</Text>
                        <Image source={require('../static/community.png')} style={{height:15,width:15,marginLeft:5}}/>
                    </View>
                    
                    <Text style={styles.commuNum}>关注 {props.commuNum[0]}  帖子 {props.commuNum[1]}</Text>
                </View>
            </View>
            <View style={styles.postInfo}>
                <Text numberOfLines={1} ellipsizeMode = 'tail' style={styles.postTitle}>{props.postTitle}</Text>
                <Text numberOfLines={4} ellipsizeMode = 'tail' style={styles.postContent}>{props.postContent}</Text>
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
    community:{
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
    commuInfo:{
        height:50,
        display:'flex',
        marginLeft:10,
        justifyContent:'center',
    },
    commuName:{
        fontSize:15,
        color:'rgba(0,0,0,0.8)'
    },
    commuNum:{
        fontSize:12,
        color:'rgba(0,0,0,0.4)',
        letterSpacing:0
    },
    postInfo:{
        margin:15,
        marginTop:5
    },
    postTitle:{
        fontSize:16,
        fontWeight:'900',
        letterSpacing:0,
        color:'rgba(0,0,0,0.6)'

    },
    postContent:{
        fontSize:16,
        lineHeight:25,
        marginTop:5,
        letterSpacing:0,

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

export default HomePosts;