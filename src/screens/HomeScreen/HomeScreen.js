import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Header from '../../components/Header/Header';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import StatsGrid from '../../components/StatsGrid/StatsGrid';
import LeadsSection from '../../components/LeadsSection/LeadsSection';
import OpportunitiesSection from '../../components/OpportunitiesSection/OpportunitiesSection';
import styles from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <ProfileSection />
        <StatsGrid />
        <LeadsSection />
        <OpportunitiesSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
