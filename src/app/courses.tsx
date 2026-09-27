import ScreenHeader from '@/components/ScreenHeader';
import { COURSES } from '@/data/courses';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const CATEGORIES = ['All', 'Basic', 'Medical', 'Puppy', 'Behavioural', 'Grooming'];

export default function CoursesScreen() {
  const router = useRouter();
  // These values keep the course filters connected to the search controls.
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  // Six items are inexpensive to filter during render, so no memo hook is needed.
  const filtered = COURSES.filter((course) => (category === 'All' || course.category === category) && course.title.toLowerCase().includes(search.toLowerCase()));

  return <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <ScreenHeader title="Our Training Courses" subtitle="From puppy socialisation to advanced obedience — find the perfect programme for your dog." />
    <Pressable style={styles.ctaButton} onPress={() => router.push('/book-assessment')}><Text style={styles.ctaText}>BOOK ASSESSMENT</Text></Pressable>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chips}>{CATEGORIES.map((item) => <Pressable key={item} style={[styles.chip, category === item && styles.activeChip]} onPress={() => setCategory(item)}><Text style={[styles.chipText, category === item && styles.activeChipText]}>{item}</Text></Pressable>)}</ScrollView>
    <View style={styles.search}><Text>🔍</Text><TextInput placeholder="Search programmes..." placeholderTextColor="#888" value={search} onChangeText={setSearch} style={styles.searchInput} /></View>
    <View style={styles.grid}>{filtered.map((course) => <View key={course.id} style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.cardImage} />
      <View style={styles.cardContent}><View style={styles.metaTop}><Text style={styles.badge}>{course.type}</Text><Text style={styles.category}>{course.category.toUpperCase()}</Text></View><Text style={styles.title}>{course.title}</Text><Text style={styles.description} numberOfLines={3}>{course.description}</Text><View style={styles.meta}><View><Text style={styles.label}>Duration</Text><Text style={styles.value}>{course.duration}</Text></View><View style={styles.priceWrap}><Text style={styles.label}>Investment</Text><Text style={styles.price}>R{course.price.toLocaleString()}</Text></View></View><Link href={{ pathname: '/course-details/[id]', params: { id: course.id } }} asChild><Pressable style={styles.view}><Text style={styles.viewText}>VIEW COURSE</Text></Pressable></Link></View>
    </View>)}</View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EBE0' }, content: { padding: 16 }, ctaButton: { backgroundColor: '#E25B2D', alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginBottom: 16 }, ctaText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' }, chips: { marginBottom: 12 }, chip: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#2D3B2A', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 16, marginRight: 8 }, activeChip: { backgroundColor: '#2D3B2A' }, chipText: { fontSize: 12, color: '#2D3B2A', fontWeight: 'bold' }, activeChipText: { color: '#F5EBE0' }, search: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderWidth: 1, borderColor: '#CCC', borderRadius: 20, paddingHorizontal: 12, marginBottom: 20, height: 40 }, searchInput: { flex: 1, fontSize: 14, color: '#333', marginLeft: 8 }, grid: { gap: 16 }, card: { backgroundColor: '#EBCBBE', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#D4B0A3' }, cardImage: { width: '100%', height: 150 }, cardContent: { padding: 14 }, metaTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }, badge: { backgroundColor: '#FFF', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2, borderWidth: 1, borderColor: '#888', fontSize: 10, color: '#333' }, category: { fontSize: 10, color: '#E25B2D', fontWeight: 'bold' }, title: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 4 }, description: { fontSize: 12, color: '#444', lineHeight: 16, marginBottom: 12 }, meta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }, priceWrap: { alignItems: 'flex-end' }, label: { fontSize: 10, color: '#666' }, value: { fontSize: 12, fontWeight: 'bold', color: '#111' }, price: { fontSize: 13, fontWeight: 'bold', color: '#E25B2D' }, view: { backgroundColor: '#E25B2D', borderRadius: 8, paddingVertical: 10, alignItems: 'center' }, viewText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
});
