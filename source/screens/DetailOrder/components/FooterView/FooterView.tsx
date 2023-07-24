import React, {FC} from 'react';
import {View} from 'react-native';
import {Button} from '../../../../components';

import {FooterViewProps} from './types';
import {styles} from './FooterView.styles';

const FooterView: FC<FooterViewProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Button
        typeButton={'background'}
        buttonText={'Отправить отклик'}
        containerStyle={styles.buttonStyle}
        textSize={15}
      />
    </View>
  );
};

export default FooterView;
