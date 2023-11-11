import {SafeAreaView, Appearance, StyleSheet} from 'react-native';
import React, {useEffect, useState, createContext} from 'react';
import {Colors} from './src/constants/Colors';
import MainScreen from './src/screens/MainScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AppContext = createContext();
const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const [state, setState] = useState({
    theme: Appearance.getColorScheme(),
    input: '',
    output: '',
    inputCurrency: '',
    outputCurrency: '',
    exchangeRates: [],
  });

  useEffect(() => {
    AsyncStorage.getItem('theme').then(theme => {
      if (theme !== null) {
        setState(prevState => {
          return {...prevState, colorScheme: theme};
        });
        setColorScheme(theme);
      } else {
        Appearance.addChangeListener(theme => {
          setState(prevState => {
            return {...prevState, colorScheme: theme.colorScheme};
          });
          setColorScheme(theme.colorScheme);
        });
      }
    });
    AsyncStorage.getItem('exchangeRates').then(data => {
      if (data === null) {
        axios
          .get(
            'https://api.currencyapi.com/v3/latest?apikey=dwUYhPj0zgwIQY0wzj59hHUyAyi3mEerE6nXbhrA',
          )
          .then(res => {
            setState(prevState => ({
              ...prevState,
              exchangeRates: res.data.data,
            }));
            AsyncStorage.setItem(
              'exchangeRates',
              JSON.stringify(res.data.data),
            );
          });
      } else {
        const parsedData = JSON.parse(data);
        console.log(data);
        setState(prevState => ({...prevState, exchangeRates: parsedData}));
      }
    });
  }, []);

  const setTheme = theme => {
    setColorScheme(theme);
    AsyncStorage.setItem('theme', theme);
  };

  return (
    <AppContext.Provider value={{state, setState}}>
      <SafeAreaView
        style={
          state.theme === 'dark' ? styles.darkContainer : styles.lightContainer
        }>
        <MainScreen theme={colorScheme} setTheme={setTheme} />
      </SafeAreaView>
    </AppContext.Provider>
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
