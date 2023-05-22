import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';

import ic_delete from '@images/ic_delete.png';
import {Colors} from '../../constants/Colors';

const Key = props => {
  const {number, theme, input, setInput} = props;
  const isDarkMode = theme === 'dark';

  const onPressHandler = () => {
    if (number === '-') {
      setInput(input.substr(0, input.length - 1));
    } else setInput(input + number);
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
    fontWeight: 'bold',
  },
});
export default Key;
