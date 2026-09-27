import ScreenHeader from '@/components/ScreenHeader';
import { useState } from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * PAGE 3: CONTACT SCREEN (contact.tsx)
 * 
 * WHAT WE DID:
 * - Implemented controlled form inputs using React's `useState` hook for `name`, `email`, and `message`.
 * - Added form validation and a submit button handler to capture user input.
 * - Included direct contact details and academy availability information below the form.
 * 
 * WHY WE DID IT:
 * - `useState` maintains a single source of truth for input fields in React Native.
 * - Controlled components ensure form state is clean.
 */

const CONTACT_INFO = [
  { icon: '📍', label: '123 Barkshire Lane, Waterkloof, Pretoria' },
  { icon: '📞', label: '+27 (0)12 555 0199' },
  { icon: '✉️', label: 'info@pawsitiveacademy.co.za' },
];

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dog: '', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Missing Fields', 'Please fill in required fields.');
      return;
    }
    Alert.alert('Message Sent!', 'We will get back to you within 24 hours.');
    setForm({ name: '', email: '', phone: '', dog: '', message: '' });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2D3B2A" />
      <ScreenHeader title="Contact Pawsitive Academy" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Get In Touch</Text>
          <Text style={styles.subtitle}>Have questions or ready to enroll? We&apos;d love to hear from you!</Text>

          {/* Form */}
          <View style={styles.formCard}>
            <TextInput style={styles.input} placeholder="Your Name *" value={form.name} onChangeText={(t) => setForm({ ...form, name: t })} />
            <TextInput style={styles.input} placeholder="Email Address *" keyboardType="email-address" value={form.email} onChangeText={(t) => setForm({ ...form, email: t })} />
            <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={form.phone} onChangeText={(t) => setForm({ ...form, phone: t })} />
            <TextInput style={styles.input} placeholder="Dog's Name & Breed" value={form.dog} onChangeText={(t) => setForm({ ...form, dog: t })} />
            <TextInput style={[styles.input, { height: 80 }]} multiline placeholder="How can we help you? *" value={form.message} onChangeText={(t) => setForm({ ...form, message: t })} />

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>SEND MESSAGE</Text>
            </TouchableOpacity>
          </View>

          {/* Quick Contact Cards */}
          <View style={{ gap: 8, marginTop: 16 }}>
            {CONTACT_INFO.map((info, idx) => (
              <View key={idx} style={styles.infoRow}>
                <Text style={{ fontSize: 16 }}>{info.icon}</Text>
                <Text style={styles.infoText}>{info.label}</Text>
              </View>
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
  title: { fontSize: 24, fontWeight: '800', color: '#1C1C1C', textAlign: 'center' },
  subtitle: { fontSize: 11, color: '#666666', textAlign: 'center', marginVertical: 6 },
  formCard: { backgroundColor: '#E5C1B8', borderRadius: 12, padding: 12, gap: 8 },
  input: { backgroundColor: '#FFFFFF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 8, fontSize: 12, color: '#1C1C1C' },
  submitBtn: { backgroundColor: '#2D3B2A', paddingVertical: 12, borderRadius: 6, alignItems: 'center', marginTop: 4 },
  submitBtnText: { color: '#FFFFFF', fontWeight: '800', fontSize: 12 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#E5C1B8', padding: 10, borderRadius: 8 },
  infoText: { fontSize: 11, fontWeight: '600', color: '#1C1C1C', flex: 1 },
  footer: { backgroundColor: '#2D3B2A', paddingVertical: 20, alignItems: 'center', marginTop: 'auto' },
  footerText: { color: '#A0A0A0', fontSize: 12 },
});