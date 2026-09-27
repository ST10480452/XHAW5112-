import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

// Keep Expo's native splash screen visible until the overlay is ready.
SplashScreen.preventAutoHideAsync().catch((error) => {
  console.warn('Could not hold the native splash screen:', error);
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // File-based routes are placed in one stack with the app's custom header UI.
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
        <Stack.Screen name="contact" />
      </Stack>
    </ThemeProvider>
  );
}