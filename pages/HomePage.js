import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";
import { naviHeight } from '../component/Navigation'
import { useEffect } from 'react';

const HomePage = (props) => {
    useEffect(()=>{
        console.log(props.navigation)
    },[])

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
                <View style={{height:StatusBar.currentHeight}}></View>

                <View style={styles.searchView}>
                    <View style={styles.search}>

                    </View>
                </View>

                <ScrollView style={styles.postScroll} 
                    keyboardDismissMode="on-drag"
                >
                    <View style={styles.post}></View>
                    <View style={styles.post}></View>
                    <View style={styles.post}></View>
                    <View style={styles.post}></View>
                </ScrollView>

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
        backgroundColor: 'rgba(220,220,220,0.2)',
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
        height: 200,
        width: 200,
        borderRadius: 200,
        position: 'absolute',
        top: -20,
        left: -10,
        backgroundColor: 'rgba(255,0,107,0.25)'
    },
    backgroundBall2: {
        height: 200,
        width: 200,
        borderRadius: 200,
        position: 'absolute',
        right: -10,
        top: -20,
        backgroundColor: 'rgba(95,132,247,0.3)'
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
        marginTop: 20,
    },
    post: {
        height: 200,
        // width:'100%',
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
        margin: 10,
        marginBottom:0,
        backgroundColor: 'white',
        borderRadius: 10
    }
})

export default HomePage;