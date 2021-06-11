import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  image: {
    flex: 1,
  },
  text: {
    flex: 1,
    top: 100,
    alignItems: 'center',
  },
});
export default styles;
