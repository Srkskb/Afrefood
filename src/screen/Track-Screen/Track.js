import { Text, View, Dimensions,Image } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Track extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF' }}>
                <View style={{
                    width: '100%', height: '10%', backgroundColor: '#FEE9B0', paddingHorizontal: width * 0.06,
                    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
                }}>
                    <MaterialCommunityIcons
                        name='hamburger-check' size={width * 0.09} color={"#000"}
                    />
                    <Text style={{ paddingHorizontal: 12, fontSize: width * 0.06, fontWeight: 'bold', color: "#000" }}>Track Order</Text>
                    <TouchableOpacity onPress={() => alert("Are you sure want to cancel Order")}>
                        <Text style={{ fontSize: width * 0.04, fontWeight: 'bold', color: "#000" }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "#E44226" }}>

                </View>
                <View style={{
                    width: '100%', height: '12%', backgroundColor: '#DCDCDC', paddingHorizontal: width * 0.06,
                    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
                }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: width * 0.05, fontWeight: '500', color: '#000' }}>
                            Estimated Time
                        </Text>
                        <Text style={{ fontSize: width * 0.035, fontWeight: '500', color: '#E44226' }}>
                            30 Minutes
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: width * 0.05, fontWeight: '500', color: '#000' }}>
                            Order Number
                        </Text>
                        <Text style={{ fontSize: width * 0.035, fontWeight: '500', color: '#E44226' }}>
                            #2482011
                        </Text>
                    </View>
                </View>
                    <View style={{flexDirection:'row',paddingTop:width*0.09}}>
                        <View style={{paddingTop:width*0.05,width:"20%"}}>
                            <Image
                            source={require("../../images/mnb.jpeg")}
                            />
                        </View>
                        <View style={{width:"30%",flexDirection:'column'}}>
                <Image
                source={require("../../images/mjk.jpeg")}
                />
                 <Image
                source={require("../../images/dfgh.jpeg")}
                />
                <View style={{paddingTop:width*0.07}}>
                 <Image
                source={require("../../images/uyh.jpeg")}
                />
                </View>
                <View style={{paddingTop:width*0.09}}>
                 <Image
                source={require("../../images/oiu.jpeg")}
                />
                </View>
                </View>
                  <View style={{width:"50%",flexDirection:'column'}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000',paddingTop:width*0.07}}>
    Order Placed
</Text>
<Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#000000aa',paddingTop:width*0.02}}>
    We have recevied your order.
</Text>
<View style={{paddingTop:width*0.07}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#000',paddingTop:width*0.07}}>
    Order Confirmed
</Text>
<Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#000000aa',paddingTop:width*0.02}}>
    Your order have deen Confirmed.
</Text>
</View>
<View style={{paddingTop:width*0.1}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#02527C',paddingTop:width*0.07}}>
    Order Processed
</Text>
<Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#02527C',paddingTop:width*0.02}}>
    We are preparing your Order.
</Text>
</View>
<View style={{paddingTop:width*0.09}}>
<Text style={{fontSize:width*0.05,fontWeight:'bold',color:'#DCDCDC',paddingTop:width*0.07}}>
    Ready to Pickup
</Text>
<Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#DCDCDC',paddingTop:width*0.02}}>
     your Order is ready to Pickup.
</Text>
</View>
                    </View>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("MainScreen")}>
            <View style={{paddingTop:width*0.05,marginHorizontal:width*0.06}}>
              <View style={{borderWidth:1,borderRadius:10,backgroundColor:"#1599B0",borderColor:'#1599B0',justifyContent:'center',alignItems:'center',padding:10,paddingHorizontal:width*0.06}}>
<Text style={{color:'#fff',fontSize:width*0.04}}>
  Go To Home Menu
</Text>
              </View>

            </View>
            </TouchableOpacity>
                </View>
        )
    }
}