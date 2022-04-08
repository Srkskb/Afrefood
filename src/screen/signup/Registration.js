import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput,
  StyleSheet} from 'react-native'
  import React, { Component } from 'react'
  const { width, height } = Dimensions.get("window");
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import * as Animatable from 'react-native-animatable';
  import styles from './styles'
  import { Images } from "../../theme/index";
  import {
    AppButton,
    LinkText,
    FloatingLabelInput,
  } from '../../components/index';
  export default class Registration extends Component {
    render() {
      return (
        
  <View style={{width:width,height:height,justifyContent:'center',alignItems:'center'}}>
        <Image
        source={require('../../images/bond.jpg')}
        style={{height:"100%",width:"100%"}}
        />
    <View style={{backgroundColor: '#fff',width:"100%",position:'absolute',bottom:0,
    padding:height*0.04}}>
    <Animatable.Text animation="slideInDown"style={{fontSize:width*0.08,color:'#121212'
    ,fontFamily: "Montserrat-SemiBold",paddingTop:12}}>
    Let Us Know About You
    </Animatable.Text>
  
    <Animatable.View animation="fadeInUpBig"style={{width: '100%',marginTop:height*0.02}}>
           <TextInput
           style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
           ,borderBottomColor:'#E42217',fontFamily: "Montserrat-Medium"}}
           placeholder={'Name'}
           placeholderTextColor={"#000000"}
           />
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig"style={{width: '100%',marginTop:height*0.02}}>
           <TextInput
           style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
           ,borderBottomColor:'#E42217',fontFamily: "Montserrat-Medium"}}
           placeholder={'Mobile Number'}
           placeholderTextColor={"#000000"}
           
           />
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{width: '100%',marginTop:height*0.02}}>
           <TextInput
           style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
           ,borderBottomColor:'#E42217',fontFamily: "Montserrat-Medium"}}
           placeholder={'Email Id'}
           placeholderTextColor={"#000000"}
           />
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{width: '100%',marginTop:height*0.02}}>
           <TextInput
           style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
           ,borderBottomColor:'#E42217',fontFamily: "Montserrat-Medium"}}
           placeholder={'Password'}
           placeholderTextColor={"#000000"}
           secureTextEntry={true}
           />
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{width: '100%',marginTop:height*0.02}}>
           <TextInput
           style={{fontSize:16,borderBottomWidth:StyleSheet.hairlineWidth,paddingHorizontal:12
           ,borderBottomColor:'#E42217',fontFamily: "Montserrat-Medium"}}
           placeholder={'Confirm Password'}
           placeholderTextColor={"#000000"}
           keyboardType="phone-pad"
           />
          </Animatable.View>
          <View style={{paddingTop:height*0.02,width:'100%',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileUpdate')} style={{borderRadius:5,
          backgroundColor:"#E42217",height:44,justifyContent:'center',width:'100%'}}>
          <Animatable.Text animation="slideInDown" style={{fontSize:16,color:'#ffffff',
          textAlign:'center',fontFamily: "Montserrat-Medium"}}>
              Submit
            </Animatable.Text>
          </TouchableOpacity>
          <Animatable.View animation="flipInX"style={{paddingTop:height*0.02,width: '100%'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
              <Text style={{textAlign:'center',fontSize:width*0.05,color:'#111',
              fontFamily: "Montserrat-Medium"}}>
                Go Back to Login
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          </View>
          </View>
  
  </View>
      )
    }
  }