import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OrdersList from './components/OrdersList/OrdersList';
import { HeaderOrdersList } from './components';

import { useOrders } from '../../hooks/useOrders/useOrders';
import { useTypedNavigation } from '../../hooks/useTypedNavigation/useTypedNavigation';

import { Order } from '../../types/Order';
import { OrdersProps } from './types';
import { styles } from './Orders.styles';

const Orders: FC<OrdersProps> = () => {
  const navigation = useTypedNavigation();

  const { orders, isLoading, totalPage, refreshOrders, loadMoreOrders } =
    useOrders();

  const presentOrderDetails = (item: Order) => {
    navigation.navigate('OrderDetails', { id: item.id });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <HeaderOrdersList />

        <OrdersList
          orders={orders}
          loading={isLoading}
          totalPage={totalPage}
          refreshOrders={refreshOrders}
          loadMoreOrders={loadMoreOrders}
          onCardTapped={presentOrderDetails}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
