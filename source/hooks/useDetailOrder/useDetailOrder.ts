import useSWR from 'swr';
import {fetchDetailOrder} from '../../services/orders';

import {DetailOrder} from '../../types/DetailOrder';
import {useDetailOrderResponse} from './types';

const endpoints = {
  order: 'https://admin-ct.cargis.pro/api/client/v1/orders',
};

export const useDetailOrder = (id: number): useDetailOrderResponse => {
  const url = `${endpoints.order}/${id}`;

  const fetcher = (): Promise<DetailOrder> => {
    console.log('DETAIL ORDER FETCHER CALLING');
    return fetchDetailOrder(url);
  };

  const {data, error, isLoading} = useSWR(url, fetcher);

  return {
    order: data ?? null,
    isLoading,
    isError: error,
  };
};
