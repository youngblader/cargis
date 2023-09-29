import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    width: 10,
    height: 6,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
  },
});
