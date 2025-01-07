import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export default StyleSheet.create({
  statsGrid: {
    padding: theme.spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  statsCard: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginHorizontal: theme.spacing.xs,
  },
  statsLabel: {
    ...theme.typography.caption,
    marginBottom: theme.spacing.xs,
  },
  statsNumber: {
    ...theme.typography.h1,
    color: theme.colors.secondary,
  },
});
