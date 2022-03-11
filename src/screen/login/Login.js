import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
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
export default class Login extends Component {
  render() {
    return (
      
      <ImageBackground
      source={require('../../images/lok.jpg')}
      style={{height:"100%",width:"100%"}}
      >
<View style={{flex:1,justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-start'}}>
  <Animatable.Text animation="slideInDown" style={{fontSize:width*0.1,color:'#ffffff',paddingTop:width*0.2,paddingHorizontal:width*0.09,fontWeight:'500'}}>
    Welcome Back
  </Animatable.Text>
  <Animatable.Text animation="slideInDown" style={{fontSize:width*0.06,color:'#ffffff',paddingVertical:width*0.02,paddingHorizontal:width*0.09,fontWeight:'500'}}>
    Sign in to Continue
  </Animatable.Text>

  <Animatable.View animation="zoomInDown" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'User Name'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <Animatable.View animation="zoomInDown" style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Password'}
         placeholderTextColor={"#000000"}
         secureTextEntry={true}
         />
        </Animatable.View>
        <View animation="zoomInDown" style={{paddingTop:width*0.1,height:'100%',width:'80%',alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileUpdate')}>
          <Animatable.Text animation="flipInX" style={{borderWidth:1,borderRadius:5,fontSize:width*0.06,color:'#ffffff',textAlign:'center',
        paddingVertical:width*0.02,fontWeight:'500',backgroundColor:"#E42217",borderColor:'#E42217'
        }}>
            SIGN IN
          </Animatable.Text>
        </TouchableOpacity>
        <Animatable.View animation="zoomInDown"style={{paddingTop:width*0.05}}>
      <TouchableOpacity onPress={()=>alert('Welcome to Facebook')}>
      <Image
      source={require('../../images/dv.png')}
      style={{width:'100%',height:'40%'}}
      />  
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResetPassword')}>
          <Animatable.Text animation="flipInX"  style={{textAlign:'center',fontSize:width*0.05,color:'#ffffff',marginTop:-30}}>
            Forgot your password
          </Animatable.Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="flipInX" style={{flexDirection:'row'}}>
        
          <Animatable.Text animation="zoomInDown" style={{textAlign:'center',fontSize:width*0.05,color:'#ffffff'}}>
            Don't have an account? 
          </Animatable.Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
            <Animatable.Text animation="zoomInDown" style={{textAlign:'center',fontSize:width*0.05,color:'#ffffff'}}>
              SIGN UP
            </Animatable.Text>
          </TouchableOpacity>
        </Animatable.View>
        </View>
       
</View>


      </ImageBackground>
    
   



    
    )
  }
}