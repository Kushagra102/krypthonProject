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
                    <Text className="font-medium px-1 text-black-400 text-xl">Maria Jones</Text>
                    <Text className="font-medium text-gray-500 text-l"> 19yo </Text>
                </View>
                <View className="flex justify-center bg-Primary-Purple/25 rounded-lg w-[150px] h-[50px]">
                    <Text className="text-center text-Primary-Purple">
                        Diagnosed
                    </Text>
                </View>
            </View>
            <View>
                <Text className="px-4 font-bold text-[16px]">
                    Diagnosis
                </Text>
                <Text className="p-4 text-[16px]">
                High Blood Pressure and Diabetic
                </Text>
                <Text className="px-4 font-bold text-[16px]">
                    Drugs Prescribed
                </Text>
                <Text className="p-4 text-[16px]">
                Ethatin X 40mg OD, Max Pro 20mg BD, Flucsogen 10mg
                </Text>
                <Text className="px-4 font-bold text-[16px]">
                    Special Needs
                </Text>
                <Text className="p-4 text-[16px]">
                NA
                </Text>
                
                <View className="flex-row">
                <Text className="px-4 font-bold text-[16px]">
                    Payment
                </Text>
                <Image className="p-2" source={require('../assets/Checkbox.jpg')} />
                </View>
                <Text className="p-4 text-[16px]">
                Received Rs.999/-
                </Text>
            </View>
        </View>

    )
}
