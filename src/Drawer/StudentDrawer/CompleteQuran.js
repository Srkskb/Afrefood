import { Text, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
export default class CompleteQuran extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{paddingHorizontal:1,fontSize:width*0.06,fontWeight:'bold'}}>Complete Qur’an</Text>
    </View>
    <View style={{paddingTop:width*0.08}}>
  <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffbc00',borderBottomWidth:1,borderBottomColor:"96A3B9",paddingVertical:width*0.03}}>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
     { 'Batch\nName'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
      { 'Trainer'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
     { 'Batch\nTime'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
      {' Date of\n compl.'}
     </Text>
    
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',marginVertical:30}}>
<Text style={{fontWeight:'bold',fontSize:width*0.05}}>
  No record(s) found...
</Text>
</View>
   </View>
    </View>
    )
  }
}