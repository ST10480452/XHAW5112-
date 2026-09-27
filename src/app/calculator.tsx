import ScreenHeader from '@/components/ScreenHeader';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// 1. Available Courses with ZAR Pricing
const COURSES = [
  { id: '1', name: 'Canine Obedience Training (6 Months)', price: 1500 },
  { id: '2', name: 'Pet Grooming (6 Months)', price: 1500 },
  { id: '3', name: 'Animal Behaviour (6 Months)', price: 1500 },
  { id: '4', name: 'Pet Business Management (6 Months)', price: 1500 },
  { id: '5', name: 'Puppy Care (6 Weeks)', price: 750 },
  { id: '6', name: 'Pet First Aid (6 Weeks)', price: 750 },
  { id: '7', name: 'Basic Dog Walking (6 Weeks)', price: 450 },
];

// 2. FAQ Accordion Items
const FAQS = [
  {
    q: 'Do you offer modular payment plans or monthly installments?',
    a: 'Yes, for our premier multi-week programs, you can spread the tuition over two equal payments. Speak with our registrar at enrollment to configure your plan.',
  },
  {
    q: 'Are there multi-dog or group registration discounts available?',
    a: 'We offer a 10% discount on total fees when registering two or more dogs simultaneously.',
  },
  {
    q: 'What is Pawsitive Academy’s refund or schedule transfer policy?',
    a: 'Cancellations made 48 hours prior to start receive a full refund. Schedule transfers can be made anytime subject to availability.',
  },
];

export default function CalculatorScreen() {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '6', '7']); // Default pre-selected
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Toggle one course without mutating state.
  const toggleCourse = (id: string) => {
    setSelectedIds((ids) => ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]);
  };

  // Set membership avoids repeated linear scans while rendering the list.
  const selectedIdSet = new Set(selectedIds);
  const selectedCourses = COURSES.filter((course) => selectedIdSet.has(course.id));
  const subtotal = selectedCourses.reduce((sum, item) => sum + item.price, 0);
  const vat = subtotal * 0.15; // 15% VAT
  const total = subtotal + vat;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <ScreenHeader
        title="Course Fee Calculator"
        subtitle="Estimate your training investment. Select your core courses and custom add-ons to preview your complete program package with VAT details."
      />

      {/* Calculator Section */}
      <View style={styles.calcGrid}>
        {/* Left Column: Course Selector */}
        <View style={styles.card}>
          <Text style={styles.cardHeaderTitle}>Select Your Courses</Text>

          {COURSES.map((course) => {
            const isSelected = selectedIdSet.has(course.id);
            return (
              <Pressable
                key={course.id}
                style={[styles.checkboxRow, isSelected && styles.checkboxRowActive]}
                onPress={() => toggleCourse(course.id)}
              >
                <View style={[styles.checkbox, isSelected && styles.checkboxChecked]}>
                  {isSelected && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.coursePrice}>R{course.price.toLocaleString()}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Right Column: Investment Summary */}
        <View style={styles.card}>
          <Text style={styles.cardHeaderTitle}>Investment Summary</Text>
          <Text style={styles.branchSubtext}>Pretoria Branch Packages</Text>

          <View style={styles.summaryList}>
            {selectedCourses.length === 0 ? (
              <Text style={styles.emptyText}>No courses selected.</Text>
            ) : (
              selectedCourses.map((c) => (
                <View key={c.id} style={styles.summaryItem}>
                  <Text style={styles.summaryItemName} numberOfLines={1}>
                    {c.name.split(' (')[0]}
                  </Text>
                  <Text style={styles.summaryItemPrice}>R{c.price.toFixed(2)}</Text>
                </View>
              ))
            )}
          </View>

          <View style={styles.divider} />

          {/* Math Breakdown */}
          <View style={styles.mathRow}>
            <Text style={styles.mathLabel}>Subtotal</Text>
            <Text style={styles.mathValue}>R{subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.mathRow}>
            <Text style={styles.mathLabel}>VAT (15%)</Text>
            <Text style={styles.mathValue}>R{vat.toFixed(2)}</Text>
          </View>

          <View style={[styles.mathRow, { marginTop: 6 }]}>
            <Text style={styles.totalLabel}>Total Due</Text>
            <Text style={styles.totalAmount}>R{total.toFixed(2)}</Text>
          </View>

          {/* Action CTAs */}
          <Pressable
            style={styles.primaryBtn}
            onPress={() => {
              if (selectedIds.length === 0) {
                Alert.alert('Select a Course', 'Please select at least one course to proceed.');
                return;
              }
              router.push('/book-assessment');
            }}
          >
            <Text style={styles.btnText}>PROCEED TO ENROLLMENT</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryBtn}
            onPress={() => Alert.alert('Quote Requested', 'A custom quote has been sent to your email.')}
          >
            <Text style={styles.btnText}>Request Custom Quote</Text>
          </Pressable>
        </View>
      </View>

      {/* FAQ Section */}
      <View style={styles.faqSection}>
        <Text style={styles.faqTitle}>Calculator & Tuition FAQ</Text>
        <Text style={styles.faqSub}>
          Quick answers about payment structures, Pretoria package benefits, and refunds.
        </Text>

        {FAQS.map((faq, index) => {
          const isOpen = expandedFaq === index;
          return (
            <View key={index} style={styles.faqCard}>
              <Pressable
                style={styles.faqHeader}
                onPress={() => setExpandedFaq(isOpen ? null : index)}
              >
                <Text style={styles.faqQuestion}>{faq.q}</Text>
                <Text style={styles.faqArrow}>{isOpen ? '▲' : '▼'}</Text>
              </Pressable>
              {isOpen && <Text style={styles.faqAnswer}>{faq.a}</Text>}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EBE0' },
  content: { padding: 16 },

  calcGrid: { gap: 16, marginBottom: 24 },
  card: {
    backgroundColor: '#EBCBBE',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#D4B0A3',
  },
  cardHeaderTitle: { fontSize: 18, fontWeight: 'bold', color: '#2D3B2A', marginBottom: 2 },
  branchSubtext: { fontSize: 10, color: '#666', marginBottom: 12 },

  // Checkbox styles
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  checkboxRowActive: { borderColor: '#E25B2D' },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: { backgroundColor: '#2D3B2A', borderColor: '#2D3B2A' },
  checkmark: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  courseName: { flex: 1, fontSize: 11, color: '#333', fontWeight: '500' },
  coursePrice: { fontSize: 11, fontWeight: 'bold', color: '#2D3B2A' },

  // Summary styles
  summaryList: { minHeight: 80, justifyContent: 'center' },
  emptyText: { fontSize: 12, color: '#777', fontStyle: 'italic', textAlign: 'center' },
  summaryItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  summaryItemName: { fontSize: 12, color: '#444', flex: 1 },
  summaryItemPrice: { fontSize: 12, fontWeight: 'bold', color: '#111' },

  divider: { height: 1, backgroundColor: '#D4B0A3', marginVertical: 10 },
  mathRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  mathLabel: { fontSize: 11, color: '#555' },
  mathValue: { fontSize: 11, fontWeight: 'bold', color: '#333' },
  totalLabel: { fontSize: 14, fontWeight: 'bold', color: '#2D3B2A' },
  totalAmount: { fontSize: 16, fontWeight: 'bold', color: '#E25B2D' },

  primaryBtn: {
    backgroundColor: '#E25B2D',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  secondaryBtn: {
    backgroundColor: '#E25B2D',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  btnText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },

  // FAQ Styles
  faqSection: { marginTop: 8, marginBottom: 20 },
  faqTitle: { fontSize: 18, fontWeight: 'bold', color: '#2D3B2A', marginBottom: 2 },
  faqSub: { fontSize: 11, color: '#555', marginBottom: 12 },
  faqCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  faqHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  faqQuestion: { fontSize: 12, fontWeight: 'bold', color: '#2D3B2A', flex: 1, paddingRight: 8 },
  faqArrow: { fontSize: 10, color: '#888' },
  faqAnswer: { fontSize: 11, color: '#555', marginTop: 8, lineHeight: 16 },
});