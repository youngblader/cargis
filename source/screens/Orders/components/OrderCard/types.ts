import { Order } from '../../../../types/Order';

export interface OrderCardProps {
  order: Order;
  onPress: () => void;
}

export interface EqualType {
  order: Order;
}
