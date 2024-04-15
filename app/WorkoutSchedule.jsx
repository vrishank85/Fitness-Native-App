import React from 'react'
import { router } from 'expo-router'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from "react-native"
const style = StyleSheet.create({
    Navbar: { flexDirection: 'row', justifyContent: 'center', top: 68 },
    LeftArrow: { right: 90, width: 25, height: 25, borderRadius: 3 },
    TrackerText: { color: '#2C2B2B', width: 'auto', fontSize: 20, right: 20, bottom: 5, fontWeight: '600' },
    BeneathTracker: { flexDirection: 'row', justifyContent: 'center', top: 100, },
    GoodJobText: { width: 115, height: 15, },
    FooterView: { height: 105, width: 500, right: 40, top: 200, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' },
    Group3: { bottom: 45, width: 100, height: 100, left: 178 },
    Group4: { top:20, right:50, width: 350, height: 32, },
    Body: { bottom: 20 },
    Calander: { top: 120,},
    CalanderImg: {left: 25},
    Time:{fontSize: 13, fontWeight: '600', left: 25, },
    Line1: { width: 500, height: 0.5,  left: 1, borderWidth: 0.5, borderColor: '#7F7F7F' },
    Ab:{ height: 30, backgroundColor: '#E9B1E0', borderRadius: 20,},
    AbText: {color: "white", fontWeight: '600', fontSize: 13, textAlign: 'center', top: 4,},
    ThreePm:{height: 30, backgroundColor: '#F1F1F1', borderRadius: 20, width: 200, top: 225, left: 125,},
    LowerBody:{color: "#2C2B2B", fontWeight: '600', fontSize: 13, textAlign: 'center', top: 4,},
    Circle:{height: 63, backgroundColor: '#E9B1E0', borderRadius: 50, width: 63, top: 220, left: 330, },
    Plus:{fontSize: 30, textAlign:'center', top: 8, color:'white'}


})


const WorkoutSchedule = () => {

    return (
        <SafeAreaView>
            <View style={style.Navbar}>
                <TouchableOpacity>
                    <Image style={style.LeftArrow} source={require('../assets/images/chevron-left.png')} />
                </TouchableOpacity>

                <Text style={style.TrackerText} >Workout Schedule</Text>
            </View>
            <View style={style.Body} >
                    <View style={style.BeneathTracker}>
                       <Image style={style.GoodJobText} source={require('../assets/images/Date.png')} />
                    </View>
                    <View style={style.Calander} >
                      <Image style={style.CalanderImg} source={require('../assets/images/Calendar.png')} />
                    </View>
                    <View>
                        <Text style={[style.Time, {top: 150}]} >06:00 AM</Text>
                        <View style={[style.Line1,{top: 160}]}></View>
                        <Text style={[style.Time, {top: 170}]} >07:00 AM</Text>
                        <View style={[style.Line1,{top: 180}]}></View>
                        <View style={[style.Ab,{width: 149,  top: 165, left:230 }]}> 
                            <Text style={style.AbText} >Ab Workout, 7:30am</Text>
                        </View>
                        <Text style={[style.Time, {top: 160}]} >08:00 AM</Text>
                        <View style={[style.Line1,{top: 170}]}></View>
                        <Text style={[style.Time, {top: 180}]} >09:00 AM</Text>
                        <View style={[style.Ab,{width: 200,  top: 165, left:120 }]}> 
                            <Text style={style.AbText} >Upperbody Workout, 9am</Text>
                        </View>
                        <View style={[style.Line1,{top: 160}]}></View>
                        <View style={{backgroundColor:'white', top: 160,}}>
                             <Text style={[style.Time, {top: 10}]} >10:00 AM</Text>
                        </View>
                        
                        <View style={[style.Line1,{top: 180}]}></View>
                        <Text style={[style.Time, {top: 190}]} >11:00 AM</Text>
                        <View style={[style.Line1,{top: 200}]}></View>
                        <Text style={[style.Time, {top: 210}]} >12:00 AM</Text>
                        <View style={[style.Line1,{top: 220}]}></View>
                        <Text style={[style.Time, {top: 230}]} >01:00 AM</Text>
                        <View style={[style.Line1,{top: 240}]}></View>
                        <Text style={[style.Time, {top: 250}]} >02:00 AM</Text>
                        <View  style={style.ThreePm}>
                            <Text style={style.LowerBody} >
                            Lowerbody Workout, 3pm
                            </Text>
                        </View>
                        <View style={[style.Line1,{top: 230}]}></View>
                        <Text style={[style.Time, {top: 240}]} >03:00 AM</Text>
                        <View style={style.Circle}>
                            <Text style={style.Plus} >
                                +
                            </Text>
                        </View>
                        <View style={{width: 329, height: 0.5,  left: 1, borderWidth: 0.5, borderColor: '#7F7F7F', top: 190,}}></View>
                        <View style={{width: 329, height: 0.5,  left: 392, borderWidth: 0.5, borderColor: '#7F7F7F', top: 190,}}></View>
                        <Text style={[style.Time, {top: 200}]} >04:00 AM</Text>
                        <View style={[style.Line1,{top: 210}]}></View>
                        <Text style={[style.Time, {top: 220}]} >05:00 AM</Text>
                        <View style={[style.Line1,{top: 230}]}></View>
                    </View>
                    
                    
               



            </View>
            <View style={style.FooterView} >
                <TouchableOpacity>
                    <Image style={style.Group3} source={require('../assets/images/Group3.png')} />
                </TouchableOpacity>
                <Image style={style.Group4} source={require('../assets/images/Group4.png')} />
            </View>
        </SafeAreaView>
    )
}

export default WorkoutSchedule