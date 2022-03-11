import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import styles from './styles'
import { Images } from "../../theme/index";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

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
  <Animatable.Text animation="slideInDown"style={{fontSize:width*0.1,color:'#ffffff',paddingTop:width*0.2,paddingHorizontal:width*0.09,fontWeight:'bold'}}>
    Profile Update
  </Animatable.Text>

  <Animatable.View animation="flipInX" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'New Name'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <Animatable.View animation="flipInX" style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Last Name'}
         placeholderTextColor={"#000000"}
         
         />
        </Animatable.View>
        <Animatable.View animation="flipInX" style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Email'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <Animatable.View animation="flipInX"style={styles.bottomField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Phone Number'}
         placeholderTextColor={"#000000"}
         keyboardType='number-pad'
         />
        </Animatable.View>
        <Animatable.View animation="flipInX"style={styles.topField}>
         <TextInput
         style={{fontSize:20,borderBottomWidth:1}}
         placeholder={'Address'}
         placeholderTextColor={"#000000"}
         />
        </Animatable.View>
        <View animation="flipInX" style={{flexDirection:'row',justifyContent:"space-evenly",alignItems:"center",marginTop: heightPercentageToDP((10 / 812) * 100),}}>
        <Animatable.View animation="flipInX" style={{ width: widthPercentageToDP((100 / 275) * 100),marginHorizontal:width*0.09}}>
            <TextInput
             style={{fontSize:20,borderBottomWidth:2}}
             placeholder={'City'}
             placeholderTextColor={"#000000"}
            />
            </Animatable.View>
            <Animatable.View animation="flipInX" style={{ width: widthPercentageToDP((100 / 275) * 100),}}>
            <TextInput
             style={{fontSize:20,borderBottomWidth:2}}
             placeholder={'Pin Code'}
             placeholderTextColor={"#000000"}
             keyboardType='number-pad'
            />
        </Animatable.View>

        </View>
        <Animatable.View animation="zoomInDown" style={{paddingTop:width*0.1,height:'100%',width:'80%',alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Location')}>
          <Text style={{borderWidth:1,borderRadius:5,fontSize:width*0.06,color:'#ffffff',textAlign:'center',
        paddingVertical:width*0.02,fontWeight:'500',backgroundColor:"#E42217",borderColor:'#E42217'
        }}>
            SIGN IN
          </Text>
       </TouchableOpacity>
       </Animatable.View>     
</View>
      </ImageBackground>
    )
  }
}