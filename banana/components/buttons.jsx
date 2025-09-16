// components/buttons.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '@/utils/helper'


const Buttons = (props) => {
  return (
    <TouchableOpacity 
      style={
        [ styles.button, 
          props.num === 'C' ? styles.acstyle :
          (props.num === '/' || props.num === 'X' || props.num === '-' || props.num === '+'|| props.num === '()' ||
          props.num === '%'||props.num === '=' ) ? styles.operstyle :
          props.num === '<=' ? styles.equstyle :
          null  
        ]
      } 
      onPress={props.onPress}
      activeOpacity={0.8}
    >
      <Text style={
        [ styles.buttonText,
          props.num === '<=' ? styles.equstyle :
          null
        ]
      }>
        {props.num}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray900,
    margin: 2,
  },
  operstyle:{
    backgroundColor: COLORS.gray600,
  },
  equstyle:{
    backgroundColor: COLORS.gray100,
    color: COLORS.gray900,
  },
  acstyle:{
    backgroundColor: COLORS.gray300,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },
})

export default Buttons