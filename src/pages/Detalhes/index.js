import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  Container,
  DetailsContainer,
  ButtonContainer,
  Header,
  GoBack,
  Title,
  DetailsInfo,
  InfoContainer,
  StatusContainer,
  TitleInfo,
  IconTextContainer,
  ContainerText,
  DateContainer,
  DateSubContainer,
  DateTitleText,
  DateInfoText,
  StatusText,
  InfoStatus,
  RecipientContainer,
  RecipientName,
  RecipientTitle,
  AddressContainer,
  AddressName,
  AddressTitle,
  ProductContainer,
  ProductTitle,
  ProductName
} from './styles';
import Button from '../../components/Button';

export default function Detalhes({ navigation }) {
  const item = navigation.getParam('item');
  const dateOutPutFormatted = useMemo(
    () => format(new Date(item.end_date), "dd'/'MM'/'yyyy", { locale: pt }),
    [item.start_date]
  );
  const dateEntryFormated = useMemo(
    () => format(new Date(item.start_date), "dd'/'MM'/'yyyy", { locale: pt }),
    [item.start_date]
  );


  return (
    <Container>
      <Header>
        <GoBack onPress={() => navigation.goBack()}>
          <Entypo name="chevron-small-left" color="#fff" size={32} />
        </GoBack>
        <Title>
          Detalhes encomenda
        </Title>
      </Header>
      <DetailsContainer>
        <DetailsInfo>
          <InfoContainer style={styles.container}>
            <IconTextContainer>
              <MaterialCommunityIcons name="truck" size={22} color="#7139c1" />
              <TitleInfo>Informações de entrega</TitleInfo>
            </IconTextContainer>
            <RecipientContainer>
              <RecipientTitle>DESTINATARIO</RecipientTitle>
              <RecipientName>{item.recipient.name}</RecipientName>
             
            </RecipientContainer>
            <AddressContainer>
              <AddressTitle>ENDEREÇO DE ENTREGA</AddressTitle>
              <AddressName>{item.recipient.name}</AddressName>
             
            </AddressContainer>
            <ProductContainer>
              <ProductTitle>PRODUTO</ProductTitle>
              <ProductName>{item.recipient.name}</ProductName>
             
            </ProductContainer>
          </InfoContainer>
          <StatusContainer style={styles.container}>
            <IconTextContainer>
              <Ionicons name="md-calendar" size={22} color="#7139c1" />
              <TitleInfo>Situação da entrega</TitleInfo>
            </IconTextContainer>
            <ContainerText>
              <StatusText>STATUS</StatusText>
              <InfoStatus>{item.status}</InfoStatus>
            </ContainerText>
            <DateContainer>
              <DateSubContainer>
                <DateTitleText>DATA DE RETIRADA</DateTitleText>
                <DateInfoText>{dateEntryFormated}</DateInfoText>
              </DateSubContainer>
              <DateSubContainer>
                <DateTitleText>DATA DE ENTREGA</DateTitleText>
                <DateInfoText>{dateOutPutFormatted}</DateInfoText>
              </DateSubContainer>
            </DateContainer>
          </StatusContainer>
          <ButtonContainer>
            <Button
              colorIcon="#E74040"
              sizeIcon={22}
              labelButton="Informar Problema"
              nameIcon="closecircleo"
              onPress={() => navigation.navigate('NewProblemDelivery', {item})}
            />
            <Button
              colorIcon="#E7BA40"
              sizeIcon={22}
              labelButton="Vizualizar problema"
              nameIcon="exclamationcircleo"
              onPress={() => navigation.navigate('ViewProblem', {item})}
            />
            <Button
              colorIcon="#7D40E7"
              sizeIcon={22}
              labelButton="Confirma Entrega"
              nameIcon="checkcircleo"
              onPress={() => {}}
            />
          </ButtonContainer>
        </DetailsInfo>
          
       
    
       

      </DetailsContainer>
     
    </Container>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7D40E7',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: '#fff',
    bottom: 25,
    right: 12,
  },

  container: {
    

    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: '#fff',
    elevation: 3,
  },
  subContainer: {
    top: windowHeight / 5.02,
    shadowColor: '#eee',

    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: '#fff',
    elevation: 3,
  },
  info: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
  },
});
