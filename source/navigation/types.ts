import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackNavigation = {
  Main: undefined;
};

export type MainStackNavigation = {
  Orders: undefined;
  OrderDetails: { id: number };
};

export interface Screens extends MainStackNavigation {}
