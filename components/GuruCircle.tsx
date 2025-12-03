import { View, Text, TouchableOpacity } from 'react-native';

export function GuruCircle({ name }: { name: string }) {
  return (
    <TouchableOpacity className="items-center">
      <View className="w-24 h-24 bg-white rounded-full shadow-lg justify-center items-center mb-2 border border-gray-200">
        <Text className="text-4xl text-gray-400">👩‍🏫</Text>
      </View>
      <Text className="text-center font-medium text-blue-900">{name}</Text>
    </TouchableOpacity>
  );
}