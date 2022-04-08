import { Switch,Animated,Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput,ScrollView,StyleSheet} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import FIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
      <SafeAreaView style={{width: width, height: height, backgroundColor: "#FFFFFF"}}>

    
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.01,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
         <TouchableOpacity style={{flexDirection:'row'}}  onPress={() => { this.props.navigation.goBack() }}>
     <Ionicons name="chevron-back-outline" color={"#E44217"} size={width*0.07}
    style={{paddingTop:width*0.003}}
     />
     <Text style={{fontSize:width*0.06,fontWeight:'bold',color:"#E44217",}}>Back</Text>
   </TouchableOpacity>
   </View>
   <View style={{borderWidth:1,borderRadius:8,marginHorizontal:width*0.03,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',paddingHorizontal:width*0.05}}>
   <Ionicons name="search" color={"#DCDCDC"} size={width*0.07}
     />
     <TextInput
     placeholder='Search'
     style={{fontSize:width*0.05}}
     />
      
     </View>
     <View style={{borderBottomWidth:2,borderBottomColor:"#DCDCDC",paddingTop:width*0.05}}>

     </View>
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',paddingTop:width*0.05}}>
       <View style={{width:"40%",borderRadius:5,borderWidth:1,flexDirection:'row',alignItems:'center',backgroundColor:'#DCDCDC',paddingHorizontal:width*0.05,justifyContent:'space-evenly',padding:width*0.04}}>
         <TouchableOpacity style={{flexDirection:'row'}}onPress={()=>alert('Track your food location')}>
           <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
         <MaterialIcons
          name="delivery-dining" color={"#FF9933"} size={width*0.07}
         />
<Text style={{fontSize:width*0.05,fontWeight:"500",color:"#000"}}>
Delivery
</Text>
</View>
</TouchableOpacity>
       </View>
       <View style={{width:"40%",borderRadius:5,borderWidth:1,flexDirection:'row',alignItems:'center',backgroundColor:'#E44217',paddingHorizontal:width*0.05,justifyContent:'space-evenly',padding:width*0.04}}>
         <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>alert('Select Your Food')}>
         <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
         <MaterialIcons
          name="local-dining" color={"#FF9933"} size={width*0.07}
         />
<Text style={{fontSize:width*0.05,fontWeight:"500",color:"#FFFFFF"}}>
Dining
</Text>
</View>
</TouchableOpacity>
       </View>

     </View>
     <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", paddingTop: width * 0.09, paddingHorizontal: width * 0.03 }}>
          <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
          <Text style={{ fontSize: width * 0.06, fontWeight: 'bold', color: "#000000", fontFamily: "Poppins-Thin" }}>
            Recently Reached
          </Text>
</View>
<View style={{width:"20%",backgroundColor:"#ffffff"}}>
            <View style={{alignItems:'center',justifyContent:"center"}}>
              <TouchableOpacity onPress={()=>alert("Clearing...")}>
           <Text style={{fontSize:width*0.05,color:'#E44217'}}>
             Clear
           </Text>
</TouchableOpacity>
</View>
</View>
</View>
   </SafeAreaView>
 
    )
  }
}