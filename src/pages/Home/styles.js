import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #7D40E7;
    justify-content: center;
    align-items: center;
  
`;

export const Header = styled.View`

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;

`;
export const TitleHeader = styled.Text`
  width: 100px;
  height: 50px;
  font-size: 15px;
  color: #fff;


`
export const ImageHeader = styled.Image`
  width: 120px;
  margin-right: 20px;
  height: 80px;


`
export const ButtonHome = styled.TouchableOpacity`
  width: 300px;
  height: 60px;
  background-color: #82BF18;
  border-radius: 5px;
  justify-content: center;

`
export const ButtonHomeTitle = styled.Text`
  color: #fff;
  font-size: 15px;
  align-self: center;


`
export const InputContainer = styled.View`

  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: #FFFFFF;

  margin-bottom: 15px;
`;
export const TextInputHome = styled.TextInput.attrs({
  placeholder: 'Digite seu id de acesso'
})`
  

  font-size: 15px;
  flex: 1;
 
  margin-left: 25px;

`;




