import { InfoCard } from '@/components/InfoCard';
import ScreenHeader from '@/components/ScreenHeader';
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * PAGE 2: ABOUT US SCREEN (about.tsx)
 * 
 * WHAT WE DID:
 * - Structured sections detailing the academy's mission statement, core values, and trainer profiles.
 * - Mapped trainer objects (containing names, roles, and bios) into reusable `InfoCard` components.
 * 
 * WHY WE DID IT:
 * - Keeps data definitions separate from presentation logic.
 * - Pet owners need trust and transparency before enrolling; dedicated trainer profiles build credibility.
 * - Reusing `InfoCard` here maintains a consistent card style with the rest of the application.
 */

const TRAINERS = [
  { name: 'Sarah van der Merwe', role: 'Lead Behavioral Trainer', bio: '12+ years in positive reinforcement behavior modification.', img: require('../../assets/images/business.jpg'), tags: ['CPDT-KA', 'Behavior'] },
  { name: 'John Smith', role: 'Agility & Obedience Coach', bio: 'Specializing in high-energy breeds and foundation obedience.', img: require('../../assets/images/gardner.jpg'), tags: ['Agility', 'Obedience'] },
  { name: 'Leslie Sello', role: 'Puppy & Socialization Spec.', bio: 'Setting puppies up for success early through confidence building.', img: require('../../assets/images/vet.jpg'), tags: ['Puppy', 'Early Dev'] },
];

const VALUES = [
  { icon: '❤️', title: 'Compassion', body: 'No force, fear, or pain in any section of our training.' },
  { icon: '🔬', title: 'Science-Based', body: 'Methods backed by modern behavioral science.' },
  { icon: '🤝', title: 'Community', body: 'Creating a safe space for dog owners to learn together.' },
  { icon: '🏆', title: 'Excellence', body: 'Maintaining highest professional standards always.' },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2D3B2A" />
      <ScreenHeader title="About Pawsitive Academy" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.mainTitle}>About Pawsitive Academy</Text>
          <Text style={styles.tagline}>Building trust between dogs and their humans since 2015.</Text>
          <Text style={styles.desc}>Pawsitive Academy was founded to shift dog training toward mutual understanding and scientific reinforcement.</Text>
          
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 12 }}>
            <InfoCard icon="🎯" title="Our Mission" body="Build lifelong, joyful bonds through positive reinforcement." width="48%" />
            <InfoCard icon="🛡" title="Methodology" body="Force-free positive techniques for sustainable long-term success." width="48%" />
          </View>
        </View>

        {/* Trainers Horizontal List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Certified Trainers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 12 }}>
            {TRAINERS.map((t, idx) => (
              <View key={idx} style={styles.trainerCard}>
                <Image source={t.img} style={styles.avatar} />
                <Text style={styles.trainerName}>{t.name}</Text>
                <Text style={styles.trainerRole}>{t.role}</Text>
                <Text style={styles.trainerBio}>{t.bio}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Values Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Academy Values</Text>
          <View style={styles.grid}>
            {VALUES.map((v, idx) => (
              <InfoCard key={idx} icon={v.icon} title={v.title} body={v.body} width="48%" />
            ))}
          </View>
        </View>

        <View style={styles.footer}><Text style={styles.footerText}>© 2026 Pawsitive Academy</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#2D3B2A' },
  container: { backgroundColor: '#F5EBE0', flexGrow: 1 },
  section: { padding: 16 },
  mainTitle: { fontSize: 24, fontWeight: '800', color: '#1C1C1C' },
  tagline: { fontSize: 12, fontWeight: '700', color: '#D05228', marginVertical: 4 },
  desc: { fontSize: 11, color: '#444444', lineHeight: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1C1C1C', textAlign: 'center', marginBottom: 8 },
  trainerCard: { width: 160, backgroundColor: '#E5C1B8', borderRadius: 12, padding: 12, alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginBottom: 6 },
  trainerName: { fontSize: 12, fontWeight: '800', color: '#1C1C1C', textAlign: 'center' },
  trainerRole: { fontSize: 9, fontWeight: '700', color: '#D05228', textAlign: 'center', marginBottom: 4 },
  trainerBio: { fontSize: 9, color: '#444444', textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 8 },
  footer: { backgroundColor: '#2D3B2A', paddingVertical: 20, alignItems: 'center' },
  footerText: { color: '#A0A0A0', fontSize: 12 },
});