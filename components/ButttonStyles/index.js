import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const index = (props) => {
  const type = props.type;
  const background = type === 'Custom Order' ? 'orange' : 'white';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          alert(' button clicked');
        }}
        style={[styles.buttonbox, { backgroundColor: background }]}
      >
        <Text style={styles.text}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
