import { useFonts } from 'expo-font';
import React, { useLayoutEffect } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import BackButton from '../components/BackButton'

export default function App() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-{#F1F6FA} pt-4">
      <BackButton tabName='Patients History' />
    </SafeAreaView>
  );
};

