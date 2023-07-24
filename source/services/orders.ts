import axios from 'axios';
import {OrderResponse} from '../types/Order';
import {DetailOrder} from '../types/DetailOrder';

const token = 'dZhzHlw8Flpsf8W9Duq4rsJ1UVT4dRlW';

export const fetchOrders = (url: string): Promise<OrderResponse> =>
  axios
    .get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(res => res.data);

export const fetchDetailOrder = (url: string): Promise<DetailOrder> =>
  axios
    .get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(res => res.data);
