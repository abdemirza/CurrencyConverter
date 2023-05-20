import {Text, SafeAreaView, Appearance, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from './src/constants/Colors';
import MainScreen from './src/screens/MainScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    AsyncStorage.getItem('theme').then(theme => {
      if (theme !== null) {
        setColorScheme(theme);
      } else {
        Appearance.addChangeListener(theme => {
          setColorScheme(theme.colorScheme);
        });
      }
    });
  }, []);

  const setTheme = theme => {
    setColorScheme(theme);
    AsyncStorage.setItem('theme', theme);
  };

  return (
    <SafeAreaView
      style={
        colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer
      }>
      <MainScreen theme={colorScheme} setTheme={setTheme} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.dark.background,
    flex: 1,
  },
  lightContainer: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
});
export default App;
