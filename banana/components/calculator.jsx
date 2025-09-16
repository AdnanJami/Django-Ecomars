import { COLORS } from '@/utils/helper'
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Buttons from '@/components/buttons'
const Calculator = () => {
  const [display, setDisplay] = useState('0');
const [lastWasEquals, setLastWasEquals] = useState(false);

const handleButtonPress = (value) => {
  if (value === 'C') {
    setDisplay('0');
    setLastWasEquals(false);
    return;
  }
  
  if (value === '<=') {
    setDisplay((prev) => prev.length > 1 ? prev.slice(0, -1) : '0');
    setLastWasEquals(false);
    return;
  }
  
  if (value === '()') {
    const openParens = (display.match(/\(/g) || []).length;
    const closeParens = (display.match(/\)/g) || []).length;
    
    if (display === '0' || lastWasEquals) {
      setDisplay('(');
      setLastWasEquals(false);
      return;
    }
    
    if (openParens === closeParens || display.endsWith('(')) {
      setDisplay((prev) => prev + '(');
    } else if (openParens > closeParens && !display.endsWith('(')) {
      setDisplay((prev) => prev + ')');
    }
    setLastWasEquals(false);
    return;
  }
  
  if (value === '=') {
    try {
      const expression = display.replace(/X/g, '*')
        .replace(/(\d)(\()/g, '$1*$2')
        .replace(/(\))(\d)/g, '$1*$2')
        .replace(/(\))(\()/g, '$1*$2');
      
      const result = eval(expression);
      setDisplay(String(result));
      setLastWasEquals(true);
    } catch {
      setDisplay('Error');
      setLastWasEquals(false);
    }
    return;
  }
  
  // Handle operators
  if (['+', '-', '*', 'X', '/', '%'].includes(value)) {
    // Don't allow *, X, /, % as first input
    if (display === '0' && ['*', 'X', '/', '%'].includes(value)) {
      return; // Do nothing
    }
    
    // Allow minus as first input (for negative numbers)
    if (display === '0' && value === '-') {
      setDisplay('-');
      setLastWasEquals(false);
      return;
    }
    
    // Continue from result or append operator
    setDisplay((prev) => (prev === '0' ? value : prev + value));
    setLastWasEquals(false);
    return;
  }
  
  // Handle numbers and decimal point - start fresh after equals
  if (lastWasEquals) {
    setDisplay(value);
    setLastWasEquals(false);
  } else {
    setDisplay((prev) => (prev === '0' ? value : prev + value));
  }
};
  return (
    <View style={styles.container}> 
      <View style={styles.screen}>
        <Text style={styles.displayText}>
          {display}
        </Text>
      </View>
      
      <View style={styles.numberpad}>
        <Buttons num="C" onPress={()=>handleButtonPress("C")}/>
        <Buttons num="7" onPress={()=>handleButtonPress("7")} />
        <Buttons num="4"onPress={()=>handleButtonPress("4")} />
        <Buttons num="1"onPress={()=>handleButtonPress("1")} />
        <Buttons num="0"onPress={()=>handleButtonPress("0")} />

        <Buttons num="()"onPress={()=>handleButtonPress("()")} />
        <Buttons num="8"onPress={()=>handleButtonPress("8")} />
        <Buttons num="5"onPress={()=>handleButtonPress("5")} />
        <Buttons num="2"onPress={()=>handleButtonPress("2")} />
        <Buttons num="."onPress={()=>handleButtonPress(".")} />

        <Buttons num="%"onPress={()=>handleButtonPress("%")} />
        <Buttons num="9"onPress={()=>handleButtonPress("9")} />
        <Buttons num="6"onPress={()=>handleButtonPress("6")} />
        <Buttons num="3"onPress={()=>handleButtonPress("3")} />
        <Buttons num="<="onPress={()=>handleButtonPress("<=")} />

        <Buttons num="/" onPress={()=>handleButtonPress("/")} />
        <Buttons num="X"onPress={()=>handleButtonPress("X")}/>
        <Buttons num="-"  onPress={()=>handleButtonPress("-")}/>
        <Buttons num="+"onPress={()=>handleButtonPress("+")}/>
        <Buttons num="=" onPress={()=>handleButtonPress("=")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: COLORS.black,
  },

  displayText: {
    color: COLORS.white,
    fontSize: 60,
    fontWeight: '200',
    textAlign: 'right',
  },
  numberpad: {
    flex: 2,
    backgroundColor: COLORS.black,   
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
    padding: 30,
  },  
})

export default Calculator