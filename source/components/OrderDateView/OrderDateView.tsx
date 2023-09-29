import React, { FC } from 'react';
import { View, Text } from 'react-native';

import FastImage from 'react-native-fast-image';
import moment from 'moment';

import { DateViewProps, OrderDateViewProps } from './types';
import { IMAGES } from '../../utils/constants';
import { styles } from './OrderDateView.styles';

const DateView: FC<DateViewProps> = ({ image, title }) => {
  return (
    <View style={styles.dateViewContainer}>
      <FastImage style={styles.image} source={image} resizeMode={'cover'} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const OrderDateView: FC<OrderDateViewProps> = ({
  date,
  withoutDate = false,
}) => {
  const { created, loaded, ending, views } = date;

  const createDate = created?.split(' ')[0];
  const loadDate = `${moment(loaded).format('DD.MM.YY')}`;
  const endDate = ending ? ` - ${moment(ending).format('DD.MM.YY')}` : '';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>От {createDate}</Text>

      {!withoutDate && (
        <DateView image={IMAGES.clockIcon} title={`${loadDate}${endDate}`} />
      )}

      <DateView image={IMAGES.eyeIcon} title={`Просмотры: ${views}`} />
    </View>
  );
};

export default OrderDateView;
