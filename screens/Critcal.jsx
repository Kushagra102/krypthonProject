import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function App() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Crtical</Text>
      <StatusBar style="auto"/>
      <Button
        title="Go to CriticalProfile"
        onPress={() => navigation.navigate('CriticalProfile')}
      />
    </View>
  );
};

