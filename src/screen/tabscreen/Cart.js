import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader,
  BackButtonHeader1
} from '../../components/index';

export default class Cart extends Component {
  render() {
    return (
     <View style={{flex:1}}>
 <BackButtonHeader
    Color={"#FFFFFFF"}
    backPressed={() => { this.props.navigation.goBack() }}
     />
     <View style={{paddingHorizontal:width*0.05}}>
       <Image
       source={require('../../images/banner1.png')}
       style={{height:height*0.24,width:width*0.92,alignSelf:"center"}} resizeMode={'contain'}
       />
     </View>
     </View>
    )
  }
}