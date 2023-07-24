import React, {FC} from 'react';
import {View, Text} from 'react-native';

import OrderCategoriesList from '../OrderCategoriesList/OrderCategoriesList';

import {HeaderOrdersListProps} from './types';
import {styles} from './HeaderOrdersList.styles';

const HeaderOrdersList: FC<HeaderOrdersListProps> = ({
  title = 'Заявки на перевозки',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <OrderCategoriesList />
    </View>
  );
};

export default HeaderOrdersList;
