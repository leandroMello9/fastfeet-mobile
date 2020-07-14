import React, { useMemo } from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  SubContainerDelivery,
  ContainerSubContainerDelivery,
  TextSubContainerDelivery,
  ButtonSubContainerDelivery,
} from './styles';

export default function SubDelivery({ navigation, item }) {
  const dateFormatted = useMemo(
    () => format(new Date(item.start_date), "dd'/'MM'/'yyyy", { locale: pt }),
    [item.start_date]
  );
  return (
    <SubContainerDelivery>
      <ContainerSubContainerDelivery>
        <TextSubContainerDelivery style={{ fontSize: 10 }}>
          Data
        </TextSubContainerDelivery>
        <TextSubContainerDelivery style={{ fontWeight: 'bold' }}>
          {dateFormatted}
        </TextSubContainerDelivery>
      </ContainerSubContainerDelivery>
      <ContainerSubContainerDelivery>
        <TextSubContainerDelivery style={{ fontSize: 10 }}>
          Cidade
        </TextSubContainerDelivery>
        <TextSubContainerDelivery style={{ fontWeight: 'bold' }}>
          {item.recipient.city}
        </TextSubContainerDelivery>
      </ContainerSubContainerDelivery>
      <ContainerSubContainerDelivery>
        <ButtonSubContainerDelivery>
          <TextSubContainerDelivery
            style={{ color: '#7159c1', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('Detalhes', { item })}
          >
            Ver detalhes
          </TextSubContainerDelivery>
        </ButtonSubContainerDelivery>
      </ContainerSubContainerDelivery>
    </SubContainerDelivery>
  );
}
