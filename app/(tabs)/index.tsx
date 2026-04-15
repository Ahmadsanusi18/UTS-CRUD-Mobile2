import { StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';

export default function AcademicIndex() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Profile */}
      <View style={styles.header}>
        <View>
          <ThemedText type="defaultSemiBold" style={styles.welcomeText}>Welcome,</ThemedText>
          <ThemedText type="title">Ahmad-Sforky</ThemedText>
        </View>
        <TouchableOpacity style={styles.notificationBadge}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>

      {/* Card IPK / Info Utama */}
      <View style={styles.mainCard}>
        {/* Kolom IPK */}
        <View style={styles.statGroup}>
          <ThemedText style={styles.whiteText}>IPK Kumulatif</ThemedText>
          <ThemedText style={styles.ipkValue}>3.89</ThemedText>
        </View>

        <View style={styles.divider} />

        {/* Kolom SKS */}
        <View style={styles.statGroup}>
          <ThemedText style={styles.whiteText}>SKS Lulus</ThemedText>
          <ThemedText style={styles.sksValue}>84 / 144</ThemedText>
        </View>
      </View>

      {/* --- ELEMEN BARU 1: MINI STATS ROW --- */}
      <View style={styles.miniStatsRow}>
        <View style={styles.miniCard}>
          <Ionicons name="school-outline" size={18} color="#1A237E" />
          <View style={{marginLeft: 8}}>
             <ThemedText style={styles.miniLabel}>Tahun Ajaran</ThemedText>
             <ThemedText type="defaultSemiBold" style={styles.miniValue}>2025/2026 - Ganjil</ThemedText>
          </View>
        </View>
        <View style={styles.miniCard}>
          <Ionicons name="time-outline" size={18} color="#4CAF50" />
          <View style={{marginLeft: 8}}>
             <ThemedText style={styles.miniLabel}>Presensi Rata2</ThemedText>
             <ThemedText type="defaultSemiBold" style={[styles.miniValue, {color: '#4CAF50'}]}>95.8%</ThemedText>
          </View>
        </View>
      </View>

      {/* Grid Menu */}
      <View style={styles.menuContainer}>
        <MenuIcon icon="book-outline" label="KRS" color="#4A90E2" />
        <MenuIcon icon="reader-outline" label="KHS" color="#50E3C2" />
        <MenuIcon icon="calendar-outline" label="Jadwal" color="#F5A623" />
        <MenuIcon icon="card-outline" label="Tagihan" color="#D0021B" />
      </View>

      {/* Jadwal Hari Ini */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Jadwal Hari Ini</ThemedText>
            <TouchableOpacity>
                <ThemedText style={{color: '#1A237E', fontSize: 12}}>Lihat Kalender</ThemedText>
            </TouchableOpacity>
        </View>

        {/* Jadwal 1 (Pemrograman Mobile) - Existing */}
        <View style={styles.scheduleCard}>
          <View style={styles.timeBox}>
            <ThemedText type="defaultSemiBold">08:00</ThemedText>
            <ThemedText style={styles.smallText}>AM</ThemedText>
          </View>
          <View style={styles.courseInfo}>
            <ThemedText type="defaultSemiBold">Pemrograman Mobile</ThemedText>
            <ThemedText style={styles.smallText}>Ruang Lab 02 • Smt 5</ThemedText>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#CCC" />
        </View>

        {/* --- ELEMEN BARU 2: JADWAL KEDUA --- */}
        <View style={[styles.scheduleCard, {marginTop: 10}]}>
          <View style={styles.timeBox}>
            <ThemedText type="defaultSemiBold">10:30</ThemedText>
            <ThemedText style={styles.smallText}>AM</ThemedText>
          </View>
          <View style={styles.courseInfo}>
            <ThemedText type="defaultSemiBold">Etika Profesi IT</ThemedText>
            <ThemedText style={styles.smallText}>Daring via Zoom • Smt 5</ThemedText>
          </View>
          <View style={styles.statusPill}>
             <ThemedText style={styles.statusText}>Daring</ThemedText>
          </View>
        </View>
      </View>

      {/* --- ELEMEN BARU 3: BERITA/PENGUMUMAN KAMPUS --- */}
      <View style={[styles.section, {marginBottom: 30}]}>
        <ThemedText type="subtitle">Berita & Pengumuman</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newsScroll}>
          <TouchableOpacity style={styles.newsCard}>
             <Image source={{uri: 'https://images.unsplash.com/photo-1541339907198-e08756defe43?q=80&w=400&auto=format&fit=crop'}} style={styles.newsImage} />
             <View style={styles.newsContent}>
                <ThemedText type="defaultSemiBold" numberOfLines={2} style={styles.newsTitle}>Seminar Nasional Teknologi AI di Industri Kreatif</ThemedText>
                <ThemedText style={styles.newsDate}>15 Ags 2025</ThemedText>
             </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsCard}>
             <Image source={{uri: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=400&auto=format&fit=crop'}} style={styles.newsImage} />
             <View style={styles.newsContent}>
                <ThemedText type="defaultSemiBold" numberOfLines={2} style={styles.newsTitle}>Pengumuman Batas Akhir Pembayaran UKT Semester Genap</ThemedText>
                <ThemedText style={styles.newsDate}>10 Ags 2025</ThemedText>
             </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </ScrollView>
  );
}

const MenuIcon = ({ icon, label, color }: any) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={[styles.iconBox, { backgroundColor: color + '15' }]}>
      <Ionicons name={icon} size={28} color={color} />
    </View>
    <ThemedText style={styles.menuLabel}>{label}</ThemedText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20 },
  // Memberikan paddingTop dinamis agar tidak mentok status bar
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 60, marginBottom: 25 },
  welcomeText: { color: '#888', marginBottom: -4 },
  notificationBadge: { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 12 },
  dot: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, backgroundColor: 'red', borderRadius: 4, borderWidth: 2, borderColor: '#FFF' },
  
  mainCard: { 
    backgroundColor: '#1A237E', 
    borderRadius: 24, 
    paddingVertical: 25, 
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    elevation: 8,
    shadowColor: '#1A237E',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  statGroup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: { 
    color: 'rgba(255,255,255,0.6)', 
    fontSize: 11, 
    textTransform: 'uppercase', 
    letterSpacing: 1,
    marginBottom: 6,
  },
  ipkValue: { 
    color: '#FFF', 
    fontSize: 32, 
    fontWeight: 'bold',
    lineHeight: 38, // Ukuran disesuaikan agar tidak terpotong
  },
  sksValue: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: '600',
    lineHeight: 26,
  },
  divider: { 
    width: 1, 
    height: 40, 
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 10 
  },

  // Styles untuk Elemen Baru 1
  miniStatsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  miniCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F9F9F9', 
    padding: 12, 
    borderRadius: 14, 
    width: '48%',
    borderWidth: 1,
    borderColor: '#F0F0F0' 
  },
  miniLabel: { fontSize: 10, color: '#888', textTransform: 'uppercase' },
  miniValue: { fontSize: 13, color: '#333', marginTop: 1 },

  menuContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
  menuItem: { alignItems: 'center', width: '22%' },
  iconBox: { padding: 15, borderRadius: 18, marginBottom: 8, width: 60, height: 60, justifyContent: 'center', alignItems: 'center' },
  menuLabel: { fontSize: 12, fontWeight: '600' },
  
  section: { marginTop: 30 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  scheduleCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', padding: 18, borderRadius: 20 },
  timeBox: { alignItems: 'center', borderRightWidth: 1, borderRightColor: '#EEE', paddingRight: 15, marginRight: 15 },
  courseInfo: { flex: 1 },
  smallText: { fontSize: 12, color: '#888', marginTop: 2 },
  
  // Styles untuk Indikator Daring
  statusPill: { backgroundColor: '#E3F2FD', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  statusText: { color: '#1A237E', fontSize: 10, fontWeight: 'bold' },

  // Styles untuk Elemen Baru 3
  newsScroll: { marginTop: 15 },
  newsCard: { width: 220, backgroundColor: '#FFF', borderRadius: 16, marginRight: 15, borderWidth: 1, borderColor: '#F0F0F0', overflow: 'hidden' },
  newsImage: { width: '100%', height: 110, backgroundColor: '#EEE' },
  newsContent: { padding: 12 },
  newsTitle: { fontSize: 13, color: '#333', lineHeight: 18, height: 36 }, // Max 2 lines
  newsDate: { fontSize: 11, color: '#888', marginTop: 5 },
});