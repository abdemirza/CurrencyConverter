import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import {AppContext} from '../../App';
import {convertCurrency, formatNumber} from '../functions/helperFunctions';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomInput = props => {
  const {value, color, isInput} = props;
  const {state, setState} = useContext(AppContext);
  const {theme, inputCurrency, outputCurrency, exchangeRates, input} = state;
  const [open, setOpen] = useState(false);
  // const [dropValue, setDropValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'AUD', value: 'AUD'},
    {label: 'USD', value: 'USD'},
  ]);

  const extractCurrencyOptions = exchangeRates => {
    return Object.keys(exchangeRates).map(currencyCode => {
      return {label: currencyCode, value: currencyCode};
    });
  };
  console.log(inputCurrency, outputCurrency);

  const setDropValue = value => {
    if (isInput) {
      setState(prevValue => {
        return {
          ...prevValue,
          inputCurrency: value(),
        };
      });
    } else {
      setState(prevValue => {
        return {
          ...prevValue,
          outputCurrency: value(),
          output: convertCurrency(
            input,
            inputCurrency,
            outputCurrency,
            exchangeRates,
          ),
        };
      });
    }
  };

  useEffect(() => {
    const values = extractCurrencyOptions(state.exchangeRates);
    setItems(values);
    setState(prevState => ({
      ...prevState,
      inputCurrency: values[0]?.label,
      outputCurrency: values[0]?.label,
    }));
  }, [exchangeRates.length]);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text
        style={[
          styles.valueText,
          theme == 'dark'
            ? {color: Colors.dark.text}
            : {color: Colors.light.text},
        ]}>
        {' '}
        {formatNumber(value)}
      </Text>
      <View>
        <DropDownPicker
          open={open}
          searchable
          style={styles.dropDown}
          theme={theme === 'dark' ? 'DARK' : 'LIGHT'}
          dropDownContainerStyle={styles.dropDownContainer}
          value={isInput ? inputCurrency : outputCurrency}
          dropDownDirection="TOP"
          placeholder={items?.length ? items[0].label : 'USD'}
          items={items}
          setOpen={setOpen}
          setValue={setDropValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: Colors.light.input,
    borderRadius: 16,
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
  },
  dropDown: {
    width: 80,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  dropDownContainer: {
    width: 100,
    height: 120,
    alignSelf: 'center',
  },
});
export default CustomInput;
