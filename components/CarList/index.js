import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import cars from './cars';
import CarItems from '../CarItems';

const index = () => {
  return (
    <View>
      {/* {cars.map((ele, index) => (
        <CarItems resource={ele[index]} />
      ))} */}

      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItems car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default index;
