import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OrdersList from './components/OrdersList/OrdersList';
import { HeaderOrdersList } from './components';

import { useTypedNavigation } from '../../hooks/useTypedNavigation/useTypedNavigation';

import { Order } from '../../types/Order';
import { OrdersProps } from './types';
import { styles } from './Orders.styles';

const OrdersView: FC<OrdersProps> = () => {
  const navigation = useTypedNavigation();

  const presentOrderDetails = (item: Order) => {
    navigation.navigate('OrderDetails', { id: item.id });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <HeaderOrdersList />
        <OrdersList onCardTapped={presentOrderDetails} />
      </View>
    </SafeAreaView>
  );
};

export default OrdersView;
