import { View, Text, Image, } from 'react-native'
import React from 'react'
import Checkbox from "../assets/Checkbox.jpg"

export default function card() {
    return (
        <View className="pt-4 m-2 bg-white rounded-lg">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: 'https://links.papareact.com/wru',
                }} className="h-10 w-10 bg-gray-300 p-4 rounded-full" />
                <View className="flex-1">
                    <Text className="font-medium px-1 text-black-400 text-xl">David Beckham</Text>
                    <Text className="font-medium text-gray-500 text-l"> 47yo </Text>
                </View>
                <View className="flex justify-center bg-Primary-Orange/25 rounded-lg w-[150px] h-[50px] ">
                    <Text className=" text-center text-Primary-Orange">
                        Admitted Under
                    </Text>
                    <Text className=" text-center text-Primary-Orange">
                        Hospital #1
                    </Text>
                </View>
            </View>
            <View>
                <Text className="px-4 font-bold text-[16px]">
                    Diagnosis
                </Text>
                <Text className="p-4 text-[16px]">
                    Cardiac Arrest
                </Text>
                <Text className="px-4 font-bold text-[16px]">
                    Drugs Prescribed
                </Text>
                <Text className="p-4 text-[16px]">
                    Amiodarone, Bretylium, Dofetilide
                </Text>
                <Text className="px-4 font-bold text-[16px]">
                    Special Needs
                </Text>
                <Text className="p-4 text-[16px]">
                    Allergic to Herbs
                </Text>
                <Text className="px-4 font-bold text-[16px]">
                    Next Appointment
                </Text>
                <Text className="p-4 text-[16px]">
                    Tomorrow, 11:00 25 Mar
                </Text>
            </View>
        </View>

    )
}
