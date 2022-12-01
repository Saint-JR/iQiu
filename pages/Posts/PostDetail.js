import {View,Text,Pressable, StyleSheet} from 'react-native'

const PostDetail=(props)=>{
    const navi=()=>{
        props.navigation.navigate('MainPage',{
            screen:'HomePage'
        })
    }

    return(
        <>
            <Pressable onPress={()=>{navi()}}>
                <View style={styles.view}></View>
            </Pressable>
        </>
    )
}

const styles=StyleSheet.create({
    view:{
        height:100,
        width:100,
        backgroundColor:'red'
    }
})

export default PostDetail;