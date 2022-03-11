import { Text, View ,Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
export default class StudentQuery extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <MaterialCommunityIcons name="message-image" color={"#999"} size={width*0.09} />
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Message</Text>
   </View>
   
   <View style={styles.Container}>
    
    <View style={{borderRadius:10,borderWidth:1,borderColor:"#02a8b5",backgroundColor:"FFFFFF",justifyContent:'space-between',flexDirection:'row',marginHorizontal:20}}>
    <TouchableOpacity style={{width:'50%',  borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:width*0.038,
      flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={()=>alert('Button Pressed')}>
<Text style={{fontSize:width*0.06,color:"#02a8b5"
}}>
  Compose
</Text>
</TouchableOpacity>
</View>
<View style={{paddingTop:width*0.08}}>
    <Text style={{fontWeight:'bold',fontSize:width*0.04}}>
    Select a message thread to read it here.
    </Text>
</View>
   </View>
   
   </View>
    )
  }
}
const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffffff"
  }
})