import { def } from '@vue/shared'
import { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Lottie from 'lottie-react-native';

export const naviHeight = 8

const Navigation = (props) => {

    let post = useRef(new Animated.Value(0)).current

    let bottom = post.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30]
    })

    let width = post.interpolate({
        inputRange: [0, 1],
        outputRange: [60, 50]
    })

    let rotate = post.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '135deg'],
    });

    let rgb = post.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(54,134,231)', 'rgb(229,138,146)'],
    });

    let borderRadius=post.interpolate({
        inputRange:[0,1],
        outputRange:[10,25]
    })

    let Ani = {
        bottom: bottom,
        width: width,
        transform: [{ rotate: rotate }],
        backgroundColor: rgb,
        borderRadius:borderRadius
    }

    let [selectPost, setSelectPost] = useState(false)
    let [select, setSelect] = useState(1)

    const navigate = (index) => {
        if (index == 1) {
            props.navigation.navigate('HomePage')
            setSelect(1)
        } else if (index == 2) {
            props.navigation.navigate('Community')
            setSelect(2)
        } else if (index == 4) {
            props.navigation.navigate('Messages')
            setSelect(4)
        } else if (index == 5) {
            props.navigation.navigate('My')
            setSelect(5)
        } else if (index == 3) {
            setSelectPost(!selectPost)
            if (selectPost) {
                Animated.timing(post, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: false
                }).start()
            } else {
                Animated.timing(post, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: false
                }).start()
            }


        }
    }



    return (
        <View style={{ height: `${naviHeight}%`, width: '100%' }}>
            <View style={styles.back}>
                <Animated.View
                    style={[styles.mainball, { transform: [{ rotate: rotate }], opacity: post }]}
                    pointerEvents={selectPost ? 'none' : 'auto'}
                >
                    <View style={[styles.ball, { left: -40 }, { transform: [{ rotate: '-90deg' }] }]}>
                        <Image source={require('../static/chatPost.png')} style={styles.postImage} />
                        <Text style={styles.postText}>闲聊</Text>
                    </View>
                    <View style={[styles.ball, { bottom: -40 }, { transform: [{ rotate: '180deg' }] }]}>
                        <Image source={require('../static/ballPost.png')} style={styles.postImage} />
                        <Text style={styles.postText}>约球</Text>
                    </View>
                </Animated.View>
            </View>

            <View style={styles.navi}>
                <Pressable onPress={() => { navigate(1) }}>
                    <View style={styles.buttonView}>
                        {
                            select == 1
                                ?
                                <Lottie source={require('../static/home.json')} autoPlay={true} loop={false} style={[styles.buttonImage]} />
                                :
                                <Image source={require('../static/home.png')} style={styles.buttonImage} />

                        }


                        <Text style={[styles.buttonText, select == 1 ? styles.select : '']}>首页</Text>
                    </View>

                </Pressable>
                <Pressable onPress={() => navigate(2)}>
                    <View style={styles.buttonView}>
                        {
                            select == 2
                                ?
                                <Lottie source={require('../static/community.json')} autoPlay={true} loop={false} style={[styles.buttonImage]} />
                                :
                                <Image source={require('../static/community.png')} style={styles.buttonImage} />
                        }
                        <Text style={[styles.buttonText, select == 2 ? styles.select : '']}>圈子</Text>
                    </View>
                </Pressable>

                <View style={{ height: 50, width: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>


                    <Pressable onPress={() => navigate(3)} style={styles.pressablePost}>
                        <Animated.View style={[styles.post, { ...Ani }]}>
                            <Image style={styles.postPlus} source={require('../static/plus.png')} />
                        </Animated.View>
                    </Pressable>
                </View>

                <Pressable onPress={() => { navigate(4) }}>
                    <View style={styles.buttonView}>
                        {
                            select == 4
                                ?
                                <Lottie source={require('../static/message.json')} autoPlay={true} loop={false} style={[styles.buttonImage]} />
                                :
                                <Image source={require('../static/message.png')} style={styles.buttonImage} />
                        }
                        
                        <Text style={[styles.buttonText, select == 4 ? styles.select : '']}>消息</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigate(5)}>
                    <View style={styles.buttonView}>
                        {
                            select == 5
                                ?
                                <Lottie source={require('../static/my.json')} autoPlay={true} loop={false} style={[styles.buttonImage]} />
                                :
                                <Image source={require('../static/my.png')} style={styles.buttonImage} />
                        }
                        <Text style={[styles.buttonText, select == 5 ? styles.select : '']}>我的</Text>
                    </View>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    back: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navi: {
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        // height:'10%',
        position: 'absolute',
        // bottom:0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor:'rgba(113,144,229,0.3)'
        backgroundColor: 'white',
        borderTopColor: 'rgba(200,200,200,0.2)',
        borderTopWidth: 1,
        borderStyle: 'solid'
    },
    pressablePost: {
        position: 'absolute',
        // backgroundColor:'red',

    },
    post: {

        // bottom:0,
        height: 50,
        // width:60,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:7,
        backgroundColor: '#3686e7',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    postPlus: {
        height: 20,
        width: 20
    },
    buttonView: {
        display: 'flex',
        alignItems: 'center',
        width: 40,
    },
    buttonText: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.8)'
    },
    buttonImage: {
        height: 25,
        width: 40,
        marginBottom: 5,
        resizeMode: 'contain',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    select: {
        fontWeight: '900'
    },
    mainball: {
        position: 'absolute',
        height: 170,
        width: 170,
        borderRadius: 170,
        // backgroundColor:'red',
        bottom: -30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 80,
        backgroundColor: 'white',
        borderColor: 'rgb(240,240,240)',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    postText: {
        fontSize: 12,
        marginTop: 5
    },
    postImage: {
        width: 35,
        height: 35,
        resizeMode:'contain'
    }
})

export default Navigation;