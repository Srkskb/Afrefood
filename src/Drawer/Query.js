import { Text, View ,Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
export default class Query extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <MaterialCommunityIcons name="message-image" color={"#999"} size={width*0.09} />
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Message</Text>
   </View>
   
   <View style={styles.Container}>
    
    <View style={{borderRadius:10,borderWidth:1,borderColor:"#0acf97",backgroundColor:"#0acf97",justifyContent:'space-between',flexDirection:'row',marginHorizontal:20}}>
    <TouchableOpacity style={{width:'100%',  borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:width*0.038,
      flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>alert('Button Pressed')}>
<Text style={{fontSize:width*0.06,color:"#ffffff"
}}>
  New Message
</Text>
<MaterialCommunityIcons name="pencil" color={"#fff"} size={width*0.05} />
</TouchableOpacity>
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