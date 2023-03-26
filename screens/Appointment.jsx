import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Date from '../components/Date';
import Card from '../components/Card';


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
          <TouchableOpacity onPress={() => navigation.navigate('AddAppointment')}>
            <View className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-xl">
              <AntDesign className="flex item-center" name="plus" size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    <View className="flex-col pb-2 mx-5 pt-5">
      <Text className="flex text-[22px] leading-6" style={{ fontFamily: 'Poppins-Regular' }}>Good Morning, Dr.Adam</Text>
      <Text className="flex text-[22px] leading-7" style={{ fontFamily: 'Poppins-Regular' }}>You have
        <Text className="text-Primary-Purple" style={{ fontFamily: 'Poppins-Bold', }}> 3</Text> Appointments today</Text>
    </View>

    <View className="flex flex-row justify-between mx-10 py-1 items-center">
      <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>All</Text>
      <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Clinic</Text>
      <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 1</Text>
      <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 2</Text>
    </View>
    <View className="bg-Primary-Purple h-[2.5px] mx-6 w-[55px] "></View>
    <Date />
    <TouchableOpacity onPress={() => navigation.navigate('History')}>
      <Card borderColor="#946DF5" colorFont="#946DF5" colorView="#E4DAFD" colorBack="#FFFFFF" para1="11 AM | Hospital 1" name="Plarck Cacil" para2="History" image="https://links.papareact.com/wru" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('AddPatient')}>
      <Card borderColor="#946DF5" colorFont="#946DF5" colorView="#E4DAFD" colorBack="#FFFFFF" para1="10 AM | Clinic" name="Plarck Cacil" para2="OnGoing" image="https://links.papareact.com/wru" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('History')}>
      <Card borderColor="#946DF5" colorFont="#946DF5" colorView="#E4DAFD" colorBack="#FFFFFF" para1="12AM | Hospital 2" name="Plarck Cacil" para2="History" image="https://links.papareact.com/wru" />
    </TouchableOpacity>


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