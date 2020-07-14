import React from 'react';
import { View, StyleSheet, KeyboardAvoidingViewm } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { 
  Container, 
  ContainerHeader, 
  TextHeader, 
  ContainerButtonGoBack, 
 
  NewProblemInput,
  SendProblemButton,
  TextSendButton,
  
} from './styles';

export default function NewProblemDelivery({ navigation }) {
  return (
    <Container>
      <ContainerHeader>
        <ContainerButtonGoBack onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={24}
            color="#fff"
          />
        </ContainerButtonGoBack>
        <TextHeader>
          Informar Problema
        </TextHeader>
      </ContainerHeader>
  
      <View style={{position: 'relative', flex:1, bottom: 50, elevation: 2, borderRadius: 4}}>
        <View style={{width: '85%', height: '80%', backgroundColor: '#fff', position: 'absolute', alignSelf: "center"}}>
          <NewProblemInput />
        </View>
       
      </View>
      
     
          
     
      
      <SendProblemButton>
        <TextSendButton>Enviar</TextSendButton>
      </SendProblemButton>
    
    
      
    </Container>
  );
}

const styles = StyleSheet.create({
 
  
  container: {

  shadowColor: "#eee",
  flex: 1,
 
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  backgroundColor: '#fff',

  elevation: 1  ,
  },
 

})
