import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const DUMMY_PROPERTIES = [
  {
    id: 1,
    name: 'BAYZ 102',
    price: 'AED 1,800,000',
    availableUnits: 2,
    image: 'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'ELEGANZ',
    price: 'AED 12,30,000',
    availableUnits: 11,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
  },
];

const PropertiesScreen = () => {
  const [activeTab, setActiveTab] = useState('Properties');
  const [searchQuery, setSearchQuery] = useState('');

  const PropertyCard = ({ property }) => (
    <View style={styles.propertyCard}>
      <Image 
        source={{ uri: property.image }} 
        style={styles.propertyImage} 
        resizeMode="cover"
      />
      <View style={styles.availableUnitsTag}>
        <Text style={styles.availableUnitsText}>
          {property.availableUnits.toString().padStart(2, '0')} Units Available
        </Text>
      </View>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
        style={styles.gradientOverlay}
      >
        <View style={styles.propertyInfo}>
          <View style={styles.propertyDetails}>
            <Text style={styles.propertyName}>{property.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.startingFromText}>Starting from </Text>
              <Text style={styles.propertyPrice}>{property.price}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>More</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F1" />
      <Text style={styles.title}>Properties</Text>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <View style={styles.searchIconContainer}>
            <Icon name="search-outline" size={24} color="#B4A99A" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Apartments, House and More..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="menu" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Properties' && styles.activeTab]}
          onPress={() => setActiveTab('Properties')}
        >
          <Text style={[styles.tabText, activeTab === 'Properties' && styles.activeTabText]}>
            Properties
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Units' && styles.activeTab]}
          onPress={() => setActiveTab('Units')}
        >
          <Text style={[styles.tabText, activeTab === 'Units' && styles.activeTabText]}>
            Units
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.propertiesList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.propertiesListContent}
      >
        {DUMMY_PROPERTIES.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F1',
    paddingTop: 45,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000',
    letterSpacing: -0.5,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 100,
    height: 52,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIconContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: '100%',
  },
  filterButton: {
    width: 52,
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#EFE9E1',
    borderRadius: 100,
    padding: 4,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 100,
  },
  activeTab: {
    backgroundColor: '#C5B6A5',
  },
  tabText: {
    fontSize: 15,
    color: '#8E8577',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFF',
  },
  propertiesList: {
    flex: 1,
  },
  propertiesListContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  propertyCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    overflow: 'hidden',
    height: 200,
  },
  propertyImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
  },
  propertyInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 16,
  },
  propertyDetails: {
    flex: 1,
    marginRight: 12,
  },
  propertyName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startingFromText: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    marginRight: 4,
  },
  propertyPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFF',
  },
  moreButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
  },
  moreButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  availableUnitsTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  availableUnitsText: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
  },
});

export default PropertiesScreen;
