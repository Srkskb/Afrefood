import { Switch, Animated, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,TouchableNativeFeedback } from 'react-native'
import React, { Component,useState } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from "../../theme/index";
import { TabView, SceneMap } from 'react-native-tab-view';


export default class FoodCart extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{
        flexDirection: 'row', alignItems: "center", justifyContent: 'space-between',
        backgroundColor: "#F7B614", width: width, height: '6%', paddingHorizontal: width * 0.05, paddingTop: width * 0.02
      }}>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo
            name='location-pin' size={width * 0.07} color={"#E42217"}
          />
          <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.03}}>
          <Text style={{ fontSize: width * 0.03, color: "#E42217", fontWeight: "bold" }}>
            Bazar Chitil Qabar
          </Text >
          <Text style={{fontSize:9,color:'#FFF'}}>
             chandni chowk new delhi
          </Text>
          </View>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Location')}>
            <Entypo
              name='chevron-small-down' size={width * 0.06} color={"#E42217"}
            />
          </TouchableOpacity>
        </View>
        <TouchableNativeFeedback onPress={()=>alert("Are you want to change your profile.")}>
   <Image
   source={require("../../images/10.png")}
   resizeMode="contain"
   style={{height:height*0.06,width:width*0.1,borderRadius:width*0.1,borderColor:"#E44217"}}
   
   />
   </TouchableNativeFeedback>
      </View>
      <View style={{
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7B614',
        width: width, height: '8%', paddingTop: width * 0.01
      }} >
        <View style={{
          borderRadius: 10, backgroundColor: "#FFFFFF", width: "90%",
          borderColor: "#FFFFFF", height: '80%',
        }}>

          <View style={{ flexDirection: 'row', width: '100%' }} >
            <View style={{ width: '16%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <FIcon name="search" size={width * 0.06} color="#DCDCDC"
              /></View>
            <View style={{ width: '68%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
              <TextInput
                style={{ fontSize: 20 }}
                placeholder={'Search your delivery location'}
                placeholderTextColor={"#DCDCDC"}
              /></View>
            <TouchableOpacity style={{ width: '16%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => alert("Please Speak something...")}>
              <FIcon name="mic" size={width * 0.06} color="#E42217"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'90%' }}>
      <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03}}> 
          <Text style={{fontFamily:'Poppins-SemiBold',fontSize:width*0.04,}}>
              Your food cart
          </Text>
      </View>
      <View style={{marginHorizontal:width*0.03,paddingTop:width*0.03}}>
      <View elevation ={5} style={{height:100,borderRadius:10,backgroundColor:"#fff"}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'20%'}}>
              <View style={{paddingTop:width*0.02}}>
<View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-between',borderWidth:1,padding:10,borderRadius:10}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    +
</Text>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    1
</Text>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    -
</Text>
</View>
</View>
          </View>
      </View>
      </View>
      </ScrollView>
      </View>
    )
  }
}