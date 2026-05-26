// App.js — Entry point aplikasi Travel Buddy (Eksklusif Grid & Clean Layout - Full Features)
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  TextInput, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  ScrollView,
  Dimensions
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const columnWidth = (width - 52) / 2;

// ======= Inisialisasi Navigator =======
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ======= Data Destinasi =======
const destinationsData = [
  { 
    id: '1', 
    name: 'Raja Ampat', 
    location: 'Papua Barat', 
    price: 'Rp 4.500.000', 
    rating: '4.9',
    category: 'Alam',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=500',
    description: 'Surga bawah laut tersembunyi dengan gugusan pulau karang yang ikonik dan keanekaragaman hayati laut tertinggi di dunia.'
  },
  { 
    id: '2', 
    name: 'Bali', 
    location: 'Nusa Dua, Bali', 
    price: 'Rp 2.800.000', 
    rating: '4.8',
    category: 'Budaya',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=500',
    description: 'Nikmati keindahan pantai pasir putih, resort mewah, pertunjukan budaya yang magis, serta sunset terbaik di Pulau Dewata.'
  },
  { 
    id: '3', 
    name: 'Candi Borobudur', 
    location: 'Magelang, Jawa Tengah', 
    price: 'Rp 850.000', 
    rating: '4.7',
    category: 'Budaya',
    image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=500',
    description: 'Monumen Buddha terbesar di dunia peninggalan dinasti Syailendra. Tempat terbaik menyaksikan keindahan matahari terbit.'
  },
  { 
    id: '4', 
    name: 'Gunung Bromo', 
    location: 'Probolinggo, Jawa Timur', 
    price: 'Rp 1.200.000', 
    rating: '4.7',
    category: 'Alam',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=500',
    description: 'Lautan pasir yang luas, kawah aktif yang megah, serta pemandangan golden sunrise yang memanjakan mata dari penanjakan.'
  },
  { 
    id: '5', 
    name: 'Labuan Bajo', 
    location: 'Nusa Tenggara Timur', 
    price: 'Rp 3.900.000', 
    rating: '4.9',
    category: 'Petualangan',
    image: 'https://travelgo.id/wp-content/uploads/2025/08/liburan-murah-labuan-bajo.jpg',
    description: 'Gerbang menuju Taman Nasional Komodo. Jelajahi Pulau Padar, Pantai Pink, dan berenang bersama Pari Manta.'
  },
  { 
    id: '6', 
    name: 'Danau Toba', 
    location: 'Parapat, Sumatera Utara', 
    price: 'Rp 1.500.000', 
    rating: '4.7',
    category: 'Alam',
    image: 'https://regalsprings.co.id/wp-content/uploads/2023/05/Danau-Toba.png', 
    description: 'Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya, menawarkan udara sejuk dan panorama perbukitan hijau.'
  },
  { 
    id: '7', 
    name: 'Wakatobi', 
    location: 'Sulawesi Tenggara', 
    price: 'Rp 3.100.000', 
    rating: '4.6',
    category: 'Petualangan',
    image: 'https://www.wakatobi.com/wp-content/uploads/2024/01/2023_wakatobi_aerial.webp',
    description: 'Destinasi diving kelas dunia dengan hamparan terumbu karang yang sehat dan air laut yang jernih seperti kristal.'
  },
  { 
    id: '8', 
    name: 'Tanah Toraja', 
    location: 'Sulawesi Selatan', 
    price: 'Rp 1.800.000', 
    rating: '4.5',
    category: 'Budaya',
    image: 'https://bnp.jambiprov.go.id/wp-content/uploads/2023/02/tana-toraja-1.png',
    description: 'Kawasan budaya unik dengan rumah adat Tongkonan, upacara pemakaman Rambu Solo, dan makam tebing batu purba.'
  },
];

const categories = ['Semua', 'Alam', 'Budaya', 'Petualangan'];

// ======= Screen Components =======

function HomeScreen({ navigation }) {
  const renderGridItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.gridCard}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('Detail', { destination: item })}
    >
      <Image source={{ uri: item.image }} style={styles.gridCardImage} />
      <View style={styles.gridCardContent}>
        <Text style={styles.gridCardName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.gridCardLocation} numberOfLines={1}>📍 {item.location}</Text>
        <View style={styles.gridCardFooter}>
          <Text style={styles.gridCardPrice}>{item.price}</Text>
          <View style={styles.gridRatingRow}>
            <Ionicons name="star" size={11} color="#f1c40f" />
            <Text style={styles.gridRatingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.mainCleanHeader}>
          <Text style={styles.cleanWelcome}>Selamat Datang!</Text>
          <Text style={styles.cleanTitle}>Destinations</Text>
        </View>
        
        <FlatList
          data={destinationsData}
          renderItem={renderGridItem}
          keyExtractor={item => item.id}
          numColumns={2} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridPadding}
        />
      </View>
    </SafeAreaView>
  );
}

function DetailScreen({ route, navigation, favorites, toggleFavorite }) {
  if (!route.params || !route.params.destination) {
    return (
      <View style={[styles.container, styles.center]}><Text>Data tidak ditemukan</Text></View>
    );
  }

  const { destination } = route.params;
  const isFav = favorites.some(fav => fav.id === destination.id);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.cleanImageContainer}>
          <Image source={{ uri: destination.image }} style={styles.cleanHeroImage} />
          
          <TouchableOpacity 
            style={styles.cleanCircleBack}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#2d3436" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cleanCircleHeart}
            onPress={() => toggleFavorite(destination)}
          >
            <Ionicons name={isFav ? "heart" : "heart-outline"} size={22} color={isFav ? "#e74c3c" : "#2d3436"} />
          </TouchableOpacity>
        </View>

        <View style={styles.cleanDetailWrapper}>
          <View style={styles.cleanDetailMetaRow}>
            <Text style={styles.cleanDetailCategory}>{destination.category}</Text>
            <View style={styles.cleanDetailRatingBox}>
              <Ionicons name="star" size={14} color="#f1c40f" style={{ marginRight: 4 }} />
              <Text style={styles.cleanDetailRatingText}>{destination.rating}</Text>
            </View>
          </View>

          <Text style={styles.cleanDetailName}>{destination.name}</Text>
          <Text style={styles.cleanDetailLocation}>📍 {destination.location} • {destination.category} Tour</Text>
          
          <View style={styles.cleanDivider} />

          <Text style={styles.cleanSectionTitle}>Deskripsi Perjalanan</Text>
          <Text style={styles.cleanDescriptionText}>{destination.description}</Text>

          <View style={styles.cleanDivider} />

          <View style={styles.fixedBottomBar}>
            <View>
              <Text style={styles.fixedPriceLabel}>Biaya Estimasi</Text>
              <Text style={styles.fixedPriceAmount}>{destination.price}</Text>
            </View>
            <TouchableOpacity style={styles.cleanActionBtn} activeOpacity={0.8}>
              <Text style={styles.cleanActionBtnText}>Booking Tiket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SearchScreen({ navigation, favorites, toggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [filteredData, setFilteredData] = useState(destinationsData);

  const filterData = (query, cat) => {
    let baseData = destinationsData;
    if (cat !== 'Semua') {
      baseData = baseData.filter(item => item.category === cat);
    }
    if (query.trim() !== '') {
      baseData = baseData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredData(baseData);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    filterData(text, activeCategory);
  };

  const handleCategoryPress = (cat) => {
    setActiveCategory(cat);
    filterData(searchQuery, cat);
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.minimalSearchHeader}>
          <Text style={styles.cleanTitle}>Cari Lokasi</Text>
          <View style={styles.minimalInputBox}>
            <Ionicons name="search-outline" size={18} color="#888" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Ketik kota atau nama destinasi..."
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.minimalTextInput}
            />
          </View>
        </View>

        <View style={styles.minimalTabWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => handleCategoryPress(cat)}
                style={[
                  styles.minimalTabItem,
                  activeCategory === cat && styles.minimalTabItemActive
                ]}
              >
                <Text style={[
                  styles.minimalTabText,
                  activeCategory === cat && styles.minimalTabTextActive
                ]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.rowListCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('SearchDetail', { destination: item })}
            >
              <Image source={{ uri: item.image }} style={styles.rowCardImage} />
              <View style={styles.rowCardInfo}>
                <Text style={styles.rowCardName}>{item.name}</Text>
                <Text style={styles.rowCardLocation}>📍 {item.location}</Text>
                <Text style={styles.rowCardPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity 
                style={styles.rowHeartBtn}
                onPress={() => toggleFavorite(item)}
              >
                <Ionicons 
                  name={isFavorite(item.id) ? "heart" : "heart-outline"} 
                  size={20} 
                  color={isFavorite(item.id) ? "#e74c3c" : "#b2bec3"} 
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

function FavoritesScreen({ navigation, favorites, toggleFavorite }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.minimalSearchHeader}>
          <Text style={styles.cleanTitle}>Koleksi Favorit</Text>
          <Text style={styles.cleanWelcome}>Ada {favorites.length} destinasi yang kamu simpan</Text>
        </View>
        
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.rowListCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeTab', {
                screen: 'Detail',
                params: { destination: item }
              })}
            >
              <Image source={{ uri: item.image }} style={styles.rowCardImage} />
              <View style={styles.rowCardInfo}>
                <Text style={styles.rowCardName}>{item.name}</Text>
                <Text style={styles.rowCardLocation}>📍 {item.location}</Text>
                <Text style={styles.rowCardPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity 
                style={styles.rowHeartBtn}
                onPress={() => toggleFavorite(item)}
              >
                <Ionicons name="heart" size={20} color="#e74c3c" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

// ======= Stack Configurations =======

function HomeStackNavigator({ favorites, toggleFavorite }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Detail">
        {props => <DetailScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function SearchStackNavigator({ favorites, toggleFavorite }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchMain">
        {props => <SearchScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Stack.Screen>
      <Stack.Screen name="SearchDetail">
        {props => <DetailScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// ======= Main Tab Navigator =======

function TabNavigator() {
  const [favorites, setFavorites] = useState([destinationsData[5]]); 

  const toggleFavorite = (item) => {
    if (favorites.some(fav => fav.id === item.id)) {
      setFavorites(favorites.filter(fav => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = 'grid-outline';
          else if (route.name === 'SearchTab') iconName = 'search-outline';
          else if (route.name === 'FavoritesTab') iconName = 'bookmark-outline';
          return <Ionicons name={iconName} size={size - 3} color={color} />;
        },
        tabBarActiveTintColor: '#078065', 
        tabBarInactiveTintColor: '#95a5a6',
        tabBarStyle: { 
          backgroundColor: '#ffffff', 
          borderTopWidth: 1,
          borderTopColor: '#f1f2f6',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        }
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        options={{ title: 'Home', popToTopOnBlur: true }} // FIXED: Sesuai Gambar Aturan UI/UX Poin 5
      >
        {props => <HomeStackNavigator {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Tab.Screen>
      
      <Tab.Screen 
        name="SearchTab" 
        options={{ title: 'Search', popToTopOnBlur: true }} // FIXED: Sesuai Gambar Aturan UI/UX Poin 5
      >
        {props => <SearchStackNavigator {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Tab.Screen>
      
      <Tab.Screen 
        name="FavoritesTab" 
        options={{ 
          title: 'Favorites',
          tabBarBadge: favorites.length > 0 ? favorites.length : null,
          tabBarBadgeStyle: { backgroundColor: '#e74c3c', color: '#fff', fontSize: 10 }
        }}
      >
        {props => <FavoritesScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <TabNavigator />
    </NavigationContainer>
  );
}

// ======= Desain & Gaya Elemen Orisinal =======
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCleanHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  cleanWelcome: {
    fontSize: 13,
    color: '#7f8c8d',
    fontWeight: '400',
  },
  cleanTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    marginTop: 2,
  },
  gridPadding: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  gridCard: {
    backgroundColor: '#ffffff',
    width: columnWidth,
    borderRadius: 16,
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f1f2f6',
    overflow: 'hidden',
  },
  gridCardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#f8f9fa',
  },
  gridCardContent: {
    padding: 12,
  },
  gridCardName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  gridCardLocation: {
    fontSize: 11,
    color: '#95a5a6',
    marginTop: 3,
  },
  gridCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  gridCardPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#078065',
  },
  gridRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridRatingText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2d3436',
    marginLeft: 2,
  },
  cleanImageContainer: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
  cleanHeroImage: {
    width: '100%',
    height: '100%',
  },
  cleanCircleBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cleanCircleHeart: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cleanDetailWrapper: {
    padding: 24,
    backgroundColor: '#ffffff',
  },
  cleanDetailMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cleanDetailCategory: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#078065',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cleanDetailRatingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cleanDetailRatingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  cleanDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    marginTop: 8,
  },
  cleanDetailLocation: {
    fontSize: 13,
    color: '#7f8c8d',
    marginTop: 4,
  },
  cleanDivider: {
    height: 1,
    backgroundColor: '#f1f2f6',
    marginVertical: 16,
  },
  cleanSectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 8,
  },
  cleanDescriptionText: {
    fontSize: 14,
    color: '#626d71',
    lineHeight: 22,
  },
  fixedBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  fixedPriceLabel: {
    fontSize: 12,
    color: '#95a5a6',
  },
  fixedPriceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#078065',
  },
  cleanActionBtn: {
    backgroundColor: '#078065',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  cleanActionBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  minimalSearchHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  minimalInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#f1f2f6',
  },
  minimalTextInput: {
    flex: 1,
    fontSize: 14,
    color: '#2d3436',
  },
  minimalTabWrapper: {
    paddingVertical: 16,
    paddingLeft: 20,
  },
  minimalTabItem: {
    marginRight: 24,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  minimalTabItemActive: {
    borderBottomColor: '#078065',
  },
  minimalTabText: {
    fontSize: 14,
    color: '#95a5a6',
    fontWeight: '500',
  },
  minimalTabTextActive: {
    color: '#078065',
    fontWeight: 'bold',
  },
  rowListCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 16,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f2f6',
  },
  rowCardImage: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  rowCardInfo: {
    flex: 1,
    marginLeft: 14,
  },
  rowCardName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  rowCardLocation: {
    fontSize: 12,
    color: '#95a5a6',
    marginTop: 2,
  },
  rowCardPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#078065',
    marginTop: 4,
  },
  rowHeartBtn: {
    padding: 6,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#999',
    fontSize: 14,
  },
});