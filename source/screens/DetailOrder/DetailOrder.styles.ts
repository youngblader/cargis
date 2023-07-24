import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 40,
    backgroundColor: colors.lightGray,
  },
  backIcon: {
    width: 6,
    height: 12,
  },
  arrowIcon: {
    width: 10,
    height: 6,
  },
  rowCentering: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: colors.black,
  },
  customerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 8,
  },
  customerIcon: {
    width: 16,
    height: 16,
  },
  dropDownContainer: {
    marginTop: 16,
  },
  comment: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 24,
  },
  topInsets: {
    marginTop: 16,
  },
  cardDescription: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 24,
    color: colors.blueGray,
    marginLeft: 4,
  },
  verticalSeparator: {
    paddingVertical: 4,
  },
  horizontalSeparator: {
    paddingHorizontal: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  orderTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
    marginRight: 8,
  },
  heaederLeftInset: {
    marginLeft: 16,
  },
  metaInset: {
    marginTop: 8,
  },
  metaContainer: {
    flex: 0.8,
  },
  metaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
