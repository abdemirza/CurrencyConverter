import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

import ic_sun_outline from '@images/ic_sun_outline.png';
import ic_moon_filled from '@images/ic_moon_filled.png';
import ic_sun_filled from '@images/ic_sun_filled.png';
import ic_moon_outline from '@images/ic_moon_outline.png';

const ModeContainer = props => {
  const {theme, setTheme} = props;

  const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, !isDarkMode && styles.lightContainer]}>
      <Pressable onPress={() => setTheme('light')} style={styles.iconContainer}>
        <Image source={isDarkMode ? ic_sun_outline : ic_sun_filled} />
      </Pressable>
      <Pressable onPress={() => setTheme('dark')} style={styles.iconContainer}>
        <Image source={isDarkMode ? ic_moon_filled : ic_moon_outline} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.primary,
    height: 34,
    width: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 28,
  },
  lightContainer: {
    backgroundColor: Colors.light.primary,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ModeContainer;
