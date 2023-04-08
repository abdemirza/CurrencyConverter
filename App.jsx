import {StyleSheet, Appearance, SafeAreaView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from './src/constants/Colors';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const [colorScheme, setColorScheme] = useState(() =>
    Appearance.getColorScheme(),
  );

  const handleColorScheme = useCallback(theme => {
    setColorScheme(theme.colorScheme);
  }, []);

  useEffect(() => {
    const darkMode = Appearance.addChangeListener(handleColorScheme);
    return () => {
      darkMode.remove();
    };
  }, [handleColorScheme]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        colorScheme === 'dark'
          ? {backgroundColor: Colors.dark.background}
          : {backgroundColor: Colors.light.background},
      ]}>
      <MainScreen theme={colorScheme} setTheme={setColorScheme} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
