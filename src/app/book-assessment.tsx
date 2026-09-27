import ScreenHeader from '@/components/ScreenHeader';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BookAssessmentScreen() {
  const router = useRouter();
  // This state switches between the form and its confirmation screen.
  const [isSubmitted, setIsSubmitted] = useState(false);

  // All form inputs are kept together so a single handler can update them.
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    petName: '',
    phone: '',
    breed: '',
    age: '',
    goals: '',
    date: '07 September 2026',
    time: '10:00 - 11:00',
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const requiredFields = [form.fullName, form.email, form.petName, form.phone, form.breed, form.age, form.date, form.time];
    if (requiredFields.some((value) => !value.trim())) {
      Alert.alert('Incomplete Form', 'Please fill in all required fields marked with *');
      return;
    }
    // Switch to confirmation view
    setIsSubmitted(true);
  };

  // --- 1. CONFIRMATION VIEW (Shown after form submission) ---
  if (isSubmitted) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ScreenHeader title="Booking Confirmation" />

        <View style={styles.confirmationContainer}>
          {/* Logo Badge */}
          <Image
            source={require('../../assets/images/logo.png.png')}
            style={styles.confirmLogo}
            resizeMode="contain"
          />

          <Text style={styles.confirmTitle}>Booking Confirmed!</Text>
          <Text style={styles.confirmSubtitle}>
            Thank you for choosing{'\n'}Pawsitive Academy
          </Text>

          {/* Booking Summary Box */}
          <View style={styles.detailsCard}>
            <Text style={styles.cardHeaderTitle}>Booking Details</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>📅</Text>
              <Text style={styles.detailLabel}>Date:</Text>
              <Text style={styles.detailValue}>{form.date || '07 September 2026'}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🕒</Text>
              <Text style={styles.detailLabel}>Time:</Text>
              <Text style={styles.detailValue}>{form.time || '10:00 - 11:00'}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>📍</Text>
              <Text style={styles.detailLabel}>Location:</Text>
              <Text style={styles.detailValue}>135 Park Lane, Randburg 1234</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🐾</Text>
              <Text style={styles.detailLabel}>Service:</Text>
              <Text style={styles.detailValue}>Initial Assessment (60 minutes)</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🏷️</Text>
              <Text style={styles.detailLabel}>Fee:</Text>
              <Text style={styles.detailValue}>R350</Text>
            </View>
          </View>

          {/* Dog Graphic & Callout */}
          <View style={styles.graphicRow}>
            <Text style={styles.seeYouSoonText}>See you soon!</Text>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=60' }}
              style={styles.dogConfirmImage}
            />
          </View>

          {/* Navigation Action Buttons */}
          {/* These buttons return to the course list or the home screen. */}
          <Pressable style={styles.actionButton} onPress={() => router.push('/courses')}>
            <Text style={styles.actionButtonText}>EXPLORE COURSES</Text>
          </Pressable>

          <Pressable style={[styles.actionButton, styles.secondaryButton]} onPress={() => router.push('/')}>
            <Text style={styles.actionButtonText}>BACK TO HOME</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }

  // --- 2. INITIAL BOOKING FORM VIEW ---
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ScreenHeader
        title="Book a Training Assessment"
        subtitle="Take the first step towards a happier, better-behaved dog. Book an assessment with one of our certified trainers."
      />

      {/* Assessment Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderIcon}>🐾</Text>
          <Text style={styles.cardHeaderTitle}>Assessment Information</Text>
        </View>
        <Text style={styles.infoDescription}>
          Our initial assessment helps us understand your dog&apos;s needs and create a personalized training plan.
        </Text>

        <View style={styles.detailsRow}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60' }}
            style={styles.dogAvatar}
          />
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <View style={styles.greenDot} />
              <Text style={styles.bulletText}>Behavior and posture evaluation</Text>
            </View>
            <View style={styles.bulletItem}>
              <View style={styles.greenDot} />
              <Text style={styles.bulletText}>Suitable for dogs of all ages and breeds</Text>
            </View>
            <View style={styles.bulletItem}>
              <View style={styles.greenDot} />
              <Text style={styles.bulletText}>One-on-one assessment with certified trainer</Text>
            </View>
            <View style={styles.bulletItem}>
              <View style={styles.greenDot} />
              <Text style={styles.bulletText}>Discussion of your goals and summary</Text>
            </View>
          </View>
        </View>

        <View style={styles.priceBanner}>
          <Text style={styles.priceAmount}>R350</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.priceLabel}>ASSESSMENT FEE</Text>
            <Text style={styles.priceSubtext}>Includes a 60-minute assessment session and personalized plan.</Text>
          </View>
        </View>

        <View style={styles.rescheduleBox}>
          <Text style={styles.rescheduleTitle}>NEED TO RESCHEDULE?</Text>
          <Text style={styles.rescheduleText}>
            If you need to change your booking, please contact us at least 24hrs in advance. We&apos;re happy to help!
          </Text>
        </View>
      </View>

      {/* Booking Form */}
      <View style={styles.formCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderIcon}>📅</Text>
          <Text style={styles.cardHeaderTitle}>Book Your Assessment</Text>
        </View>
        <Text style={styles.infoDescription}>Fill in your details below and we&apos;ll get in touch to confirm your booking.</Text>

        <View style={styles.fieldRow}>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Full Name*</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name and surname..."
              placeholderTextColor="#888"
              value={form.fullName}
              onChangeText={(val) => handleChange('fullName', val)}
            />
          </View>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Email Address*</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(val) => handleChange('email', val)}
            />
          </View>
        </View>

        <View style={styles.fieldRow}>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Pet&apos;s Name*</Text>
            <TextInput
              style={styles.input}
              placeholder="Dog's Name"
              placeholderTextColor="#888"
              value={form.petName}
              onChangeText={(val) => handleChange('petName', val)}
            />
          </View>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Phone Number*</Text>
            <TextInput
              style={styles.input}
              placeholder="082 345 6789"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={(val) => handleChange('phone', val)}
            />
          </View>
        </View>

        <View style={styles.fieldRow}>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Breed*</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Labrador"
              placeholderTextColor="#888"
              value={form.breed}
              onChangeText={(val) => handleChange('breed', val)}
            />
          </View>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Age*</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 2 years"
              placeholderTextColor="#888"
              value={form.age}
              onChangeText={(val) => handleChange('age', val)}
            />
          </View>
        </View>

        <View style={styles.fieldFull}>
          <Text style={styles.label}>Training Goals / Concerns</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tell us a little bit about what you would like to work on..."
            placeholderTextColor="#888"
            multiline
            numberOfLines={3}
            value={form.goals}
            onChangeText={(val) => handleChange('goals', val)}
          />
        </View>

        <View style={styles.fieldRow}>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Preferred Date*</Text>
            <TextInput
              style={styles.input}
              placeholder="07 September 2026"
              placeholderTextColor="#888"
              value={form.date}
              onChangeText={(val) => handleChange('date', val)}
            />
          </View>
          <View style={styles.fieldFlex}>
            <Text style={styles.label}>Preferred Time*</Text>
            <TextInput
              style={styles.input}
              placeholder="10:00 - 11:00"
              placeholderTextColor="#888"
              value={form.time}
              onChangeText={(val) => handleChange('time', val)}
            />
          </View>
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>BOOK ASSESSMENT</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EBE0' },
  content: { padding: 16 },

  // Base Form & Info Cards
  infoCard: { backgroundColor: '#EBCBBE', borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#D4B0A3' },
  formCard: { backgroundColor: '#EBCBBE', borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#D4B0A3' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  cardHeaderIcon: { fontSize: 18, marginRight: 6 },
  cardHeaderTitle: { fontSize: 18, fontWeight: 'bold', color: '#2D3B2A' },
  infoDescription: { fontSize: 12, color: '#444', textAlign: 'center', marginBottom: 16 },

  // Assessment Card Details
  detailsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  dogAvatar: { width: 70, height: 70, borderRadius: 35, marginRight: 12 },
  bulletList: { flex: 1, gap: 6 },
  bulletItem: { flexDirection: 'row', alignItems: 'center' },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2D3B2A', marginRight: 6 },
  bulletText: { fontSize: 11, color: '#2D3B2A', flex: 1 },

  priceBanner: { backgroundColor: '#1B8B9B', borderRadius: 10, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  priceAmount: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginRight: 12 },
  priceLabel: { fontSize: 10, fontWeight: 'bold', color: '#FFF' },
  priceSubtext: { fontSize: 10, color: '#E0F7FA' },

  rescheduleBox: { backgroundColor: '#8C9A3E', borderRadius: 10, padding: 10 },
  rescheduleTitle: { fontSize: 10, fontWeight: 'bold', color: '#FFF', textAlign: 'center' },
  rescheduleText: { fontSize: 10, color: '#F1F8E9', textAlign: 'center', marginTop: 2 },

  // Form Field Styles
  fieldRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  fieldFlex: { flex: 1 },
  fieldFull: { marginBottom: 12 },
  label: { fontSize: 11, fontWeight: 'bold', color: '#2D3B2A', marginBottom: 4 },
  input: { backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8, fontSize: 12, color: '#333', borderWidth: 1, borderColor: '#CCC' },
  textArea: { height: 60, textAlignVertical: 'top' },

  submitButton: { backgroundColor: '#E25B2D', borderRadius: 8, paddingVertical: 12, alignItems: 'center', marginTop: 8 },
  submitButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },

  // Confirmation View Styles
  confirmationContainer: { alignItems: 'center', paddingVertical: 10 },
  confirmLogo: { width: 70, height: 70, borderRadius: 35, marginBottom: 12 },
  confirmTitle: { fontSize: 22, fontWeight: 'bold', color: '#2D3B2A', marginBottom: 4 },
  confirmSubtitle: { fontSize: 13, color: '#555', textAlign: 'center', marginBottom: 16, lineHeight: 18 },
  
  detailsCard: { backgroundColor: '#EBCBBE', borderRadius: 16, padding: 16, width: '100%', marginBottom: 16, borderWidth: 1, borderColor: '#D4B0A3' },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  detailIcon: { fontSize: 14, width: 24 },
  detailLabel: { fontSize: 12, fontWeight: 'bold', color: '#2D3B2A', width: 70 },
  detailValue: { fontSize: 12, color: '#333', flex: 1 },

  graphicRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 8 },
  seeYouSoonText: { fontSize: 18, fontStyle: 'italic', color: '#2D3B2A', fontWeight: 'bold', marginRight: 10 },
  dogConfirmImage: { width: 120, height: 120, borderRadius: 60 },

  actionButton: { backgroundColor: '#E25B2D', borderRadius: 8, paddingVertical: 12, width: '100%', alignItems: 'center', marginBottom: 10 },
  secondaryButton: { backgroundColor: '#E25B2D' },
  actionButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
});