import { Order } from '../../../../types/Order';

export interface OrdersListProps {
  onCardTapped: (item: Order) => void;
  orders: Order[];
  totalPage: number;
  loading: boolean;
  refreshOrders: () => void;
  loadMoreOrders: (page: number) => void;
}
