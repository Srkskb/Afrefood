import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable';
import styles from './styles'
import { Images } from "../../theme/index";

import {
  AppButton,
  LinkText,
  FloatingLabelInput,
} from '../../components/index';
export default class Login extends Component {
  render() {
    return (
      
      <ImageBackground
      source={require('../../images/ssss.jpg')}
      resizeMode='cover'
      style={{height:"100%",width:"100%"}}
      >
<View style={{flex:1,justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-start'}}>
  <Animatable.Text animation="slideInDown"style={{fontSize:width*0.07,color:'#000000aa',
  paddingTop:width*0.2,paddingHorizontal:width*0.09,fontWeight:'bold',fontFamily:'Poppins-Semibold'}}>
    Edit Address
  </Animatable.Text>
  <View style={{paddingTop:width*0.05}}>
<Animatable.View animation="flipInX" style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',paddingHorizontal:width*0.09,backgroundColor:"#FDBADCaa",marginHorizontal:width*0.08}}>
<Entypo
name='location-pin' size={width*0.07} color={'#E44227'}
/>
  <Animatable.Text animation="slideInDown" style={{fontSize:width*0.05,fontWeight:'bold',color:'#000',paddingHorizontal:width*0.05}}>
    Use My Current Location
  </Animatable.Text>
  <TouchableOpacity>
  <MaterialCommunityIcons
name='chevron-right' size={width*0.09} color={'#E44227'}
/>
</TouchableOpacity>
</Animatable.View>
</View>
  <Animatable.View animation="flipInX" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={' Name'}
         placeholderTextColor={"#000"}
         />
        </Animatable.View>
        <Animatable.View animation="flipInX" style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Phone Number'}
         placeholderTextColor={"#000"}
         keyboardType='number-pad'
         />
        </Animatable.View>
        <Animatable.View animation="flipInX" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Address'}
         placeholderTextColor={"#000"}
         />
        </Animatable.View>
        <Animatable.View animation="flipInX"style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Address Line 1'}
         placeholderTextColor={"#000"}
         keyboardType='default'
         />
        </Animatable.View>
        <Animatable.View animation="flipInX"style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1,}}
         placeholder={'Address Line 2'}
         placeholderTextColor={"#000"}
         />
        </Animatable.View>
        <View animation="flipInX" style={{flexDirection:'row',justifyContent:"space-evenly",
        alignItems:"center",marginTop:10,paddingHorizontal:width*0.1}}>
        <Animatable.View animation="flipInX" style={{ width:'45%',marginHorizontal:width*0.09}}>
            <TextInput
             style={{fontSize:20,borderBottomWidth:2}}
             placeholder={'City'}
             placeholderTextColor={"#000000"}
            />
            </Animatable.View>
            <Animatable.View animation="flipInX" style={{ width:'45%',marginHorizontal:width*0.09}}>
            <TextInput
             style={{fontSize:20,borderBottomWidth:2}}
             placeholder={'Pin Code'}
             placeholderTextColor={"#000000"}
             keyboardType='number-pad'
            />
        </Animatable.View>

        </View>
        <Animatable.View animation="zoomInDown" style={{paddingTop:width*0.1,height:'100%',width:'80%',alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainScreen')}>
          <Text style={{borderWidth:1,borderRadius:5,fontSize:width*0.06,color:'#ffffff',textAlign:'center',
        paddingVertical:width*0.02,fontWeight:'500',backgroundColor:"#E42217",borderColor:'#E42217'
        }}>
            Add Address
          </Text>
       </TouchableOpacity>
       </Animatable.View>     
</View>
      </ImageBackground>
    )
  }
}