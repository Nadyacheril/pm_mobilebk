import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'; // Tambahin ini

export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false); //state loading pas login

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login();
      router.replace('/home');
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <StatusBar style="dark" />
      
      {/* SafeAreaView biar logo ga numpuk sama notch/status bar */}
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center px-6">

          {/* bulet biru*/}
          <View className="absolute bg-[#8EAAD6] rounded-full" style={{ width: 400, height: 400, top: -220, right: -220 }} />
          <View className="absolute bg-[#8EAAD6] rounded-full" style={{ width: 450, height: 450, bottom: -250, left: -250 }} />

          
          <View className="absolute top-4 left-5 flex-row items-center gap-3 z-10">
            <Image
              source={require('@/assets/images/logoo.png')}
              className="w-12 h-12"
              resizeMode="contain"
              style={{ width: 48, height: 48 }}
            />
            <Text className="text-[#5B7DB1] font-bold text-2xl tracking-tight">
              BKcTB
            </Text>
          </View>

          {/* Card Login */}
          <View className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-8 pt-12 pb-14">
            <Text className="text-3xl font-bold text-[#6e8bba] text-center mb-10">
              Login
            </Text>

            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              className="w-full bg-gray-200 rounded-2xl px-6 py-4 mb-5 text-base"
              placeholderTextColor="#94a3b8"
              editable={!loading}
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              className="w-full bg-gray-200 rounded-2xl px-6 py-4 mb-10 text-base"
              placeholderTextColor="#94a3b8"
              editable={!loading}
            />

            <TouchableOpacity
              onPress={handleLogin}
              disabled={loading}
              className={`w-full rounded-2xl py-4 ${loading ? 'bg-gray-400' : 'bg-[#6e8bba]'}`}
            >
              <Text className="text-white text-center font-bold text-lg">
                {loading ? 'Memproses...' : 'Login'}
              </Text>
            </TouchableOpacity>

            <Text className="text-center mt-8 text-gray-600 text-base">
              Belum punya akun?{' '}
              <Link href="/register" className="text-[#6e8bba] font-bold underline">
                Daftar di sini
              </Link>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}