import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 25%;
  background-color: #7D40E7;
  justify-content: center;
  align-items: center;
 
`;
export const SubHeaderContainer = styled.View`
  flex-direction: row;
 
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
`;
export const GoBackButtonHeader = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  top: 5px;
  left: 5px;

`;
export const TitleHeader = styled.Text`
  font-size: 15px;
  color: #fff;
  right: 110px;
  font-weight: bold;
  
`;

export const SubTitleHeader = styled.Text`
    font-size: 14px;
    font-weight: bold;
  color: #fff;
  margin-top: 25px;

`;
export const ListProblemContainer = styled.View`
  width: 350px;
  max-width: 400px;


 
  flex-direction: column;
 
 
  align-items: center;
  background-color: #fff;
  top: 50px;
 margin-bottom: 75px;
`;

export const ListProblem = styled.View`
  width: 100%;
  height: 60px;
  left: 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  bottom: 20px;

  



`;
export const TitleListProblem = styled.Text`
width: 200px;
  font-size: 14px;
  color: #999999;
  left: 15px;

`
export const TitleDataProblem = styled.Text`
width: 100px;
  font-size: 12px;
  color: #999999;
 
`
