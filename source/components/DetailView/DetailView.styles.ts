import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
  },
  title: {
    marginBottom: 4,
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 16,
    color: colors.halfBlack,
  },
});
