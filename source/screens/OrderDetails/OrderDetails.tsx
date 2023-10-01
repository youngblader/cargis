import React, { FC } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

import {
  CustomerView,
  DetailView,
  OrderDateView,
  RouteView,
  StatusView,
} from '../../components';

import {
  DropDownButton,
  CargoContactsView,
  DetailOrderView,
  FooterView,
} from './components';

import { useTypedNavigation } from '../../hooks/useTypedNavigation/useTypedNavigation';
import { useRoute } from '@react-navigation/native';
import { useDetailOrder } from '../../hooks/useDetailOrder/useDetailOrder';

import { CargoContact } from './components/CargoContactsView/types';
import { OrderDate } from '../../components/OrderDateView/types';
import { Route } from '../../components/RouteView/types';
import { OrderDetailsProps, OrderDetailsRoute } from './types';

import { IMAGES } from '../../utils/constants';

import { hitSlop } from '../../styles';
import { styles } from './OrderDetails.styles';

const OrderDetails: FC<OrderDetailsProps> = () => {
  const navigation = useTypedNavigation();

  const { params } = useRoute<OrderDetailsRoute>();
  const { order } = useDetailOrder(params?.id);

  const shipper: CargoContact = {
    companyName: order?.shipper_company_shortname,
    innCompany: order?.shipper_inn,
    spokesperson: {
      name: order?.shipper_contact,
      phone: order?.shipper_contact_phone,
    },
  };

  const consignee: CargoContact = {
    companyName: order?.consignee,
    innCompany: order?.consignee_inn,
    spokesperson: {
      name: order?.consignee_contact,
      phone: order?.consignee_contact_phone,
    },
  };

  const comment: string =
    order?.offersList?.[0]?.documents?.partnership?.comment ?? 'не указан';

  const transportRoute: Route = {
    loading_address: order?.loading_address,
    unloading_address: order?.unloading_address,
  };

  const date: OrderDate = {
    created: order?.create_dt,
    loaded: order?.load_dt,
    ending: order?.ending_dt,
    views: order?.views_count,
  };

  const dismiss = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View style={styles.cardHeader}>
          <TouchableOpacity hitSlop={hitSlop} onPress={dismiss}>
            <FastImage
              style={styles.backIcon}
              source={IMAGES.leftArrowIcon}
              resizeMode={'cover'}
            />
          </TouchableOpacity>

          <View style={styles.heaederLeftInset}>
            <View style={styles.cardHeaderWrapper}>
              <View style={styles.rowCentering}>
                <Text style={styles.orderTitle}>Заявка №{order?.id}</Text>
                <StatusView status={order?.status_1c ?? ''} />
              </View>
            </View>

            <OrderDateView date={date} withoutDate={true} />
          </View>
        </View>

        <ScrollView>
          <View style={styles.container}>
            <DetailOrderView title="Календарь суточной загрузки" />

            <DetailOrderView
              title="Детали заявки"
              children={
                <View style={styles.topInsets}>
                  <DetailView
                    title="Заказчик"
                    children={
                      <CustomerView
                        customer={order?.shipper_company_shortname ?? ''}
                      />
                    }
                  />

                  <View style={styles.dropDownContainer}>
                    <DropDownButton title={'Показать контакты'} />
                  </View>
                </View>
              }
            />

            <DetailOrderView
              title="Детали перевозки"
              children={
                <View style={styles.topInsets}>
                  <DetailView
                    title={'Маршрут'}
                    children={<RouteView route={transportRoute} />}
                  />

                  <View style={styles.metaInset}>
                    <DetailView
                      title="Cроки перевозки"
                      children={
                        <Text>
                          C {order?.load_dt} по {order?.ending_dt}
                        </Text>
                      }
                    />
                  </View>

                  <View>
                    <View style={styles.metaWrapper}>
                      <View style={styles.metaContainer}>
                        {order?.distance_m && (
                          <DetailView
                            title={'Расстояние'}
                            children={
                              <Text style={styles.cardText}>
                                {order?.distance_m / 1000} км
                              </Text>
                            }
                          />
                        )}

                        <View style={styles.verticalSeparator} />
                        <DetailView
                          title={'Груз'}
                          children={
                            <Text style={styles.cardText}>
                              {order?.cargo_type}
                            </Text>
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
                                {`${order?.tariff_c}`.substring(0, 3)} ₽/т
                              </Text>
                              <Text style={styles.cardDescription}>
                                Без НДС
                              </Text>
                            </View>
                          }
                        />
                        <View style={styles.verticalSeparator} />
                        <DetailView
                          title={'Всего к перевозке'}
                          children={
                            <View style={styles.rowCentering}>
                              <Text style={styles.cardText}>
                                {`${order?.tonnage_kg}`.substring(0, 3)} т
                              </Text>
                              <Text style={styles.cardDescription}>
                                / из{' '}
                                {`${order?.tonnage_balance_kg}`.substring(0, 3)}{' '}
                                т
                              </Text>
                            </View>
                          }
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.metaInset}>
                    <DetailView
                      title="Комментарий"
                      children={<Text style={styles.comment}>{comment}</Text>}
                    />
                  </View>

                  <View style={styles.dropDownContainer}>
                    <DropDownButton title={'Все детали'} />
                  </View>
                </View>
              }
            />

            <DetailOrderView
              title="Погрузка"
              children={
                <View style={styles.topInsets}>
                  <CargoContactsView
                    title={'Грузоотправитель'}
                    contact={shipper}
                  />
                </View>
              }
            />

            <DetailOrderView
              title="Выгрузка"
              children={
                <>
                  {consignee.companyName && (
                    <View style={styles.topInsets}>
                      <CargoContactsView
                        title={'Грузополучатель'}
                        contact={consignee}
                      />
                    </View>
                  )}
                </>
              }
            />
          </View>
        </ScrollView>

        <FooterView />
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;
