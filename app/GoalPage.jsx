import React from 'react'
import { router } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from "react-native"
import { CheckBox } from 'react-native-elements';

const style = StyleSheet.create({
    UpperText: { width: 209, height: 50, top: 68, left: 101, fontSize: 20, lineHeight: 23.44, color: "#2C2B2B", fontWeight:'600' },
    InputBox: { width: 343, height: 50, borderRadius: 12, backgroundColor: '#F1F1F1', color: '#000000', alignItems: 'center', position: 'relative', flexDirection: 'row' },
    GoalText: { width: 250, top: 1, left: 20, position: 'relative', fontWeight:'600', fontSize:13 },
    CheckBox:{paddingLeft:'50'},
    ViewBox: { top: 550, },
    AccountBox: { width: 343, height: 50, top: 70, left: 35, backgroundColor: '#9FB2FF', borderRadius: 12, position: 'relative' },
    AccountText: { width: 153, height: 20, top: 13, left: 145, color: '#FFFFFF', fontSize:16, fontWeight:'600' },
})

const GoalPage = () => {
    const [weightLossChecked, setWeightLossChecked] = React.useState(false);
    const [muscleGainChecked, setMuscleGainChecked] = React.useState(false);
    const [flexibilityChecked, setFlexibilityChecked] = React.useState(false);
    const [generalFitnessChecked, setGeneralFitnessChecked] = React.useState(false);
    const [eventSpecificTrainingChecked, setEventSpecificTrainingChecked] = React.useState(false);
    const [mindfulnessChecked, setMindfulnessChecked] = React.useState(false);

    return (
        <SafeAreaView style={{ justifyContent: 'center' }}>
            <Text style={style.UpperText}>
                What are your goals?
            </Text>
            <View style={{ flex: 1, alignItems: 'center', bottom: 30, }}>
                <View style={[style.InputBox, { top: 135, paddingLeft: 10 }]}>
                    <Text style={style.GoalText}>
                        Weight Loss
                    </Text>
                    <CheckBox checked={weightLossChecked} onPress={() => setWeightLossChecked(!weightLossChecked)} />
                </View>
                <View style={[style.InputBox, { top: 155, paddingLeft: 10 }]}>
                    <Text style={style.GoalText}>
                        Muscle Gain
                    </Text>
                    <CheckBox checked={muscleGainChecked} onPress={() => setMuscleGainChecked(!muscleGainChecked)} />
                </View>
                <View style={[style.InputBox, { top: 175, paddingLeft: 10 }]}>
                    <Text style={style.GoalText}>
                        Flexibility and Mobility
                    </Text>
                    <CheckBox checked={flexibilityChecked} onPress={() => setFlexibilityChecked(!flexibilityChecked)} />
                </View>
                <View style={[style.InputBox, { top: 195, paddingLeft: 10 }]}>
                    <Text style={style.GoalText}>
                        General Fitness
                    </Text>
                    <CheckBox checked={generalFitnessChecked} onPress={() => setGeneralFitnessChecked(!generalFitnessChecked)} />
                </View>
                <View style={[style.InputBox, { top: 215, paddingLeft: 10 }]}>
                    <Text style={style.GoalText}>
                        Event - specific training
                    </Text>
                    <CheckBox checked={eventSpecificTrainingChecked} onPress={() => setEventSpecificTrainingChecked(!eventSpecificTrainingChecked)} />
                </View>
                <View style={[style.InputBox, { top: 235, paddingLeft: 10 }]}>
                    <Text style={style.GoalText}>
                        Mindfulness and Mental Health
                    </Text>
                    <CheckBox checked={mindfulnessChecked} onPress={() => setMindfulnessChecked(!mindfulnessChecked)} />
                </View>
            </View>
            <View style={style.ViewBox}>
                <Pressable onPress={() => router.push('/WorkoutTracker')}>
                    <View style={style.AccountBox}>
                        <Text style={style.AccountText}>
                            Confirm
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default GoalPage