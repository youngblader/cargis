import React, { FC } from 'react';
import { View, Text } from 'react-native';

import FastImage from 'react-native-fast-image';

import { CustomerViewProps } from './types';
import { IMAGES } from '../../utils/constants';
import { styles } from './CustomerView.styles';

const CustomerView: FC<CustomerViewProps> = ({ customer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.customerText}>{customer}</Text>
      <View style={styles.customerIconsContainer}>
        <FastImage
          source={IMAGES.successIcon}
          style={[styles.customerIcon, styles.rightInsets]}
          resizeMode={'cover'}
        />
        <FastImage
          source={IMAGES.aboutIcon}
          style={styles.customerIcon}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

export default CustomerView;
