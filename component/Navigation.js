import { def } from '@vue/shared'
import {View,Text,StyleSheet} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export const naviHeight=8

const Navigation=(props)=>{
    const navigate=(index)=>{
        props.onNavigate(index)
    }

    return(
        <View style={[styles.navi,{height:`${naviHeight}%`}]}>
            <Pressable onPress={()=>{navigate(1)}} android_ripple={{radius:10,color:'red'}}>
                <Text>首页</Text>
            </Pressable>
            <Pressable onPress={()=>navigate(2)}>
                <Text>圈子</Text>
            </Pressable>
            <Pressable onPress={()=>navigate(3)}>
                {/* <Text>发帖</Text> */}
                <View style={styles.post}>
                    <Text style={styles.postPlus}>
                        +
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={()=>{navigate(4)}}>
                <Text>消息</Text>
            </Pressable>
            <Pressable onPress={()=>navigate(5)}>
                <Text>我的</Text>
            </Pressable>
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
        justifyContent:'space-around',
        backgroundColor:'rgba(113,144,229,0.3)'
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