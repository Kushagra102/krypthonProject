import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Date from '../components/Date';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

export default function App() {
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
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <>
    <View>
      <ScrollView>
        <SafeAreaView className="pt-5">
          <BackButton tabName="Schedule Appointment" />
        </SafeAreaView>

        {/* March date */}

        <View className="flex">
          <View className="flex flex-row mx-5 items-center">
            <Text className="mr-1 text-[18px]" style={{ fontFamily: 'Poppins-Medium' }}>March, 2023</Text>
            <View className="pb-1">
              <AntDesign name="down" size={19} color="black" />
            </View>
          </View>
        </View>

        <Date />

        {/* Available Time */}

        <View className="flex pt-2">
          <View className="flex flex-row mx-5 items-center">
            <Text className="mr-1 text-[18px]" style={{ fontFamily: 'Poppins-Medium' }}>Available Time</Text>
          </View>
        </View>

        {/* Time */}

        <View className="mt-3 flex flex-col">
          <View className="mx-5 flex flex-row justify-between items-center mb-3">
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
            <View className="h-[40] w-[80] rounded-[10px] bg-Primary-Purple border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1 text-white" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
          </View>
          <View className="mx-5 flex flex-row justify-between items-center mb-3">
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
            <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
              <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
            </View>
          </View>
        </View>

        {/* Patient Details */}

        <View className="flex pt-2">
          <View className="flex flex-row mx-5 items-center">
            <Text className="mr-1 text-[18px]" style={{ fontFamily: 'Poppins-Medium' }}>Patient Details</Text>
          </View>
        </View>

        <View>
          <View className="mx-5 flex flex-col mb-3">
            <Text className="text-[14px] text-black mt-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Full Name</Text>
            <TextInput placeholder='Add Details...' keyboardType='default' className="flex bg-white text-[14px] text-black mx-2 w-[360] h-[40] rounded-[10px] pl-4 justify-center items-center" style={{ fontFamily: 'Poppins-SemiBold' }} />
          </View>
          <View className="mx-5 flex flex-col mb-3">
            <Text className="text-[14px] text-black mt-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Age</Text>
            <TextInput placeholder='Add Details...' keyboardType='default' className="flex bg-white text-[14px] text-black mx-2 w-[360] h-[40] rounded-[10px] pl-4 justify-center items-center" style={{ fontFamily: 'Poppins-SemiBold' }} />
          </View>
          <View className="mx-5 flex flex-col mb-3">
            <Text className="text-[14px] text-black mt-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Age</Text>
            <View className="flex flex-row space-x-2">
              <View className="h-[40] w-[80] rounded-[10px] bg-Primary-Purple border-gray-600 border-0.5 items-center justify-center">
                <Text className="text-white" style={{fontFamily: "Poppins-SemiBold"}}>Male</Text>
              </View>
              <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                <Text className="text-black" style={{fontFamily: "Poppins-SemiBold"}}>Femal</Text>
              </View>
              <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                <Text className="text-black" style={{fontFamily: "Poppins-SemiBold"}}>Other</Text>
              </View>
            </View>
          </View>
          <View className="mx-5 flex flex-col mb-3">
            <Text className="text-[14px] text-black mt-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Problem Description</Text>
            <TextInput placeholder='Write your problem....' keyboardType='default' className="flex bg-white text-[14px] text-black mx-2 w-[360] h-[98] rounded-[10px] pl-4 justify-start items-start" style={{ fontFamily: 'Poppins-SemiBold' }} />
          </View>
        </View>
      </ScrollView>
    </View>
  </>

};

