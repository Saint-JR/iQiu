import {View,Text,StyleSheet,StatusBar,Image, Pressable, TextInput} from 'react-native'
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
        // <Text style={{flex:1}}>1</Text>
        <View style={followStyles.followView}>
            {/* <View style={followStyles.deviderView}>
                <View style={followStyles.devider}></View>
            </View> */}
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image source={props.commuAvatar} style={followStyles.followAvatar}></Image>
                <View style={{display:'flex'}}>
                    <Text style={followStyles.communityName}>{props.communityName}</Text>
                    <Text style={followStyles.followerNum}>关注 {props.followerNum}</Text>
                </View>
            </View>
            <Image source={require('../../static/level.png')} style={{height:15,width:15,resizeMode:'contain',marginRight:10}} />
            {/* <View style={{display:'flex',alignItems:'center'}}>
                <Text style={followStyles.followTime}>关注时间</Text>
                <Text style={followStyles.followerNum}>{new Date().toLocaleDateString()}</Text>
            </View> */}
            {/* <View style={{position:'absolute',right:40}}>
                <Image source={require('../../static/community.png')} style={{height:20,width:20,opacity:0.4,resizeMode:'contain'}}/>
                
            </View> */}
        </View>
    )
}

const Community=(props)=>{
    let hotCommu=[]

    let followCommu=[]

    hotCommu=[{
        cid:1,
        commuAvatar:require('../../static/football.png'),
        communityName:'足球圈',
        followerNum:3645
    },{
        cid:2,
        commuAvatar:require('../../static/basketball.png'),
        communityName:'篮球圈',
        followerNum:3645
    },{
        cid:3,
        commuAvatar:require('../../static/tabletennis.png'),
        communityName:'乒乓球圈',
        followerNum:3645
    },]

    followCommu=[{
        cid:1,
        commuAvatar:require('../../static/football.png'),
        communityName:'足球圈',
        followerNum:3645
    },{
        cid:2,
        commuAvatar:require('../../static/basketball.png'),
        communityName:'篮球圈',
        followerNum:3645
    },{
        cid:3,
        commuAvatar:require('../../static/tabletennis.png'),
        communityName:'乒乓球圈',
        followerNum:3645
    },{
        cid:4,
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
                <View style={styles.searchView}>
                    <Image source={require('../../static/search.png')} style={{height:20,width:20,marginLeft:15,opacity:0.5,marginRight:10}} />
                    <Text style={{color:'rgba(0,0,0,0.4)'}}>搜索圈子</Text>
                </View>
                <View style={styles.choiceView}>
                    <View style={styles.choiceContainer}>
                        <Text style={[styles.choiceText,styles.selected]}>关注圈子</Text>
                        <View style={[styles.choiceTip,{opacity:1}]}></View>
                    </View>
                    <View style={styles.choiceContainer}>
                        <Text style={styles.choiceText}>所有圈子</Text>
                        <View style={[styles.choiceTip,{opacity:0}]}></View>
                    </View>
                </View>
            </View>
            <View style={styles.commuList}>
                <View style={styles.hotCommu}>
                    <Text style={styles.hotText}>最近热圈</Text>
                    <View style={styles.hotCommuList}>
                        {
                            hotCommu.map((item,index)=>{
                                return(
                                    <Pressable key={item.cid} onPress={()=>{navigate(index)}}>
                                        <HotCommu {...item}/>
                                    </Pressable>
                                ) 
                            })
                        }
                    </View>
                    
                </View>
                <View style={styles.followCommu}>
                    <Text style={[styles.hotText,{marginBottom:5}]}>我关注的圈子</Text>
                    <FlatList
                        showsVerticalScrollIndicator = {false}
                        numColumns={2}
                        columnWrapperStyle={{display:'flex',flexDirection:'row',alignItems:'center'}}
                        ListFooterComponent={()=>{
                            return(
                                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                                    <Text>暂时只有这么多啦~</Text>
                                </View>
                            )
                        }}
                        data={followCommu}
                        renderItem={({ item, index, separators }) => (
                            <Pressable key={item.cid} onPress={()=>{navigate(index)}} style={{flex:1}}>
                                <FollowCommu {...item}/>
                            </Pressable>
                        )}
                    />
                    
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
        justifyContent:'space-between',
        margin:10,
        marginLeft:0,
        marginRight:0,
        // margin:20,
        // marginTop:10,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:1,
        // width:'50%'
    },
    // deviderView:{
    //     width:'100%',
    //     position:'absolute',
    //     bottom:0,
    //     left:20,
    //     display:'flex',
    //     flexDirection:'row',
    //     justifyContent:'center',
    //     // borderStyle:'solid',
    //     // borderColor:'rgba(50,50,50,0.1)',
    //     // borderWidth:1,
    // },
    // devider:{
    //     width:'80%',
    //     borderStyle:'solid',
    //     borderColor:'rgba(240,240,240,1)',
    //     borderBottomWidth:1,
    // },
    followAvatar:{
        width:40,
        height:40,
        borderRadius:14,
        // marginBottom:5,
        marginLeft:10,
        marginRight:5,
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
    // followTime:{
    //     color:'rgba(0,0,0,0.4)',
    //     fontSize:15,
    //     marginBottom:2
    // },

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
        marginBottom:15,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
    },
    choiceView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:40,
    },
    choiceContainer:{

        display:'flex',
        alignItems:'center',
        marginRight:30,
    },
    choiceText:{
        fontSize:16,
        color:'rgba(0,0,0,0.5)',
        marginBottom:5
    },
    selected:{
        fontWeight:'700',
        color:'rgba(0,0,0,0.8)'
    },
    choiceTip:{
        height:6,
        width:20,
        borderRadius:6,
        backgroundColor:'#3686e7'
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