import React from 'react'
import { router } from 'expo-router'

import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Switch, Pressable } from "react-native"
const style = StyleSheet.create({
    Navbar: { flexDirection: 'row', justifyContent: 'center', top: 68 },
    LeftArrow: { right: 95, width: 25, height: 25, borderRadius: 3 },
    TrackerText: { color: '#2C2B2B', width: 'auto', fontSize: 20, right: 20, bottom: 5, fontWeight: '600' },
    BeneathTracker: { flexDirection: 'row', justifyContent: 'center', top: 142.96, left: 40 },
    GoodJobText: { fontSize: 15, fontWeight: '400' },
    CalText: { fontSize: 15, left: 35, fontWeight: '400' },
    ParentUnion: { flexDirection: 'row' },
    Union: { left: 181, top: 145, width: 3, },
    Union2: { left: 294, top: 145, width: 3, },
    Chart: { top: 148, left: 25, width: 350, height: 94, },
    Frame: { top: 180, width: 387, height: 50, left: 25, },
    WorkoutView: { flexDirection: 'row', bottom: 25, },
    WorkoutText: { fontSize: 16, top: 250, left: 25, color: '#2C2B2B', fontWeight: '600' },
    SeeMore: { color: '#7F7F7F', top: 253, left: 165, fontWeight: '500' },
    WorkoutView2: { flexDirection: 'column', },
    FullBody: { top: 250, flexDirection: 'row', left: 45, height: 'auto', width: 340, },
    BodyImg: { width: 55, height: 55, },
    BodyWorkout: { left: 10, flexDirection: 'column' },
    FullbodyText: { right: 3, fontSize: 14, fontWeight: '500', color: '#2C2B2B', },
    ToggleView: { backgroundColor: '#95BEFF', height: 30, width: 50, left: 97, borderRadius: 17, flexDirection: 'row', top: 8, },
    UpperBody: { color: '#7F7F7F', fontSize: 12, fontWeight: '500', top: 3, },
    UpperBodyView: { top: 270, flexDirection: 'row', left: 45, height: 'auto', width: 340, backgroundColor: 'white', borderRadius: 12, borderColor: '#7F7F7F' },
    BodyImg2: { width: 55, height: 55 },
    UpperWorkout: { left: 10, flexDirection: 'column' },
    UpperBodyWorkout: { right: 1, fontSize: 14, fontWeight: '500', color: '#2C2B2B', },
    UpperBodyTime: { color: '#7F7F7F', fontSize: 12, fontWeight: '500', top: 3 },
    ToggleView2: { backgroundColor: '#95BEFF', height: 30, width: 50, left: 85, borderRadius: 17, flexDirection: 'row', top: 8, },
    TrainText:{fontSize:16, color:"#2C2B2B", fontWeight:'600', top: 280, left: 25},
    BottomView: {flexDirection: 'row', top:290, backgroundColor:'#8CB1FF', width: 370, left: 25, borderRadius:12, height: "600",},
    Ellipse55:{height: 80, width: 80, left:150, top: 20,},
    BottomViewText2: {fontSize:14, fontWeight:'500', left: 12, top: 7, },
    BottomViewText3: {fontSize:13, fontWeight:'500', left: 12, top: 7,},
    FooterView:{ height: 105, width: 500, right: 40, top: 270, backgroundColor:'white', flexDirection:'row', justifyContent: 'center'},
    Group3:{bottom: 35, width: 100, height: 100, left:178},
    Group4:{ top:30, right:50, width: 350, height: 32,},
    Body:{bottom: 20}


})


const WorkoutTracker = () => {
    const [fullBodyEnabled, setFullBodyEnabled] = React.useState(false);
    const [upperBodyEnabled, setUpperBodyEnabled] = React.useState(false);
    const toggleFullBodySwitch = () => setFullBodyEnabled(previousState => !previousState);
    const toggleUpperBodySwitch = () => setUpperBodyEnabled(previousState => !previousState);
    return (
        <SafeAreaView>
            <View style={style.Navbar}>
                <TouchableOpacity>
                    <Image style={style.LeftArrow} source={require('../assets/images/chevron-left.png')} />
                </TouchableOpacity>

                <Text style={style.TrackerText} >Workout Tracker</Text>
            </View>
            <View style={style.Body} >
                <View>
                    <View style={style.BeneathTracker}>
                        <Text style={style.GoodJobText}>Good job</Text>
                        <Text style={style.CalText}>less then 320cal</Text>
                    </View>
                    <View style={style.ParentUnion}>
                        <Image style={style.Union} source={require('../assets/images/Union.png')} />
                        <Image style={style.Union2} source={require('../assets/images/Union.png')} />
                    </View>
                    <Pressable onPress={() => router.push('/WorkoutSchedule')}>
                      <Image style={style.Chart} source={require('../assets/images/Chart.png')} />
                    </Pressable>
                    
                    <Image style={style.Frame} source={require('../assets/images/Frame.png')} />
                </View>
                <View style={style.WorkoutView}>
                    <Text style={style.WorkoutText}>
                        Upcoming Workout
                    </Text>
                    <TouchableOpacity>
                        <Text style={style.SeeMore}>
                            See more
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.WorkoutView2} >
                    <View style={style.FullBody}>
                        
                        <Image source={require('../assets/images/Ellipse53.png')} style={style.BodyImg} />
                        
                        <View style={style.BodyWorkout}>
                            <Text style={style.FullbodyText}> Full Body Workout</Text>
                            <Text style={style.UpperBody}>Today 3pm</Text>
                        </View>
                        <View style={style.ToggleView}>
                            <Switch
                                trackColor={{ false: "#95BEFF", true: "#95BEFF" }}
                                thumbColor={fullBodyEnabled ? "#ffffff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleFullBodySwitch}
                                value={fullBodyEnabled}
                            />
                        </View>
                    </View>


                    <View style={style.UpperBodyView}>
                        <Image source={require('../assets/images/Ellipse54.png')} style={style.BodyImg2} />
                        <View style={style.UpperWorkout}>
                            <Text style={style.UpperBodyWorkout}>Upper Body Workout</Text>
                            <Text style={style.UpperBodyTime}>4 Feb, 3:30 pm</Text>
                        </View>
                        <View style={style.ToggleView2}>
                            <Switch
                                trackColor={{ false: "#95BEFF", true: "#95BEFF" }}
                                thumbColor={upperBodyEnabled ? "#ffffff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleUpperBodySwitch}
                                value={upperBodyEnabled}
                            />
                        </View>
                    </View>
                    <Text style={style.TrainText} >What Do You Want to Train</Text>
                    <View style={style.BottomView} >
                        <View style={style.BottomViewText}>
                            <Text style={style.BottomViewText2}>Full Body Workout</Text>
                            <Text style={style.BottomViewText3}>Arms{"\n"}Chest</Text>
                        </View>
                        <Image style={style.Ellipse55}  source={require('../assets/images/Ellipse55.png')}/>
                    </View>      
                </View>
            </View>   
            <View style={style.FooterView} >
                    <TouchableOpacity>
                    <Image style={style.Group3}  source={require('../assets/images/Group3.png')}/>
                    </TouchableOpacity>
                    <Image style={style.Group4}  source={require('../assets/images/Group4.png')}/>
                </View>
        </SafeAreaView>
    )
}

export default WorkoutTracker