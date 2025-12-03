// import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import { Link, router } from 'expo-router';
// import { useAuth } from '@/context/AuthContext';

// export default function Login() {
//   const { login } = useAuth();

//   return (
//     <View className="flex-1 bg-white justify-center items-center px-8">
//       <Image source={require('@/assets/images/logoo.png')} className="w-24 h-24 mb-10" resizeMode="contain" />

//       <Text className="text-2xl font-bold text-blue-900 mb-10">Login</Text>

//       <TextInput placeholder="Email" className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-4" />
//       <TextInput placeholder="Password" secureTextEntry className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-8" />

//       <TouchableOpacity
//         onPress={() => {
//           login();
//           router.push('../home');
//         }}
//         className="w-full bg-blue-700 rounded-xl py-4 mb-6">
//         <Text className="text-white text-center font-semibold text-lg">Login</Text>
//       </TouchableOpacity>

//       <Link href="./register" className="text-blue-700">
//         <Text>Belum punya akun? Daftar di sini</Text>
//       </Link>
//     </View>
//   );
// }

// import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import { Link, router } from 'expo-router';
// import { useAuth } from '@/context/AuthContext';
// import { useState } from 'react';

// export default function Login() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View className="flex-1 bg-white">

//       {/* Background shape atas */}
//       <View className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-bl-full opacity-80" />

//       {/* Logo BKCTB */}
//       <View className="items-center pt-16 pb-8">
//         <Image
//           source={require('@/assets/images/logoo.png')}
//           className="w-20 h-20"
//           resizeMode="contain"
//         />
//         <Text className="text-sm text-blue-900 font-medium mt-2">BKCTB</Text>
//       </View>

//       {/* Konten utama */}
//       <View className="flex-1 justify-center px-10">

//         <Text className="text-3xl font-bold text-blue-900 text-center mb-12">
//           Login
//         </Text>

//         {/* Form */}
//         <View className="space-y-5">
//           <TextInput
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             className="w-full bg-gray-200 rounded-2xl px-6 py-5 text-base"
//             placeholderTextColor="#999"
//           />

//           <TextInput
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             className="w-full bg-gray-200 rounded-2xl px-6 py-5 text-base"
//             placeholderTextColor="#999"
//           />
//         </View>

//         {/* Tombol Login */}
//         <TouchableOpacity
//   onPress={() => {
//     login();                    // cukup login() saja, tanpa parameter
//     router.replace('/home');    // atau '/(tabs)' kalau pakai tab layout
//   }}
//   className="mt-10 bg-blue-600 rounded-2xl py-5 shadow-lg"
//   activeOpacity={0.8}
// >
//   <Text className="text-white text-center font-bold text-lg">
//     LOGIN
//   </Text>
// </TouchableOpacity>

//         {/* Link Register */}
//         <View className="items-center mt-8">
//           <Link href="/register" className="text-blue-700 underline">
//             <Text className="text-base">
//               Belum punya akun? <Text className="font-semibold">Daftar di sini</Text>
//             </Text>
//           </Link>
//         </View>

//       </View>

//       {/* Background shape bawah */}
//       <View className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-tr-full opacity-80" />
//     </View>
//   );
// }

// import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
// import { Link, router } from 'expo-router';
// import { useAuth } from '@/context/AuthContext';
// import { useState } from 'react';

// export default function Login() {
//   const { login } = useAuth();
//   const [loading, setLoading] = useState(false);

//   const handleLogin = () => {
//     setLoading(true);
//     // Simulasi login (ganti dengan login asli kalau perlu)
//     setTimeout(() => {
//       login();
//       router.replace('/home');
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

//       <View className="flex-1 bg-white justify-center items-center overflow-hidden">

//         {/* Background Bulat Kanan Atas */}
//         <View
//           className="absolute bg-[#8EAAD6] rounded-full"
//           style={{
//             width: 300,
//             height: 300,
//             top: -100,
//             right: -100,
//           }}
//         />

//         {/* Background Bulat Kiri Bawah */}
//         <View
//           className="absolute bg-[#8EAAD6] rounded-full"
//           style={{
//             width: 320,
//             height: 320,
//             bottom: -140,
//             left: -140,
//           }}
//         />

//         {/* Logo + Teks BKcTB di Kiri Atas */}
//         <Link href="../landing" className="absolute top-14 left-6 flex-row items-center gap-3 z-10">
//           <View className="relative">
//             <Image
//               source={require('@/assets/images/logoo.png')}
//               className="w-8 h-8 rounded-lg shadow-md"
              
//             />
//             {/* Efek glow halus (opsional, bisa dihapus kalau terlalu berat) */}
//             <View className="absolute inset-0 rounded-lg bg-[#5B7DB1] opacity-0 blur-xl" />
//           </View>
//           <Text className="text-[#5B7DB1] font-bold text-2xl tracking-tight">
//             BKcTB
//           </Text>
//         </Link>

//         {/* Card Login Tengah */}
//         <View className="bg-white w-full max-w-md px-10 py-12 rounded-3xl shadow-2xl mx-6">
//           <Text className="text-[#5B7DB1] text-3xl font-bold text-center mb-10">
//             Login
//           </Text>

//           <TextInput
//             placeholder="Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-5 text-base"
//             placeholderTextColor="#999"
//             editable={!loading}
//           />

//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             className="w-full bg-gray-200 rounded-xl px-5 py-4 mb-8 text-base"
//             placeholderTextColor="#999"
//             editable={!loading}
//           />

//           <TouchableOpacity
//             onPress={handleLogin}
//             disabled={loading}
//             activeOpacity={0.8}
//             className={`w-full py-4 rounded-xl ${loading ? 'bg-gray-400' : 'bg-[#5B7DB1]'}`}
//           >
//             <Text className="text-white text-center font-bold text-lg">
//               {loading ? 'Loading...' : 'Login'}
//             </Text>
//           </TouchableOpacity>

//           <View className="mt-6 items-center">
//             <Text className="text-[#2C3E50] text-center text-base">
//               Belum punya akun?{' '}
//               <Link href="/register" className="text-[#5B7DB1] font-bold underline">
//                 Daftar di sini
//               </Link>
//             </Text>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// }

import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

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

      <View className="flex-1 bg-white justify-center items-center px-6">

        {/* Background Bulat Pojok – Responsif & Halus */}
        <View 
          className="absolute bg-[#8EAAD6] rounded-full"
          style={{ width: 380, height: 380, top: -180, right: -180 }}
        />
        <View 
          className="absolute bg-[#8EAAD6] rounded-full"
          style={{ width: 420, height: 420, bottom: -200, left: -200 }}
        />

        {/* Logo BKcTB – Ukuran Pas, Responsif, dan Rapih */}
        <View className="absolute top-12 left-5 flex-row items-center space-x-3 z-10">
          <Image
            source={require('@/assets/images/logoo.png')}   // logo horizontal resmi BKcTB
            className="w-30 h-14"           // ukuran ideal semua HP (tidak kegedean)
            resizeMode="contain"
          />
          
  <h1 className="text-[#5B7DB1] font-bold text-2xl tracking-tight opacity-90 group-hover:opacity-100 transition-all duration-300">
    BKcTB
  </h1>
        </View>

        {/* Card Login – Responsif + Shadow Lembut */}
        <View className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-10 py-12">
          
          <Text className="text-3xl font-bold text-[#6e8bba] text-center mb-10">
            Login
          </Text>

          {/* Input Email */}
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            className="w-full bg-gray-200 rounded-2xl px-6 py-4 mb-5 text-base"
            placeholderTextColor="#94a3b8"
            editable={!loading}
          />

          {/* Input Password */}
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="w-full bg-gray-200 rounded-2xl px-6 py-4 mb-10 text-base"
            placeholderTextColor="#94a3b8"
            editable={!loading}
          />

          {/* Tombol Login */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
            className={`w-full rounded-2xl py-4 ${
              loading ? 'bg-gray-400' : 'bg-[#6e8bba]  '
            }`}
          >
            <Text className="text-white text-center font-bold text-lg">
              {loading ? 'Memproses...' : 'Login'}
            </Text>
          </TouchableOpacity>

          {/* Teks Daftar */}
          <Text className="text-center mt-8 text-gray-600 text-base">
            Belum punya akun?{' '}
            <Link href="/register" className="text-[#6e8bba]  font-bold underline">
              Daftar di sini
            </Link>
          </Text>
        </View>
      </View>
    </>
  );
}