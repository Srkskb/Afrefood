import { Text, View,ScrollView,TouchableOpacity,Dimensions ,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");

export default class Assign extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Assignments</Text>
     </View>
     <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.05,fontWeight:'bold'}}>ASSIGNMENTS</Text>
   </View>
   <View style={{backgroundColor:"#ffffff",}}>
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03,paddingHorizontal:width*0.05}}>
            Search
            </Text>
          <TextInput
          placeholder=''
          style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,marginHorizontal:20}}
          />
   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',borderBottomWidth:1,borderBottomColor:"96A3B9",paddingVertical:width*0.04,marginTop:50}}>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
     { 'Batch'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
      { 'Date'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
     { 'Topic'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
       Attachmet
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
       Action
     </Text>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',marginVertical:50}}>
<Text style={{fontWeight:'bold',fontSize:width*0.05}}>
  No record(s) found...
</Text>
</View>
     </View>
     </View>
    )
  }
}