import { Href, Link } from 'expo-router';
import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type ScreenHeaderProps = { title?: string; subtitle?: string };
type NavItem = { name: string; path: Href };

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Blog', path: '/blog' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'Book Assessment', path: '/book-assessment' },
  { name: 'Account', path: '/account' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  // This state opens and closes the shared navigation menu.
  const [menuVisible, setMenuVisible] = useState(false);
  return <View style={styles.headerContainer}>
    <View style={styles.topBar}>
      <Image source={require('../../assets/images/logo.png.png')} style={styles.logo} resizeMode="contain" />
      <Pressable onPress={() => setMenuVisible(true)} style={styles.menuButton}><Text style={styles.menuIcon}>☰</Text></Pressable>
    </View>
    {title && <Text style={styles.title}>{title}</Text>}
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    <Modal visible={menuVisible} transparent animationType="fade" onRequestClose={() => setMenuVisible(false)}>
      <View style={styles.modalOverlay}><View style={styles.menuContent}>
        <View style={styles.menuHeader}><Text style={styles.menuTitle}>Navigation</Text><Pressable onPress={() => setMenuVisible(false)}><Text style={styles.closeButton}>✕</Text></Pressable></View>
        {NAV_ITEMS.map((item) => <Link key={item.name} href={item.path} onPress={() => setMenuVisible(false)} style={styles.menuLink}><Text style={styles.menuLinkText}>{item.name}</Text></Link>)}
      </View></View>
    </Modal>
  </View>;
}

const styles = StyleSheet.create({ headerContainer: { backgroundColor: '#2D3B2A', padding: 16, borderRadius: 12, marginBottom: 16 }, topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }, logo: { width: 48, height: 48, borderRadius: 24 }, menuButton: { padding: 8 }, menuIcon: { color: '#F5EBE0', fontSize: 24, fontWeight: 'bold' }, title: { fontSize: 22, fontWeight: 'bold', color: '#F5EBE0' }, subtitle: { fontSize: 14, color: '#E5C1B8', marginTop: 4 }, modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-start', alignItems: 'flex-end', paddingTop: 60, paddingRight: 16 }, menuContent: { backgroundColor: '#F5EBE0', width: 220, borderRadius: 12, padding: 16, elevation: 5 }, menuHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#2D3B2A22', paddingBottom: 8, marginBottom: 8 }, menuTitle: { fontWeight: 'bold', fontSize: 16, color: '#2D3B2A' }, closeButton: { fontSize: 18, fontWeight: 'bold', color: '#2D3B2A' }, menuLink: { paddingVertical: 10 }, menuLinkText: { fontSize: 15, color: '#2D3B2A', fontWeight: '500' } });
