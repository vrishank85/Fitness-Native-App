import React from 'react'
import { router } from 'expo-router'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Pressable } from "react-native"
import { CheckBox } from 'react-native-elements';

const style = StyleSheet.create({
    UpperText: { width: 180, height: 23, top: 68, left: 26, fontSize: 20, lineHeight: 23.44, color: "#2C2B2B" , fontWeight:'600'},
    InputBox: { width: 343, height: 50, borderRadius: 12, backgroundColor: '#F1F1F1', color: '#7F7F7F', alignItems: 'center', position: 'relative', fontWeight:'600' },
    CheckBoxContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 455, left: 15, position: 'relative' },
    CheckBoxText: { color: '#7F7F7F', left: -15, height: 21, width: 313, top: -1, fontSize: 12,fontWeight:'600' },
    TextBox: { color: '#9FB2FF', textDecorationLine: 'underline' },
    AccountBox: { width: 343, height: 50, top: 70, left: 35, backgroundColor: '#9FB2FF', borderRadius: 12, position: 'relative' },
    AccountText: { width: 153, height: 20, top: 13, left: 105, color: '#FFFFFF', fontWeight:'600', fontSize: 16 },
    OrBox: { flexDirection: 'row', alignItems: 'center', top: 95, fontWeight:'500'},
    Line1: { width: 150, height: 0.5, top: 2.5, left: 35, borderWidth: 0.5, borderColor: '#7F7F7F' },
    TextB: { left: 47 },
    Line2: { width: 153, height: 0.5, top: 2.5, left: 58, borderWidth: 0.5, borderColor: '#7F7F7F' },
    ParentGoogle: { flexDirection: 'row', alignItems: 'center', },
    Google: { width: 44, height: 44, top: 100, left: 150, borderWidth: 0.5, borderColor: '#7F7F7F', borderRadius: 7 },
    GoogleIcon: { width: 20, height: 20, top: 12, left: 11.5 },
    Facebook: { width: 44, height: 44, top: 100, left: 170, borderWidth: 0.5, borderColor: '#7F7F7F', borderRadius: 7 },
    FacebookIcon: { width: 60, height: 20, top: 10, left: 17, color: '#1A7AEB' },
    BottomLine: { color: '#2C2B2B', fontSize: 13, top: 115, left: 100,fontWeight:'500' },
    BottomSpan: { color: '#819CFF', top: 50, textDecorationLine: 'underline',fontWeight:'500' },
})

const SignUp = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <SafeAreaView style={{ justifyContent: 'center' }}>
            <Text style={style.UpperText}>
                Create an account
            </Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TextInput style={[style.InputBox, { top: 135, paddingLeft: 10 }]} placeholder='First Name' />
                <TextInput style={[style.InputBox, { top: 170, paddingLeft: 10 }]} placeholder='Last Name' />
                <TextInput style={[style.InputBox, { top: 205, paddingLeft: 10 }]} placeholder='Email' />
                <TextInput style={[style.InputBox, { top: 240, paddingLeft: 10 }]} placeholder='Password' />
            </View>
            <View style={style.CheckBoxContainer}>
                <CheckBox checked={isChecked} onPress={() => setIsChecked(!isChecked)} />
                <Text style={style.CheckBoxText}>By proceeding, I agree to all <Text style={style.TextBox}>T&C</Text> and <Text style={style.TextBox}>Privacy Policy</Text></Text>
            </View>
            <Pressable onPress={() => router.push('/GoalPage')}>
                <View style={style.AccountBox}>
                    <Text style={style.AccountText}>
                        Create an Account
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
            <Pressable onPress={() => router.push('/Login')}>
                <Text style={style.BottomLine} >
                    Already have an account? <Text style={style.BottomSpan}>Login </Text>
                </Text>
            </Pressable>


        </SafeAreaView>
    )
}

export default SignUp