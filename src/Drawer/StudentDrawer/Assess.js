import { Text, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
export default class Assess extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Practice Paper</Text>
   </View>
   <Text style={{fontSize:width*0.05,fontWeight:"bold",paddingVertical:width*0.06,paddingHorizontal:width*0.06,paddingTop:width*0.08}}>
   No Practice Paper Found
     </Text>
   </View>
    )
  }
}