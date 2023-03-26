import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Appointments from "./screens/Appointment"
import AddAppointments from "./screens/AddAppointment"
import Patient from "./screens/Patient"
import AddPatient from "./screens/AddPatient"
import History from "./screens/History"
import Critical from "./screens/Critcal"
import CriticalProfile from "./screens/CriticalProfile"




export default () => {
  return(
  <Home />
  )
}

