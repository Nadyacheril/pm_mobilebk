
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CameraIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  TrashIcon,
} from 'react-native-heroicons/outline';
import { CheckCircleIcon } from 'react-native-heroicons/solid';

export default function Profile() {
  // === Profil ===
  const [foto, setFoto] = useState<string | null>(null);
  const [quotes, setQuotes] = useState<string>('iya');
  const [modalQuoteVisible, setModalQuoteVisible] = useState(false);
  const [inputQuote, setInputQuote] = useState('');

  // === Riwayat Konseling (data dummy, nanti bisa diganti dari API) ===
  const riwayat = [
    {
      jenis: 'Karir',
      guru: 'IKA RAFIKA',
      tanggal: '1/12/2025',
      hari: 'Rabu',
      jam: '10:00-11:00',
      status: 'Disetujui',
    },
    {
      jenis: 'Pribadi',
      guru: 'HENI SISWATI',
      tanggal: '30/11/2025',
      hari: 'Kamis',
      jam: '13:00-14:00',
      status: 'Disetujui',
    },
    {
      jenis: 'Pribadi',
      guru: 'NADYA AFRILIANI',
      tanggal: '29/11/2025',
      hari: 'Kamis',
      jam: '13:00-14:00',
      status: 'Disetujui',
    },
  ];

  // Load profil dari AsyncStorage
  useEffect(() => {
    const load = async () => {
      const savedFoto = await AsyncStorage.getItem('profileFoto');
      const savedQuote = await AsyncStorage.getItem('profileQuotes');
      if (savedFoto) setFoto(savedFoto);
      if (savedQuote) setQuotes(savedQuote);
    };
    load();
  }, []);

  // Ganti Foto (100% JALAN di laptop/emulator/HP)
  const pilihFoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Izin ditolak', 'Buka pengaturan → Izinkan akses foto');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      const uri = result.assets[0].uri;
      setFoto(uri);
      await AsyncStorage.setItem('profileFoto', uri);
      Alert.alert('Sukses', 'Foto profil diganti!');
    }
  };

  // Logout
  const logout = () => {
    Alert.alert('Logout', 'Yakin mau keluar?', [
      { text: 'Batal', style: 'cancel' },
      { text: 'Ya', onPress: () => router.replace('/login') },
    ]);
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* NAVBAR */}
      <View className="bg-[#5B7DB1] px-6 py-7 flex-row justify-between items-center">
        <Text className="text-white text-3xl font-bold">BKcTB - Profil</Text>
        <View className="flex-row items-center gap-4">
          <BellIcon size={26} color="white" />
          <TouchableOpacity
            onPress={logout}
            className="bg-white/20 px-6 py-4 rounded-full flex-row items-center gap-2"
          >
            <ArrowLeftOnRectangleIcon size={20} color="white" />
            <Text className="text-white font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* === BAGIAN PROFIL === */}
        <View className="items-center px-5 mt-8">
          <View className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Gradient + Foto */}
            <View className="h-40 bg-gradient-to-br from-[#5B7DB1] to-[#3A5D8A] relative">
              <View className="absolute -bottom-20 left-1/2 -translate-x-1/2">
                <View className="relative">
                  <View pointerEvents="none" className="w-40 h-40 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gray-200">
                    <Image
                      source={foto ? { uri: foto } : require('@/assets/profile/maruko.jpg')}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                  <TouchableOpacity
                    onPress={pilihFoto}
                    activeOpacity={0.8}
                    style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 10, elevation: 10 }}
                    className="bg-white p-3 rounded-full shadow-xl border border-gray-100"
                  >
                    <CameraIcon size={22} color="#5B7DB1" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Info Profil */}
            <View className="pt-24 pb-8 px-8 items-center">
              <Text className="text-2xl font-bold text-gray-800">NadyaCherill</Text>
              <Text className="text-gray-500 text-sm mt-1">cherillnadya@gmail.com</Text>
              <Text className="text-blue-800 font-semibold text-sm mt-1">Kelas XI RPL 1</Text>

              {/* Quotes */}
              <View className="w-full mt-8">
                <View className="bg-gray-100 rounded-2xl py-5 px-6">
                  <Text className="text-center text-gray-700 text-lg italic">
                    {quotes || '"iya"'}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setInputQuote(quotes.replace(/"/g, ''));
                  setModalQuoteVisible(true);
                }}
                className="mt-6 bg-gradient-to-r from-[#5B7DB1] to-[#3A5D8A] w-full py-4 rounded-full shadow-md"
              >
                <Text className="text-white font-bold text-center text-lg">Edit Quotes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* === RIWAYAT PENGAJUAN KONSELING === */}
        <View className="px-5 mt-8 mb-8">
          <Text className="text-2xl font-bold text-blue-800 text-center mb-6">
            Riwayat Pengajuan Konseling
          </Text>

          <View className="space-y-5">
            {riwayat.map((item, i) => (
              <View key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <View className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <Text className="text-lg font-bold text-gray-800">{item.jenis}</Text>
                </View>
                <View className="px-6 py-5">
                  <View className="flex-row items-center gap-3 mb-3">
                    <CheckCircleIcon size={28} color="#10b981" />
                    <View className="flex-1">
                      <Text className="text-base font-semibold text-gray-800">Ke: {item.guru}</Text>
                      <Text className="text-sm text-gray-600">
                        {item.tanggal} • {item.hari} {item.jam}
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <TrashIcon size={24} color="#ef4444" />
                    </TouchableOpacity>
                  </View>
                  <View className="bg-emerald-50 px-4 py-2 rounded-full self-start">
                    <Text className="text-emerald-700 font-medium text-sm">{item.status}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Spacer biar footer nempel bawah */}
        <View className="h-24" />
      </ScrollView>

      {/* FOOTER */}
      <View className="bg-[#5B7DB1] py-5 px-8 absolute bottom-0 left-0 right-0">
        <Text className="text-white text-lg text-center">
          © 2025 BKcTB | SMK Taruna Bhakti
        </Text>
      </View>

      {/* MODAL EDIT QUOTES */}
      {/* MODAL EDIT QUOTES — MIRIP BANGET FOTO KE-2 */}
<Modal visible={modalQuoteVisible} transparent animationType="fade">
  <View className="flex-1 bg-black/50 justify-center items-center px-6">
    <View className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">

      {/* Header Modal + Tombol X */}
      <View className="flex-row justify-between items-center px-6 pt-6 pb-4">
        <Text className="text-xl font-bold text-blue-900">Edit Quotes</Text>
        <TouchableOpacity
          onPress={() => setModalQuoteVisible(false)}
          className="p-2"
        >
          <Text className="text-3xl text-gray-500 font-light">×</Text>
        </TouchableOpacity>
      </View>

      {/* Input Quotes */}
      <View className="px-6">
        <TextInput
          className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5 text-base text-gray-800"
          value={inputQuote}
          onChangeText={setInputQuote}
          placeholder="Tulis quotes baru..."
          placeholderTextColor="#9ca3af"
          multiline
          autoFocus
          style={{ minHeight: 100, textAlignVertical: 'top' }}
        />
      </View>

      {/* Tombol Batal & Simpan */}
      <View className="flex-row justify-end gap-4 px-6 py-6">
        <TouchableOpacity
          onPress={() => setModalQuoteVisible(false)}
          className="bg-gray-200 px-8 py-4 rounded-full"
        >
          <Text className="text-gray-700 font-medium text-base">Batal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            if (inputQuote.trim()) {
              const q = `"${inputQuote.trim()}"`;
              setQuotes(q);
              await AsyncStorage.setItem('profileQuotes', q);
              setModalQuoteVisible(false);
            }
          }}
          className="bg-[#5B7DB1]  px-8 py-4 rounded-full flex-row items-center gap-2 shadow-lg"
        >
          <Text className="text-white font-bold text-base">Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </View>
  );
}