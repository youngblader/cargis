import { Order } from '../../../../types/Order';

export interface OrdersListProps {
  onCardTapped: (item: Order) => void;
}
