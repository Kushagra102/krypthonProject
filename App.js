import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'
import Home from "./screens/Home"
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Appointments from "./screens/Appointment"
import AddAppointments from "./screens/AddAppointment"
import Patient from "./screens/Patient"
import AddPatient from "./screens/AddPatient"
import History from "./screens/History"
import Critical from "./screens/Critcal"
import CriticalProfile from "./screens/CriticalProfile"


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

