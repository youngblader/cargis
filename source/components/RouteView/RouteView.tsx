import React, {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {RouteViewProps} from './types';
import {styles} from './RouteView.styles';

const shareIcon = require('../../../assets/share.png');
const locationIcon = require('../../../assets/location.png');

const RouteView: FC<RouteViewProps> = ({route}) => {
  const {loading_address, unloading_address} = route;

  return (
    <>
      <View style={styles.routeContainer}>
        <FastImage
          source={shareIcon}
          style={styles.routeIcon}
          resizeMode={'cover'}
        />
        <Text>{loading_address ?? ''}</Text>
      </View>
      <View style={[styles.routeContainer, styles.routeInset]}>
        <FastImage
          source={locationIcon}
          style={styles.routeIcon}
          resizeMode={'cover'}
        />
        <Text>{unloading_address ?? ''}</Text>
      </View>
    </>
  );
};

export default RouteView;
