import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Buttons = props =>{
  return (
<TouchableOpacity style={{width:'30%',height:70,backgroundColor:'white',margin:10,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:30}}>{props.num}</Text>
</TouchableOpacity>

  )
}

export default Buttons