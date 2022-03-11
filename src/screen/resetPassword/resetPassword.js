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
  BackButtonHeader
} from '../../components/index';

export default class ResetPassword extends Component {
  render() {
    return (
      
      <ImageBackground
      source={require('../../images/ok.jpg')}
      style={{height:"100%",width:"100%"}}
      >
        <View >
    <BackButtonHeader
    backgroundColor={"#F7B614"}
    backPressed={() => { this.props.navigation.goBack() }} />
    <Image
    source={require('../../images/boder.jpg')}
    style={{}}
    />
</View>
<View style={{flex:1,justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-start'}}>
  <Animatable.Text animation="flipInX"  style={{fontSize:width*0.1,color:'#ffffff',paddingTop:width*0.1,paddingHorizontal:width*0.09,fontWeight:'bold'}}>
    Forgot Password
  </Animatable.Text>
  <View style={{paddingTop:width*0.09,paddingHorizontal:width*0.09}}>
    <Animatable.Text animation="slideInDown" style={{fontSize:width*0.05,color:"#ffffff"}}>
Enter your email address below and of lorem lpsum available majority have suffered alteration in form change the Password
    </Animatable.Text>
  </View>
  <Animatable.View animation="flipInX"style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1,borderBottomColor:'#E42217'}}
         placeholder={'Enter your email'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <Animatable.View animation="zoomInDown" style={{paddingTop:width*0.1,height:'100%',width:'80%',alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>alert("Login Sucessfully")}>
          <Text style={{borderWidth:1,borderRadius:5,fontSize:width*0.06,color:'#ffffff',textAlign:'center',
        paddingVertical:width*0.02,fontWeight:'bold',backgroundColor:"#E42217",borderColor:'#E42217'
        }}>
            Send
          </Text>
        </TouchableOpacity>
        </Animatable.View>
  </View>
 
  
      </ImageBackground>
    
   



    
    )
  }
}