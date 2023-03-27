import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { useFonts } from 'expo-font';
import PatientDetails from '../components/PatientDetails';
import HistoryCard from '../components/HistoryCard'
import BigButton from './BigButton';
import DescriptionBox from './DescriptionBox';


function Report() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Diagnosis</Text>
            <DescriptionBox />
        </View>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Medicines Prescribed</Text>
            <DescriptionBox />
        </View>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Special Needs</Text>
            <DescriptionBox />
        </View>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Payment</Text>
            <DescriptionBox />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <BigButton input='Close Appointment' color='Purple' />
        </TouchableOpacity>
    </>
}

export default Report