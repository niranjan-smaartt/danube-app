import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ProfileSection.styles';

const ProfileSection = () => {
  return (
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
  );
};

export default ProfileSection;
