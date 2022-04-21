import { Text, View, ImageBackground,Animated, Dimensions,TouchableNativeFeedback, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,Modal } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader
} from '../../components/index';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { TabView, SceneMap } from 'react-native-tab-view';
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:width*0.03,marginHorizontal:width*0.04}}>
       <Text style={{fontSize:width*0.05,color:'#E44227',fontFamily:'Poppins-SemiBold',fontWeight:'bold'}}>
         Order Information
       </Text>
       <Text style={{color:"#000",fontWeight:'bold',fontSize:width*0.035}}>
         ID : 43e2116H
       </Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:width*0.03,marginHorizontal:width*0.04}}>
       <Text style={{fontSize:width*0.04,color:'#000',fontFamily:'Poppins-SemiBold'}}>
         Delivery to
       </Text>
       <TouchableOpacity onPress={()=>alert('Please add new location')}>
       <Text style={{color:'orange',fontWeight:'bold',fontSize:width*0.04}}>
         Add new address
       </Text>
       </TouchableOpacity>
    </View>
    <View style={{height:'15%',borderWidth:1,borderColor:'#DCDCDC',marginHorizontal:width*0.04
    ,paddingTop:width*0.02,paddingHorizontal:width*0.01,borderRadius:10,flexDirection:'row'}}>
<View style={{width:'35%',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row'}}>
  <TouchableNativeFeedback >
<Image
source={require('../../images/map.png')}
style={{height:height*0.12,width:width*0.28,borderRadius:10,}}
/>
</TouchableNativeFeedback>
</View>
<View style={{width:'65%',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',paddingTop:width*0.01}}>
  <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
<Entypo
              name='location-pin' size={width * 0.05} color={"#bbb"}
            />
            <Text style={{color:'#000',fontSize:width*0.03,paddingHorizontal:width*0.01,fontWeight:'bold'}}>
              {'76A Eight Avenue,Andora\n Mercy,New York..'}
            </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.01}}>

          
            <FontAwesome
              name='user' size={width * 0.05} color={"#bbb"}
            />
            <Text style={{color:'#ccc',fontSize:width*0.03,paddingHorizontal:width*0.03}}>
              Beatrice Owen
            </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.01}}>

          
<Ionicons
  name='call' size={width * 0.05} color={"#bbb"}
/>
<Text style={{color:'#ccc',fontSize:width*0.03,paddingHorizontal:width*0.03}}>
  +1 (454) 34211432
</Text>
</View>
</View>
    </View>
    <View style={{paddingTop:width*0.02}}>
      </View>
    <View style={{height:'5%',flexDirection:'row',backgroundColor:'#E7F2F9',justifyContent:'space-around',alignItems:'center',marginHorizontal:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000"}}>
  Delivery Time
</Text>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000"}}>
  10:18 AM
</Text>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000"}}>
Oct 6,2020
</Text>
<TouchableOpacity>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:'orange'}}>
  Edit
</Text>
</TouchableOpacity>
    </View>
    <View style={{marginHorizontal:width*0.04
    ,paddingTop:width*0.02,paddingHorizontal:width*0.01,borderRadius:10,flexDirection:'row'}}>
    <View style={{width:'28%',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row'}}>
  <TouchableNativeFeedback >
<Image
source={require('../../images/2102.png')}
style={{height:height*0.1,width:width*0.2,borderRadius:10,}}
/>
</TouchableNativeFeedback>
</View>
<View style={{width:'72%',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',paddingTop:width*0.02}}>
  <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>

            <Text style={{color:'#000',fontSize:width*0.04,fontWeight:'bold'}}>
              {'Kichi Coffee & Drink'}
            </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:width*0.01}}>

            <Text style={{ fontSize:width*0.04,color:'#ccc'}}>
              Lemon Juice Fresh
            </Text>
          </View>
</View>
</View>
<View style={{paddingTop:width*0.05}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:width*0.03}}>
<Text style={{fontSize:width*0.03,fontWeight:'500',color:"#000"}}>
  Subtotal (1 item)
</Text>
<Text style={{fontSize:width*0.03,fontWeight:'500',color:"#000"}}>
  $2.9
</Text>
</View>
</View>
<View style={{paddingTop:width*0.02}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:width*0.03}}>
<Text style={{fontSize:width*0.03,fontWeight:'500',color:"#000"}}>
  Ship Fee (2.4KM)
</Text>
<Text style={{fontSize:width*0.03,fontWeight:'500',color:"#000"}}>
  $1.3
</Text>
</View>
</View>
<View style={{paddingTop:width*0.02}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:width*0.03}}>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:'orange'}}>
  Total
</Text>
<Text style={{fontSize:width*0.04,fontWeight:'bold',color:'orange'}}>
  $4.2
</Text>
</View>
</View>
<View style={{paddingTop:width*0.013}}>
  </View>
<View style={{height:'3%',backgroundColor:'#E7F2F9',justifyContent:'flex-start',alignItems:'flex-start',marginHorizontal:width*0.03}}>
<Text style={{color:"#000",fontSize:width*0.04,fontWeight:'bold'}}>
  Note
</Text>
  </View>
  <View style={{paddingTop:width*0.02}}>
  </View>
<View style={{height:'10%',backgroundColor:'#E7F2F9',justifyContent:'center',alignItems:'center',marginHorizontal:width*0.03}}>
<Text style={{color:"#aaa",fontSize:width*0.04,fontWeight:'bold',textAlign:'center'}}>
  Please call me when you come.Thank you!
</Text>
  </View>
  <View style={{paddingTop:width*0.06}}>
  </View>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
  <TouchableOpacity>
<Text style={{borderWidth:1,borderRadius:10,padding:10,paddingHorizontal:width*0.05,width:150,textAlign:'center',color:'#000'}}>
  Raiting
</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={{borderWidth:1,borderRadius:10,padding:10,paddingHorizontal:width*0.05,width:150,textAlign:'center',color:'#fff',backgroundColor:"#FD7D05",borderColor:'#FD7D05'}}>
  Re-Order
</Text>
</TouchableOpacity>
</View>
    </View>

);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#E44227" }]} />
);
export default class History extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Delivered' },
      { key: 'second', title: 'Rejected' },
    
    ],

  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color: "#FFFFFF", opacity, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: "#FFFFFF", fontSize:width*0.05,fontFamily:'Poppins-SemiBold' }}>{route.title}</Animated.Text>
              <Text>
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
     
      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
        <View style={{
          flexDirection: 'row', alignItems: "center", justifyContent: 'space-between',
          backgroundColor: "#F7B614", width: width, height: '5%', paddingHorizontal: width * 0.03, paddingTop: width * 0.02
        }}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Ionicons
              name='arrow-back-sharp' size={width * 0.07} color={"#000"}
              
            />
            </TouchableOpacity>
              <View style={{paddingHorizontal:width*0.25}}>
          <Text style={{color:"#FFF",textAlign:'center',fontSize:width*0.05,fontWeight:'bold',fontFamily:'Poppins-Semibold'}}>
            Order History
          </Text>
        </View>
    </View>
      
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
        <View style={{ width: width, height: height, backgroundColor: '#FFFFFF' }}>
            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={this._handleIndexChange}
            />
          </View>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: "row",
    elevation: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    height: 50,
    width: 180,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
  container: {
    width: width,
    height: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: "space-evenly",

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#F7B614"



  },
})