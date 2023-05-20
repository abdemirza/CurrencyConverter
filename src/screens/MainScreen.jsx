import {View, Text} from 'react-native';
import React from 'react';
import ModeContainer from '../components/ModeContainer';

const MainScreen = props => {
  const {theme, setTheme} = props;
  return (
    <View>
      <ModeContainer theme={theme} setTheme={setTheme} />
    </View>
  );
};

export default MainScreen;
