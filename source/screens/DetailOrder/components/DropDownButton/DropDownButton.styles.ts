import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 24,
    color: colors.blue,
  },
  dropIcon: {
    marginLeft: 8,
    width: 10,
    height: 8,
  },
});
