import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackNavigation = {
  Main: undefined;
};

export type MainStackNavigation = {
  Orders: undefined;
  DetailOrder: undefined;
};

export interface OrdersNavigationProps {
  navigation: StackNavigationProp<MainStackNavigation, 'Orders'>;
}

export interface DetailOrderNavigationProps {
  navigation: StackNavigationProp<MainStackNavigation, 'DetailOrder'>;
}
