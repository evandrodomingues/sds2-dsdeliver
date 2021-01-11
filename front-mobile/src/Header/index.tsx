import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#DA5C5C'
  },
});

export default Header;
