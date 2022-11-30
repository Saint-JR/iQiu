import {View,Text,StyleSheet, Image} from 'react-native'
import {useEffect} from 'react'

const Post=(props)=>{

    return(
        <View style={styles.post}>
            <View style={styles.community}>
                <Image source={require('../static/football.png')} style={styles.avatar}></Image>
                <View style={styles.commuInfo}>
                    <Text style={styles.commuName}>{props.commuName}</Text>
                    <Text style={styles.commuNum}>关注 {props.commuNum[0]}  帖子 {props.commuNum[1]}</Text>
                </View>
            </View>
            <View style={styles.postInfo}>
                <Text style={styles.postTitle}>{props.postTitle}</Text>
                <Text style={styles.postContent}>{props.postContent}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    post: {
        height: 200,
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
        height:50,
        width:50
    },
    commuInfo:{
        height:50,
        display:'flex',
        
        justifyContent:'center',
    },
    commuName:{
        fontSize:15,
        marginLeft:10,
        color:'rgba(0,0,0,0.8)'
    },
    commuNum:{
        fontSize:12,
        color:'rgba(0,0,0,0.4)',
        marginLeft:10,
        letterSpacing:0
    },
    postInfo:{
        margin:15,
        marginTop:5
    },
    postTitle:{
        fontSize:16,
        fontWeight:'700',
        letterSpacing:0,
        color:'rgba(0,0,0,0.8)'

    },
    postContent:{
        fontSize:16,
        lineHeight:30,
        letterSpacing:0,

    },
})

export default Post;