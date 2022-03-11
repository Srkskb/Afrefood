import { Text, View,ScrollView,TouchableOpacity,Dimensions } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");

export default class FacultyAssessments extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
     <Text style={{fontSize:width*0.06,fontWeight:'bold'}}>Questions</Text>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddQuestion')}>
       <Text style={{fontSize:width*0.03,fontWeight:'bold',borderWidth:1,borderRadius:10,
       paddingHorizontal:width*0.02,paddingVertical:width*0.02,color:'#727cf5',borderColor:'#727cf5'}}>
         +Add Questions
       </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('ImportQuestion')}>
       <Text style={{fontSize:width*0.03,fontWeight:'bold',borderWidth:1,borderRadius:10,
       paddingHorizontal:width*0.02,paddingVertical:width*0.02,color:'#727cf5',borderColor:'#727cf5'}}>
         +Import Questions
       </Text>
     </TouchableOpacity>
   </View>
   <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.05,fontWeight:'bold'}}>QUESTIONS</Text>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',borderBottomWidth:1,borderBottomColor:"96A3B9",paddingVertical:width*0.03,paddingHorizontal:width*0.02}}>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
     { 'Question\nType'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
      { 'Question'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
     { 'Marks'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
       Status
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05}}>
       Action
     </Text>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',marginVertical:50}}>
<Text style={{fontWeight:'bold',fontSize:width*0.05}}>
  No Photo(s) found...
</Text>
   </View>
   </View>
    )
  }
}