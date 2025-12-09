import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function Register() {
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 bg-white justify-center items-center relative overflow-hidden">

      {/* Background bulat pojok – persis web */}
      <View className="absolute top-0 right-0 w-64 h-64 bg-[#8EAAD6] rounded-full translate-x-1/3 -translate-y-1/3" />
      <View className="absolute bottom-0 left-0 w-64 h-64 bg-[#8EAAD6] rounded-full -translate-x-1/3 translate-y-1/3" />

      {/* bulet bulet biru*/}
      <View className="absolute top-6 left-6 flex-row items-center gap-3 z-10">
        <Image
          source={require('@/assets/images/logoo.png')}
          className="w-12 h-12"
          resizeMode="contain"
          style={{ width: 48, height: 48 }}
        />
        <Text className="text-[#5B7DB1] font-bold text-xl">BKcTB</Text>
      </View>

      {/* Form Card */}
      <View className="w-full max-w-md bg-white px-10 py-12 rounded-3xl shadow-2xl">

        <Text className="text-[#5B7DB1] text-3xl font-bold text-center mb-8">
          Register Siswa
        </Text>

        <TextInput placeholder="Nama Lengkap" className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-5" />
        <TextInput placeholder="Email" keyboardType="email-address" autoCapitalize="none" className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-5" />
        <TextInput placeholder="Password" secureTextEntry className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-5" />
        <TextInput placeholder="Konfirmasi Password" secureTextEntry className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-8" />

        <TouchableOpacity
          onPress={() => setLoading(!loading)}
          className="w-full bg-[#5B7DB1] rounded-xl py-4"
        >
          <Text className="text-white text-center font-bold text-lg">
            {loading ? "Mendaftarkan..." : "Register"}
          </Text>
        </TouchableOpacity>

        <Text className="text-center mt-6 text-gray-700">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-[#5B7DB1] font-bold underline">
            Login di sini
          </Link>
        </Text>

      </View>
    </View>
  );
}