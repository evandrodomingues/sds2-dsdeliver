import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';

import { Order } from '../types';
import Header from '../Header';

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}

function OrderDetails({ route }: Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handlerOnPress = () => {
    navigation.navigate('Orders');
  }

  return (
    <>
      <Header />
      <View>
        <Text>Detalhes do Pedido {order.id}</Text>
      </View>

    </>
  );
}

const styles = StyleSheet.create(
{
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});

export default OrderDetails;
