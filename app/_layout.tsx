// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import '../global.css';



// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack initialRouteName='tailwind'>
//         <Stack.Screen name="(Login)" options={{ headerShown: false }} />
//         <Stack.Screen name="(Pokemon)" options={{ headerShown: false }} />
//         <Stack.Screen name="(tailwind)" options={{ headerShown: false }} />
//         <Stack.Screen name="(index)" options={{ headerShown: false }} />
//         <Stack.Screen name="(detail)" options={{ headerShown: false }} />
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


// app/_layout.tsx → GANTI ISI INI SAJA (file-nya tetap ada!)
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import '../global.css';

// // Biar splash screen ga ilang sebelum font/app siap
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   useEffect(() => {
//     // Bisa tambah font loading di sini nanti
//     SplashScreen.hideAsync();
//   }, []);

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack screenOptions={{ headerShown: false }}>
//         {/* Grup auth */}
//         <Stack.Screen name="(auth)" />
        
//         {/* Setelah login */}
//         <Stack.Screen name="(tabs)" />
        
//         {/* Optional: landing page kalau mau */}
//         <Stack.Screen name="landing" />
        
//         {/* Yang lama kamu masih ada? Hapus aja kalau udah ga dipakai */}
//         {/* <Stack.Screen name="(Login)" /> */}
//         {/* <Stack.Screen name="(Pokemon)" /> */}
//         {/* <Stack.Screen name="(tailwind)" /> */}
//         {/* <Stack.Screen name="(index)" /> */}
//         {/* <Stack.Screen name="(detail)" /> */}
        
//         <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// app/_layout.tsx ← GANTI 100% PAKE YANG INI
// app/_layout.tsx
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import '../global.css';

// import { AuthProvider } from '../context/AuthContext';

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   useEffect(() => {
//     SplashScreen.hideAsync();
//   }, []);

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AuthProvider>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="(auth)" />
//           <Stack.Screen name="(tabs)" />
//           <Stack.Screen name="landing" />
//           <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//         </Stack>
//         <StatusBar style="auto" />
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';

import { AuthProvider } from '@/context/AuthContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}