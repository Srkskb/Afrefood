import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
let data=[{"name":"Joseph Kuruvilla","location":'South africa'},]
let meta=[{"name":"Shaharukh","location":'South africa'}]
export default class Address extends Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1, width: width, height: height, backgroundColor: "#FFFFFF" }}>
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
       <TouchableOpacity onPress={()=>alert('Please add address')}>
       <View style={{paddingTop:width*0.05,justifyContent:'center',alignItems:'center'}}>
       <View style={{borderWidth:1,borderRadius:10,backgroundColor:'#E44227',borderColor:'#E44227',padding:width*0.02,paddingHorizontal:width*0.05}}>
           <Text style={{color:'#fff',fontSize:width*0.05,fontWeight:'bold',fontFamily:'Poppins-Semibold'}}>
               Add Address
           </Text>
       </View>
       </View>
       </TouchableOpacity>
       <Animatable.View animation="flipInX" style={{width: '100%',height: '86%'}}>
         {data.map((item,index)=>{
         	return(
         		<View key={index} style={{width: '100%',paddingVertical:8}}>
         		<View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
        
             <View style={{width: '100%',flexDirection:'row'}}>
         		<View style={{width: '74%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
         		<View style={{paddingHorizontal:8,justifyContent:'flex-start',alignItems:'flex-start',
         		paddingTop:8}}>
         		<Text style={{fontSize:18,fontFamily: "Montserrat-SemiBold",
            		color:'#121212',textAlign:'center',fontWeight:'bold'}}>
           		OFFICE ADDRESS
          		</Text>
          		<Text style={{fontSize:12,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center',paddingTop:6}}>
           		Order Time : Jan 15 2016 10:20 Am
          		</Text>
          		</View>
          		</View>
              
          		<View style={{width: '26%',paddingTop:width*0.05}}>
                <TouchableOpacity onPress={()=>alert("Are You Sure Want to See Details")}>
          		<Text style={{borderRadius:5,borderWidth:1,backgroundColor:'#E44227',color:"#fff",padding:5,borderColor:'#E44227',textAlign:'center'}}>
                View Details
              </Text>
              </TouchableOpacity>
          		</View>
            
          		</View>
<View style={{paddingTop:width*0.05,paddingHorizontal:width*0.03}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
    <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',padding:10,width:'33.3%'}}>
      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
  <Text style={{fontWeight:'bold'}}>
    Oder ID:
  </Text>
  <Text style={{color:'#000',fontWeight:'500'}}>
    #OTB45512
  </Text>
  </View>
  </View>
  <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',padding:10,width:'33.3%'}}>
  <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
  <Text style={{fontWeight:'bold'}}>
    Oder Amount:
  </Text>
  <Text style={{color:'#000',fontWeight:'500'}}>
    $262.35
  </Text>
  </View>
  </View>
  <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',padding:10,width:'33.3%'}}>
  <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
  <Text style={{fontWeight:'bold'}}>
    Payment Type:
  </Text>
  <Text style={{color:'#000',fontWeight:'500'}}>
    COD
  </Text>
  </View>
  </View>
  </View>
</View>
<View style={{paddingTop:width*0.01,paddingHorizontal:width*0.03}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
<Ionicons
              name='md-location-outline' size={width * 0.08} color={"#F7B614"}
            />
  <Text style={{fontWeight:'500',fontSize:width*0.03}}>
    2645 Crestview Terrace,New York,780004,United States
  </Text>
</View>
</View>
         		</View>
         		</View>
         		)
         })}
         </Animatable.View>
         <View elevation={5} style={{width: '100%',backgroundColor: '#fdfdfd',borderRadius:4}}>
             <Text>
                 Hello
             </Text>
         </View>
       </SafeAreaView>
    )
  }
}