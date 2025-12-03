
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  // Nama kamu hardcode aja di sini
  const namaSiswa = 'NadyaCherill';

  const daftarGuru = [
    { nama: 'HENI SISWATI', foto: require('../../assets/guru/buheni.jpg') },
    { nama: 'IKA RAFIKA', foto: require('../../assets/guru/bufika.jpg') },
    { nama: 'NADYA AFRILIANI', foto: require('../../assets/guru/bunadia.jpg') },
    { nama: 'KASANDRA', foto: require('../../assets/guru/bucaca.jpg') },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Navbar */}
      <View className="bg-[#5B7DB1] px-6 py-8 flex-row justify-between items-center">
        <Text className="text-white text-3xl font-bold">BKcTB - Siswa</Text>
        <TouchableOpacity
          onPress={() => router.push('/profile')}
          className="bg-white px-6 py-2.5 rounded-full"
        >
          <Text className="text-blue-700 font-semibold">Profile</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Selamat Datang */}
        <View className="items-center mt-12 mb-10">
          <Text className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B7DB1] to-[#3A5D8A]">
            Selamat Datang
            
          </Text>
          <Text className="text-4xl font-medium text-gray-800 mt-4">
            {namaSiswa}
          </Text>
        </View>

        {/* Section Guru BK */}
        <View className="px-6">
          <Text className="text-3xl md:text-4xl font-extrabold text-[#5B7DB1] center-mb-8 text-center">
            Guru Bimbingan Konseling
          </Text>
          <Text className="text-center text-gray-600 mb-10 mt-10 text-base">
            Klik foto untuk mengajukan konseling
          </Text>

          {/* Grid 2x2 */}
          <View className="flex-row flex-wrap justify-center gap-10">
            {daftarGuru.map((guru) => (
              <TouchableOpacity
                key={guru.nama}
                activeOpacity={0.7}
                className="items-center"
                onPress={() => alert(`Mengajukan konseling ke ${guru.nama}`)}
              >
                  {/* <Text>{JSON}</Text> */}
 
                {/* <View > */}
                 <Image
                    source={guru.foto}
                  className=" rounded-full overflow-hidden border-4 border-white shadow-2xl mb-4"
                  resizeMode="cover"
                  style={{ width: 180, height: 180 }}
                  />
                {/* </View> */}
                <Text className="text-lg font-semibold text-gray-800">
                  {guru.nama}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Spacer biar footer nempel bawah */}
        <View className="h-20" />
      </ScrollView>

      {/* Footer */}
      <View className="bg-[#5B7DB1] py-8 items-center absolute bottom-0 left-0 right-0">
        <Text className="text-white text-lg">
          © 2025 BKcTB | SMK Taruna Bhakti
        </Text>
      </View>
    </View>
  );
}