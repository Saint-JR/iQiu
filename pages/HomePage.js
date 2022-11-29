import { View, Text, StyleSheet } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";
import { naviHeight } from '../component/Navigation'
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        console.log(naviHeight)
        console.log(1)
    }, [])
    return (
        <>
            <View style={[styles.background, { height: `${100 - naviHeight}%` }]}>
                <LinearGradient style={styles.backColor} 
                    colors={["rgba(92,163,214,0.3)", "rgba(200,200,200,0.2)"]}
                    locations={[0.4,1]}
                ></LinearGradient>
                <View style={styles.backgroundBall1}></View>
                <View style={styles.backgroundBall2}></View>
                <BlurView style={styles.blur}
                    blurType="light"
                    blurAmount={20} />
            </View>


            <View style={[styles.mainPage, { height: `${100 - naviHeight}%` }]}>

                <View style={styles.searchView}>
                    <View style={styles.search}>

                    </View>
                </View>

                <View style={styles.postScroll}>
                    <View style={styles.post}></View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        // height: '90%',
    },
    blur: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(200,200,200,0.2)',
        blurRadius: 20,
        position: 'absolute',
        top: 0,
    },
    backColor: {
        // backgroundColor: 'rgba(92,163,214,0.3)',
        width: '100%',
        height: '100%'
    },
    backgroundBall1: {
        height: 250,
        width: 250,
        borderRadius: 250,
        position: 'absolute',
        top: -50,
        left: -20,
        backgroundColor: 'rgba(247,95,112,0.2)'
    },
    backgroundBall2: {
        height: 250,
        width: 250,
        borderRadius: 250,
        position: 'absolute',
        right: -20,
        top: -50,
        backgroundColor: 'rgba(95,132,247,0.2)'
    },
    mainPage: {
        width: '100%',
        // height: '90%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    searchView: {
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        marginTop: 20,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        height: '100%',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 50
    },
    postScroll: {
        width: '100%',
        height: '100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        flexShrink: 0.5,
        marginTop: 20
    },
    post: {
        height: 200,
        // width:'100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
})

export default HomePage;