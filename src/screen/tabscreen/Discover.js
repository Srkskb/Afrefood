import { Switch,Animated,Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput,ScrollView,StyleSheet} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import FIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from "../../theme/index";
import { TabView, SceneMap } from 'react-native-tab-view';
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader,
  BackButtonHeader1
} from '../../components/index';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Discover extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
      <View style={{width: '100%',height: '100%'}}>
        
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.01,

      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
        
     <Ionicons name="chevron-back-outline" color={"#E44217"} size={width*0.07}
     />
     <Text style={{fontSize:width*0.06,fontWeight:'bold',color:"#E44217"}}>Back</Text>
   
   </View>
   
   </View>
   </TouchableOpacity>
   </SafeAreaView>
 
    )
  }
}