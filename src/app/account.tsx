/* eslint-disable react/no-unescaped-entities */
import ScreenHeader from '@/components/ScreenHeader';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AccountScreen() {
  const router = useRouter();
  // The selected menu item chooses which account panel is shown below.
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Example User Profile Data
  const user = {
    name: 'Yusuf Khan',
    initial: 'Y',
    email: 'yusuf@example.com',
  };

  const handleTabPress = (tabName: string) => {
    if (tabName === 'Log Out') {
      Alert.alert('Log Out', 'Are you sure you want to log out?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', style: 'destructive', onPress: () => router.replace('/') },
      ]);
      return;
    }
    setActiveTab(tabName);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Bar */}
      <ScreenHeader
        title="Welcome back!"
        subtitle="Manage your bookings, track your course progress, and keep everything in one place."
      />

      {/* Top Section: Navigation Sidebar & Quote Banner */}
      <View style={styles.topGrid}>
        {/* Account Menu Card */}
        <View style={styles.menuCard}>
          {/* User Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user.initial}</Text>
            </View>
            <Text style={styles.userName} numberOfLines={1}>{user.name}</Text>
          </View>

          {/* Nav Items */}
          <View style={styles.navGroup}>
            {[
              { id: 'Dashboard', icon: '🏠', label: 'Dashboard' },
              { id: 'My Bookings', icon: '📅', label: 'My Bookings' },
              { id: 'Training Progress', icon: '📊', label: 'Training Progress' },
              { id: 'Saved Articles', icon: '📖', label: 'Saved Articles' },
              { id: 'Account Details', icon: '👤', label: 'Account Details' },
              { id: 'Log Out', icon: '🚪', label: 'Log Out' },
            ].map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Pressable
                  key={item.id}
                  style={[styles.navItem, isActive && styles.navItemActive]}
                  onPress={() => handleTabPress(item.id)}
                >
                  <Text style={styles.navIcon}>{item.icon}</Text>
                  <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Inspirational Banner Box */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            Every dog has potential.{'\n'}Let's unlock it together!
          </Text>
        </View>
      </View>

      {/* Dynamic Content Views based on activeTab */}
      {activeTab === 'Dashboard' && (
        <>
          {/* Upcoming Bookings */}
          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardIcon}>📅</Text>
              <Text style={styles.cardTitle}>Upcoming Bookings</Text>
            </View>

            <View style={styles.bookingRow}>
              <View style={styles.dateBadge}>
                <Text style={styles.dateDay}>SAT</Text>
                <Text style={styles.dateNumber}>12</Text>
                <Text style={styles.dateMonth}>OCTOBER 2026</Text>
              </View>

              <View style={styles.bookingDetails}>
                <Text style={styles.bookingTitle}>Initial Assessment</Text>
                <Text style={styles.bookingTime}>10:00 - 11:00</Text>
                <View style={styles.locationRow}>
                  <Text style={styles.locationIcon}>📍</Text>
                  <Text style={styles.locationText}>Pawsitive Pet Academy</Text>
                </View>
              </View>

              <Pressable
                style={styles.actionBtn}
                onPress={() => router.push('/book-assessment')}
              >
                <Text style={styles.actionBtnText}>RESCHEDULE</Text>
              </Pressable>
            </View>
          </View>

          {/* Need Help Box */}
          <View style={styles.card}>
            <View style={styles.helpRow}>
              <View style={styles.helpTextContainer}>
                <View style={styles.cardTitleRow}>
                  <Text style={styles.cardIcon}>💬</Text>
                  <Text style={styles.cardTitle}>Need Help?</Text>
                </View>
                <Text style={styles.helpDescription}>
                  If you have any questions or need to make a change to your booking, we&apos;re here to help.
                </Text>
              </View>

              <Pressable
                style={styles.actionBtn}
                onPress={() => Alert.alert('Contact Us', 'Support email: hello@pawsitiveacademy.com')}
              >
                <Text style={styles.actionBtnText}>CONTACT US</Text>
              </Pressable>
            </View>
          </View>
        </>
      )}

      {activeTab === 'My Bookings' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Booking History</Text>
          <Text style={styles.tabContentText}>No previous completed bookings found.</Text>
        </View>
      )}

      {activeTab === 'Training Progress' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Training Progress</Text>
          <Text style={styles.tabContentText}>Enroll in a course to start tracking your puppy&apos;s milestones!</Text>
        </View>
      )}

      {activeTab === 'Saved Articles' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Saved Articles</Text>
          <Text style={styles.tabContentText}>Your saved blog articles will appear here.</Text>
        </View>
      )}

      {activeTab === 'Account Details' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Details</Text>
          <Text style={styles.tabContentText}>Name: {user.name}</Text>
          <Text style={styles.tabContentText}>Email: {user.email}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EBE0' },
  content: { padding: 16 },

  topGrid: { gap: 16, marginBottom: 16 },

  // Menu Sidebar
  menuCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1B8B9B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  userName: { fontSize: 15, fontWeight: 'bold', color: '#2D3B2A', flex: 1 },

  navGroup: { gap: 4 },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  navItemActive: { backgroundColor: '#E2E8C0' },
  navIcon: { fontSize: 14, marginRight: 10 },
  navLabel: { fontSize: 13, color: '#444', fontWeight: '500' },
  navLabelActive: { color: '#2D3B2A', fontWeight: 'bold' },

  // Quote Card
  quoteCard: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'sans-serif',
  },

  // Generic White Cards
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  cardIcon: { fontSize: 18, marginRight: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#2D3B2A' },
  tabContentText: { fontSize: 12, color: '#666', marginTop: 6 },

  // Booking Card Content
  bookingRow: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dateBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: '#DDD',
  },
  dateDay: { fontSize: 10, fontWeight: 'bold', color: '#2D3B2A' },
  dateNumber: { fontSize: 20, fontWeight: 'bold', color: '#2D3B2A' },
  dateMonth: { fontSize: 8, color: '#666', fontWeight: 'bold' },

  bookingDetails: { flex: 1 },
  bookingTitle: { fontSize: 13, fontWeight: 'bold', color: '#2D3B2A' },
  bookingTime: { fontSize: 11, color: '#666', marginVertical: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationIcon: { fontSize: 10, marginRight: 4 },
  locationText: { fontSize: 10, color: '#666' },

  // Help Section Layout
  helpRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  helpTextContainer: { flex: 1 },
  helpDescription: { fontSize: 11, color: '#666', lineHeight: 16 },

  // Shared Action Buttons
  actionBtn: {
    backgroundColor: '#E25B2D',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  actionBtnText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
});