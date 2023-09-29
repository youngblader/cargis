import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';

import { DropDownButtonProps } from './types';
import { IMAGES } from '../../../../utils/constants';

import { colors } from '../../../../styles';
import { styles } from './DropDownButton.styles';

const DropDownButton: FC<DropDownButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <FastImage
        source={IMAGES.bottomArrowIcon}
        style={styles.dropIcon}
        resizeMode={'contain'}
        tintColor={colors.blue}
      />
    </TouchableOpacity>
  );
};

export default DropDownButton;
