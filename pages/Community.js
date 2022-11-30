import {View,Text,StyleSheet,StatusBar} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const Community=()=>{
    return(
        <View style={styles.background}>
            <View style={styles.search}>
                <View style={{height:StatusBar.currentHeight}}></View>
                <View style={styles.searchView}></View>
            </View>
            <View style={styles.commuList}>
                <View style={styles.hotCommu}>
                    <Text style={styles.hotText}>最近热圈</Text>
                </View>
                <View style={styles.commonCommu}>

                </View>
            </View>
        </View>
        
    )
}

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
        marginBottom:20
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
        height:100,
        borderRadius:15,
        
    },
    hotText:{
        fontSize:15,
        fontWeight:'700',
        margin:10,
        color:'rgba(0,0,0,0.8)'
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