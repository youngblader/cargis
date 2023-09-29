import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 104,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.08,
    elevation: 10,
  },
  buttonStyle: {
    height: 48,
  },
});
