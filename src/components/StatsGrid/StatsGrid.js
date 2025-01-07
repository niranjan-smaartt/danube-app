import React from 'react';
import { View, Text } from 'react-native';
import styles from './StatsGrid.styles';

const StatsGrid = () => {
  return (
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
  );
};

export default StatsGrid;
