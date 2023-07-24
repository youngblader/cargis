import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 152, // ??
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  borderButton: {
    borderWidth: 1,
    borderColor: colors.middleGray,
    backgroundColor: colors.white,
  },
  backgroundButton: {
    backgroundColor: colors.blue,
  },
  text: {
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});
