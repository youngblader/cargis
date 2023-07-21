import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {DetailOrderProps} from './types';

const DetailOrder: FC<DetailOrderProps> = () => {
  return (
    <View style={styles.container}>
      <Text>OrdersScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailOrder;
