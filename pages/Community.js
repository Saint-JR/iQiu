import {View,Text,StyleSheet,StatusBar,Image} from 'react-native'
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

const Community=()=>{
    let hotCommu=[]

    hotCommu=[{
        commuAvatar:require('../static/football.png'),
        communityName:'足球圈',
        followerNum:3645
    },{
        commuAvatar:require('../static/basketball.png'),
        communityName:'篮球圈',
        followerNum:3645
    },{
        commuAvatar:require('../static/tabletennis.png'),
        communityName:'乒乓球圈',
        followerNum:3645
    },]

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
                                <HotCommu {...item} key={index}/>
                            })
                        }
                    </View>
                    
                </View>
                <View style={styles.commonCommu}>

                </View>
            </View>
        </View>
        
    )
}

const hotCommuStyles=StyleSheet.create({
    hotCommuView:{
        display:'flex',
        alignItems:'center',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    hotCommuAvatar:{
        width:40,
        height:40,
        borderRadius:40,
        marginBottom:5,
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
        backgroundColor:'rgba(230,230,230,1)',
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
        color:'rgba(0,0,0,0.8)'
    },
    hotCommuList:{
        margin:20,
        marginTop:5,
        display:'flex',
        flexDirection:'row',

    },
    commonCommu:{
        margin:10,
        marginTop:0,
        backgroundColor:'white',
        height:300,
        borderRadius:15,
    }
})

export default Community;