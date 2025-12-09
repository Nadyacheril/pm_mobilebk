import { router } from 'expo-router';
import {
  Image,
  ScrollView,
  Text,
  View, //container layout 
  Dimensions,
  Animated, //untuk animasi
  Easing,
  Pressable, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef } from 'react';

export default function Home() {
  const namaSiswa = 'NadyaCherill';

  const daftarGuru = [
    { nama: 'HENI SISWATI', foto: require('../../assets/guru/buheni.jpg') },
    { nama: 'IKA RAFIKA', foto: require('../../assets/guru/bufika.jpg') },
    { nama: 'NADYA AFRILIANI', foto: require('../../assets/guru/bunadia.jpg') },
    { nama: 'KASANDRA', foto: require('../../assets/guru/bucaca.jpg') },
  ];

  const screenWidth = Dimensions.get('window').width;
  const fotoSize = screenWidth > 640 ? 200 : screenWidth > 420 ? 180 : 150;
  //untuk ukuran foto guru responsif

  // Animasi untuk "Selamat Datang" + nama siswa
  const scaleWelcome = useRef(new Animated.Value(1)).current; //kecil besar text
  const glowWelcome = useRef(new Animated.Value(0)).current;

  const animateWelcomeIn = () => {
    Animated.parallel([
      Animated.spring(scaleWelcome, { toValue: 1.05, friction: 8, useNativeDriver: true }),
      Animated.timing(glowWelcome, { toValue: 1, duration: 300, useNativeDriver: false }),
    ]).start();
  };

  const animateWelcomeOut = () => {
    Animated.parallel([
      Animated.spring(scaleWelcome, { toValue: 1, friction: 8, useNativeDriver: true }),
      Animated.timing(glowWelcome, { toValue: 0, duration: 300, useNativeDriver: false }),
    ]).start();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1"> 

        {/* NAVBAR */}
        <View className="bg-[#5B7DB1] px-6 py-8 flex-row justify-between items-center">
          <Text className="text-white text-2xl md:text-3xl font-bold">
            BKcTB - Siswa
          </Text>
          <Pressable
            onPress={() => router.push('/profile')}
            className="bg-white px-6 py-3 rounded-full active:opacity-80"
          >
            <Text className="text-[#5B7DB1] font-bold text-base">Profile</Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

          {/* SELAMAT DATANG – SEKARANG ADA ANIMASI HOVER! */}
          <Pressable
            onPressIn={animateWelcomeIn}
            onPressOut={animateWelcomeOut}
            className="items-center mt-10 mb-12 px-6"
          >
            <Animated.View
              style={{
                transform: [{ scale: scaleWelcome }],
              }}
              className="items-center relative"
            >
              {/* Glow biru halus di belakang teks */}
              <Animated.View
                className="absolute -inset-8 bg-[#5B7DB1] rounded-3xl blur-3xl"
                style={{ opacity: glowWelcome.interpolate({ inputRange: [0, 1], outputRange: [0, 0.3] }) }}
              />

              <Text className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B7DB1] to-[#3A5D8A] text-center leading-tight">
                Selamat Datang
              </Text>
              <Text className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4 text-center">
                {namaSiswa}
              </Text>
            </Animated.View>
          </Pressable>

          {/* GURU BK – Animasi tetap sama */}
          <View className="px-6">
            <Text className="text-3xl sm:text-4xl font-extrabold text-[#5B7DB1] text-center mb-4">
              Guru Bimbingan Konseling
            </Text>
            <Text className="text-center text-gray-600 mb-10 text-base">
              Klik foto untuk mengajukan konseling
            </Text>

            <View className="flex-row flex-wrap justify-center gap-8 md:gap-12">
              {daftarGuru.map((guru) => {
                const scaleAnim = useRef(new Animated.Value(1)).current;
                const shadowAnim = useRef(new Animated.Value(0)).current;

                const animateIn = () => {
                  Animated.parallel([
                    Animated.spring(scaleAnim, { toValue: 1.12, friction: 7, useNativeDriver: true }),
                    Animated.timing(shadowAnim, { toValue: 1, duration: 200, useNativeDriver: false }),
                  ]).start();
                };

                const animateOut = () => {
                  Animated.parallel([
                    Animated.spring(scaleAnim, { toValue: 1, friction: 7, useNativeDriver: true }),
                    Animated.timing(shadowAnim, { toValue: 0, duration: 200, useNativeDriver: false }),
                  ]).start();
                };

                const shadowOpacity = shadowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0.7] });
                const shadowRadius = shadowAnim.interpolate({ inputRange: [0, 1], outputRange: [10, 25] });
                const elevation = shadowAnim.interpolate({ inputRange: [0, 1], outputRange: [8, 30] });

                return (
                  <Pressable
                    key={guru.nama}
                    onPressIn={animateIn}
                    onPressOut={animateOut}
                    onPress={() => alert(`Mengajukan konseling ke ${guru.nama}`)}
                    className="items-center w-40 sm:w-48 md:w-52 mb-10"
                    android_ripple={{ color: '#5B7DB1', borderless: true, radius: fotoSize }}
                  >
                    <Animated.View
                      style={{
                        transform: [{ scale: scaleAnim }],
                        shadowOpacity,
                        shadowRadius,
                        elevation,
                        shadowColor: '#5B7DB1',
                        shadowOffset: { width: 0, height: 10 },
                      }}
                      className="relative"
                    >
                      <Animated.View
                        className="absolute -inset-4 bg-[#5B7DB1] rounded-full blur-3xl"
                        style={{ opacity: shadowAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.4] }) }}
                      />

                      <Image
                        source={guru.foto}
                        style={{ width: fotoSize, height: fotoSize }}
                        className="rounded-full border-4 border-white hover:shadow-blue-900 shadow-2xl mb-3"
                        resizeMode="cover"
                      />
                    </Animated.View>

                    <Text className="mt-5 text-lg font-bold text-gray-800 text-center px-2">
                      {guru.nama}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View className="h-32" />
        </ScrollView>

        {/* FOOTER */}
        <View className="bg-[#5B7DB1] py-6 items-center border-t border-white/10">
          <Text className="text-white text-sm md:text-base font-medium">
            © 2025 BKcTB | SMK Taruna Bhakti
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}