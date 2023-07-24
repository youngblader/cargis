import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export const styles = StyleSheet.create({
  rowCentering: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
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
  arrowIcon: {
    width: 10,
    height: 6,
  },
  innText: {
    marginTop: 4,
    fontWeight: '500',
    fontSize: 10,
    color: colors.halfBlack,
  },
  phoneIcon: {
    width: 24,
    height: 24,
  },
  phoneText: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.blue,
  },
  topInset: {
    marginTop: 8,
  },
});
