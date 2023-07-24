import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {colors, hitSlop} from '../../styles';
import {ButtonProps, ButtonType} from './types';
import {styles} from './Button.styles';

const Button: FC<ButtonProps> = ({
  typeButton = 'background',
  containerStyle = {},
  textSize = 14,
  buttonText,
  onPress,
}) => {
  // ButtonType[style]
  const btnStyle =
    ButtonType.background === typeButton
      ? styles.backgroundButton
      : styles.borderButton;

  const buttonTextColor =
    ButtonType.background === typeButton ? colors.white : colors.blue;

  return (
    <TouchableOpacity
      style={[styles.button, containerStyle, btnStyle]}
      hitSlop={hitSlop}
      onPress={onPress}>
      <Text style={[styles.text, {fontSize: textSize, color: buttonTextColor}]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
