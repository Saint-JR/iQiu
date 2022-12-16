import { useEffect, useState ,useRef } from 'react'
import { View, Text, Pressable, StyleSheet, StatusBar, Image, Animated, FlatList, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {getPostDetail} from '../../api/posts'
import timeCalculate from '../../api/timeCalculate'
import {insertComment} from '../../api/comment'

const Navigation = (props) => {
    const navi = () => {
        props.navigation.goBack()
    }

    return (
        <View style={naviStyles.navigationContainer}>
            <View style={{ height: StatusBar.currentHeight }}></View>
            <View style={naviStyles.navigation}>
                <Pressable onPress={() => { navi() }} style={naviStyles.back}>
                    <Image source={require('../../static/back.png')} style={naviStyles.backImage} />
                </Pressable>

                <Pressable onPress={() => { console.log(123) }} style={naviStyles.share}>
                    <Image source={require('../../static/share.png')} style={naviStyles.shareImage} />
                </Pressable>

                <View style={naviStyles.community}>
                    <Image source={{ uri: props.communityAvatar }} style={naviStyles.communityImage} />
                    <Text style={naviStyles.communityText}>{props.communityName}</Text>
                </View>
            </View>
        </View>
    )
}

const PostContent = (props) => {

    let [comment, setComment] = useState([])
    let [postInfo, setPostInfo] = useState({})
    let [posterId, setPosterId] = useState(0)
    useEffect(() => {
        // console.log(props)
        let { navigation, comment: commentCopy,commentCount, ...postInfoCopy } = props
        setPosterId(postInfoCopy.userId)
        setComment(commentCount!=0&&commentCopy!=null ? commentCopy.map((item, index) => {
            return item
        }) : [])
        setPostInfo({ ...postInfoCopy })
    }, [props])

    let [posterOnly, setPosterOnly] = useState(0)
    let [order, setOrder] = useState(1)

    const orderChoice = useRef(new Animated.Value(1)).current
    let left = orderChoice.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['0%','33.3%','66.6%'],
        extrapolate: "clamp"
    })
    const changeOrder=(index)=>{
        setOrder(index)
        Animated.timing(orderChoice,{
            toValue:index,
            duration:400,
            useNativeDriver:false
        }).start()
    }

    const PostHeader = (props) => {
        // useEffect(()=>{
        //     console.log(postInfo)
        // },[])
        return (
            <View>
                <View style={postHeaderStyles.posterInfoView}>
                    <View style={postHeaderStyles.posterInfo}>
                        <View style={postHeaderStyles.posterAvatarView}>
                            <Image source={{ uri: props.userAvatar }}
                                style={postHeaderStyles.posterAvatar} />
                        </View>
                        <View style={postHeaderStyles.posterNameContainer}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.6)' }}>{props.userName}</Text>
                                <Image source={require('../../static/level.png')} style={{ height: 15, width: 15, resizeMode: 'contain', marginLeft: 5 }} />
                            </View>
                            <View style={postHeaderStyles.posterDetail}>
                                <Text style={postHeaderStyles.postDate}>{props.createTime}</Text>
                                <Text style={postHeaderStyles.postDate}>地点:{props.location}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={postHeaderStyles.type}>
                            <Image source={props.postType == 0 ? require('../../static/chatPost.png') : require('../../static/ballPost.png')} style={postHeaderStyles.typeImage} />
                            <Text style={postHeaderStyles.detailText}>{props.postType == 0 ? '闲聊帖' : '约球帖'}</Text>
                        </View>
                        <View style={postHeaderStyles.detail}>
                            <Text style={postHeaderStyles.detailText}>详情</Text>
                        </View>
                    </View>

                </View>

                <View style={contentStyles.contentContainer}>
                    <Text style={contentStyles.title}>{props.postTitle}</Text>
                    <Text style={contentStyles.content}>{props.postContent}</Text>
                    {
                        props.postType == 1 && (
                            <>
                                <View style={typeStyle.typeView}>
                                    <LinearGradient style={typeStyle.linear} colors={['#0dc2e3', '#3686e7']} />
                                    <Text style={typeStyle.typeText}>球类</Text>
                                    <View style={typeStyle.typeContainer}>
                                        <Text style={typeStyle.text}>{props.ballType}</Text>
                                    </View>

                                </View>
                                <View style={typeStyle.typeView}>
                                    <LinearGradient style={typeStyle.linear} colors={['#0dc2e3', '#3686e7']} />
                                    <Text style={typeStyle.typeText}>人数</Text>
                                    <View style={typeStyle.typeContainer}>
                                        <Text style={typeStyle.text}>{props.peopleCount}</Text>
                                    </View>
                                </View>
                                <View style={typeStyle.typeView}>
                                    <LinearGradient style={typeStyle.linear} colors={['#0dc2e3', '#3686e7']} />
                                    <Text style={typeStyle.typeText}>地点</Text>
                                    <Text style={typeStyle.location}>{props.ballLocation}</Text>
                                </View>
                            </>

                        )
                    }
                    <View style={contentStyles.operateView}>
                        <View style={contentStyles.operate}>
                            <Image source={require('../../static/share.png')} style={contentStyles.operateImage} />
                            <Text style={contentStyles.operateText}>分享</Text>
                        </View>
                        <View style={contentStyles.operate}>
                            <Image style={contentStyles.operateImage} source={require('../../static/like.png')} />
                            <Text style={contentStyles.operateText}>点赞</Text>
                        </View>
                    </View>
                    <Pressable style={contentStyles.recommendContainer} onPress={() => props.navigation.navigate('CommunityDetail',{communityId:1})}>
                        <Text style={contentStyles.recommend}>相关推荐</Text>
                        <View style={contentStyles.recommendView}>
                            <View style={contentStyles.communityInfo}>
                                <Image source={require('../../static/football.png')} style={contentStyles.communityAvatar} />
                                <View style={contentStyles.communityData}>
                                    <Text style={contentStyles.communityName}>足球圈</Text>
                                    <Text style={contentStyles.followNum}>关注 3654</Text>
                                </View>
                            </View>
                            <View style={contentStyles.check}>
                                <Text style={{ fontSize: 12 }}>查看</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={contentStyles.contentDivider}></View>
                <View style={contentStyles.filterView}>
                    <View style={contentStyles.filter}>
                        <Pressable onPress={() => setPosterOnly(0)}>
                            <Text style={[contentStyles.filterText, posterOnly == 0 && contentStyles.selectedText]}>全部回复</Text>
                        </Pressable>
                        <Pressable onPress={() => setPosterOnly(1)}>
                            <Text style={[contentStyles.filterText, posterOnly == 1 && contentStyles.selectedText]}>只看楼主</Text>
                        </Pressable>

                    </View>
                    <View style={contentStyles.orderView}>
                        <Animated.View style={[contentStyles.selectView,{left:left}]}></Animated.View>
                        <Pressable style={{ flex: 1 }} onPress={() => changeOrder(0)}>
                            <Text style={[contentStyles.orderText, order == 0 && contentStyles.selectedText]}>热门</Text>
                        </Pressable>
                        <Pressable style={{ flex: 1 }} onPress={() => changeOrder(1)}>
                            <Text style={[contentStyles.orderText, order == 1 && contentStyles.selectedText]}>正序</Text>
                        </Pressable>
                        <Pressable style={{ flex: 1 }} onPress={() => changeOrder(2)}>
                            <Text style={[contentStyles.orderText, order == 2 && contentStyles.selectedText]}>倒序</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        )
    }


    const Comment = (props) => {
        return (
            <View>
                <View style={commentStyles.userInfoView}>
                    <View style={commentStyles.userInfo}>
                        <View style={commentStyles.avatarView}>
                            <Image source={{ uri: props.commentUserAvatar }} style={commentStyles.avatar} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={commentStyles.userName}>{props.commentUserName}</Text>
                            {
                                posterId == props.commentUserId && (
                                    <View style={commentStyles.posterView}>
                                        <Text style={commentStyles.posterText}>楼主</Text>
                                    </View>
                                )
                            }
                            <Image source={require('../../static/level.png')} style={{ height: 15, width: 15, resizeMode: 'contain', marginLeft: 5 }} />
                        </View>

                    </View>
                    <View style={commentStyles.likeView}>
                        <Image source={require('../../static/like.png')} style={commentStyles.like} />
                        <Text style={commentStyles.likeText}>赞</Text>
                    </View>
                </View>
                <Text style={commentStyles.comment}>{props.commentContent}</Text>
                <View style={commentStyles.commentDate}>
                    <Text style={commentStyles.dateText}>第{props.orderId}楼</Text>
                    <Text style={commentStyles.dateText}>{timeCalculate(props.commentCreateTime,"回复于") }</Text>
                    <Text style={commentStyles.dateText}>地点:{props.commentLocation}</Text>
                </View>
                <View style={commentStyles.commentDivider}></View>
            </View>


        )
    }

    return (
        <FlatList style={postStyles.postScroll}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode='on-drag'
            ListHeaderComponent={() => <PostHeader navigation={props.navigation} {...postInfo} />}
            ListFooterComponent={() => {
                return (
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 20 }}>
                        <Text>暂时只有这么多啦~</Text>
                    </View>
                )
            }}
            data={props.commentCount==0?[]:comment}
            renderItem={({ item, index, separators }) => {
                // console.log(posterId)
                // console.log(item.userId)
                // console.log(posterId==item.userId)
                if (posterOnly == 0) {
                    return (
                        <Pressable onPress={() => { console.log(index) }} key={item.commentId}>
                            <Comment {...item} />
                        </Pressable>
                    )
                } else if (posterOnly == 1 && item.commentUserId == posterId) {
                    return (
                        <Pressable onPress={() => { console.log(index) }} key={item.commentId}>
                            <Comment {...item} />
                        </Pressable>
                    )
                }
            }

            }
        />

    )
}

const Operation = (props) => {
    let [focus, setFocus] = useState(0)

    const [text,setText]=useState('')
    const textInput=useRef(null)

    const send=()=>{
        const comment={
            userId:userId,
            commentType:0,
            postId:props.postId,
            content:text,
            createTime:new Date(),
        }
        insertComment(comment)
        .then((res)=>{
            console.log(res)
            props.onSend(res)
            textInput.current.clear()
            textInput.current.blur()
            // this.TextInput.clear()
        }).catch((err)=>{
            console.log(err)
        })
    } 

    return (
        <View style={operationStyles.operationView}>
            <View style={[operationStyles.inputView, { width: focus == 0 ? '60%' : '80%' }]}>
                <TextInput placeholder='文明发言哦~' style={operationStyles.input} 
                    onFocus={() => setFocus(1)} onBlur={() => setFocus(0)} onChangeText={(e)=>setText(e)}
                    ref={textInput}
                />
            </View>
            {
                focus == 0 ?
                    <>
                        <Image source={require('../../static/comment.png')} style={operationStyles.image} />
                        <Image source={require('../../static/like.png')} style={operationStyles.image} />
                        <Image source={require('../../static/share.png')} style={operationStyles.image} />
                    </>

                    :
                    <Pressable style={[operationStyles.send,{opacity:text==''?0.3:1}]} onPress={()=>text!=''&&send()}>
                        <Text style={{ fontSize: 12, color: 'white' }}>发表</Text>
                    </Pressable>

            }

        </View>

    )
}

const PostDetail = (props) => {
    let [result, setResult] = useState({})

    useEffect(() => {
        // fetch(`http://localhost:8081/data/postDetail${props.route.params.postId}.json`).then((res) => res.json())
        // .then((resJson) => {
        //     setResult({ ...resJson.data })
        // }).catch((err) => {
        //     console.log(err)
        // })

        getPostDetail(props.route.params.postId)
        .then((res)=>{
            console.log(res)
            const timeString=timeCalculate(res.createTime,"发布于")
            setResult({...res,createTime:timeString})
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    showComment=(e)=>{
        let comment=result.comment
        comment.push({...e,orderId:comment.length+1})
        setResult({
            ...result,
            comment:comment
        })
    }

    return (
        <>
            <View style={mainStyles.view}>
                <Navigation navigation={props.navigation} communityName={result.communityName} communityAvatar={result.communityAvatar} />
                <PostContent navigation={props.navigation} {...result} />
                <Operation postId={props.route.params.postId} onSend={(e)=>showComment(e)}/>
            </View>
        </>
    )
}


const mainStyles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        // display:'flex',
        // backgroundColor:'red'
    },
})


const naviStyles = StyleSheet.create({

    back: {
        position: 'absolute',
        left: 30
    },
    backImage: {
        height: 25,
        width: 25
    },
    share: {
        position: 'absolute',
        right: 30
    },
    shareImage: {
        height: 25,
        width: 25
    },
    navigationContainer: {
        backgroundColor: 'white',

    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: 'rgba(100,100,100,0.1)',
        borderBottomWidth: 1,
    },
    communityImage: {
        height: 25,
        width: 25,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: 'rgba(50,50,50,0.1)',
        borderWidth: 1,
        marginRight: 5
    },
    communityText: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.8)'
    },
    community: {
        backgroundColor: 'rgba(240,240,240,1)',
        padding: 7,
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 100,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

const postHeaderStyles = StyleSheet.create({
    posterInfoView: {
        margin: 20,
        marginLeft: 15,
        marginRight: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:1,
    },
    posterInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    posterAvatarView: {
        height: 50,
        width: 50,
        borderRadius: 50,
        overflow: 'hidden'
    },
    posterAvatar: {
        height: 50,
        width: 50,
    },
    posterNameContainer: {
        marginLeft: 10
    },
    posterName: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 5
    },
    posterDetail: {
        display: 'flex',
        flexDirection: 'row'
    },
    postDate: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.4)',
        marginRight: 10
    },
    type: {
        borderRadius: 100,
        // height:30,
        borderColor: 'rgba(54,134,231,1)',
        borderWidth: 1,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        marginRight: 10,
    },
    typeImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 5
    },
    detail: {
        borderRadius: 100,
        // height:30,
        backgroundColor: 'rgba(54,134,231,0.3)',
        padding: 8,
        paddingLeft: 18,
        paddingRight: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight:10

    },
    detailText: {
        fontSize: 13,
        color: '#3686e7',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:1,
    }
})

const typeStyle = StyleSheet.create({
    typeView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:15,
        marginBottom: 20
    },
    linear: {
        width: 5,
        height: '100%',
        borderRadius: 10,
        opacity: 1
    },
    typeText: {
        color: 'rgba(0,0,0,0.8)',
        fontWeight: '900',
        fontSize: 16,
        marginLeft: 7
    },
    typeContainer: {
        marginLeft: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#3686e7',
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#3686e7',
        fontSize: 12
    },
    location: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 14,
        marginLeft: 20,
        paddingTop: 3,
        paddingBottom: 3
    }
})

const contentStyles = StyleSheet.create({
    contentContainer: {
        margin: 15,
        marginTop: 0,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 20
    },
    content: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.8)',
        // letterSpacing:1,
        lineHeight: 28,
        marginBottom: 20
    },
    operateView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        borderBottomWidth: 1,
        borderColor: 'rgb(240,240,240)',
        paddingBottom: 25
    },
    operate: {
        display: 'flex',
        alignItems: 'center'
    },
    operateText: {
        marginTop: 5,
        fontSize: 12
    },
    operateImage: {
        height: 25,
        width: 25
    },
    recommendContainer: {
        marginTop: 15,
    },
    recommend: {
        fontSize: 12,
        marginBottom: 10,
        color: 'rgba(0,0,0,0.4)'
    },
    recommendView: {
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    communityInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    communityAvatar: {
        height: 50,
        width: 50
    },
    communityData: {
        marginLeft: 10
    },
    communityName: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 5
    },
    followNum: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.4)'
    },
    check: {
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,

        borderRadius: 100,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(220,220,220)'
    },
    contentDivider: {
        width: '100%',
        marginTop: 10,
        height: 8,
        backgroundColor: 'rgba(240,240,240,1)'
    },
    filterView: {
        margin: 15,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    filterText: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.4)',
        marginRight: 20
    },
    selectedText: {
        fontWeight: '700',
        color: 'rgba(0,0,0,0.8)'
    },
    orderView: {
        width: '43%',
        display: 'flex',
        flexDirection: 'row',
        // padding:10,

        borderRadius: 30,
        backgroundColor: 'rgb(240,240,240)'
    },
    orderText: {

        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 13,
        color: 'rgba(0,0,0,0.4)',
        paddingTop: 5,
        paddingBottom: 5,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    selectView: {
        position: 'absolute',
        height: '100%',
        width: '33%',
        // left: '33%',
        backgroundColor: 'white',
        borderRadius: 100,
        borderColor: 'rgba(100,100,100,0.1)',
        borderWidth: 1
    }
})

const postStyles = StyleSheet.create({

    postScroll: {
        backgroundColor: 'white'
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    }
})

const operationStyles = StyleSheet.create({
    operationView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'rgba(100,100,100,0.1)',
        borderTopWidth: 1,
        borderStyle: 'solid'
    },
    inputView: {
        height: 40,
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        marginLeft: 10,
        marginRight: 10,
        // padding:0,
        // backgroundColor:'red',
        flex: 1
    },
    send: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3686e7',
        borderRadius: 100,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12
    },
    image: {
        height: 25,
        width: 25
    }

})

const commentStyles = StyleSheet.create({
    userInfoView: {
        margin: 15,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userInfo: {
        width: '45%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between',
    },
    avatarView: {
        height: 40,
        width: 40,
        borderRadius: 40,
        overflow: 'hidden'
    },
    avatar: {
        height: 40,
        width: 40,
    },
    userName: {
        fontSize: 16,
        // color:'rgba(0,0,0,0.4)',
        marginLeft: 15,
        color: 'rgba(0,0,0,0.6)'
    },
    posterView: {
        marginLeft: 5,
        borderColor: '#3686e7',
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    posterText: {
        color: '#3686e7',
        fontSize: 10
    },
    likeView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    like: {
        height: 20,
        width: 20,
    },
    likeText: {
        fontSize: 13,
        color: 'rgba(0,0,0,0.4)',
        marginLeft: 5
    },
    comment: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.8)',
        // letterSpacing:1,
        lineHeight: 28,
        marginLeft: 65
    },
    commentDate: {
        marginLeft: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    dateText: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.4)',
        marginRight: 12
    },
    commentDivider: {
        marginLeft: 65,
        marginRight: 65,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(240,240,240,1)',
        borderStyle: 'solid'
    }
})

export default PostDetail;