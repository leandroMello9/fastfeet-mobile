import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function PointerDelivery({item}) {
  console.log(item)

  return (
    <>
    <View style={{ bottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
       <Container status={item.status === 'Aguardando' ? true : false}/>
       <View style={{width: 120, height: 2, backgroundColor: "#7159c1"}}></View>
      </View>
    <Text style={{fontSize: 12}}>Aguardando{"\n"} Retirada</Text>
    </View>
    <View style={{ bottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
       <Container status={item.status === 'Retirada' ? true : false} />
       <View style={{width: 120, height: 2, backgroundColor: "#7159c1"}}></View>
      </View>
    <Text style={{fontSize: 12}}>Retirada</Text>
    </View>
    <View style={{ bottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
       <Container status={item.status === 'Entregue' ? true : false} />
    
      </View>
    <Text style={{fontSize: 12, right: 12}}>Entregue</Text>
    </View>
    
    </>
  );
}
