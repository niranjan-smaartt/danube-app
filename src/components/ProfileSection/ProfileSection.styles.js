import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export default StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    marginBottom: theme.spacing.md,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: theme.spacing.md,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.xs,
  },
  profileRole: {
    ...theme.typography.caption,
  },
});
