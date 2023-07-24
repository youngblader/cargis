import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: colors.halfBlack,
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  dateViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
});
