import React, { Component } from 'react'
import { Text, View,Button,ImageBackground,Image,Dimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");


export default class DashBoard extends Component {
    
    render() {
       return (
            <View style={{width: '100%',height: '100%'}}>
               <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
               alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
              <MaterialCommunityIcons name="view-dashboard" color={"#999"} size={width*0.09} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Dashboard</Text>
            </View>
            <View style={{paddingHorizontal:12,height: '90%'}}>
            <View style={{width: '100%',height: '16%',flexDirection:'row',justifyContent:'space-between'}}>
             <View style={{width: '32%',height: '100%',backgroundColor: '#52B3EB',borderRadius:10,
           alignItems:'center',justifyContent:'space-between',paddingVertical:height*0.018}}>
             <MaterialCommunityIcons name="human-male-male" color={"#fdfdfd"} size={width*0.04} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color: '#fdfdfd'}}>0</Text>  
              <Text style={{paddingHorizontal:12,fontSize:width*0.04,color: '#fdfdfd'}}>Total Students</Text>  
            </View>
            <View style={{width: '32%',height: '100%',backgroundColor: '#56A6DB',borderRadius:10,
           alignItems:'center',justifyContent:'space-between',paddingVertical:height*0.018}}>
             <MaterialCommunityIcons name="video" color={"#fdfdfd"} size={width*0.04} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color: '#fdfdfd'}}>0</Text>  
              <Text style={{paddingHorizontal:12,fontSize:width*0.04,color: '#fdfdfd'}}>Total Batches</Text>  
            </View>
            <View style={{width: '32%',height: '100%',backgroundColor: '#E7529A',borderRadius:10,
           alignItems:'center',justifyContent:'space-between',paddingVertical:height*0.018}}>
             <MaterialCommunityIcons name="human-male-male" color={"#fdfdfd"} size={width*0.04} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color: '#fdfdfd'}}>0</Text>  
              <Text style={{paddingHorizontal:12,fontSize:width*0.03,color: '#fdfdfd',textAlign:'center'}}>Today's Attendence</Text>  
            </View>  
            </View>
            <View style={{width: '100%',height: '16%',flexDirection:'row',justifyContent:'space-between',marginTop:height*0.018}}>
             <View style={{width: '32%',height: '100%',backgroundColor: '#6FAE36',borderRadius:10,
           alignItems:'center',justifyContent:'space-between',paddingVertical:height*0.018}}>
             <MaterialCommunityIcons name="human-male-male" color={"#fdfdfd"} size={width*0.04} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color: '#fdfdfd'}}>0</Text>  
              <Text style={{paddingHorizontal:12,fontSize:width*0.03,color: '#fdfdfd'}}>Announcements</Text>  
            </View>
            <View style={{width: '32%',height: '100%',backgroundColor: '#D34B19',borderRadius:10,
           alignItems:'center',justifyContent:'space-between',paddingVertical:height*0.018}}>
             <MaterialCommunityIcons name="video" color={"#fdfdfd"} size={width*0.04} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color: '#fdfdfd'}}>0</Text>  
              <Text style={{paddingHorizontal:12,fontSize:width*0.03,color: '#fdfdfd'}}>Pending Queries</Text>  
            </View>
            <View style={{width: '32%',height: '100%',backgroundColor: '#E7529A',borderRadius:10,
           alignItems:'center',justifyContent:'space-between',paddingVertical:height*0.018}}>
             <MaterialCommunityIcons name="human-male-male" color={"#fdfdfd"} size={width*0.04} />
              <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold',color: '#fdfdfd'}}>0</Text>  
              <Text style={{paddingHorizontal:12,fontSize:width*0.03,color: '#fdfdfd',textAlign:'center'}}>
              Submitted Assignment</Text>  
            </View>  
            </View>
            </View>
            </View>
        )
    }
}
