import React, { FC } from 'react';
import { View, Text } from 'react-native';

import FastImage from 'react-native-fast-image';

import { RouteViewProps } from './types';
import { IMAGES } from '../../utils/constants';
import { styles } from './RouteView.styles';

const RouteView: FC<RouteViewProps> = ({ route }) => {
  const { loading_address, unloading_address } = route;

  return (
    <View>
      <View style={styles.routeContainer}>
        <FastImage
          source={IMAGES.shareIcon}
          style={styles.routeIcon}
          resizeMode={'cover'}
        />
        <Text>{loading_address ?? ''}</Text>
      </View>
      <View style={[styles.routeContainer, styles.routeInset]}>
        <FastImage
          source={IMAGES.locationIcon}
          style={styles.routeIcon}
          resizeMode={'cover'}
        />
        <Text>{unloading_address ?? ''}</Text>
      </View>
    </View>
  );
};

export default RouteView;
