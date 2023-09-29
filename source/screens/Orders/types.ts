import { ParamListBase, RouteProp } from '@react-navigation/native';

export interface OrdersProps {}

export interface OrdersParams extends ParamListBase {
  Orders: {};
}

export type OrdersRoute = RouteProp<OrdersParams, 'Orders'>;
