// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Link, router } from 'expo-router';
// import { useAuth } from '@/context/AuthContext';

// export default function Register() {
//   const { login } = useAuth();

//   return (
//     <View className="flex-1 bg-white justify-center items-center px-8">
//       <Text className="text-2xl font-bold text-blue-900 mb-10">Register Siswa</Text>

//       <TextInput placeholder="Nama Lengkap" className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-4" />
//       <TextInput placeholder="Email" className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-4" />
//       <TextInput placeholder="Password" secureTextEntry className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-4" />
//       <TextInput placeholder="Konfirmasi Password" secureTextEntry className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-8" />

//       <TouchableOpacity
//         onPress={() => {
//           login();
//           router.push('../login');
//         }}
//         className="w-full bg-blue-700 rounded-xl py-4 mb-6">
//         <Text className="text-white text-center font-semibold text-lg">Register</Text>
//       </TouchableOpacity>

//       <Link href="//login" className="text-blue-700">
//         <Text>Sudah punya akun? Login di sini</Text>
//       </Link>
//     </View>
//   );
// }

// app/register.tsx
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

      {/* Logo + BKcTB kiri atas – persis web */}
      <View className="absolute top-6 left-6 flex-row items-center gap-3 z-10">
        <Image
          source={require('@/assets/images/logoo.png')}
          className="w-12 h-12"
          resizeMode="contain"
        />
        <Text className="text-[#5B7DB1] font-bold text-xl">BKcTB</Text>
      </View>

      {/* Form Card – persis web */}
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