import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Header.styles';

const Header = () => {
  return (
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
  );
};

export default Header;
