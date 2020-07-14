import styled from 'styled-components/native';

export const Container = styled.View`
   width: 340px;
  height: 220px;
  margin-top: 15px;

  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin: 5px auto;

  background-color: #fff;


`;

export const DeliveryContainer = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  flex-direction: row;
  bottom: 60px;
  right: 15px;
  justify-content: space-around;

`
export const DeliveryContainerText = styled.Text`
  font-size: 15px;
  color: #7D40E7;
  left: 7px;
`;
export const ContainerPointerDelivery = styled.View`

  width: 300px;
  height: 20px;
  top: 50px;
  right: 160px;
  margin-bottom: 110px;
  flex-direction: row;

  justify-content: space-between;
`
