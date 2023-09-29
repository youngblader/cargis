import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../styles';
import { Status, StatusViewProps } from './types';
import { styles } from './StatusView.styles';

const StatusView: FC<StatusViewProps> = ({ status }) => {
  const { textColor, backgroundColor, text } = getStatusStyle(status);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.statusText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const getStatusStyle = (value: string) => {
  switch (value) {
    case Status.active:
      return {
        textColor: colors.blue,
        backgroundColor: colors.lightBlue,
        text: 'Активная',
      };
    case Status.completed:
      return {
        textColor: colors.green,
        backgroundColor: colors.lightGreen,
        text: 'Завершена',
      };
    case Status.on_pause:
      return {
        textColor: colors.halfBlack,
        backgroundColor: colors.statusGray,
        text: 'На паузе',
      };
    default:
      return {};
  }
};

export default StatusView;
