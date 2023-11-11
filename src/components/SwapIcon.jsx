import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useContext } from 'react'

import ic_arrows_down_up from '@images/ic_arrows_down_up.png'
import { Colors } from '../constants/Colors'
import { AppContext } from '../../App'

const SwapIcon = () => {
    const {state,setState} = useContext(AppContext);
    const {theme} = state;
    
    const onPressHandler = ()=>{
        setState(prevState=>{
            return {
                ...prevState,
                input : prevState.output,
                output : prevState.input,
                inputCurrency: prevState.outputCurrency,
                outputCurrency: prevState.inputCurrency
            }
        })
    }

  return (
    <TouchableOpacity onPress={onPressHandler} style={[styles.container,theme==='dark' && styles.darkContainer]}>
      <Image source={ic_arrows_down_up} style={{tintColor: theme==='dark' ? 'white':'black'}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
        position:'absolute',
        top:'25%',
        left: Dimensions.get('window').width/2 - 25
    },
    darkContainer:{
        backgroundColor: Colors.dark.background
    }
})

export default SwapIcon