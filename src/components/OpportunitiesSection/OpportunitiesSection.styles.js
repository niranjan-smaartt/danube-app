import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export default StyleSheet.create({
  section: {
    padding: theme.spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h2,
  },
  viewAllButton: {
    color: theme.colors.primary,
    ...theme.typography.body,
  },
  opportunityCard: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  opportunityContent: {
    flex: 1,
  },
  opportunityId: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: theme.spacing.lg,
  },
  infoColumn: {
    flex: 1,
  },
  infoLabel: {
    ...theme.typography.caption,
    marginBottom: theme.spacing.xs,
  },
  infoValue: {
    ...theme.typography.body,
    color: theme.colors.secondary,
  },
  chevron: {
    fontSize: 24,
    color: theme.colors.gray,
  },
});
