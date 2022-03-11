import { Text, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDown from '../components/picker/picker';
const { width, height } = Dimensions.get("window");
export default class Appraisal extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <MaterialCommunityIcons name="message-image" color={"#999"} size={width*0.09} />
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Add Teacher Appraisal</Text>
   </View>
   </View>
    )
  }
}