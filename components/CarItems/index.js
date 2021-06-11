import React from 'react';
import styles from './styles';
import { View, Text, ImageBackground } from 'react-native';
import ButtonStyles from '../ButttonStyles';

const index = (props) => {
  const { name, tagline, image } = props.car;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.text}>
          <Text style={{ fontSize: 40 }}>{name}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>{tagline}</Text>
        </View>
        <ButtonStyles type='Custom Order' />
        <ButtonStyles type='Exesting Inventory' />
      </ImageBackground>
    </View>
  );
};

export default index;
