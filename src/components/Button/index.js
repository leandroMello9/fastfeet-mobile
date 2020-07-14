import React from 'react';


import { AntDesign } from '@expo/vector-icons'
import { Container, Button, ButtonText } from './styles';

function Teste({ 
  nameIcon,
   colorIcon, 
   sizeIcon, 
   labelButton, 
   onPress
  }) {

  return (
    <Container>
      <Button onPress={onPress}>
        <AntDesign 
          size={sizeIcon} 
          name={nameIcon}
          color={colorIcon}
        />
        <ButtonText>{labelButton}</ButtonText>
      </Button>
    </Container>
  );
}

export default Teste