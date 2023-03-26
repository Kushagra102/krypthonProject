import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from "./screen/Home"
import Profile from "./screen/Profile"
import Appointments from "./screen/Appointment"
import AddAppointments from "./screen/AddAppointment"
import Patient from "./screen/Patient"
import AddPatient from "./screen/AddPatient"
import History from "./screen/History"
import Critical from "./screen/Critcal"
import CriticalProfile from "./screen/CriticalProfile"


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Krypthon Less go</Text>
      <StatusBar style="auto"/>
    </View>
  );
};

