import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './LeadsSection.styles';

const LeadsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Leads</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.leadCard}>
        <View style={styles.leadContent}>
          <Text style={styles.leadName}>Chirag</Text>
          <View style={styles.leadContactInfo}>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>chirag@gmail.com</Text>
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
  );
};

export default LeadsSection;
