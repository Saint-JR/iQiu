import {View,Text,StyleSheet,StatusBar,Image, Pressable} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const HotCommu=(props)=>{
    return(
        <View style={hotCommuStyles.hotCommuView}>
            <Image source={props.commuAvatar} style={hotCommuStyles.hotCommuAvatar}></Image>
            <Text style={hotCommuStyles.communityName}>{props.communityName}</Text>
            <Text style={hotCommuStyles.followerNum}>关注 {props.followerNum}</Text>
        </View>
    )
}

const FollowCommu=(props)=>{
    return(
        <View style={followStyles.followView}>
            <View style={followStyles.deviderView}>
                <View style={followStyles.devider}></View>
            </View>
            <Image source={props.commuAvatar} style={followStyles.followAvatar}></Image>
            <View style={{display:'flex',width:100,marginRight:10}}>
                <Text style={followStyles.communityName}>{props.communityName}</Text>
                <Text style={followStyles.followerNum}>关注 {props.followerNum}</Text>
            </View>
            <View style={{display:'flex',alignItems:'center'}}>
                <Text style={followStyles.followTime}>关注时间</Text>
                <Text style={followStyles.followerNum}>{new Date().toLocaleDateString()}</Text>
            </View>
            <View style={{position:'absolute',right:40}}>
                <Image source={require('../../static/community.png')} style={{height:20,width:20,opacity:0.4}}/>
                
            </View>
        </View>
    )
}

const Community=(props)=>{
    let hotCommu=[]

    let followCommu=[]

    hotCommu=[{
        commuAvatar:require('../../static/football.png'),
        communityName:'足球圈',
        followerNum:3645
    },{
        commuAvatar:require('../../static/basketball.png'),
        communityName:'篮球圈',
        followerNum:3645
    },{
        commuAvatar:require('../../static/tabletennis.png'),
        communityName:'乒乓球圈',
        followerNum:3645
    },]

    followCommu=[{
        commuAvatar:require('../../static/football.png'),
        communityName:'足球圈',
        followerNum:3645
    },{
        commuAvatar:require('../../static/basketball.png'),
        communityName:'篮球圈',
        followerNum:3645
    },{
        commuAvatar:require('../../static/tabletennis.png'),
        communityName:'乒乓球圈',
        followerNum:3645
    },]

    const navigate=(index)=>{
        props.navigation.navigate('CommunityDetail')
    }

    return(
        <View style={styles.background}>
            <View style={styles.search}>
                <View style={{height:StatusBar.currentHeight}}></View>
                <View style={styles.searchView}></View>
            </View>
            <View style={styles.commuList}>
                <View style={styles.hotCommu}>
                    <Text style={styles.hotText}>最近热圈</Text>
                    <View style={styles.hotCommuList}>
                        {
                            hotCommu.map((item,index)=>{
                                return(
                                    <Pressable key={index} onPress={()=>{navigate(index)}}>
                                        <HotCommu {...item}/>
                                    </Pressable>
                                ) 
                            })
                        }
                    </View>
                    
                </View>
                <View style={styles.followCommu}>
                    <Text style={[styles.hotText,{marginBottom:0}]}>我关注的圈子</Text>
                    <View>
                        {
                            followCommu.map((item,index)=>{
                                return(
                                    <Pressable key={index} onPress={()=>{navigate(index)}}>
                                        <FollowCommu {...item}/>
                                    </Pressable>
                                ) 
                            })
                        }
                    </View>
                </View>
            </View>
        </View>
        
    )
}

const hotCommuStyles=StyleSheet.create({
    hotCommuView:{
        display:'flex',
        alignItems:'center',
        marginRight:20,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    hotCommuAvatar:{
        width:40,
        height:40,
        borderRadius:15,
        marginBottom:5,
        borderStyle:'solid',
        borderColor:'rgba(245,245,245,1)',
        borderWidth:1,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    communityName:{
        color:'rgba(0,0,0,0.8)',
        fontSize:15,
        marginBottom:2
    },
    followerNum:{
        fontSize:10,
        color:'rgba(0,0,0,0.4)',
    }
})

const followStyles=StyleSheet.create({
    followView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        // margin:20,
        // marginTop:10,
        // borderStyle:'solid',
        // borderColor:'rgba(50,50,50,0.1)',
        // borderWidth:1,
    },
    deviderView:{
        width:'100%',
        position:'absolute',
        bottom:0,
        left:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        // borderStyle:'solid',
        // borderColor:'rgba(50,50,50,0.1)',
        // borderWidth:1,
    },
    devider:{
        width:'80%',
        borderStyle:'solid',
        borderColor:'rgba(240,240,240,1)',
        borderBottomWidth:1,
    },
    followAvatar:{
        width:50,
        height:50,
        borderRadius:20,
        // marginBottom:5,
        marginRight:10,
        borderStyle:'solid',
        borderColor:'rgba(245,245,245,1)',
        borderWidth:1,
    },
    communityName:{
        color:'rgba(0,0,0,0.8)',
        fontSize:15,
        marginBottom:2
    },
    followerNum:{
        fontSize:10,
        color:'rgba(0,0,0,0.4)',
    },
    followTime:{
        color:'rgba(0,0,0,0.4)',
        fontSize:15,
        marginBottom:2
    },

})

const styles=StyleSheet.create({
    background:{
        backgroundColor:'rgba(240,240,240,1)',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        width:'100%',
        height:'100%',
        display:'flex',

    },
    search:{
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
    },
    searchView:{
        backgroundColor:'rgba(240,240,240,1)',
        height:40,
        width:'70%',
        borderRadius:40,
        marginBottom:20,
        marginTop:10
    },
    commuList:{
        width:'100%',
        height:'100%',
        flexShrink:0.5,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    hotCommu:{
        margin:10,
        backgroundColor:'white',
        // height:100,
        borderRadius:15,
        
    },
    hotText:{
        fontSize:15,
        fontWeight:'700',
        margin:10,
        marginTop:15,
        color:'rgba(0,0,0,0.8)'
    },
    hotCommuList:{
        margin:20,
        marginTop:5,
        display:'flex',
        flexDirection:'row',

    },
    followCommu:{
        margin:10,
        marginTop:0,
        backgroundColor:'white',
        borderRadius:15,
        height:'100%',
        flexShrink:0.5
    }
})

export default Community;