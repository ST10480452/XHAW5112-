import { InfoCard } from '@/components/InfoCard';
import ScreenHeader from '@/components/ScreenHeader';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * PAGE 1: HOME SCREEN (index.tsx)
 * 
 * WHAT WE DID:
 * - Wrapped the screen in `SafeAreaView` from `react-native-safe-area-context`.
 * - Created a Hero Section with a clear value proposition and primary call-to-action button.
 * - Rendered key features and overview cards using JavaScript `.map()` over structured data arrays.
 * 
 * WHY WE DID IT:
 * - `SafeAreaView` ensures UI elements aren't blocked by device camera cutouts, notches, or home indicator bars.
 * - Establishes instant visual hierarchy so first-time visitors understand what Pawsitive Pet Academy offers immediately.
 */

const FEATURES = [
  { icon: '', title: 'Positive Reinforcement', body: 'Science-backed techniques that build lasting trust without force or fear.' },
  { icon: '', title: 'Certified Instructors', body: 'Pretoria’s most experienced behavioral specialists dedicated to your success.' },
  { icon: '', title: 'Real-World Skills', body: 'Practical lessons designed to make everyday life with your dog enjoyable.' },
];

export default function HomeScreen() {
  // The router sends each home-page button to its matching screen.
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2D3B2A" />
      <ScreenHeader title="Pawsitive Academy" />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.badge}>PRETORIA’S PREMIER DOG ACADEMY</Text>
          <Text style={styles.heroTitle}>Pawsitive Pet Academy</Text>
          <Text style={styles.heroSubtitle}>Transforming relationships through reward-based training.</Text>
          
          <Text style={styles.heroDescription}>
            Shift away from outdated dominant practices. We help you and your dog build a strong, joyful bond using modern behavioral science and force-free methods.
          </Text>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.primaryButton} 
              activeOpacity={0.8} 
              onPress={() => router.push('/contact')}
            >
              <Text style={styles.primaryButtonText}>GET STARTED</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryButton} 
              activeOpacity={0.8} 
              onPress={() => router.push('/courses')}
            >
              <Text style={styles.secondaryButtonText}>OUR CLASSES</Text>
            </TouchableOpacity>
          </View>

          {/* Hero Banner Image */}
          <View style={styles.heroImageFrame}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1600&q=85' }}
              style={styles.heroImage}
              resizeMode="cover"
              accessibilityLabel="Golden retriever outdoors"
            />
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Pawsitive Academy?</Text>
          <Text style={styles.sectionSubtitle}>
            Designed specifically to give dog owners the tools, confidence, and guidance for lifelong success.
          </Text>

          <View style={styles.featureGrid}>
            {FEATURES.map((feature, idx) => (
              <InfoCard 
                key={idx} 
                icon={feature.icon} 
                title={feature.title} 
                body={feature.body} 
              />
            ))}
          </View>
        </View>

        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to Start Your Journey?</Text>
          <Text style={styles.ctaBody}>Join over 5,000 happy dogs and handlers in Pretoria today.</Text>
          <TouchableOpacity 
            style={styles.ctaButton} 
            activeOpacity={0.8} 
            onPress={() => router.push('/contact')}
          >
            <Text style={styles.ctaButtonText}>BOOK A SESSION</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Pawsitive Academy. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2D3B2A',
  },
  container: {
    backgroundColor: '#F5EBE0',
    flexGrow: 1,
  },
  heroSection: {
    padding: 20,
    alignItems: 'center',
  },
  badge: {
    fontSize: 10,
    fontWeight: '800',
    color: '#D05228',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D3B2A',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#444444',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#2D3B2A',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#E5C1B8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1C1C1C',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  heroImageFrame: {
    width: '100%',
    height: 220,
    borderRadius: 14,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: '#D1C4B8',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 16,
  },
  featureGrid: {
    gap: 12,
  },
  ctaCard: {
    margin: 20,
    backgroundColor: '#2D3B2A',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  ctaBody: {
    fontSize: 11,
    color: '#D1C4B8',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: '#D05228',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
  },
  footer: {
    backgroundColor: '#2D3B2A',
    paddingVertical: 24,
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
});