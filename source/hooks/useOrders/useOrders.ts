import useSWR from 'swr';

import {fetchOrders} from '../../services/orders';
import {OrderResponse} from '../../types/Order';
import {useOrdersResponse} from './types';

const endpoints = {
  list: 'https://admin-ct.cargis.pro/api/client/v2/order/list?status_1c[0]=active&status_1c[1]=on_pause&status_1c[3]=completed&order_1c_search_is_true=true',
};

export const useOrders = (): useOrdersResponse => {
  const fetcher = (): Promise<OrderResponse> => {
    console.log('ORDERS FETCHER CALLING');
    return fetchOrders(`${endpoints.list}&page=${0}`);
  };

  const {data, mutate, error, isLoading} = useSWR(endpoints.list, fetcher);

  const refreshOrders = async () => {
    await mutate();
  };

  const loadMoreOrders = async (page: number) => {
    console.log('LOADMORE FETCHER CALLING');
    const response = await fetchOrders(`${endpoints.list}&page=${page}`);

    response.orders = [...(data?.orders ?? []), ...response.orders];

    mutate(response, false);
  };

  return {
    orders: data?.orders ?? [],
    isLoading,
    totalPage: data?.total_page ?? 0,
    refreshOrders,
    loadMoreOrders,
    isError: error,
  };
};
