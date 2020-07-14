import React, { useEffect, useState, useMemo } from 'react';
import {  StyleSheet } from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt'
import {AntDesign} from '@expo/vector-icons'
import moment from 'moment';
 import { Container
  ,HeaderContainer
  ,TitleHeader
  ,GoBackButtonHeader,
  SubHeaderContainer,
  SubTitleHeader,
  List,
  ListProblemContainer,
  ListProblem,
  TitleListProblem,
  TitleDataProblem,

  

} from './styles';
import api from '../../services/api';

export default function ViewProblem({ navigation }) {
  const [problems, setProblems] = useState([]);
  const item = navigation.getParam('item');
 
  const dateFormatted = useMemo(
    () => moment(item.createdAt).format('DD/MM/YYYY')
    
  );
  useEffect(() => {
    async function loadProblems() {
      const item = navigation.getParam('item');
      const {deliveryman} = item
      const {id} = deliveryman
      
     
      const response = await api.get(`/delivery/${id}/problems`);
     
      setProblems(response.data);
    }
    loadProblems()
  }, [])
 

  return (
    <Container>
      <HeaderContainer>
        <SubHeaderContainer>
          <GoBackButtonHeader onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={22}
              color="#fff"
            />
          </GoBackButtonHeader>
          <TitleHeader>Vizualizar Problemas</TitleHeader>
        </SubHeaderContainer>
        <SubTitleHeader>{item.product}</SubTitleHeader>
       

      </HeaderContainer>
      
      <>
      
        {problems.map(item => {
        return (
          <ListProblemContainer styles={styles.container} key={item.id}>
            <ListProblem>
              <TitleListProblem>{item.description}</TitleListProblem>
              <TitleDataProblem>{dateFormatted}</TitleDataProblem>
            </ListProblem>
            
          </ListProblemContainer>
        )
        
      })}
      </>
    
 
     
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#eee",
 
  shadowOpacity: 0.20,
  shadowRadius: 1.41,

  elevation: 3,
  }
})
