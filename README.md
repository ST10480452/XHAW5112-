# Pawsitive Pet Academy — Mobile Application

A responsive mobile application built with **React Native** and **Expo Router** for Pawsitive Pet Academy, offering pet owners in South Africa an easy way to explore courses, view trainer profiles, calculate costs, and get in touch.

---

##  Tech Stack & Key Libraries

* **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
* **Routing:** Expo Router (File-based routing)
* **Language:** TypeScript
* **Safe Area Handling:** `react-native-safe-area-context`
* **Layout Grid System:** 8pt grid layout system for consistent spacing across viewports

---

##  Design System & Visual Foundation

* **Color Palette:**
  * **Deep Forest:** Primary brand accents and headers
  * **Warm Cream:** Soft background containers
  * **Sage:** Secondary buttons and highlights
  * **Burnt Orange:** Calls-to-Action (CTAs) and pricing badges
* **Low-Fidelity Wireframing:** Built using clear content hierarchy, structured cards, and image placeholders (grey boxes with diagonal strokes) to focus on layout structure and user flow.
* **Localized Context:** Tailored specifically for the South African market, featuring prices in **Rand (ZAR)**.

---

##  Component & Project Architecture

The application is structured modularly to maximize code reusability, maintainability, and clean separation of concerns.

```text
├── app/
│   ├── _layout.tsx      # Root layout provider & safe area context
│   ├── index.tsx        # Page 1: Home Screen
│   ├── about.tsx        # Page 2: About Us Screen
│   ├── classes.tsx      # Page 3: Course Catalog Screen
│   └── contact.tsx      # Page 4: Contact & Inquiry Screen
└── components/
    ├── ScreenHeader.tsx # Reusable header banner
    └── InfoCard.tsx     # Reusable container for lists & cards 


##  Step-by-Step Guide: Running the Application

Follow these steps from start to finish to run the app on your machine.

---

### Phase 1: Prerequisites & Initial Setup (Required for Everyone)

1. **Install Node.js:**
   * Download and install the LTS version of [Node.js](https://nodejs.org/) on your computer.

2. **Open Terminal / Command Prompt:**
   * Navigate to the root folder of this project:
     ```bash
     cd path/to/pawsitive-pet-academy
     ```

3. **Install Dependencies:**
   * Run the following command to download all required packages (React Native, Expo, and navigation libraries):
     ```bash
     npm install
     ```

4. **Start the Expo Development Server:**
   * Run the start command:
     ```bash
     npx expo start
     ```
   * Once started, a large QR code and a control menu will appear in your terminal.

---

### Phase 2: Choose Your Running Method

Choose **ONE** of the options below depending on your setup:

---

#### OPTION A: Running on a Physical Phone (NO Android Studio Required — Recommended)

This is the fastest method and requires zero software installation on your computer beyond Node.js.

1. **Install Expo Go on your phone:**
   * **Android:** Download [Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent).
   * **iPhone:** Download [Expo Go on the App Store](https://apps.apple.com/app/expo-go/id982107779).

2. **Connect to the same Wi-Fi:**
   * Make sure your phone and computer are connected to the **same Wi-Fi network**.

3. **Launch the App:**
   * **Android:** Open the Expo Go app, tap **Scan QR Code**, and scan the QR code printed in your terminal.
   * **iPhone:** Open your iPhone's built-in **Camera app**, scan the QR code printed in your terminal, and tap the notification banner to open in Expo Go.

---

#### OPTION B: Running WITH Android Studio (Android Emulator)

Use this method if you have Android Studio installed and want to test on a simulated Android device.

1. **Launch Android Studio:**
   * Open Android Studio on your computer.

2. **Start a Virtual Device (Emulator):**
   * Open the **Device Manager** (or AVD Manager).
   * Select a virtual phone (e.g., Pixel 6) and click the **Play ▶** button to boot up the emulator.
   * Wait until the virtual phone fully boots up to its home screen.

3. **Launch the App in the Emulator:**
   * Go back to your terminal where `npx expo start` is running.
   * Press the `a` key on your keyboard.
   * Expo will automatically build the app, install Expo Go on the emulator, and open the application.

---

#### OPTION C: Running on macOS (iOS Simulator)

1. **Open Xcode:**
   * Ensure Xcode is installed from the Mac App Store.

2. **Launch Simulator:**
   * In your terminal where `npx expo start` is running, press the `i` key on your keyboard.
   * Expo will automatically launch the native iOS Simulator and open the project.

---

###  Troubleshooting Quick Tips

* **Network Connection Error on Phone?** If Expo Go fails to connect, start the server in tunnel mode by running:
  ```bash
  npx expo start --tunnel