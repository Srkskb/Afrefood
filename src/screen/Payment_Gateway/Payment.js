import { Text, View,Dimensions,TextInput,ScrollView,TouchableOpacity,Linking ,Image} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
export default class Payment extends Component {
  render() {
    return (
      <View style={{width: '100%',height: '100%',backgroundColor:'#fff'}}>
         <View style={{width: '100%',height: '8%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
         <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
     <MaterialCommunityIcons name="keyboard-backspace" color={"#000"} size={width*0.07} />
     </TouchableOpacity>
     <Text style={{paddingHorizontal:width*0.07,fontSize:width*0.05,fontWeight:'500',fontFamily:'Poppins-Regular',color:'#000'}}>Manage Payment Methods</Text> 
   </View>
   <View style={{borderBottomWidth:1,borderBottomColor:'#dcdcdc'}}>
     </View>
   <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'90%' }}>
  
   <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03 }}>
     <Text style={{fontSize:width*0.05,fontFamily:'Poppins-SemiBold'}}>
       Cards
     </Text>
   </View>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/cdre.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Add Credit,Debit & ATM Cards
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Addcart")}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03}}>
<View style={{borderBottomWidth:5,borderBottomColor:'#dcdcdc'}}>

</View>
</View>
<View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03 }}>
     <Text style={{fontSize:width*0.05,fontFamily:'Poppins-SemiBold'}}>
       UPI
     </Text>
   </View>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/paytm.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Paytm UPI
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://paytm.com/')}}>
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
    source={require('../../images/google.jpg')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Google Pay 
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://pay.google.com/')}}>
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
    source={require('../../images/phone.jpg')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    phone Pay
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.phonepe.com/')}}>
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
    source={require('../../images/upi.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Pay via UPI
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.bhimupi.org.in/')}}>
<MaterialCommunityIcons
name='chevron-down' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03}}>
<View style={{borderBottomWidth:5,borderBottomColor:'#dcdcdc'}}>

</View>
</View>

<View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03 }}>
     <Text style={{fontSize:width*0.05,fontFamily:'Poppins-SemiBold'}}>
       Netbanking
     </Text>
   </View>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/banking.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Netbanking
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.creditmantri.com/net-banking/')}}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03}}>
<View style={{borderBottomWidth:5,borderBottomColor:'#dcdcdc'}}>

</View>
</View>
<View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03 }}>
     <Text style={{fontSize:width*0.05,fontFamily:'Poppins-SemiBold'}}>
      COD
     </Text>
   </View>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/cod.jpg')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Cash on delivery
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>alert("Please pay on the delevery time")}>
<MaterialCommunityIcons
name='chevron-right' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03}}>
<View style={{borderBottomWidth:5,borderBottomColor:'#dcdcdc'}}>

</View>
</View>
<View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03 }}>
     <Text style={{fontSize:width*0.05,fontFamily:'Poppins-SemiBold'}}>
      Wallets
     </Text>
   </View>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/paytm.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Paytm Wallets
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://paytm.com/')}}>
<MaterialCommunityIcons
name='chevron-down' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"80%",backgroundColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:width*0.04,paddingHorizontal:width*0.03}}>
    <Image
    source={require('../../images/free.png')}
    resizeMode="contain"
    style={{height:height*0.03,width:width*0.09}}
    />
<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.045,color:"#000011",fontWeight:"500"}}>
    Freecharge
  </Text>
</View>
  </View>
  </View>
  <View style={{width:"20%",backgroundColor:"#FFFFFF"}}>
  <View style={{paddingTop:width*0.04,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.freecharge.in/')}}>
<MaterialCommunityIcons
name='chevron-down' size={width*0.09}
/>
</TouchableOpacity>
</View>
</View>
</View>
<View style={{paddingTop:width*0.03}}>
<View style={{borderBottomWidth:5,borderBottomColor:'#dcdcdc',paddingBottom:width*0.05}}>

</View>
</View>
   </ScrollView>
   </View>

    )
  }
}