import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import Key from './Key';
import {Colors} from '../../constants/Colors';
import {AppContext} from '../../../App';

const Keypad = () => {
  const {state} = useContext(AppContext);
  const {theme} = state;

  const isDarkMode = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        isDarkMode
          ? {backgroundColor: Colors.dark.primary}
          : {backgroundColor: Colors.light.primary},
      ]}>
      <View style={styles.row}>
        <Key number={1} />
        <Key number={2} />
        <Key number={3} />
      </View>
      <View style={styles.border} />
      <View style={styles.row}>
        <Key number={4} />
        <Key number={5} />
        <Key number={6} />
      </View>
      <View style={styles.border} />
      <View style={styles.row}>
        <Key number={7} />
        <Key number={8} />
        <Key number={9} />
      </View>
      <View style={styles.border} />
      <View style={styles.row}>
        <Key />
        <Key number={0} />
        <Key number={'-'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: Colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
  },
  border: {
    width: '20%',
    height: 1,
    marginVertical: 20,
    backgroundColor: '#9095A0FF',
  },
});

export default Keypad;
