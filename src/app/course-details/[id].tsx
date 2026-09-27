import ScreenHeader from '@/components/ScreenHeader';
import { COURSES_DATA } from '@/data/courses';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CourseDetailsScreen() {
	const router = useRouter();
	// Expo Router provides id from either the dynamic path or a query string.
	const { id } = useLocalSearchParams<{ id?: string }>();
	const course = COURSES_DATA[id ?? '1'] ?? COURSES_DATA['1'];
	const goBackToCourses = () => {
		if (router.canGoBack()) router.back();
		else router.replace('/courses');
	};

	return <ScrollView style={styles.container} contentContainerStyle={styles.content}>
		<Pressable style={styles.back} onPress={goBackToCourses}><Text style={styles.backText}>← Back to Courses</Text></Pressable>
		<ScreenHeader title={course.title} subtitle={`${course.duration} Program • ${course.level}`} />
		<View style={styles.hero}><Image source={{ uri: course.image }} style={styles.heroImage} /><Text style={styles.price}>R{course.price.toLocaleString()}</Text></View>
		<View style={styles.card}><Text style={styles.heading}>Course Overview</Text><Text style={styles.description}>{course.description}</Text><Text style={styles.heading}>What You Will Learn</Text>{course.highlights.map((item) => <View key={item} style={styles.bullet}><Text style={styles.dot}>•</Text><Text style={styles.bulletText}>{item}</Text></View>)}</View>
		<View style={styles.card}><Text style={styles.heading}>Curriculum Roadmap</Text>{course.modules.map((module) => <View key={module.week} style={styles.module}><View style={styles.moduleHeader}><Text style={styles.week}>{module.week}</Text><Text style={styles.moduleTitle}>{module.title}</Text></View><Text style={styles.moduleDetail}>{module.detail}</Text></View>)}</View>
		<View style={styles.cta}><Text style={styles.ctaPrice}>Total Tuition: R{course.price.toLocaleString()} (Excl. VAT)</Text><Pressable style={styles.primary} onPress={() => router.push('/book-assessment')}><Text style={styles.buttonText}>BOOK ASSESSMENT & ENROLL</Text></Pressable><Pressable style={styles.secondary} onPress={() => router.push('/calculator')}><Text style={styles.secondaryText}>Calculate Fee with Add-ons</Text></Pressable></View>
	</ScrollView>;
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#F5EBE0' }, content: { padding: 16, paddingBottom: 40 }, back: { marginBottom: 12, paddingVertical: 4 }, backText: { fontSize: 12, fontWeight: 'bold', color: '#2D3B2A' }, hero: { height: 180, borderRadius: 16, overflow: 'hidden', marginBottom: 16, borderWidth: 1, borderColor: '#D4B0A3' }, heroImage: { width: '100%', height: '100%' }, price: { position: 'absolute', bottom: 12, right: 12, backgroundColor: '#E25B2D', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, color: '#FFF', fontWeight: 'bold', fontSize: 14 }, card: { backgroundColor: '#EBCBBE', borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#D4B0A3' }, heading: { fontSize: 16, fontWeight: 'bold', color: '#2D3B2A', marginBottom: 8, marginTop: 8 }, description: { fontSize: 12, color: '#444', lineHeight: 18, marginBottom: 8 }, bullet: { flexDirection: 'row', marginBottom: 6 }, dot: { fontSize: 14, color: '#E25B2D', marginRight: 8, fontWeight: 'bold' }, bulletText: { fontSize: 12, color: '#333', flex: 1 }, module: { backgroundColor: '#FFF', borderRadius: 10, padding: 12, marginTop: 8, borderWidth: 1, borderColor: '#DDD' }, moduleHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 }, week: { fontSize: 10, fontWeight: 'bold', color: '#E25B2D', marginRight: 8 }, moduleTitle: { fontSize: 12, fontWeight: 'bold', color: '#2D3B2A', flex: 1 }, moduleDetail: { fontSize: 11, color: '#666', lineHeight: 16 }, cta: { backgroundColor: '#2D3B2A', borderRadius: 16, padding: 18, alignItems: 'center' }, ctaPrice: { color: '#FFF', fontSize: 13, fontWeight: 'bold', marginBottom: 12 }, primary: { backgroundColor: '#E25B2D', borderRadius: 8, paddingVertical: 12, width: '100%', alignItems: 'center', marginBottom: 8 }, buttonText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' }, secondary: { borderWidth: 1, borderColor: '#FFF', borderRadius: 8, paddingVertical: 10, width: '100%', alignItems: 'center' }, secondaryText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },
});
