import React, { FC, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { useOrders } from '../../../../hooks/useOrders/useOrders';

import OrderCard from '../OrderCard/OrderCard';

import { OrdersListProps } from './types';
import { styles } from './OrdersList.styles';

const OrdersList: FC<OrdersListProps> = ({ onCardTapped }) => {
  const { orders, isLoading, totalPage, refreshOrders, loadMoreOrders } =
    useOrders();

  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const isLastPage = page === totalPage;

  const refresh = () => {
    refreshOrders();
    setRefreshing(false);
  };

  const forceRefresh = () => {
    setRefreshing(true);
    refresh();
  };

  const onEndReached = () => {
    if (!isLoading) {
      const currentPage = page + 1;

      loadMoreOrders(currentPage);
      setPage(currentPage);
    }
  };

  const scrollViewDidEndDragging = () => {
    if (!isLastPage) {
      onEndReached();
    }
  };

  return (
    <FlatList
      data={orders}
      extraData={orders}
      maxToRenderPerBatch={120}
      windowSize={30}
      vertical={true}
      initialNumToRender={10}
      scrollEventThrottle={16}
      style={styles.listWrapper}
      contentContainerStyle={styles.flatlistInsets}
      ItemSeparatorComponent={renderSeparator}
      renderItem={({ item }) => (
        <OrderCard order={item} onPress={() => onCardTapped(item)} />
      )}
      refreshing={refreshing}
      onRefresh={forceRefresh}
      onEndReachedThreshold={0.5}
      onEndReached={scrollViewDidEndDragging}
      ListEmptyComponent={
        <>
          {isLoading && !refreshing && (
            <ActivityIndicator style={styles.loader} />
          )}
        </>
      }
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const renderSeparator = () => <View style={styles.separator} />;

export default OrdersList;
