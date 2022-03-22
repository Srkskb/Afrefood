import { Animated,Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput,ScrollView,StyleSheet} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import FIcon from 'react-native-vector-icons/Feather';
import { Images } from "../../theme/index";
import { TabView, SceneMap } from 'react-native-tab-view';
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader,
  BackButtonHeader1
} from '../../components/index';
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} >
<Text>
  Hello world
</Text>
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
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
  }); 
  render() { 
    return (
     <View style={{flex:1}}>
 <BackButtonHeader1
    backPressed={() => { this.props.navigation.goBack() }}
     />
<ScrollView>
     <View style={{paddingHorizontal:width*0.05}}>
       <Image
       source={require('../../images/banner1.png')}
       style={{height:height*0.24,width:width*0.92,alignSelf:"center"}} resizeMode={'contain'}
       />
     </View>
     <View style={{paddingHorizontal:width*0.05,paddingTop:width*0.01}}>
       <Text style={{fontSize:width*0.06,fontWeight:'bold',color:"#000000",fontFamily: "Poppins-Medium"}}>
         Nazeer Foods
       </Text>
     </View>
     <View style={{paddingHorizontal:width*0.05,paddingTop:width*0.01}}>
       <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000"}}>
North Indian, Mughlai,Fast Food
       </Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:width*0.05,paddingTop:width*0.01}}>
       <Text>
M-42 Connaught Place,New Delhi.
       </Text>
       <Text style={{color:"#000000"}}>

2KM       </Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",paddingTop:width*0.02,paddingHorizontal:width*0.05}}>
       <Text style={{color:"#000000",fontWeight:"bold",fontFamily: "Poppins-Medium"}}>
Delivery
       </Text>
       <Text style={{color:"#000000",fontWeight:"bold",fontFamily: "Poppins-Medium",paddingHorizontal:width*0.2}}>
Open time</Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:width*0.05}}>
       <Text style={{fontWeight:"bold",fontFamily: "Poppins-Medium"}}>
Free
       </Text>

<Text style={{fontWeight:"bold",fontFamily: "Poppins-Medium",paddingHorizontal:width*0.27}}>
8:00AM
</Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",paddingTop:width*0.05}}>
       <TouchableOpacity onPress={()=>alert("Will add soon")}>
   <View style={styles.tabBarStyle}>
    
     <Image
     source={require('../../images/iocon.png')}
     resizeMode="contain"
          style={{width:width*0.09,height:height*0.06}}
     />
     <Text style={{paddingHorizontal:width*0.03,paddingTop:width*0.02,color:"#000",fontWeight:"bold"}}>
      {'10% OFF up to..\nuse code Maxsa...'}.
     </Text>

   </View>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>alert("Will add soon")}>
   <View style={styles.tabBarStyle}>
     <Image
     source={require('../../images/iocon.png')}
     resizeMode="contain"
     style={{width:width*0.09,height:height*0.06}}
     />
   <Text style={{paddingHorizontal:width*0.03,paddingTop:width*0.02,color:"#000",fontWeight:"bold"}}>
      {'10% OFF up to..\nuse code ZOMPA...'}.
     </Text>
   </View>
   </TouchableOpacity>
     </View>
     <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
     
     </ScrollView>
     </View>
    )
  }
}
const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection:"row",
    elevation: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    
    height: 50,
    width:180,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
  container: {
    flex:1
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  tabItem: {
    flex:1,
    alignItems: 'center',
    padding: 16,
  

    
  },
})