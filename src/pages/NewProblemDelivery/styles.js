import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  background-color: #7D40E7;
  width: 100%;

  align-items: center;
  height: 180px;

`;

export const ContainerButtonGoBack = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  right: -18px;
  bottom: 20px;

`
export const TextHeader = styled.Text`
  font-size: 15px;
  color:#fff;
  right: -5%;
  bottom: 20px;


`

export const NewProblemContainer = styled.View`
  width: 90%;
  height: 300px;
  position: relative;
  
  border-radius: 4px;
  align-items: center;



`;
export const NewProblemInputContaier = styled.View`
  position: absolute;
  flex: 1;
`;

export const NewProblemInput = styled.TextInput.attrs({
  placeholder: 'Inclua o problema que ocorreu na \n entrega'
})`
    width: 400px;
    height: 42px;
    left: 20px;
    top: 20px;
  
 
   
    

`;
export const SendProblemButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 4px;
  bottom: 15%;
  background-color: #7D40E7;
  justify-content: center;
  align-items: center;

`;
export const TextSendButton = styled.Text`
  font-size: 17px;
  color:#fff;
 


`