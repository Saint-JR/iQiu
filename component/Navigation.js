import { def } from '@vue/shared'
import {View,Text,StyleSheet} from 'react-native'

export const naviHeight=8

const Navigation=()=>{
    return(
        <View style={[styles.navi,{height:`${naviHeight}%`}]}>
            <View>
                <Text>首页</Text>
            </View>
            <View>
                <Text>圈子</Text>
            </View>
            <View>
                {/* <Text>发帖</Text> */}
                <View style={styles.post}>
                    <Text style={styles.postPlus}>
                        +
                    </Text>
                </View>
            </View>
            <View>
                <Text>消息</Text>
            </View>
            <View>
                <Text>我的</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    navi:{
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        // height:'10%',
        position:'absolute',
        width:'100%',
        bottom:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    post:{
        height:40,
        width:40,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:7,
        backgroundColor:'#5670d7',
        borderRadius:16,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    postPlus:{
        fontSize:30,
        fontWeight:'900',
        color:'white'
    }
})

export default Navigation;