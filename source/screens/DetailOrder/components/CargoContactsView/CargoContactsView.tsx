import React, {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {CustomerView, DetailView} from '../../../../components';

import {CargoContactsProps} from './types';
import {phoneMasked} from '../../../../utils/validator';
import {styles} from './CargoContactsView.styles';

const phoneIcon = require('../../../../../assets/phone.png');

const CargoContactsView: FC<CargoContactsProps> = ({title, contact}) => {
  const {companyName, innCompany, spokesperson} = contact;

  const phone = spokesperson.phone ?? '';

  return (
    <View>
      <DetailView
        title={title}
        children={
          <>
            <View>
              <CustomerView customer={companyName ?? ''} />
              <Text style={styles.innText}>ИНН: {innCompany ?? ''}</Text>
            </View>
          </>
        }
      />

      {spokesperson?.name && (
        <View style={styles.topInset}>
          <DetailView
            title={'Ответственный представитель'}
            children={
              <View>
                <View style={styles.contactsContainer}>
                  <Text style={styles.cardText}>{spokesperson?.name}</Text>
                  <FastImage
                    source={phoneIcon}
                    style={styles.phoneIcon}
                    resizeMode={'cover'}
                  />
                </View>
                <Text style={styles.phoneText}>{phoneMasked(phone)}</Text>
              </View>
            }
          />
        </View>
      )}
    </View>
  );
};

export default CargoContactsView;
