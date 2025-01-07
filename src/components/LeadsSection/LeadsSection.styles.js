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
  leadCard: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leadContent: {
    flex: 1,
  },
  leadName: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.sm,
  },
  leadContactInfo: {
    gap: theme.spacing.xs,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactLabel: {
    ...theme.typography.caption,
    marginRight: theme.spacing.sm,
    width: 50,
  },
  contactValue: {
    ...theme.typography.body,
  },
  chevron: {
    fontSize: 24,
    color: theme.colors.gray,
  },
});
