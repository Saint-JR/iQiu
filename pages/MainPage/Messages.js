import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable ,FlatList, Image} from 'react-native'


const Navigation=()=>{
    return(
        <>
            <View style={{height:StatusBar.currentHeight}}></View>
            <View style={navigationStyles.navigationContainer}>
                <Text style={navigationStyles.navigationText}>消息</Text>
                <View style={navigationStyles.chatView}>
                    <Image source={require('../../static/chat.png')} style={navigationStyles.chatImage}/>
                    <Text style={navigationStyles.chatText}>发私信</Text>
                </View>
            </View>
            
        </>
    )
}

const Header=()=>{
    return(
        <View style={headerStyles.headerView}>
            <View style={headerStyles.opeView}>
                <View style={[headerStyles.imageView,{backgroundColor:'rgba(243,237,155,0.5)'}]}>
                    <Image source={require('../../static/@.png')} style={[headerStyles.opeImage,{opacity:0.6}]} />
                </View>
                
                <Text style={headerStyles.opeText}>@我的</Text>
            </View>
            <View style={headerStyles.opeView}>
                <View style={[headerStyles.imageView,{backgroundColor:'rgba(209,155,243,0.3)'}]}>
                    <Image source={require('../../static/like_done.png')} style={[headerStyles.opeImage,{opacity:0.5}]} />
                </View>
                
                <Text style={headerStyles.opeText}>点赞</Text>
            </View>
            <View style={headerStyles.opeView}>
                <View style={[headerStyles.imageView,{backgroundColor:'rgba(155,235,243,0.3)'}]}>
                    <Image source={require('../../static/comment_done.png')} style={[headerStyles.opeImage,{opacity:0.7}]} />
                </View>
                
                <Text style={headerStyles.opeText}>回复</Text>
            </View>
            <View style={headerStyles.opeView}>
                <View style={[headerStyles.imageView,{backgroundColor:'rgba(243,155,159,0.3)'}]}>
                    <Image source={require('../../static/follower.png')} style={[headerStyles.opeImage,{opacity:0.5}]} />
                </View>
                
                <Text style={headerStyles.opeText}>粉丝</Text>
            </View>
        </View>
    )
    
}

const PrivateMsg=(props)=>{
    return(
        <View style={msgStyles.msgView}>
            <View style={msgStyles.avatarView}>
                <Image source={props.avatar} style={msgStyles.msgAvatar} />
            </View>
            
            <View style={msgStyles.msgContainer}>
                <View style={msgStyles.msgNameView}>
                    <Text style={msgStyles.msgName}>{props.userName}</Text>
                    <Text style={msgStyles.msgTime}>{props.date}</Text>
                </View>
                <Text style={msgStyles.msgContent} numberOfLines={1} ellipsizeMode = 'tail'>{props.content}</Text>
            </View>
        </View>
    )
}


const Messages=()=>{
    let msg=[]
    msg=new Array(10).fill({
        uid:1,
        userName:'D1nNer-',
        date:'2天前',
        avatar:require('../../static/avatar.jpg'),
        content:'哈哈，大家聊了这么多啦，刚刚D1nner把我弄晕了'
    })

    return(
        <View style={styles.background}>
            <Navigation/>
            <FlatList
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent={()=><Header/>}
                ListFooterComponent={()=>{
                    return(
                        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',padding:20}}>
                            <Text>暂时只有这么多啦~</Text>
                        </View>
                    )
                }}
                data={msg}
                renderItem={({ item, index, separators }) => (
                    <Pressable onPress={()=>{console.log(index)}} key={item.uid}>
                        <PrivateMsg {...item}/>
                    </Pressable>
                )}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    
})

const navigationStyles=StyleSheet.create({
    navigationContainer:{
        marginTop:10,
        marginBottom:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    navigationText:{
        fontSize:19,
        color:'rgba(0,0,0,0.7)',
        fontWeight:'700'
    },
    chatView:{
        position:'absolute',
        right:20,
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    },
    chatImage:{
        height:20,
        width:20
    },
    chatText:{
        fontSize:16,
        marginLeft:5
    }
})

const headerStyles=StyleSheet.create({
    headerView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:15

    },
    opeView:{
        display:'flex',
        alignItems:'center'
    },
    imageView:{
        borderRadius:15,
        padding:10,
        
    },
    opeImage:{
        height:25,
        width:25,
    },
    opeText:{
        marginTop:10,
        fontSize:13
    }
})

const msgStyles=StyleSheet.create({
    msgView:{
        margin:15,
        marginTop:20,
        marginBottom:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    avatarView:{
        height:50,
        width:50,
        overflow:'hidden',
        borderRadius:25
    },
    msgAvatar:{
        height:50,
        width:50,
    },
    msgContainer:{
        marginLeft:15,
        display:'flex',
        justifyContent:'center',
        width:'100%',
        flex:1,
        // backgroundColor:'red'
    },
    msgNameView:{
        display:'flex',
        flexDirection:'row',
        marginRight:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    msgName:{
        fontSize:17,
        color:'rgba(0,0,0,0.8)'
    },
    msgTime:{
        fontSize:12,
        color:'rgba(0,0,0,0.4)'
    },
    msgContent:{
        width:'90%',
        marginTop:5,
        fontSize:13,
        color:'rgba(0,0,0,0.4)',
    }
})

export default Messages;