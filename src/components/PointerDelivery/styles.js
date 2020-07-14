import styled from 'styled-components/native';

export const Container = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  border-color: #7159c1;
  border-width: 2px;
  background-color: ${props => props.status ? '#7159c1' : '#fff'}
  
`;
