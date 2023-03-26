import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import EditButton from '../components/EditButton'
import HistoryCard from '../components/HistoryCard'

export default function App() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return <>
    <SafeAreaView >
      <EditButton tabName='Patient History'/>
    </SafeAreaView>
    <HistoryCard />
    </>
};

