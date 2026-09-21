import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * REUSABLE COMPONENT: ScreenHeader / InfoCard
 * 
 * WHAT WE DID:
 * - Extracted common UI patterns (headers and card containers) into standalone reusable components.
 * - Used TypeScript props (`title`, `subtitle`, `description`, `extraInfo`) to pass dynamic content.
 * 
 * WHY WE DID IT:
 * - Prevents copying and pasting layout code across multiple screens.
 * - Ensures uniform padding, typography, and spacing across the entire application.
 * - Makes global visual updates easy: changing styling here updates every screen at once.
 */

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export function ScreenHeader({ title = 'PAWSITIVE ACADEMY', showBack = true }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>‹ Back</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 50 }} />
      )}

      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity 
        accessibilityLabel="Menu" 
        style={styles.hamburger}
        onPress={() => router.push('/about')}
      >
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 60, backgroundColor: '#2D3B2A', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  backButton: { paddingRight: 8 },
  backButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: '800', letterSpacing: 1 },
  hamburger: { gap: 4, padding: 4 },
  line: { width: 24, height: 3, backgroundColor: '#FFFFFF', borderRadius: 2 },
});