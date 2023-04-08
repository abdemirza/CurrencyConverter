import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import ModeContainer from '../components/ModeContainer';

const MainScreen = props => {
  const {theme, setTheme} = props;
  const isDarkMode = theme === 'dark';
  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkBackground : styles.lightBackground,
      ]}>
      <ModeContainer theme={theme} setTheme={setTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  darkBackground: {
    backgroundColor: Colors.dark.background,
  },
  lightBackground: {
    backgroundColor: Colors.light.background,
  },
});

export default MainScreen;
