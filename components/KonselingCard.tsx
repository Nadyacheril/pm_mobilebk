import { View, Text, TouchableOpacity } from 'react-native';

export function KonselingCard({ jenis, guru, tanggal, status }: any) {
  return (
    <View className="bg-white rounded-xl p-4 mb-4 shadow">
      <View className="flex-row justify-between items-start">
        <View>
          <Text className="font-bold text-blue-900">{jenis}</Text>
          <Text className="text-green-600">Ke: {guru}</Text>
          <Text className="text-sm text-gray-600">{tanggal}</Text>
          <Text className="text-green-600 font-medium">{status}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-red-500 text-xl">🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}