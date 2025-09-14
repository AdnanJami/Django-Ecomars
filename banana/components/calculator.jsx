import { COLORS } from '@/utils/helper';

import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons';
const Calculator = () => {
  return (<View style={styles.container}> 


      <View style={styles.screeen}>
        <Text style={{color:COLORS.white,fontSize:70}}>0000</Text>
      </View>
        <View style={styles.numberpad}>
        <Buttons num="1"/>
        <Buttons num="2"/>
        <Buttons num="3"/>
        </View>
   
  
</View>

  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        backgroundColor: COLORS.white,
    }
,
    screeen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
        backgroundColor: COLORS.black,

    },
    numberpad: {
        flex: 2,
        backgroundColor: COLORS.rose,
        justifyContent: 'center',
        alignItems: 'center',   
        flexDirection: 'row',
        flexWrap: 'wrap',

        
    },  
});

export default Calculator