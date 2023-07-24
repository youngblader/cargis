import React, {FC, useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image';

import {DetailOrderViewProps} from './types';
import {hitSlop} from '../../../../styles';
import {styles} from './DetailOrderView.styles';
import Collapsible from 'react-native-collapsible';

const arrowIcon = require('../../../../../assets/top_arrow.png');
const bottomArrow = require('../../../../../assets/bottom_arrow.png');

const DetailOrderView: FC<DetailOrderViewProps> = ({title, children}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsedTapped = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity hitSlop={hitSlop} onPress={toggleCollapsedTapped}>
          <FastImage
            style={styles.arrowIcon}
            source={collapsed ? bottomArrow : arrowIcon}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
      </View>

      <Collapsible collapsed={collapsed}>
        <View>{children}</View>
      </Collapsible>
    </View>
  );
};

export default DetailOrderView;
