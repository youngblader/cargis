import React, { FC, useState, memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';
import Collapsible from 'react-native-collapsible';
import moment from 'moment';

import {
  Button,
  DetailView,
  StatusView,
  OrderDateView,
  RouteView,
  CustomerView,
} from '../../../../components';

import { OrderDate } from '../../../../components/OrderDateView/types';
import { Route } from '../../../../components/RouteView/types';
import { OrderCardProps, EqualType } from './types';

import { IMAGES } from '../../../../utils/constants';

import { hitSlop } from '../../../../styles';
import { styles } from './OrderCard.styles';

const OrderCard: FC<OrderCardProps> = ({ order, onPress }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsedTapped = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  const date: OrderDate = {
    created: moment(order.create_dt).format('DD.MM.YY'),
    loaded: order.load_dt,
    ending: order.ending_dt,
    views: order.views_count,
  };

  const transportRoute: Route = {
    loading_address: order.loading_address,
    unloading_address: order.unloading_address,
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderWrapper}>
          <View style={styles.rowCentering}>
            <Text style={styles.orderTitle}>Заявка №{order.id}</Text>
            <StatusView status={order?.status_1c ?? ''} />
          </View>
          <TouchableOpacity hitSlop={hitSlop} onPress={toggleCollapsedTapped}>
            <FastImage
              style={styles.arrowIcon}
              source={IMAGES.arrowIcon}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.topInset}>
          <OrderDateView date={date} withoutDate={false} />
        </View>
      </View>

      <Collapsible collapsed={collapsed}>
        <View style={styles.cardContent}>
          {!!order.company.short_name && (
            <View style={styles.bottomInset}>
              <DetailView
                title={'Заказчик'}
                children={<CustomerView customer={order.company.short_name} />}
              />
            </View>
          )}

          <View style={styles.bottomInset}>
            <DetailView
              title={'Маршрут перевозки'}
              children={<RouteView route={transportRoute} />}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.metaContainer}>
              <DetailView
                title={'Расстояние'}
                children={
                  <Text style={styles.cardText}>
                    {order?.distance_m / 1000} км
                  </Text>
                }
              />
              <View style={styles.verticalSeparator} />
              <DetailView
                title={'Груз'}
                children={
                  <Text style={styles.cardText}>{order?.cargo_type}</Text>
                }
              />
            </View>

            <View style={styles.horizontalSeparator} />

            <View style={styles.metaContainer}>
              <DetailView
                title={'Тариф'}
                children={
                  <View style={styles.rowCentering}>
                    <Text style={styles.cardText}>
                      {`${order.tariff_c}`.substring(0, 3)} ₽/т
                    </Text>
                    <Text style={styles.cardDescription}>Без НДС</Text>
                  </View>
                }
              />
              <View style={styles.verticalSeparator} />
              <DetailView
                title={'Всего к перевозке'}
                children={
                  <View style={styles.rowCentering}>
                    <Text style={styles.cardText}>
                      {`${order.tonnage_kg}`.substring(0, 3)} т
                    </Text>
                    <Text style={styles.cardDescription}>
                      / из {`${order.tonnage_balance_kg}`.substring(0, 3)} т
                    </Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <Button
            typeButton={'border'}
            buttonText={'Подробнее'}
            onPress={onPress}
          />
          <Button buttonText={'Оставить отклик'} />
        </View>
      </Collapsible>
    </View>
  );
};

function areEqual(prev: EqualType, next: EqualType) {
  return (
    prev.order.id === next.order.id &&
    prev.order.create_dt === next.order.create_dt
  );
}

export default memo(OrderCard, areEqual);
