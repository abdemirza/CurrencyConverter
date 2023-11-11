import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React, {useContext} from 'react';

import ic_delete from '@images/ic_delete.png';
import {Colors} from '../../constants/Colors';
import {AppContext} from '../../../App';
import {convertCurrency} from '../../functions/helperFunctions';

const Key = props => {
  const {number} = props;
  const {state, setState} = useContext(AppContext);
  const {theme, input, inputCurrency, outputCurrency, exchangeRates} = state;
  const isDarkMode = theme === 'dark';

  const onPressHandler = () => {
    if (number === '-') {
      setInput(input.substr(0, input.length - 1));
    } else setInput(input + number);
  };

  const setInput = updatedInput => {
    const convertedAmt = convertCurrency(
      updatedInput,
      inputCurrency,
      outputCurrency,
      exchangeRates,
    );

    setState({...state, input: updatedInput, output: convertedAmt});
  };

  if (number === undefined) return <View style={styles.container} />;

  if (number === '-')
    return (
      <Pressable onPress={onPressHandler} style={styles.container}>
        <Image
          style={
            isDarkMode
              ? {tintColor: Colors.dark.text}
              : {tintColor: Colors.light.text}
          }
          source={ic_delete}
        />
      </Pressable>
    );

  return (
    <Pressable onPress={onPressHandler} style={styles.container}>
      <Text
        style={[
          styles.number,
          isDarkMode ? {color: Colors.dark.text} : {color: Colors.light.text},
        ]}>
        {number}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 32,
    fontFamily: 'Roboto-Black',
  },
});
export default Key;
