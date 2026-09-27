import { BLOG_POSTS_DATA } from '@/data/blog-posts';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function BlogDetailsScreen() {
	const router = useRouter();
	// Expo Router provides id from either the dynamic path or a query string.
	const { id } = useLocalSearchParams<{ id?: string }>();
	const post = BLOG_POSTS_DATA[id ?? '1'] ?? BLOG_POSTS_DATA['1'];
	const goBackToArticles = () => {
		if (router.canGoBack()) router.back();
		else router.replace('/blog');
	};

	return (
		<ScrollView style={styles.container} contentContainerStyle={styles.content}>
			<Pressable onPress={goBackToArticles} style={styles.backButton}>
				<Text style={styles.backButtonText}>← Back to Articles</Text>
			</Pressable>
			<View style={styles.headerSection}>
				<Text style={styles.articleTitle}>{post.title}</Text>
				<Text style={styles.authorByline}>Written by <Text style={styles.authorName}>{post.author}</Text></Text>
				<View style={styles.divider} />
				<Text style={styles.introParagraph}>{post.intro}</Text>
			</View>
			<View style={styles.imageWrapper}>
				<Image source={{ uri: post.heroImage }} resizeMode="cover" style={styles.heroImage} />
			</View>
			<View style={styles.bodySection}>
				{post.sections.map((section) => (
					<View key={section.number} style={styles.sectionBlock}>
						<Text style={styles.sectionHeading}>{section.number} {section.heading}</Text>
						{section.body.map((paragraph) => <Text key={paragraph} style={styles.bodyText}>{paragraph}</Text>)}
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#F5EBE0' },
	content: { paddingBottom: 40 },
	backButton: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
	backButtonText: { fontSize: 12, fontWeight: 'bold', color: '#2D3B2A' },
	headerSection: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20, alignItems: 'center' },
	articleTitle: { fontSize: 26, fontWeight: 'bold', color: '#2D3B2A', textAlign: 'center', marginBottom: 8 },
	authorByline: { fontSize: 11, color: '#666', marginBottom: 12 },
	authorName: { textDecorationLine: 'underline', color: '#333' },
	divider: { height: 1, backgroundColor: '#D4B0A3', width: '40%', marginBottom: 16 },
	introParagraph: { fontSize: 12, color: '#444', textAlign: 'center', lineHeight: 18, paddingHorizontal: 10 },
	imageWrapper: { width: '100%', height: 220, marginBottom: 24 },
	heroImage: { width: '100%', height: '100%' },
	bodySection: { paddingHorizontal: 20 },
	sectionBlock: { marginBottom: 20 },
	sectionHeading: { fontSize: 18, fontWeight: 'bold', color: '#2D3B2A', marginBottom: 10, lineHeight: 24 },
	bodyText: { fontSize: 12, color: '#444', lineHeight: 18, marginBottom: 10 },
});
