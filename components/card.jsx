import { View, Text, Image, } from 'react-native'
import React from 'react'


export default function card() {
    return (

        <View className="pt-4 m-2 bg-white rounded-lg">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: 'https://links.papareact.com/wru',
                }} className="h-10 w-10 bg-gray-300 p-4 rounded-full" />
                <View className="flex-1">
                    <Text className="font-bold px-1 text-black-400 text-xl">Maria Jones</Text>
                    <Text className="font-medium px-1 text-gray-500 text-l">10 am | Clinic </Text>
                </View>
                <View className="flex justify-center bg-Primary-Purple/25 rounded-lg w-[80px] h-[30px]">
                    <Text className="text-center text-Primary-Purple">
                        OnGoing
                    </Text>
                </View>
            </View>
        </View>

    )
}
