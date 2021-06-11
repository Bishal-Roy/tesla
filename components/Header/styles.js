import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    top: 20,
    paddingHorizontal: 10,
  },
  logo: {
    height: 20,
    width: 100,
    resizeMode: 'contain',
  },
  menu: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default styles;
