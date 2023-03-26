import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Date from '../components/Date';
import BackButton from '../components/BackButton';
import BigButton from '../components/BigButton'
import PatientDetails from '../components/PatientDetails';
import Time from '../components/Time';

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackButton tabName="Schedule Appointment" />
          </TouchableOpacity>
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
        <Time />

        {/* Patient Details */}
        <PatientDetails />


        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BigButton input='Schedule Appointment' color='Purple' />
        </TouchableOpacity>

      </ScrollView>
    </View>
  </>

};

