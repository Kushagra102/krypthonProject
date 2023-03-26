import { StatusBar } from 'expo-status-bar';
import { Text, View ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function App() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Patient </Text>
      <StatusBar style="auto"/>
      <Button
        title="Go to Patient History"
        onPress={() => navigation.navigate('History')}
      />
      <Button
        title="Go to Edit Patient History"
        onPress={() => navigation.navigate('AddPatient')}
      />
    </View>
  );
};

