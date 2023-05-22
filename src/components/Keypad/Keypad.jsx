import {StyleSheet, View} from 'react-native';
import React from 'react';
import Key from './Key';
import {Colors} from '../../constants/Colors';

const Keypad = props => {
  const {theme, input, setInput} = props;

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
        <Key input={input} setInput={setInput} theme={theme} number={1} />
        <Key input={input} setInput={setInput} theme={theme} number={2} />
        <Key input={input} setInput={setInput} theme={theme} number={3} />
      </View>
      <View style={styles.border} />
      <View style={styles.row}>
        <Key input={input} setInput={setInput} theme={theme} number={4} />
        <Key input={input} setInput={setInput} theme={theme} number={5} />
        <Key input={input} setInput={setInput} theme={theme} number={6} />
      </View>
      <View style={styles.border} />
      <View style={styles.row}>
        <Key input={input} setInput={setInput} theme={theme} number={7} />
        <Key input={input} setInput={setInput} theme={theme} number={8} />
        <Key input={input} setInput={setInput} theme={theme} number={9} />
      </View>
      <View style={styles.border} />
      <View style={styles.row}>
        <Key />
        <Key input={input} setInput={setInput} theme={theme} number={0} />
        <Key input={input} setInput={setInput} theme={theme} number={'-'} />
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
    marginHorizontal: 20,
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
