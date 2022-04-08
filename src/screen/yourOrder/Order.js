import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput,StyleSheet} 
from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

export default class Order extends Component {

    render() {
    	let data=[{"name":"Joseph Kuruvilla","location":'South africa'},{'name':'Test'}]
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:width*0.02,
            backgroundColor: '#fff'}}>
                <View style={{paddingBottom:width*0.02}}>
                    <Text style={{fontWeight:'bold',fontSize:width*0.07,color:'#E6A913'}}>
                        Your Order
                    </Text>
                </View>
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
           		Order Number : 30284263
          		</Text>
          		<Text style={{fontSize:12,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center',paddingTop:6}}>
           		Delivery Time : 08/04/2022 10:20 Am
          		</Text>
          		</View>
          		</View>
          		<View style={{width: '26%'}}>
          		
          		</View>
          		</View>

          		<View style={{paddingHorizontal:8,width: '100%',marginTop:8,backgroundColor: '#E6A913'}}>
          		<View style={{width: '100%',flexDirection:'row',paddingVertical:8}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-SemiBold",
            		color:'#121212'}}>
           		Item Name
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-SemiBold",
            		color:'#121212',textAlign:'center'}}>
           		Quantity
          		</Text>
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-SemiBold",
            		color:'#121212',textAlign:'center'}}>
           		Price
          		</Text>
         		</View>
         		</View>
         		</View>
         		<View style={{width: '100%',marginTop:8,borderBottomWidth:1,borderColor: '#E42217',
         		paddingBottom:6}}>
          		<View style={{paddingHorizontal:8,width: '100%',flexDirection:'row'}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212'}}>
           		Double cheese pan
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		05
          		</Text>
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		$250
          		</Text>
         		</View>
         		</View>
         		</View>
         		<View style={{width: '100%',marginTop:8,borderBottomWidth:1,borderColor: '#E42217',
         		paddingBottom:6}}>
          		<View style={{paddingHorizontal:8,width: '100%',flexDirection:'row'}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212'}}>
           		Gyoza
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		07
          		</Text>
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		$150
          		</Text>
         		</View>
         		</View></View>
                 <View style={{width: '100%',marginTop:8,borderBottomWidth:1,borderColor: '#E42217',
         		paddingBottom:6}}>
          		<View style={{paddingHorizontal:8,width: '100%',flexDirection:'row'}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212'}}>
           		Burger Smokehouse
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		04
          		</Text>
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		$350
          		</Text>
         		</View>
         		</View></View>
         		<View style={{width: '100%',marginTop:8,
         		paddingBottom:6}}>
          		<View style={{paddingHorizontal:8,width: '100%',flexDirection:'row'}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212'}}>
           		Sub Total
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		$750
          		</Text>
         		</View>
         		</View></View>
         		<View style={{width: '100%',marginTop:8,
         		paddingBottom:6}}>
          		<View style={{paddingHorizontal:8,width: '100%',flexDirection:'row'}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212'}}>
           		S Tax
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		$50
          		</Text>
         		</View>
         		</View></View>
         		<View style={{width: '100%',marginTop:8,
         		paddingBottom:6}}>
          		<View style={{paddingHorizontal:8,width: '100%',flexDirection:'row'}}>
          		<View style={{width: '60%'}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212'}}>
           		Total
          		</Text>
          		</View>
          		<View style={{width: '20%'}}>
          		
         		</View>
         		<View style={{width: '20%'}}>
         		<Text style={{fontSize:14,fontFamily: "Montserrat-Medium",
            		color:'#121212',textAlign:'center'}}>
           		$800
          		</Text>
         		</View>
         		</View></View>

         		<View style={{padding:8,width: '100%',marginBottom:10,flexDirection:'row'}}>
          		
          		<View style={{width: '33%',paddingRight:4}}>
          		<TouchableOpacity style={{width:'100%',justifyContent:'center',
          		alignItems:'center',paddingVertical:8,borderWidth:1,paddingHorizontal:4,
          		borderRadius:4}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-SemiBold",
            		color:'#121212',textAlign:'center'}}>
           		View Details
          		</Text></TouchableOpacity>
          		</View>
         		<View style={{width: '33%',paddingHorizontal:4}}>
          		<TouchableOpacity style={{width:'100%',justifyContent:'center',borderWidth:1,borderColor: '#E42217',
          		alignItems:'center',paddingVertical:8,backgroundColor:'#E42217',paddingHorizontal:4,
          		borderRadius:4}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-SemiBold",
            		color:'#fff',textAlign:'center'}}>
           		Cancel Order
          		</Text></TouchableOpacity>
          		</View>
          		<View style={{width: '33%',paddingLeft:4}}>
          		<TouchableOpacity style={{width:'100%',justifyContent:'center',borderWidth:1,borderColor: '#7EB721',
          		alignItems:'center',paddingVertical:8,backgroundColor:'#7EB721',paddingHorizontal:4,
          		borderRadius:4}}>
          		<Text style={{fontSize:14,fontFamily: "Montserrat-SemiBold",
            		color:'#fff',textAlign:'center'}}>
           		Track Order
          		</Text></TouchableOpacity>
          		</View>
         		</View>

         		</View>
         		</View>
         		)
         })}
         </Animatable.View>
            </View>
        )
    }
}
