import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { useFonts } from 'expo-font';
import PatientDetails from '../components/PatientDetails';
import HistoryCard from '../components/HistoryCard'
import Report from '../components/Report';

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
  });

  if (!fontsLoaded) {
    return null;
  }
  return <>
    <View className="pt-11">
      <ScrollView>
        <PatientDetails />
        <Report />
        <HistoryCard />
      </ScrollView>
    </View>
  </>

};

