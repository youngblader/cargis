import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

export const colors = {
  blue: '#0C48A1',
  lightBlue: '#E6EEF8',
  halfBlack: '#637A86',
  middleGray: '#E9EDEF',
  black: '#232B2F',
  blueGray: '#BBC5CB',
  lightGray: '#F7F7F7',
  green: '#27C07D',
  lightGreen: '#E9F9F2',
  white: '#FFFFFF',
};

export const hitClop = {
  top: 12,
  bottom: 12,
  left: 12,
  right: 12,
};
