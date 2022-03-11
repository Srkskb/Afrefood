import { Text, View,Image ,Dimensions} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
export default class Home extends Component {
  render() {
    return (
      <View style={{backgroundColor:"#F7B614",flex:1,justifyContent:'center'}}>
        <View style={{height:'100%', width:"100%",flex:1,justifyContent:'center'}}>
          <Image
          source={require('../../images/preLoader.gif')}
          />
           <Image
          source={require('../../images/Af.png')} 
          style={{alignSelf:'center',width:"50%"}}
          />
          
        </View>
        
      </View>
    )
  }
}