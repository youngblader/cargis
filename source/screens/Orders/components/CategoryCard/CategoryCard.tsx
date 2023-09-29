import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CategoryCardProps } from './types';

import { colors } from '../../../../styles';
import { styles } from './CategoryCard.styles';

const CategoryCard: FC<CategoryCardProps> = ({ item, activeItem, onPress }) => {
  const { id, name } = item;

  const cardActiveStyle = id === activeItem ? styles.active : styles.default;
  const textColor = id === activeItem ? colors.blue : colors.halfBlack;

  return (
    <TouchableOpacity
      style={[styles.container, cardActiveStyle]}
      onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
