import React, {FC, useState} from 'react';
import {View, FlatList} from 'react-native';

import CategoryCard from '../CategoryCard/CategoryCard';

import {categories} from '../../../../config';
import {OrderCategoriesListProps} from './types';
import {styles} from './OrderCategoriesList.styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const OrderCategoriesList: FC<OrderCategoriesListProps> = () => {
  const [activeItem, setActiveItem] = useState(0);

  const onTappedCategory = (id: number) => {
    setActiveItem(id);
  };

  return (
    <FlatList
      data={categories}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={styles.flatlistInsets}
      renderItem={({item}) => (
        <CategoryCard
          item={item}
          activeItem={activeItem}
          onPress={() => onTappedCategory(item.id)}
        />
      )}
      horizontal={true}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default OrderCategoriesList;
