import { Source } from 'react-native-fast-image';

export interface OrderDateViewProps {
  date: OrderDate;
  withoutDate: boolean;
}

export interface DateViewProps {
  image: number | Source | undefined;
  title: string;
}

export interface OrderDate {
  created?: string;
  loaded?: string;
  ending?: string;
  views?: number;
}
