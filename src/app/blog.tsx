import ScreenHeader from '@/components/ScreenHeader';
import { BLOG_POSTS } from '@/data/blog-posts';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const CATEGORIES = ['All Articles', 'Puppy Training', 'Behaviour', 'Obedience', 'Health and Wellness'];

export default function BlogScreen() {
  // The selected category controls which articles are shown.
  const [category, setCategory] = useState('All Articles');
  const posts = BLOG_POSTS.filter((post) => category === 'All Articles' || post.category === category);
  return <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <ScreenHeader title="Tips, Training & Happy Tails" subtitle="Practical advice, expert insights, and real stories to help you build a stronger bond with your dog." />
    <View style={styles.hero}><Image source={{ uri: 'https://images.unsplash.com/photo-1612536057832-2ff7ead7819c?w=600&auto=format&fit=crop&q=60' }} style={styles.heroImage} /></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chips}>{CATEGORIES.map((item) => <Pressable key={item} style={[styles.chip, category === item && styles.activeChip]} onPress={() => setCategory(item)}><Text style={[styles.chipText, category === item && styles.activeChipText]}>{item}</Text></Pressable>)}</ScrollView>
    <View style={styles.grid}>{posts.map((post) => <View key={post.id} style={styles.card}><Image source={{ uri: post.heroImage }} style={styles.cardImage} /><View style={styles.cardContent}><View style={styles.meta}><Text style={styles.badge}>{post.category}</Text><Text style={styles.date}>{post.date}</Text></View><Text style={styles.title}>{post.title}</Text><Text style={styles.excerpt} numberOfLines={3}>{post.excerpt}</Text><Link href={{ pathname: '/blog-details/[id]', params: { id: post.id } }} asChild><Pressable style={styles.readMore}><Text style={styles.readMoreText}>READ MORE</Text></Pressable></Link></View></View>)}</View>
  </ScrollView>;
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#F5EBE0' }, content: { padding: 16 }, hero: { height: 140, borderRadius: 16, overflow: 'hidden', marginBottom: 16 }, heroImage: { width: '100%', height: '100%' }, chips: { marginBottom: 16 }, chip: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#2D3B2A', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 14, marginRight: 8 }, activeChip: { backgroundColor: '#E25B2D', borderColor: '#E25B2D' }, chipText: { fontSize: 11, color: '#2D3B2A', fontWeight: 'bold' }, activeChipText: { color: '#FFF' }, grid: { gap: 16 }, card: { backgroundColor: '#EBCBBE', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#D4B0A3' }, cardImage: { width: '100%', height: 140 }, cardContent: { padding: 14 }, meta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }, badge: { backgroundColor: '#FFF', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2, borderWidth: 1, borderColor: '#2D3B2A', fontSize: 9, color: '#2D3B2A', fontWeight: 'bold' }, date: { fontSize: 9, color: '#E25B2D', fontWeight: 'bold' }, title: { fontSize: 16, fontWeight: 'bold', color: '#111', marginBottom: 6, lineHeight: 20 }, excerpt: { fontSize: 11, color: '#444', lineHeight: 16, marginBottom: 12 }, readMore: { backgroundColor: '#E25B2D', borderRadius: 8, paddingVertical: 10, alignItems: 'center' }, readMoreText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' } });
