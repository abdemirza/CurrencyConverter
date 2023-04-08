import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';

import ic_moon_filled from '@images/ic_moon_filled.png';
import ic_sun_filled from '@images/ic_sun_filled.png';
import ic_moon_outline from '@images/ic_moon_outline.png';
import ic_sun_outline from '@images/ic_sun_outline.png';
import {Colors} from '../constants/Colors';

const ModeContainer = props => {
  const {theme, setTheme} = props;
  const isDarkMode = theme === 'dark';

  return (
    <View
      style={[
        styles.modeContainer,
        isDarkMode ? styles.darkPrimary : styles.lightPrimary,
      ]}>
      <Pressable onPress={() => setTheme('light')} style={styles.modeIcon}>
        <Image source={isDarkMode ? ic_sun_outline : ic_sun_filled} />
      </Pressable>
      <Pressable onPress={() => setTheme('dark')} style={styles.modeIcon}>
        <Image source={isDarkMode ? ic_moon_filled : ic_moon_outline} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  modeContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: 100,
    height: 34,
    backgroundColor: Colors.dark.primary,
    borderRadius: 8,
  },
  modeIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  darkPrimary: {
    backgroundColor: Colors.dark.primary,
  },
  lightPrimary: {
    backgroundColor: Colors.light.primary,
  },
});

export default ModeContainer;
