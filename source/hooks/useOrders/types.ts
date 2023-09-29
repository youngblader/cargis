import { Order } from '../../types/Order';

export interface useOrdersResponse {
  orders: Order[];
  isLoading: boolean;
  totalPage: number;
  refreshOrders: () => void;
  loadMoreOrders: (page: number) => void;
  isError: string;
}
