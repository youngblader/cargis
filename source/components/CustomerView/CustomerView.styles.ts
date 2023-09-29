import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerText: {
    maxWidth: 243,
    fontWeight: '500',
    fontSize: 14,
    color: colors.black,
  },
  customerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  customerIcon: {
    width: 16,
    height: 16,
  },
  rightInsets: {
    marginRight: 2,
  },
});
