import { Text, View,Dimensions,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
export default class Enroll extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{paddingHorizontal:1,fontSize:width*0.06,fontWeight:'bold'}}>Enroll History</Text>
    </View>
    <View style={{backgroundColor:"#ffffff",}}>
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03,paddingHorizontal:width*0.05}}>
            Search
            </Text>
          <TextInput
          placeholder=''
          style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,marginHorizontal:20}}
          />
          </View>
    <View style={{paddingTop:width*0.08,backgroundColor:"#ffffff"}}>
  <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffbc00',borderBottomWidth:1,borderBottomColor:"96A3B9",paddingVertical:width*0.03}}>
  <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
    #
     </Text>
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
      {'Action'}
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