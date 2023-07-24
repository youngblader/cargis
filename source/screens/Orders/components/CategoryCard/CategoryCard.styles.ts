import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 70,
    borderColor: colors.middleGray,
    backgroundColor: colors.white,
  },
  default: {
    borderColor: colors.middleGray,
    backgroundColor: colors.white,
  },
  active: {
    borderColor: colors.blue,
    backgroundColor: colors.white,
  },
  text: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.halfBlack,
  },
});
