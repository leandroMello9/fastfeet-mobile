import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

`;

export const Header = styled.View`
  width: 100%;
  height: 25%;
  background-color: #7D40E7;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  


`;
export const GoBack = styled.TouchableOpacity`
  width: 120px;
  height: 60px;

`;
export const Title = styled.Text`
  width: 200px;
  height: 60px;
  font-size: 15px;
  color: #eee;
  right: 63px;
  top: 8px;
  font-weight: bold;
 
  
`;
export const DetailsContainer = styled.View`
  width: 550px;
  height: 100%;
  
 
  position: relative;

 

`;
export const DetailsInfo = styled.View`
  position: absolute;
 
  width: 360px;
  align-items: center;
  bottom: 50px;
  height: 100%;
 
 

`;
export const InfoContainer = styled.View`
  width: 300px;
  height: 200px;

  border-radius: 6px;
  margin-top: 5px;
`;
export const ContainerText = styled.View`
  width: 150px;
  left: 15px;
  top: 19px;


`;
export const DateContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  left: 15px;
`;
export const DateSubContainer = styled.View`
  width: 50%;
`;
export const DateTitleText = styled.Text`
  
  color: #999999;
  font-size: 14px;
  font-weight: bold;
`;
export const DateInfoText = styled.Text``;
export const TitleInfo = styled.Text`
  font-size: 13px;
  color: #7D40E7;
  font-weight: bold;
  left: 8px;
`;
export const StatusText = styled.Text`
   color: #999999;
   font-weight: bold;
   width: 200px;
   top: 4px;
`;
export const InfoStatus = styled.Text`
  top: 5px;
`;
export const IconTextContainer = styled.View`
  width: 200px;
  height: 20px;
  flex-direction: row;
  left: 12px;
  align-items: center;
  top: 12px;

`
export const StatusContainer = styled.View`
  width: 300px;
  height: 170px;

  border-radius: 6px;
  background-color: #fff;
  margin-top: 12px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  bottom: 90%;
  margin-top: 8px;
  margin-left: 32px;
  width: 380px;
  height: 20%;
 `

export const RecipientContainer = styled.View`
  width: 100px;
  height: 30px;
  left: 15px;
  top: 19px;
  

`;
export const RecipientTitle = styled.Text`
   color: #999999;
   font-weight: bold;
   width: 200px;
`
export const RecipientName = styled.Text`
  font-size: 13px;
  width: 150px;
`;
export const AddressContainer = styled.View`
   width: 100px;
  height: 30px;
  left: 15px;
  top: 42px;
`;
export const AddressTitle = styled.Text`
    color: #999999;
   font-weight: bold;
   width: 200px;
`;
export const AddressName = styled.Text`
     font-size: 13px;
     width: 150px;
`;
export const ProductContainer = styled.View`
   width: 100px;
  height: 30px;
  left: 15px;
  top: 60px;
`;
export const ProductTitle = styled.Text`
    color: #999999;
   font-weight: bold;
   width: 200px;
`;
export const ProductName = styled.Text`
     font-size: 13px;
     width: 150px;
`;