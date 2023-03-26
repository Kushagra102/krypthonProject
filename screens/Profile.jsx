import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native'

export default function App({navigation}) {

  return (
    
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Profile overview</Text>
      <StatusBar style="auto"/>
    </View>
  );
};

