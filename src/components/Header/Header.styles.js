import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoTextRed: {
    color: theme.colors.primary,
  },
  qrCode: {
    width: 40,
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
  },
  qrCodeImage: {
    width: '100%',
    height: '100%',
  },
});
