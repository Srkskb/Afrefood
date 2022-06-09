import { Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");

export default class Sucess extends Component {
  render() {
    return (
      
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFFF',paddingTop:width*0.2}}>
        <Image
        source={require("../../images/sham.jpeg")}
        />
        <View style={{paddingTop:width*0.09}}>
        <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000'}}>Order sucessfully</Text>
    </View>
      <View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.05}}>
  <Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000000aa'}}>
    Please track your Order Now
  </Text>
      </View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Track")}>
            <View style={{paddingTop:width*0.2,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#1599B0",borderColor:'#1599B0',justifyContent:'center',alignItems:'center',padding:10,paddingHorizontal:width*0.06}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Track Now
</Text>
              </View>

            </View>
            </TouchableOpacity>
      </View>
    )
  }
}