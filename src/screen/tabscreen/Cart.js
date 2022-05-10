import { Switch, Animated, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,TouchableNativeFeedback } from 'react-native'
import React, { Component,useState } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from "../../theme/index";
import { TabView, SceneMap } from 'react-native-tab-view';
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader,
  BackButtonHeader1
} from '../../components/index';
const FirstRoute = ({navigation}) => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} >
    <View style={{ alignItems: "center", borderRadius: 5, borderWidth: 1, marginHorizontal: width * 0.05, flexDirection: "row", borderColor: "#E42217", justifyContent: "space-between" }}>
      <FIcon name="search" size={width * 0.06} color="#DCDCDC"
        style={{ paddingHorizontal: width * 0.02 }}
      />
      <TextInput
        style={{ fontSize: 15 }}
        placeholder={'Restaurant name or dish name..'}
        placeholderTextColor={"#DCDCDC"}
      />
      <TouchableOpacity
        onPress={() => alert("Please Speak something...")}>
        <FIcon name="mic" size={width * 0.06} color="#E42217"

        />
      </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', alignItems: "center", paddingHorizontal: width * 0.05, paddingTop: width * 0.03, }}>
      <Switch
      />
      <Text style={{ paddingHorizontal: width * 0.02 }}>
        Veg
      </Text>
      <Switch
      />
      <Text style={{ paddingHorizontal: width * 0.02 }}>
        Non-Veg
      </Text>
    </View>
    <View style={{ paddingHorizontal: width * 0.05, paddingTop: width * 0.05, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <Text style={{ fontSize: width * 0.05, fontWeight: "bold" }}>
        Recommended (30)
      </Text>
      <TouchableOpacity>
        <AntDesign
          name='caretup' size={width * 0.04} color="#000000"
        />
      </TouchableOpacity>
    </View>
    <View style={{ paddingHorizontal: width * 0.05, paddingTop: width * 0.05, width: width, flexDirection: "row" }}>
      <View style={{ width: '64%', backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{ height: 25, width: 25, paddingTop: width * 0.02 }}
            resizeMode="contain"
          />
          <Text style={{ borderWidth: 1, borderRadius: 5, borderColor: "#F15267", backgroundColor: "#F15267", paddingHorizontal: width * 0.01, marginHorizontal: width * 0.01, textAlign: "center", color: "#ffffff", }}>
            Bestseller
          </Text>
        </View>
        <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "#000000" }}>
          Mutton Korma
        </Text>
        <Text>
          In Main Course
        </Text>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>
          340
        </Text>
        <Text style={{ paddingTop: width * 0.01 }}>
          {' Mutton stirred in with curd water\n and a meiange of s....read more'}
        </Text>
        <View style={{ paddingTop: width * 0.02 }}>
          <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "#EAC117", width: width * 0.2 }}>
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='staro' size={width * 0.03} color="#EAC117"
            />
            <Text style={{ fontSize: width * 0.03, fontWeight: "bold" }}>
              14
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: width * 0.02 }}>
          <TouchableOpacity>
            <Image
              source={require('../../images/LIKE.png')}
              style={{ height: 45, width: 45, paddingTop: width * 0.02 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '36%', backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../../images/diish1.png')}
          style={{ height: height * 0.12, width: width * 0.42 }}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() =>{navigation("FoodCart")}}>
          <View style={{ paddingTop: width * 0.01, paddingHorizontal: width * 0.06 }}>
            <View style={{ borderRadius: 10, borderWidth: 1, width: width * 0.3, backgroundColor: "#FFF6F5", borderColor: "#E75162" }}>
              <Text style={{ textAlign: 'center', fontWeight: "bold", padding: 10, color: "#E75162", fontSize: width * 0.04 }}>
                ADD +
              </Text>

            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ borderBottomWidth: 1, paddingTop: width * 0.05, borderBottomColor: "#DCDCDC" }}>

    </View>
    <View style={{ paddingHorizontal: width * 0.05, paddingTop: width * 0.05, width: width, flexDirection: "row" }}>
      <View style={{ width: '64%', backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{ height: 25, width: 25, paddingTop: width * 0.02 }}
            resizeMode="contain"
          />
          <Text style={{ borderWidth: 1, borderRadius: 5, borderColor: "#F15267", backgroundColor: "#F15267", paddingHorizontal: width * 0.01, marginHorizontal: width * 0.01, textAlign: "center", color: "#ffffff", }}>
            Bestseller
          </Text>
        </View>
        <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "#000000" }}>
          Butter Chicken Boneless
        </Text>
        <Text>
          In Main Course
        </Text>
        <Text style={{ color: "#000000", fontWeight: "bold" }}>
          340
        </Text>
        <Text style={{ paddingTop: width * 0.01 }}>
          {' Charcoal grilled boneless chicken\n cooked in creame....read more'}
        </Text>
        <View style={{ paddingTop: width * 0.02 }}>
          <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "#EAC117", width: width * 0.2 }}>
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <AntDesign
              name='star' size={width * 0.03} color="#EAC117"
            />
            <Text style={{ fontSize: width * 0.03, fontWeight: "bold" }}>
              38
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: width * 0.02 }}>
          <TouchableOpacity>
            <Image
              source={require('../../images/LIKE.png')}
              style={{ height: 45, width: 45, paddingTop: width * 0.02 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '36%', backgroundColor: '#FFFFFF' }}>
        <Image
          source={require('../../images/dish2.png')}
          style={{ height: height * 0.12, width: width * 0.42 }}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() =>{navigation("FoodCart")}}>
          <View style={{ paddingTop: width * 0.01, paddingHorizontal: width * 0.06 }}>
            <View style={{ borderRadius: 10, borderWidth: 1, width: width * 0.3, backgroundColor: "#FFF6F5", borderColor: "#E75162" }}>
              <Text style={{ textAlign: 'center', fontWeight: "bold", padding: 10, color: "#E75162", fontSize: width * 0.04 }}>
                ADD +
              </Text>

            </View>
          </View>
        </TouchableOpacity>
        <View style={{ paddingTop: width * 0.03, paddingHorizontal: width * 0.06 }}>
          <View style={{ borderRadius: 30, borderWidth: 1, width: width * 0.3, backgroundColor: "#000000", borderColor: "#000000", flexDirection: 'row', padding: 10, justifyContent: "space-evenly" }}>
            <MaterialCommunityIcons
              name='silverware-fork-knife' size={width * 0.025} color={"#ffffff"}
            />
            <Text style={{ textAlign: 'center', fontWeight: "bold", color: "#ffffff", fontSize: width * 0.025 }}>
              Browser Menu
            </Text>
          </View>
        </View>

      </View>
    </View>
    <View style={{ borderBottomWidth: 1, paddingTop: width * 0.05, borderBottomColor: "#DCDCDC" }}>

    </View>
  </View>

);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFFFFF' }]} />
);
export default class Cart extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Recommended' },
      { key: 'second', title: 'Most Love Combos' },
      { key: 'third', title: 'Meal' },
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
              <Animated.Text style={{ color: "#E42217", opacity, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: "#E42217", fontSize: 15 }}>{route.title}</Animated.Text>
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
    third: ThirdRoute,
  });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* <View style={{width: '100%',height:"7%", backgroundColor: '#fdfdfk',paddingHorizontal:width*0.01,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
         <TouchableOpacity style={{flexDirection:'row'}}  onPress={() => { this.props.navigation.goBack() }}>
     <Ionicons name="chevron-back-outline" color={"#E44217"} size={width*0.07}
     style={{paddingVertical:width*0.005}}
     />
     <Text style={{fontSize:width*0.06,fontWeight:'bold',color:"#E44217"}}>Back</Text>
   </TouchableOpacity>
   </View> */}
   
          <View style={{ paddingHorizontal: width * 0.05, height: height * 0.24 }}>
            <Image
              source={require('../../images/banner1.png')}
              style={{ height: height * 0.24, width: width * 0.92, alignSelf: "center" }} resizeMode={'contain'}
            />
          </View>
          <View style={{ paddingHorizontal: width * 0.05, height: height * 0.06 }}>
            <Text style={{ fontSize: width * 0.06, fontWeight: 'bold', color: "#000000", fontFamily: "Poppins-Medium" }}>
              Nazeer Foods
            </Text>
          </View>
          <View style={{ paddingHorizontal: width * 0.05, height: height * 0.04 }}>
            <Text style={{ fontSize: width * 0.04, fontWeight: 'bold', color: "#000000" }}>
              North Indian, Mughlai,Fast Food
            </Text>
          </View>
          <View style={{
            flexDirection: "row", alignItems: "center", paddingHorizontal: width * 0.05,
            height: height * 0.04
          }}>
            <Text>
              M-42 Connaught Place,New Delhi.
            </Text>
            <Text style={{ color: "#000000" }}>

              2KM       </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.04, paddingHorizontal: width * 0.05 }}>
            <Text style={{ color: "#000000", fontWeight: "bold", fontFamily: "Poppins-Medium" }}>
              Delivery
            </Text>
            <Text style={{ color: "#000000", fontWeight: "bold", fontFamily: "Poppins-Medium", paddingHorizontal: width * 0.2 }}>
              Open time</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: width * 0.05, height: height * 0.04 }}>
            <Text style={{ fontWeight: "bold", fontFamily: "Poppins-Medium" }}>
              Free
            </Text>

            <Text style={{ fontWeight: "bold", fontFamily: "Poppins-Medium", paddingHorizontal: width * 0.27 }}>
              8:00AM
            </Text>
          </View>
          <View style={{
            flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
            height: height * 0.1
          }}>
            <TouchableOpacity onPress={() => alert("Will add soon")}>
              <View style={styles.tabBarStyle}>

                <Image
                  source={require('../../images/iocon.png')}
                  resizeMode="contain"
                  style={{ width: width * 0.09, height: height * 0.06 }}
                />
                <Text style={{ paddingHorizontal: width * 0.03, paddingTop: width * 0.02, color: "#000", fontWeight: "bold" }}>
                  {'10% OFF up to..\nuse code Maxsa...'}.
                </Text>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Will add soon")}>
              <View style={styles.tabBarStyle}>
                <Image
                  source={require('../../images/iocon.png')}
                  resizeMode="contain"
                  style={{ width: width * 0.09, height: height * 0.06 }}
                />
                <Text style={{ paddingHorizontal: width * 0.03, paddingTop: width * 0.02, color: "#000", fontWeight: "bold" }}>
                  {'10% OFF up to..\nuse code ZOMPA...'}.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: width, height: height, backgroundColor: '#FFFFFF' }}>
            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={this._handleIndexChange}
            />
          </View>

        </ScrollView>
      </View>
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
    height: '100%'
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: "space-evenly"

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical:6,



  },
})