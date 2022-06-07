import { Text, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
export default class Sucess extends Component {
  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#FBB9E7',paddingTop:width*1}}>
        <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>Payment sucessfully</Text>
    
      <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>
To be Implemented
</Text>
      </View>
      </View>
    )
  }
}