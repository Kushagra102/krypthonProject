import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Date from '../components/Date';
import card from '../components/card';



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
    <SafeAreaView >
      <View className="flex-row pb-2 items-center mx-5 space-x-2 pt-5 justify-between">
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={{
            uri: 'https://links.papareact.com/wru',
          }} className="h-[60px] w-[60px]  bg-gray-300 p-4 rounded-full" />
        </TouchableOpacity>
        <Text className="flex text-[18px]" style={{ fontFamily: 'Poppins-Regular' }}>Mar,2023</Text>
        <View>
          <View className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-xl">
            <AntDesign className="flex item-center" name="plus" size={30} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
    <View className="flex-col pb-3 mx-5 pt-5">
      <Text className="flex text-[22px] leading-6" style={{ fontFamily: 'Poppins-Regular' }}>Good Morning, Dr.Adam</Text>
      <Text className="flex text-[22px] leading-7" style={{ fontFamily: 'Poppins-Regular' }}>You have
        <Text className="text-Primary-Purple" style={{ fontFamily: 'Poppins-Bold', }}> 3</Text> Appointments today</Text>
    </View>
    <Date />


  </>
};


// <Button
// title="Go to Patient History"
// onPress={() => navigation.navigate('History')}
// />
// <Button
// title="Go to AddAppointment"
// onPress={() => navigation.navigate('AddAppointment')}
// />
// <Button
// title="Go to AddPatient"
// onPress={() => navigation.navigate('AddPatient')}
// />