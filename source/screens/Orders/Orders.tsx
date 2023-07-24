import React, {FC} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import OrdersList from './components/OrdersList/OrdersList';
import {HeaderOrdersList} from './components';

import {Order} from '../../types/Order';
import {styles} from './Orders.styles';
import {OrdersProps} from './types';

const OrdersView: FC<OrdersProps> = ({navigation}) => {
  const presentDetailOrder = (item: Order) => {
    navigation.navigate('DetailOrder', {id: item.id});
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <HeaderOrdersList />
        <OrdersList onCardTapped={presentDetailOrder} />
      </View>
    </SafeAreaView>
  );
};

export default OrdersView;
