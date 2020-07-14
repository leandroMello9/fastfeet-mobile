import React, {useState} from 'react';

import {useDispatch} from 'react-redux'
import logo from '../../assets/logo.png'
import { 
  Container, 
  TextInputHome, 
  Header, 
  ImageHeader, 
  TitleHeader,
  ButtonHome,
  ButtonHomeTitle,
  InputContainer
} from './styles';
import { signInRequest } from '../../store/modules/auth/actions'

export default function Home({navigation}) {
  const [idSignIn, setIdSignIn] = useState();
  const dispatch = useDispatch()
  function handleSignIn() {
    dispatch(signInRequest(idSignIn))
  }
  return (
    <Container>
      <Header>
        <ImageHeader source={logo} />
        <TitleHeader>FAST FEET</TitleHeader>
      </Header>
      <InputContainer>
        <TextInputHome
          value={idSignIn}
          onChangeText={setIdSignIn}
        />
      </InputContainer>
      
      <ButtonHome>
        <ButtonHomeTitle onPress={() => handleSignIn()}>
          Entrar no sistema
        </ButtonHomeTitle>
      </ButtonHome>
    </Container>
  );
}
