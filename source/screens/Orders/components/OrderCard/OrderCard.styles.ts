import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.11,
    shadowRadius: 7.68,
    elevation: 10,
  },
  cardHeader: {
    padding: 16,
  },
  cardContent: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  bottomInset: {
    marginBottom: 8,
  },
  topInset: {
    marginTop: 10,
  },
  rowCentering: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
    marginRight: 8,
  },
  arrowIcon: {
    width: 10,
    height: 6,
  },
  verticalSeparator: {
    paddingVertical: 4,
  },
  horizontalSeparator: {
    paddingHorizontal: 4,
  },
  cardText: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 24,
    color: colors.black,
  },
  cardDescription: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 24,
    color: colors.blueGray,
    marginLeft: 4,
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
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaContainer: {
    flex: 0.8,
  },
});
