import { Category } from '../types/Category';

export const IMAGES = {
  aboutIcon: require('../../assets/about.png'),
  successIcon: require('../../assets/success.png'),
  leftArrowIcon: require('../../assets/left_arrow.png'),
  arrowIcon: require('../../assets/top_arrow.png'),
  bottomArrowIcon: require('../../assets/bottom_arrow.png'),
  clockIcon: require('../../assets/clock.png'),
  eyeIcon: require('../../assets/eye.png'),
  phoneIcon: require('../../assets/phone.png'),
  shareIcon: require('../../assets/share.png'),
  locationIcon: require('../../assets/location.png'),
};

export const categories: Category[] = [
  {
    id: 0,
    name: 'Все',
  },
  {
    id: 1,
    name: 'Активные',
  },
  {
    id: 2,
    name: 'На паузе',
  },
  {
    id: 3,
    name: 'Завершенные',
  },
];
