
import { router } from 'expo-router'
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from "react-native"

const styles = StyleSheet.create({
    Skip: {
        color: '#9FB2FF', fontSize: 16, lineHeight: 19.5, width: 36, height: 20, top: 44, left: 360, textDecorationLine: 'underline', fontWeight: '500'
    },
    Rectangle: {
        width: 390, height: 77, top: 819, left: -1424, borderRadius: 20,
    },
    Image: {
        width: 295, height: 282, top: 132, left: 55,
    },
    TrackText: {
        width: 160, height: 24, top: 200, left: 16, fontSize: 20, lineHeight: 24.38, color: '#2C2B2B', fontWeight: '600'
    },
    BeneathTrack: {
        width: 343, height: 60, top: 225, left: 16, fontSize: 16, lineHeight: 18, color: '#787878', flexWrap: 'wrap', fontWeight: '500'
    },
    Eclipse: {
        width: 60, height: 60, top: 325, left: 335,
    }
})

const FirstHome = () => {
    return (
        <SafeAreaView>
            <Pressable onPress={() => router.push('/SecondHome')}  >

                <Text style={styles.Skip}>Skip</Text>
            </Pressable>

            <View>
                <Image style={styles.Image} source={require('../assets/images/image1.png')} />
                <Text style={styles.TrackText}>Track Your Goal</Text>
                <Text style={styles.BeneathTrack}>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</Text>

                <Pressable onPress={() => router.push('/SecondHome')}  >

                    <Image style={styles.Eclipse} source={require('../assets/images/Group1.png')} />
                </Pressable>


            </View>
        </SafeAreaView>

    )
}

export default FirstHome
