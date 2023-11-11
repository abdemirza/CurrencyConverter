import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import ModeContainer from '@components/ModeContainer';
import Keypad from '@components/Keypad/Keypad';
import {AppContext} from '../../App';
import CustomInput from '../components/CustomInput';
import {Colors} from '../constants/Colors';
import SwapIcon from '../components/SwapIcon';

const MainScreen = props => {
  const {state} = useContext(AppContext);
  const {theme} = state;
  const {input, output} = state;
  return (
    <View style={styles.container}>
      <ModeContainer />
      <View style={{flex: 0.45, justifyContent: 'center'}}>
        {/* output field */}
        <CustomInput
          isInput={false}
          value={output}
          color={theme == 'dark' ? Colors.dark.input : Colors.light.input}
        />
        {/* input field */}
        <CustomInput
          isInput={true}
          value={input}
          color={theme == 'dark' ? Colors.dark.output : Colors.light.output}
        />
      </View>
      <SwapIcon />
      <Keypad />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default MainScreen;
