import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux'
import { 
  Container, 
  HeaderDelivere, 
  ButtonNext, 
  ProfileHeader, 
  SubHeaderDelivery,
  ImageProfileHeader,
  NameProfileHeader,
  NameContainerProfile,
  WelcomeProfile,
  TitleHeaderDelivery,
  ButtonHeaderDelivery,
  TitleButtonHeaderDelivery,
 

} from './styles';
import ListDelivery from '../../components/ListDelivery'
import api from '../../services/api';
import {logoutUser} from '../../store/modules/auth/actions'

export default function Deliveries({ navigation }) {
  const dispatch = useDispatch()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders')
      setOrders(response.data)
    }
    loadOrders()

  }, [])
  function handleLagout() {

    dispatch(logoutUser())
  }
  const profile = useSelector(state => state.auth.user)
  
 
  return (
    <Container>
      <HeaderDelivere>
        <ProfileHeader>
          <ImageProfileHeader source={{uri: profile.avatar.url}} />
          <NameContainerProfile>
            <WelcomeProfile>Bem vindo de volta</WelcomeProfile>
            <NameProfileHeader>Leandro Mello</NameProfileHeader>
          </NameContainerProfile>
        </ProfileHeader>
        <ButtonNext onPress={() => handleLagout()}>
          
          <MaterialCommunityIcons
            name="page-next"
            size={25}
            color="#E74040"

          />
          
        </ButtonNext>
      </HeaderDelivere>
      
      <SubHeaderDelivery>
        <TitleHeaderDelivery>Entregas</TitleHeaderDelivery>
        <ButtonHeaderDelivery style={{borderBottomWidth: 1}}>
          <TitleButtonHeaderDelivery style={{color: '#7159c1'}}>Pendentes</TitleButtonHeaderDelivery>
        </ButtonHeaderDelivery>
        <ButtonHeaderDelivery>
          <TitleButtonHeaderDelivery>Entregues</TitleButtonHeaderDelivery>
        </ButtonHeaderDelivery>
      </SubHeaderDelivery>

      <FlatList
        data={orders}
        renderItem={item => <ListDelivery item={item} navigation={navigation} />}
        keyExtractor={(item) => String(item.id)}
      />
         
    </Container>  
  );
}


