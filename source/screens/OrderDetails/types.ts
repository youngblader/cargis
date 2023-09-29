import { ParamListBase, RouteProp } from '@react-navigation/native';

export interface OrderDetailsProps {}

export interface OrderDetailsParams extends ParamListBase {
  OrderDetails: {
    id: number;
  };
}

export type OrderDetailsRoute = RouteProp<OrderDetailsParams, 'OrderDetails'>;
