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
        this.state = { count: 1 }
      
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
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{paddingTop:width*0.013,paddingHorizontal:width*0.03}}>
<View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-between',borderWidth:1,padding:10,borderRadius:10}}>
  <TouchableOpacity onPress={()=>this.setState({count:this.state.count+1})}>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    +
</Text>
</TouchableOpacity>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
 {this.state.count}
</Text>
<TouchableOpacity onPress={()=>{this.state.count>1? this.setState({count:this.state.count-1}):this.state.count}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    -
</Text>
</TouchableOpacity>
</View>

</View>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Image
source={require('../../images/img1.jpg')}
style={{height:height*0.06,width:width*0.3}}
/>
</View>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.05,color:"#000",fontFamily:'Poppins-SemiBold'}}>
  Noodles
</Text>
<Text style={{fontSize:width*0.035,color:"#000",fontFamily:'Poppins-SemiBold'}}>
 {'$22.5'}
</Text>
</View>
<View style={{paddingHorizontal:width*0.04,paddingTop:width*0.02,paddingRight:width*0.05,alignItems:'flex-end'}}>
  <TouchableOpacity onPress={()=>alert("Are you sure want to delete")}>
<Entypo
name='squared-cross' size={width*0.05} color={"#DCDCDC"}
/>
</TouchableOpacity>
</View>
          </View>
      </View>
      </View>
      <View style={{marginHorizontal:width*0.03,paddingTop:width*0.03}}>
      <View elevation ={5} style={{height:100,borderRadius:10,backgroundColor:"#fff"}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{paddingTop:width*0.013,paddingHorizontal:width*0.03}}>
<View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-between',borderWidth:1,padding:10,borderRadius:10}}>
  <TouchableOpacity onPress={()=>this.setState({count:this.state.count+1})}>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    +
</Text>
</TouchableOpacity>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
 {this.state.count}
</Text>
<TouchableOpacity onPress={()=>{this.state.count>1? this.setState({count:this.state.count-1}):this.state.count}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold'}}>
    -
</Text>
</TouchableOpacity>
</View>

</View>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Image
source={require('../../images/img20.png')}
style={{height:height*0.06,width:width*0.3}}
/>
</View>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:width*0.05,color:"#000",fontFamily:'Poppins-SemiBold'}}>
  Pizza
</Text>
<Text style={{fontSize:width*0.035,color:"#000",fontFamily:'Poppins-SemiBold'}}>
 {'$12.5'}
</Text>
</View>
<View style={{paddingHorizontal:width*0.04,paddingTop:width*0.02,paddingRight:width*0.05,alignItems:'flex-end'}}>
  <TouchableOpacity onPress={()=>alert("Are you sure want to delete")}>
<Entypo
name='squared-cross' size={width*0.05} color={"#DCDCDC"}
/>
</TouchableOpacity>
</View>
          </View>
      </View>
      </View>
      <View style={{marginHorizontal:width*0.03,paddingTop:width*0.03}}>
      <View elevation ={5} style={{height:70,borderRadius:10,backgroundColor:"#fff"}}>
        <View style={{justifyContent:'space-evenly',paddingTop:width*0.03}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TextInput 
            placeholder='Promo code'
            style={{fontSize:width*0.04,}}
          />
          <TouchableOpacity onPress={()=>alert('Apply soon..')}>
            <View style={{borderRadius:10,borderWidth:1,padding:10,paddingHorizontal:width*0.09,backgroundColor:"#FB2244",borderColor:"#FB2244"}}>
              <Text style={{fontSize:width*0.04,color:"#FFF"}}>
              Apply
              </Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </View>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.05}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  Cart total
</Text>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  $400.00
</Text>
              </View>

            </View>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.05}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  Tax
</Text>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  $40.60
</Text>
              </View>

            </View>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.05}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  Delivery
</Text>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  $4.00
</Text>
              </View>

            </View>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.05}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  Promo Discount
</Text>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
 - $000.00
</Text>
              </View>

            </View>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.08}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  Sub Total
</Text>
<Text style={{fontSize:width*0.035,color:'#000',fontFamily:'Poppins-SemiBold'}}>
  $444.60
</Text>
              </View>

            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Payment")}>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#1599B0",borderColor:'#1599B0',justifyContent:'center',alignItems:'center',padding:10}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Procced to checkout
</Text>
              </View>

            </View>
            </TouchableOpacity>
            <View style={{paddingBottom:width*0.09}}>

            </View>
      </ScrollView>
      </View>
    )
  }
}