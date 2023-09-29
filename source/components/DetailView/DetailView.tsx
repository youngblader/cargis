import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './DetailView.styles';
import { DetailViewProps } from './type';

const DetailView: FC<DetailViewProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {title.toUpperCase()}
      </Text>

      <View>{children}</View>
    </View>
  );
};

export default DetailView;
