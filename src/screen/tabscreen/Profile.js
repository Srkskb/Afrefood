import { Text, View, SafeAreaView, Dimensions,Image,TouchableOpacity, } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: width, height: height, backgroundColor: "#FFFFFF" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", paddingTop: width * 0.09, paddingHorizontal: width * 0.03 }}>
          <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
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
          </View>
          <View style={{width:"20%",backgroundColor:"#ffffff"}}>
            <View style={{alignItems:'center',justifyContent:"center"}}>
            <Image
            source={require("../../images/10.png")}
            resizeMode="contain"
            style={{height:height*0.05,width:width*0.2,borderRadius:width*0.05,borderColor:"#E44217"}}
            />

</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:width*0.01}}>
  <TouchableOpacity onPress={()=>alert("Please change your profile picture")}>
<Text style={{fontSize:width*0.03,fontWeight:"bold",color:"#FF9933"}}>
  EDIT
</Text>
</TouchableOpacity>
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
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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
</View>
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
  <View style={{paddingTop:width*0.02,backgroundColor:"#DCDCDC",marginTop:width*0.09}}>
  <View style={{borderBottomWidth:2,paddingTop:width*0.04,borderBottomColor:"#DCDCDC",borderTopWidth:2,borderTopColor:"#DCDCDC"}}>
</View>
</View>
<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", paddingTop: width * 0.09, paddingHorizontal: width * 0.03 }}>
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