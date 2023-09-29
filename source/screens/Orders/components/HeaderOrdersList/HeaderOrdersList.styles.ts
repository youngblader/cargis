import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  titleContainer: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    borderTopColor: colors.lightGray,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 24,
  },
});
