import {Category} from '../../../../types/Category';

export interface CategoryCardProps {
  item: Category;
  activeItem: number;
  onPress: () => void;
}
