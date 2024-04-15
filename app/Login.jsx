import React from 'react'
import { router } from 'expo-router'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Pressable } from "react-native"


const style = StyleSheet.create({
    UpperText: { width: 180, height: 23, top: 68, left: 26, fontSize: 20, lineHeight: 23.44, color: "#2C2B2B", fontWeight:'600' },
    InputBox: { width: 343, height: 50, borderRadius: 12, backgroundColor: '#F1F1F1', color: '#7F7F7F', alignItems: 'center', position: 'relative', fontWeight:'600' },
    CheckBoxText: { color: '#7F7F7F', left: 35, height: 21, width: 313, top: 280, fontSize: 13, textDecorationLine: 'underline', fontWeight:'500' },
    ViewBox: {top: 488,},
    AccountBox: { width: 343, height: 50, top: 70, left: 35, backgroundColor: '#9FB2FF', borderRadius: 12, position: 'relative' },
    AccountText: { width: 153, height: 25, top: 13, left: 95, color: '#FFFFFF', textAlign:'center', fontSize:16, fontWeight:'600'},
    OrBox: { flexDirection: 'row', alignItems: 'center', top: 95, },
    Line1: { width: 150, height: 0.5, top: 2.5, left: 35, borderWidth: 0.5, borderColor: '#7F7F7F' },
    TextB: { left: 47 },
    Line2: { width: 153, height: 0.5, top: 2.5, left: 58, borderWidth: 0.5, borderColor: '#7F7F7F' },
    ParentGoogle: { flexDirection: 'row', alignItems: 'center', },
    Google: { width: 44, height: 44, top: 100, left: 150, borderWidth: 0.5, borderColor: '#7F7F7F', borderRadius: 7 },
    GoogleIcon: { width: 20, height: 20, top: 12, left: 11.5 },
    Facebook: { width: 44, height: 44, top: 100, left: 170, borderWidth: 0.5, borderColor: '#7F7F7F', borderRadius: 7 },
    FacebookIcon: { width: 60, height: 20, top: 10, left: 17, color: '#1A7AEB' },
    BottomLine: { color: '#2C2B2B', fontSize: 13, top: 115, left: 70, fontWeight:'500' },
    BottomSpan: { color: '#819CFF', top: 50, textDecorationLine: 'underline' },
})

const Login = () => {

    return (
        <SafeAreaView style={{ justifyContent: 'center' }}>
            <Text style={style.UpperText}>
                Welcome Back
            </Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TextInput style={[style.InputBox, { top: 135, paddingLeft: 10 }]} placeholder='Email' />
                <TextInput style={[style.InputBox, { top: 170, paddingLeft: 10 }]} placeholder='Password' />
            </View>


            <Text style={style.CheckBoxText}>Forgot your password? </Text>
            <View style={style.ViewBox}>
                <Pressable onPress={() => router.push('/GoalPage')}>
                    <View style={style.AccountBox}>
                        <Text style={style.AccountText}>
                            Sign In
                        </Text>
                    </View>
                </Pressable>
                <View style={style.OrBox}>
                    <View style={style.Line1}></View>
                    <Text style={style.TextB}>Or</Text>
                    <View style={style.Line2}></View>
                </View>
                <View style={style.ParentGoogle}>
                    <TouchableOpacity>
                        <View style={style.Google}>
                            <Image style={style.GoogleIcon} source={require('../assets/images/google.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.Facebook}>
                            <Image style={style.GoogleIcon} source={require('../assets/images/facebook.jpg')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Pressable onPress={() => router.push('/SignUp')}>
                    <Text style={style.BottomLine} >
                        Don't have an account? <Text style={style.BottomSpan}>Create an Account</Text>
                    </Text>
                </Pressable>
            </View>



        </SafeAreaView>
    )
}

export default Login