import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput,Switch,ScrollView } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
export default class Notifiaction extends Component {
  state = {  
    switchValue: false , 
    damn: false,
    sure:false,
    simple:false
}; 
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
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'90%' }}>
        <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.05}}>
<Text style={{fontSize:width*0.05,color:'#000',fontFamily:"Poppins-SemiBold"}}>
    Notifiaction
</Text>
        </View>
  
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.08,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Enable all
  </Text> 
  <Text style={{fontSize:width*0.03,color:"#000011",fontWeight:"500"}}>
    Active all notifiactions
  </Text> 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
  <Switch  
                    value={this.state.switchValue}  
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Promos and offers
  </Text> 
  <Text style={{fontSize:width*0.03,color:"#000011",fontWeight:"500"}}>
    Receive updates about coupons,promotions
  </Text> 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
  <Switch  
                    value={this.state.damn}  
                    onValueChange ={(damn)=>this.setState({damn})}/> 
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Social notifiactions
  </Text> 
  <Text style={{fontSize:width*0.03,color:"#000011",fontWeight:"500"}}>
    Get notified when someone follows your profile
  </Text> 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
  <Switch  
                    value={this.state.sure}  
                    onValueChange ={(sure)=>this.setState({sure})}/> 
</View>
</View>
</View>
<View style={{paddingTop:width*0.03,borderBottomWidth:1,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    {/* <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    /> */}
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Order and purchases
  </Text> 
  <Text style={{fontSize:width*0.03,color:"#000011",fontWeight:"500"}}>
    Receive updates related to your Order status
  </Text> 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
  <Switch  
                    value={this.state.simple}  
                    onValueChange ={(simple)=>this.setState({simple})}/> 
</View>
</View>
</View>
<View style={{paddingTop:width*0.06,borderBottomWidth:8,borderColor:"#dcdcdc",marginHorizontal:width*0.03}}>

</View>
<View style={{paddingTop:width*0.1}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:width*0.06,fontFamily:"Poppins-SemiBold",color:'#dcdcdcaa'}}>
    AfreeFood
  </Text>
</View>
</View>
<TouchableOpacity onPress={()=>alert("Add successfully")}>
            <View style={{paddingTop:width*0.1,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#1599B0",borderColor:'#1599B0',justifyContent:'center',alignItems:'center',padding:10}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Save Changes
</Text>
              </View>

            </View>
            </TouchableOpacity>
</ScrollView>
        </SafeAreaView>
    )
  }
}