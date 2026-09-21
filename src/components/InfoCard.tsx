import { StyleSheet, Text, View } from 'react-native';

interface CardProps {
  icon?: string;
  title: string;
  body: string;
  width?: `${number}%` | number;
}

export function InfoCard({ icon, title, body, width = '100%' }: CardProps) {
  return (
    <View style={[styles.card, { width }]}>
      {icon && (
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#E5C1B8', borderRadius: 12, padding: 12, alignItems: 'center' },
  iconCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  iconText: { fontSize: 14 },
  title: { fontSize: 12, fontWeight: '800', color: '#1C1C1C', textAlign: 'center', marginBottom: 4 },
  body: { fontSize: 10, lineHeight: 14, color: '#444444', textAlign: 'center' },
});