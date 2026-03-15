<p align="center">
  <img src="./assets/images/mobile app mockup x5.png">
</p>
<p align="center">
  <img src="./assets/videos/demo/1. intro.gif" width=30%>
  <img src="./assets/videos/demo/2. signin.gif" width=30%>
  <img src="./assets/videos/demo/5. lock.gif" width=30%>
</p>
<p align="center">
  <img src="./assets/videos/demo/3. home.gif" width=30%>
  <img src="./assets/videos/demo/4. account.gif" width=30%>
  <img src="./assets/videos/demo/6. crypto.gif" width=30%>
</p>

# Fintech App

> A cyberpunk-inspired fintech and crypto mobile app built with Expo + React Native, focused on immersive UI, secure auth flows, and modular architecture.

[![Last Commit](https://img.shields.io/github/last-commit/AlanCasal/fintech?style=for-the-badge&logo=github)](https://github.com/AlanCasal/fintech/commits/main)

### Core Stack

[![TypeScript](https://img.shields.io/badge/typescript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/expo-52-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/react_native-0.76-20232A?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![React](https://img.shields.io/badge/react-18.3-149ECA?style=for-the-badge&logo=react)](https://react.dev/)
[![npm](https://img.shields.io/badge/package_manager-npm-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/)

### Key Libraries

[![Expo Router](https://img.shields.io/badge/expo_router-4.0-111111?style=for-the-badge)](https://docs.expo.dev/router/introduction/)
[![Clerk Expo](https://img.shields.io/badge/clerk_expo-2.6.6-6C47FF?style=for-the-badge)](https://clerk.com/docs/quickstarts/expo)
[![React Query](https://img.shields.io/badge/React_Query-v5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.2-4E342E?style=for-the-badge)](https://zustand.docs.pmnd.rs/)
[![MMKV](https://img.shields.io/badge/MMKV-3.2-16A34A?style=for-the-badge)](https://github.com/mrousavy/react-native-mmkv)
[![Reanimated](https://img.shields.io/badge/Reanimated-3.16-6C5CE7?style=for-the-badge)](https://docs.swmansion.com/react-native-reanimated/)
[![Victory Native](https://img.shields.io/badge/Victory_Native-41.14-0EA5E9?style=for-the-badge)](https://commerce.nearform.com/open-source/victory-native)

## Why This Project Stands Out

- 🎨 Visual direction inspired by cyberpunk aesthetics with custom glitch, neon, and motion components.
- 🔐 Real-world mobile auth flow with Clerk phone sign-in/sign-up and OTP verification.
- 🧭 Expo Router architecture with grouped routes for authenticated tabs, modals, and dynamic detail pages.
- 📈 Crypto market experience with list + detail flows and chart rendering via Victory Native.
- 💾 Offline-friendly local persistence with Zustand + MMKV for wallet-style transaction data.

## Current Features

- 🎬 Intro experience with looping video, animated text, and branded cyber button system.
- 📱 Phone-based authentication (sign up, sign in, OTP verification) powered by Clerk.
- 🧩 Authenticated tab shell with `Home` and `Crypto` fully wired.
- 🏠 Home dashboard with balance, actions, transactions table, and sortable widget area.
- 💹 Crypto listings table and crypto detail page with chart + overview tab.
- 👤 Account modal with profile avatar upload, profile name editing, sign-out, and dynamic app icon switching.
- 🔒 Security lock modal with numpad input, haptics, and biometric authentication.

## TODO: In Progress / Next

- 🚧 Implement `Markets`, `Trade`, and `Wallets` tab screens (currently placeholders).
- 🧪 Complete missing crypto detail tabs (`Info`, `Trading Data`, `Square` placeholders).
- 🌐 Replace mocked API-route datasets with live CoinMarketCap/CoinPaprika responses.
- ✅ Add test coverage and CI workflow automation.
- 🛠️ Improve stateful interactions and error handling coverage across flows.

## Architecture Snapshot

- Root layout wraps app with `ClerkProvider`, `QueryClientProvider`, `UserInactivityProvider`, and `GestureHandlerRootView`.
- Route protection uses auth state + route segment checks, redirecting users between public intro/auth routes and authenticated tabs.
- API routes are colocated under `src/app/api` and exposed as:
  - `/api/listings`
  - `/api/info`
  - `/api/tickers`
- Inactivity guard monitors app state and routes to lock modal after background/inactive timeout.
- Balance/transactions state is persisted with Zustand + MMKV via custom storage adapter.

## Tech Stack

### Languages & Runtime

- TypeScript
- JavaScript
- React 18
- React Native 0.76
- Expo SDK 52
- npm

### Core Packages

- `expo-router`
- `@clerk/clerk-expo`
- `@tanstack/react-query`
- `zustand`
- `react-native-mmkv`
- `react-native-reanimated`
- `react-native-gesture-handler`
- `victory-native`
- `expo-local-authentication`
- `expo-dynamic-app-icon`

## Quick Start

Pre-requisites:

- Node.js 18+
- Android Studio + emulator (Android)
- Xcode + simulator (iOS)

Install and run:

```bash
npm install
npm run start
```

Open targets:

```bash
npm run ios
npm run android
npm run web
```

Run tests:

```bash
npm test
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
COINMARKET_API_KEY=
```

## Data Source Note

Crypto endpoints currently return local mocked datasets from API routes:

- `src/app/api/listings+api.ts`
- `src/app/api/info+api.ts`
- `src/app/api/tickers+api.ts`

Live fetch implementations for CoinMarketCap/CoinPaprika are present in those files but commented out. This keeps the app runnable without paid API limits while preserving the production-fetch structure.

## Credits

- Inspired by product patterns from [Revolut](https://www.revolut.com/) and [Binance](https://www.binance.com/en).
- Visual style inspired by [Cyberpunk 2077](https://www.cyberpunk.net/us/en/cyberpunk-2077).
- Thanks to [Galaxies.dev](https://github.com/Galaxies-dev) for the original [tutorial](https://www.youtube.com/watch?v=iDZBeIgcixk).
