# Travel Buddy

Multi-screen React Native app dengan React Navigation.

## Features
✅ Must-Have Features (Wajib)
- NavigationContainer — App wrapper (required)
- Bottom Tab Navigator — 3 tabs minimum: Home, Search, Favorites
- Stack Navigator di Home Tab — HomeScreen (list) + DetailScreen (detail view)
- FlatList + Destinations Data — Minimal 8 destinations dengan: id, name, location, price, image
- Navigation.navigate() — Pass destination object sebagai route params ke DetailScreen
- Route Params Display — DetailScreen extract dan display data dari route.params
- Tab Icons — Gunakan @expo/vector-icons (Ionicons) — minimum home, search, heart icon
- Responsive Layout — Jalan smooth di berbagai ukuran HP (test: minimal iPhone SE + Android phone)
- ScrollView / Safe Area — Tidak ada content yang tercover notch atau navigation bar
- GitHub Repository — Push ke GitHub dengan README.md + screenshot
⭐ Nice-to-Have Features (Bonus +5%)
- Add to Favorites button di DetailScreen (simpan ke state atau AsyncStorage)
- Search functionality dengan filter destinations by name
- Display favorites count di tab badge
- Custom styling — theme color consistent, typography hierarchy jelas
- Nested navigation — SearchTab juga punya Stack (Search → SearchResult)

## Tech Stack
- React Native + Expo
- React Navigation 6
- StyleSheet
- @expo/vector-icons

## How to Run
1. npm install
2. npx expo start
3. Scan QR code di Expo Go

## Screenshots
<img width="574" height="1280" alt="image" src="https://github.com/user-attachments/assets/927327e1-807b-41cd-b74c-a295d0e5b0dc" />

<img width="574" height="1280" alt="image" src="https://github.com/user-attachments/assets/ec425571-0570-4e94-a9d8-8b897fdced4f" />

<img width="574" height="1280" alt="image" src="https://github.com/user-attachments/assets/f84eb211-a4fc-4e00-bfba-52f6e3a16150" />

<img width="720" height="1604" alt="image" src="https://github.com/user-attachments/assets/684af80f-cfaa-4c5b-8469-9c147c03e13e" />



## Author
[Crisdayanti Laggita Br Siagian]
