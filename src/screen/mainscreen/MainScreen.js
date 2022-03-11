import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader
} from '../../components/index';

export default class MainScreen extends Component {
  render() {
    return (
        <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
     <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',backgroundColor:"#F7B614"}}>
<Text style={{fontSize:width*0.09,color:"#000000",paddingHorizontal:width*0.05,fontWeight:"bold"}}>
Browes
</Text>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Filter")}>
<Text style={{fontSize:width*0.05,color:"#E42217",paddingHorizontal:width*0.05}}>
    Filter
</Text>
</TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#F7B614',paddingVertical:width*0.05}} >
    <View style ={{borderWidth:1,borderRadius:10,backgroundColor:"#FFFFFF",width:"90%",borderColor:"#FFFFFF"}}>
        
    <View style={{flexDirection:'row',justifyContent:"flex-start",alignItems:"center"}} >
    <FIcon name="search" size={width*0.06} color="#DCDCDC"
    style={{paddingHorizontal:width*0.03}}
    />
        <TextInput
         style={{fontSize:20}}
         placeholder={'Search your delivery location'}
         placeholderTextColor={"#DCDCDC"}
        />
   
    </View>
    </View> 
</View>
<View style={{paddingTop:width*0.05}}>
  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Text>
Trending this week
</Text>
<Text>
View all
</Text>
  </View>
</View>
</View>
    )
  }
}