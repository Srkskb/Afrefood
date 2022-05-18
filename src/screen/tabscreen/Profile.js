import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity,TouchableNativeFeedback,TextInput } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
export default class Profile extends Component {
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
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", paddingHorizontal: width * 0.03 }}>
          {/* <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
          <Text style={{ fontSize: width * 0.06, fontWeight: 'bold', color: "#000000", fontFamily: "Poppins-Thin" }}>
            Shaharukh khan
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{fontSize:width*0.04,fontWeight:"bold"}}>
              8126759170 : 
            </Text>
            <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingHorizontal:width*0.01}}>
              Shaharukhskb@gmail.com
            </Text>
          </View>
          </View> */}
          <View style={{width:"20%",backgroundColor:"#ffffff"}}>
            <View style={{alignItems:'center',justifyContent:"center"}}>
            {/* <Image
            source={require("../../images/10.png")}
            resizeMode="contain"
            style={{height:height*0.05,width:width*0.2,borderRadius:width*0.05,borderColor:"#E44217"}}
            /> */}

</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.01}}>
  {/* <TouchableOpacity onPress={()=>alert("Please change your profile picture")}>
<Text style={{fontSize:width*0.03,fontWeight:"bold",color:"#FF9933"}}>
  EDIT
</Text>
</TouchableOpacity> */}
</View>
          </View>
        </View>
        <View style={{borderBottomWidth:4,marginHorizontal:width*0.03,paddingTop:width*0.04}}>

</View>
<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", paddingTop: width * 0.03, paddingHorizontal: width * 0.03 }}>
          <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
          <Text style={{ fontSize: width * 0.06, fontWeight: 'bold', color: "#000000", fontFamily: "Poppins-Thin" }}>
            My Account
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{fontSize:width*0.04,fontWeight:"bold"}}>
              Favourites,Offers & Settings
            </Text>
            
          </View>
          </View>
          <View style={{width:"20%",backgroundColor:"#ffffff"}}>
            <View style={{alignItems:"center",justifyContent:"center",paddingTop:width*0.03}}>
              <TouchableOpacity>
<MaterialCommunityIcons
name='chevron-down' size={width*0.09}
/>
</TouchableOpacity>
</View>
          </View>
        </View>
        <View style={{borderBottomWidth:2,marginHorizontal:width*0.03,paddingTop:width*0.04,borderBottomColor:"#DCDCDC"}}>

</View>
{/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/9.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Favourites
  </Text> 
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Offer")}> 
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View> */}
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/7.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Order History
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('History')}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/64.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Orders
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Order")}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/0.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Settings
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/abc.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Address Book
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Address')}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/caser.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.02}}>
  <Text style={{fontSize:width*0.05,color:"#000011",fontWeight:"500"}}>
    Payments
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{borderBottomWidth:2,marginHorizontal:width*0.03,paddingTop:width*0.04,borderBottomColor:"#DCDCDC"}}>

</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{paddingTop:width*0.03,paddingHorizontal:width*0.03}}>
    <Text style={{fontSize:width*0.06,color:"#000011",fontWeight:"bold"}}>
      Help
    </Text>
    </View>
<View style={{paddingHorizontal:width*0.03}}>
  <Text style={{fontSize:width*0.04}}>
    FAQs & Links
  </Text>
</View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
  </View>
<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", paddingTop: width * 0.07, paddingHorizontal: width * 0.03 }}>
          <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
          <Text style={{ fontSize: width * 0.05, fontWeight: 'bold', color: "#000000", fontFamily: "Poppins-Thin" }}>
            LOGOUT
          </Text>
</View>
<View style={{width:"20%",backgroundColor:"#ffffff"}}>
            <View style={{alignItems:'center',justifyContent:"center"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
            <Image
            source={require("../../images/8.png")}
            resizeMode="contain"
            style={{height:height*0.03,width:width*0.3,borderRadius:width*0.05,borderColor:"#E44217"}}
            />
</TouchableOpacity>
</View>
</View>
</View>
      </SafeAreaView>
    )
  }
}