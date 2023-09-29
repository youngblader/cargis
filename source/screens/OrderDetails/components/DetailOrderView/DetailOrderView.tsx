import React, { FC, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Collapsible from 'react-native-collapsible';
import FastImage from 'react-native-fast-image';

import { IMAGES } from '../../../../utils/constants';
import { DetailOrderViewProps } from './types';
import { hitSlop } from '../../../../styles';
import { styles } from './DetailOrderView.styles';

const DetailOrderView: FC<DetailOrderViewProps> = ({ title, children }) => {
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
            source={collapsed ? IMAGES.bottomArrowIcon : IMAGES.arrowIcon}
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
