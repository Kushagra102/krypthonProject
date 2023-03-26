import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function card({ tabName }) {
    return (
        <View className=" flex-row pb-6 ">
            <View className="flex justify-center items-center mx-6 h-[50px] w-[50px] bg-white rounded-xl">
                <AntDesign className="flex item-center" name="arrowleft" size={30} color="black" />
            </View>
            <View className="flex items-center justify-center ">
                <Text className="text-[20px]" style={{ fontFamily: 'Poppins-Medium' }} >{tabName}</Text>
            </View>

        </View>
    )
}
