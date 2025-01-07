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
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyName}>{property.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.startingFromText}>Starting from</Text>
          <Text style={styles.propertyPrice}>{property.price}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Properties</Text>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="search-outline" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Apartments, House and More..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="options-outline" size={24} color="#000" />
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

      <ScrollView style={styles.propertiesList}>
        {DUMMY_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#C4A484',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#FFF',
  },
  propertiesList: {
    paddingHorizontal: 20,
  },
  propertyCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  propertyImage: {
    width: '100%',
    height: 200,
  },
  availableUnitsTag: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  availableUnitsText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  propertyInfo: {
    padding: 20,
  },
  propertyName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  priceContainer: {
    marginBottom: 15,
  },
  startingFromText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  propertyPrice: {
    fontSize: 18,
    fontWeight: '600',
  },
  moreButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#C4A484',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  moreButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PropertiesScreen;
