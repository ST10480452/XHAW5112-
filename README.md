# Pawsitive Academy

A simple Expo app for dog-training courses, articles, fee estimates, and assessment bookings.

## Requirements

- Node.js 22.13 or newer
- npm
- Expo Go for a phone preview, or an Android/iOS simulator

## Install and start

1. Open this folder in a terminal.
2. Install the project packages:

   ```bash
   npm install
   ```

3. Start Expo:

   ```bash
   npm start
   ```

4. Press `w` for web, `a` for Android, or `i` for the iOS simulator. You can also scan the QR code with Expo Go.

## Useful checks

```bash
npm run lint
npx tsc --noEmit
```

## Project structure

- `src/app/` — screens and Expo Router routes
- `src/app/course-details/` and `src/app/blog-details/` — detail screens that read an item `id` from the URL
- `src/components/` — shared headers, cards, and UI pieces
- `src/data/` — course and article content
- `src/constants/` and `src/hooks/` — shared theme values and hooks
- `assets/` — app images and icons

Course and article details work with both `/course-details/1` and `/course-details?id=1` (and the matching blog routes).
