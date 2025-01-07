import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './OpportunitiesSection.styles';

const OpportunitiesSection = () => {
  return (
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
              <Text style={styles.infoLabel}>Client</Text>
              <Text style={styles.infoValue}>John Doe</Text>
            </View>
            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}>Property</Text>
              <Text style={styles.infoValue}>Villa 123</Text>
            </View>
          </View>
        </View>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpportunitiesSection;
