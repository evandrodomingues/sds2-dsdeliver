import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Alert } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Order } from '../types';
import { confirmDelivery } from '../api';

import Header from '../Header';
import OrderCard from '../OrderCard';

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

  const handlerOnCancel = () => {
    navigation.navigate('Orders');
  }

  const handlerConfirmDelivery = () => { 
    confirmDelivery(order.id)
    .then(() => {
      Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
      navigation.navigate('Orders');
    })
    .catch(() => {
      Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
    })
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handlerConfirmDelivery}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handlerOnCancel}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
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
