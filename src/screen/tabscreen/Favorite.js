import { Text, View,TouchableOpacity,SafeAreaView,ImageBackground,Image,FlatList,Dimensions,TouchableNativeFeedback,ScrollView } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Favorite extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%',backgroundColor:"#FFFFFF"}}>

      <View style={{width: '100%',height: '8%', backgroundColor: '#F7B614',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color:"#E44217"}}>Favorite</Text>
     <TouchableNativeFeedback onPress={()=>alert("Are you want to change your profile.")}>
     <Image
     source={require("../../images/10.png")}
     resizeMode="contain"
     style={{height:height*0.06,width:width*0.1,borderRadius:width*0.1,borderColor:"#E44217"}}
     
     />
     </TouchableNativeFeedback>
   </View >
   <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
    <Text>
      Your Order
    </Text>
    </View> 
   <View style={{justifyContent:'center',alignItems:"center",paddingTop:width*0.01}}>
<ImageBackground
  source={require("../../images/6.png")}
  resizeMode="contain"
  style={{height:height*0.27,width:width*0.9}}
  
>
<TouchableNativeFeedback onPress={()=>alert("Are you want to buy?")}>
  <View style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Semibold',paddingTop:width*0.2}}>
<Text style={{fontSize:width*0.07,fontWeight:'bold',color:'#FFF'}}>
  Paleo Beef Blackpepper
</Text>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:width*0.02}}>
<AntDesign
              name='star' size={width * 0.04} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.04} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.04} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.04} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.04} color="#EAC117"
            />
</View>
<View style={{paddingTop:width*0.02,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:width*0.07,fontWeight:'bold',color:"#FFF"}}>
  $55
</Text>
</View>
  </View>
  </TouchableNativeFeedback>
</ImageBackground>

</View>
<View style={{justifyContent:'center',alignItems:"center",paddingTop:width*0.01}}>
    
    <ImageBackground
      source={require("../../images/5.png")}
      resizeMode="contain"
      style={{height:height*0.27,width:width*0.9}}
      
    >
    <TouchableNativeFeedback onPress={()=>alert("Are you want to buy?")}>
      <View style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Semibold',paddingTop:width*0.2}}>
    <Text style={{fontSize:width*0.07,fontWeight:'bold',color:'#FFF'}}>
      Fresh Pizza Margherita
    </Text>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:width*0.02}}>
    <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='staro' size={width * 0.04} color="#EAC117"
                />
    </View>
    <View style={{paddingTop:width*0.02,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:width*0.07,fontWeight:'bold',color:"#FFF"}}>
      $200
    </Text>
    </View>
      </View>
      </TouchableNativeFeedback>
    </ImageBackground>
    
    </View>
    <View style={{justifyContent:'center',alignItems:"center",paddingTop:width*0.01}}>
    
    <ImageBackground
      source={require("../../images/4.png")}
      resizeMode="contain"
      style={{height:height*0.27,width:width*0.9}}
      
    >
    <TouchableNativeFeedback onPress={()=>alert("Are you want to buy?")}>
      <View style={{justifyContent:'center',alignItems:'center',fontFamily:'Poppins-Semibold',paddingTop:width*0.2}}>
    <Text style={{fontSize:width*0.07,fontWeight:'bold',color:'#FFF'}}>
      Indian-food-samosa
    </Text>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:width*0.02}}>
    <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
                <AntDesign
                  name='star' size={width * 0.04} color="#EAC117"
                />
    </View>
    <View style={{paddingTop:width*0.02,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:width*0.07,fontWeight:'bold',color:"#FFF"}}>
      $150
    </Text>
    </View>
      </View>
      </TouchableNativeFeedback>
    </ImageBackground>
    
    </View>
   </View>
    )
  }
}