import React from 'react';
import { StyleSheet } from 'react-native'

import { 
  Container,
  DeliveryContainer, 
  DeliveryContainerText, 
  ContainerPointerDelivery, 
  SubContainerDelivery,
  ContainerSubContainerDelivery,
  TextSubContainerDelivery,
  ButtonSubContainerDelivery 
} from './styles';
import PointerDelivery from '../PointerDelivery'
import SubDelivery from '../SubDelivery'
import {FontAwesome5} from '@expo/vector-icons'
export default function ListDelivery({ navigation, item }) {
  
 
  return (
  
    <Container style={styles.container}>
      
      <DeliveryContainer>
      <FontAwesome5
        name="truck"
        size={22}
        color="#7D40E7"
      />
      <DeliveryContainerText>
       {item.item.recipient.name}
      </DeliveryContainerText>
      </DeliveryContainer>
      
    <ContainerPointerDelivery>
      <PointerDelivery item={item.item}/>
    

    </ContainerPointerDelivery>
    <SubDelivery navigation={navigation} item={item.item}/>
    </Container>
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#eee",
 
  shadowOpacity: 0.20,
  shadowRadius: 1.41,

  elevation: 3,
  }
})