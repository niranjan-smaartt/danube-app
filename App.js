import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropertiesScreen from './src/screens/PropertiesScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logoText}>
              <Text style={styles.logoTextRed}>DANUBE</Text>
            </Text>
            <Text style={styles.logoText}>PROPERTIES</Text>
          </View>
          <TouchableOpacity style={styles.qrCode}>
            <Image 
              source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example' }}
              style={styles.qrCodeImage}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Terry</Text>
            <Text style={styles.profileRole}>Your Sales Representative</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statsRow}>
            <View style={styles.statsCard}>
              <Text style={styles.statsLabel}>Leads</Text>
              <Text style={styles.statsNumber}>53</Text>
            </View>
            <View style={styles.statsCard}>
              <Text style={styles.statsLabel}>Opportunities</Text>
              <Text style={styles.statsNumber}>12</Text>
            </View>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.statsCard}>
              <Text style={styles.statsLabel}>Total Commission</Text>
              <Text style={styles.statsNumber}>AED 0</Text>
            </View>
            <View style={styles.statsCard}>
              <Text style={styles.statsLabel}>Next Payment</Text>
              <Text style={styles.statsNumber}>AED 0</Text>
            </View>
          </View>
        </View>

        {/* My Leads Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Leads</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.leadCard}>
            <View style={styles.leadContent}>
              <Text style={styles.leadName}>Amjad</Text>
              <View style={styles.leadContactInfo}>
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue}>amjad@gmail.com</Text>
                </View>
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Mobile</Text>
                  <Text style={styles.contactValue}>+971 23445768</Text>
                </View>
              </View>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* My Opportunities Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Opportunities</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.opportunityCard}>
            <View style={styles.opportunityContent}>
              <Text style={styles.opportunityId}>OP788022</Text>
              <View style={styles.infoGrid}>
                <View style={styles.infoColumn}>
                  <Text style={styles.infoLabel}>Name</Text>
                  <Text style={styles.infoValue}>Amjad</Text>
                  <Text style={styles.infoLabel}>Mobile</Text>
                  <Text style={styles.infoValue}>+971 23445768</Text>
                </View>
                <View style={styles.infoColumn}>
                  <Text style={styles.infoLabel}>Email</Text>
                  <Text style={styles.infoValue}>amjad@gmail.com</Text>
                  <Text style={styles.infoLabel}>Country</Text>
                  <Text style={styles.infoValue}>UAE</Text>
                </View>
              </View>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Meetings & Appointments Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meetings & Appointments</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabTextActive}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Last Meeting</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.meetingCard}>
            <View style={styles.meetingHeader}>
              <View style={styles.meetingDate}>
                <Text style={styles.meetingDateText}>Nov 23, 2024</Text>
              </View>
              <View style={styles.meetingTime}>
                <Text style={styles.meetingTimeText}>09:00 - 10:00 AM</Text>
              </View>
              <TouchableOpacity style={styles.meetingMenu}>
                <Text style={styles.meetingMenuDots}>•••</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.meetingTitle}>Open House</Text>
            <Text style={styles.meetingDescription}>Join us at 'Reflection II Open House' on 25th November 2024...</Text>
          </View>
        </View>

        {/* Communications Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Communications</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.communicationsContainer}
          >
            <TouchableOpacity style={styles.communicationCard}>
              <View style={styles.communicationHeader}>
                <Text style={styles.communicationName}>Ansar</Text>
                <View style={styles.communicationDate}>
                  <Text style={styles.communicationDateText}>Nov 23, 2024</Text>
                </View>
              </View>
              <Text style={styles.communicationSubject}>Email Subject</Text>
              <Text style={styles.communicationPreview}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.communicationCard}>
              <View style={styles.communicationHeader}>
                <Text style={styles.communicationName}>Ansar</Text>
                <View style={styles.communicationDate}>
                  <Text style={styles.communicationDateText}>Nov 23, 2024</Text>
                </View>
              </View>
              <Text style={styles.communicationSubject}>Email Subject</Text>
              <Text style={styles.communicationPreview}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Quick Links Section */}
        <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Links</Text>
          </View>
          <View style={styles.quickLinksContainer}>
            <TouchableOpacity style={styles.quickLinkCard}>
              <View style={styles.quickLinkContent}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/fluency/96/document.png' }}
                  style={styles.quickLinkIcon}
                />
                <Text style={styles.quickLinkText}>Forms & Documents</Text>
              </View>
              <View style={styles.quickLinkArrow}>
                <Text style={styles.arrowIcon}>↗</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickLinkCard}>
              <View style={styles.quickLinkContent}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/fluency/96/privacy-policy.png' }}
                  style={styles.quickLinkIcon}
                />
                <Text style={styles.quickLinkText}>View Policies</Text>
              </View>
              <View style={styles.quickLinkArrow}>
                <Text style={styles.arrowIcon}>↗</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickLinkCard} onPress={() => navigation.navigate('Properties')}>
              <View style={styles.quickLinkContent}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/fluency/96/real-estate.png' }}
                  style={styles.quickLinkIcon}
                />
                <Text style={styles.quickLinkText}>Property Listings</Text>
              </View>
              <View style={styles.quickLinkArrow}>
                <Text style={styles.arrowIcon}>↗</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Launches Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Launches & Events</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.launchCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop' }}
              style={styles.launchImage}
              resizeMode="cover"
            />
            <View style={styles.launchOverlay}>
              <View style={styles.launchContent}>
                <View style={styles.launchInfo}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.calendarIcon}>📅</Text>
                    <Text style={styles.dateText}>01 Dec</Text>
                  </View>
                  <Text style={styles.launchTitle}>Explore the world of BAYZ 102</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.moreButtonText}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Promotions Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Promotions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promotionsContainer}
          >
            <TouchableOpacity style={styles.promotionCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2787&auto=format&fit=crop' }}
                style={styles.promotionImage}
                resizeMode="cover"
              />
              <View style={styles.promotionDateBadge}>
                <Text style={styles.promotionDateText}>02 Oct</Text>
              </View>
              <View style={styles.promotionOverlay}>
                <Text style={styles.promotionTitle}>Get 5% extra commissions on BAYZ Apartments</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promotionCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2787&auto=format&fit=crop' }}
                style={styles.promotionImage}
                resizeMode="cover"
              />
              <View style={styles.promotionDateBadge}>
                <Text style={styles.promotionDateText}>02 Oct</Text>
              </View>
              <View style={styles.promotionOverlay}>
                <Text style={styles.promotionTitle}>Get 5% extra commissions on BAYZ Apartments</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      
      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabContainer}>
        <View style={styles.tabGroup}>
          <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
            <Image 
              source={{ uri: 'https://img.icons8.com/material-outlined/96/B5A69C/home.png' }}
              style={[styles.tabIcon, styles.tabIconActive]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image 
              source={{ uri: 'https://img.icons8.com/material-outlined/96/B5A69C/user.png' }}
              style={styles.tabIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios/96/B5A69C/bell--v1.png' }}
              style={styles.tabIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabActionsGroup}>
          <TouchableOpacity style={styles.tabActionButton}>
            <Image 
              source={{ uri: 'https://img.icons8.com/material-outlined/96/000000/menu.png' }}
              style={styles.tabActionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabActionButton}>
            <Image 
              source={{ uri: 'https://img.icons8.com/material-outlined/96/000000/plus-math.png' }}
              style={styles.tabActionIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Properties" 
          component={PropertiesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8E1',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#1A1A1A',
  },
  logoTextRed: {
    color: '#FF0000',
  },
  qrCode: {
    width: 44,
    height: 44,
    backgroundColor: '#EFEEEE',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  qrCodeImage: {
    width: 28,
    height: 28,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 14,
    color: '#757575',
  },
  statsGrid: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#DBD6D0',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statsLabel: {
    fontSize: 15,
    color: '#757575',
    marginBottom: 8,
  },
  statsNumber: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  viewAllButton: {
    color: '#757575',
    fontSize: 14,
  },
  leadCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  leadContent: {
    flex: 1,
  },
  leadName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  leadContactInfo: {
    flexDirection: 'row',
    gap: 24,
  },
  contactItem: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: '#1A1A1A',
  },
  opportunityCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  opportunityContent: {
    flex: 1,
  },
  opportunityId: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 40,
  },
  infoColumn: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 12,
  },
  chevron: {
    fontSize: 24,
    color: '#757575',
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 30,
    padding: 4,
    marginVertical: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  tabActive: {
    flex: 1,
    backgroundColor: '#B5A69C',
    borderRadius: 30,
    paddingVertical: 8,
    alignItems: 'center',
  },
  tabText: {
    color: '#1A1A1A',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  meetingCard: {
    backgroundColor: '#3C3C3C',
    borderRadius: 16,
    padding: 16,
  },
  meetingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  meetingDate: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  meetingDateText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  meetingTime: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flex: 1,
    marginRight: 8,
  },
  meetingTimeText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  meetingMenu: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetingMenuDots: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 2,
  },
  meetingTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8,
  },
  meetingDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    lineHeight: 20,
  },
  communicationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  communicationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  communicationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  communicationDate: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  communicationDateText: {
    fontSize: 12,
    color: '#757575',
  },
  communicationSubject: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  communicationPreview: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  communicationsContainer: {
    paddingRight: 16,
  },
  quickLinksContainer: {
    gap: 12,
  },
  quickLinkCard: {
    backgroundColor: '#DBD6D0',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quickLinkContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quickLinkIcon: {
    width: 24,
    height: 24,
  },
  quickLinkText: {
    fontSize: 18,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  quickLinkArrow: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#1A1A1A',
  },
  launchCard: {
    borderRadius: 24,
    overflow: 'hidden',
    height: 220,
    marginTop: 12,
  },
  launchImage: {
    width: '100%',
    height: '100%',
  },
  launchOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  launchContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  launchInfo: {
    flex: 1,
    marginRight: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  calendarIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
  launchTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
  },
  moreButton: {
    backgroundColor: '#B5A69C',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  moreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  promotionsContainer: {
    paddingTop: 12,
    paddingRight: 20,
    gap: 16,
  },
  promotionCard: {
    width: 300,
    height: 180,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  promotionImage: {
    width: '100%',
    height: '100%',
  },
  promotionDateBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  promotionDateText: {
    fontSize: 13,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  promotionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 70,
  },
  promotionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  tabGroup: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4A4A4A',
    borderRadius: 32,
    padding: 6,
    marginRight: 12,
    justifyContent: 'space-around',
  },
  tabItem: {
    padding: 10,
    borderRadius: 24,
    flex: 1,
    alignItems: 'center',
  },
  tabItemActive: {
    backgroundColor: '#2A2A2A',
  },
  tabIcon: {
    width: 20,
    height: 20,
    tintColor: '#B5A69C',
  },
  tabIconActive: {
    tintColor: '#B5A69C',
  },
  tabActionsGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  tabActionButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#B5A69C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActionIcon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
});
