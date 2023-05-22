import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ModeContainer from '@components/ModeContainer';
import Keypad from '@components/Keypad/Keypad';

const MainScreen = props => {
  const {theme, setTheme} = props;
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <ModeContainer theme={theme} setTheme={setTheme} />
      <View style={{flex: 0.45}}>
        <Text>{input}</Text>
      </View>
      <Keypad input={input} setInput={setInput} theme={theme} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
