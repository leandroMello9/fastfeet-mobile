import React from 'react';
import { View, Image, Text } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from '../../store/modules/auth/actions'
 import { Container, ContainerImage, ContainerProfile, ButtonLogout } from './styles';


export default function Profile() {
  const dispatch = useDispatch()
  function handleLagout() {
    dispatch(logoutUser())
  }
  const profile = useSelector(state => state.auth.user)
  return (
    <Container>
      <ContainerImage>
        <Image
          source={{uri: profile.avatar.url}}
          style={{ width: 160, height: 160, borderRadius: 80, right: 20 }}
        />
      </ContainerImage>
      <ContainerProfile>
        <Text style={{fontSize: 11, marginBottom: 4}}>Nome Completo</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Leandro de Melo</Text>
        <Text style={{fontSize: 11, marginBottom: 4}}>E-mail</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold',marginBottom: 4 }}>Leandro@gmail.com</Text>
        <Text style={{fontSize: 11, marginBottom: 4}}>Data de cadastro </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>10/1/2020</Text>
        <ButtonLogout onPress={handleLagout}>
          <Text style={{color: '#fff', fontSize: 15}}>Lagout</Text>
        </ButtonLogout>
      </ContainerProfile>
    </Container>
  );
}
