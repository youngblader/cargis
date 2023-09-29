import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Screens } from '../../navigation/types';

export const useTypedNavigation = () => {
  return useNavigation<NavigationProp<Screens>>();
};
