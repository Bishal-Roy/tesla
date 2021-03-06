import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CarList from './components/CarList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
