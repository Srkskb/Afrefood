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
export default class Registration extends Component {
  render() {
    return (
      
      <ImageBackground
      source={require('../../images/lok.jpg')}
      style={{height:"100%",width:"100%"}}
      >
<View style={{flex:1,justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-start'}}>
  <Animatable.Text animation="slideInDown"style={{fontSize:width*0.1,color:'#ffffff',paddingTop:width*0.2,paddingHorizontal:width*0.09,fontWeight:'500'}}>
    Register
  </Animatable.Text>

  <Animatable.View animation="fadeInUpBig"style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'First Name'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig"style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Last Name'}
         placeholderTextColor={"#000000"}
         
         />
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Email Id'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig" style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Password'}
         placeholderTextColor={"#000000"}
         secureTextEntry={true}
         />
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Phone Number'}
         placeholderTextColor={"#000000"}
         keyboardType="phone-pad"
         />
        </Animatable.View>
        <View style={{paddingTop:width*0.1,height:'100%',width:'80%',alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>alert("Login Sucessfully")}>
          <Animatable.Text animation="slideInDown" style={{borderWidth:1,borderRadius:5,fontSize:width*0.06,color:'#ffffff',textAlign:'center',
        paddingVertical:width*0.02,fontWeight:'500',backgroundColor:"#E42217",borderColor:'#E42217'
        }}>
            SIGN IN
          </Animatable.Text>
        </TouchableOpacity>
        <Animatable.View animation="flipInX"style={{paddingTop:width*0.05}}>
      <TouchableOpacity onPress={()=>alert('Welcome to Facebook')}>
      <Image
      source={require('../../images/dv.png')}
      style={{width:'100%',height:'40%'}}
      />   
      </TouchableOpacity>
      <Animatable.View animation="zoomInDown" style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        
          <Text style={{textAlign:'center',fontSize:width*0.05,color:'#ffffff'}}>
            Do you have an account? 
          </Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{textAlign:'center',fontSize:width*0.05,color:'#ffffff'}}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </Animatable.View>
        </Animatable.View>
        </View>

      
</View>



      </ImageBackground>
    
   



    
    )
  }
}