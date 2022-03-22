import { Switch,Animated,Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput,ScrollView,StyleSheet} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
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
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} >
<View style={{alignItems:"center",borderRadius:5,borderWidth:1,marginHorizontal:width*0.05,flexDirection:"row",borderColor:"#E42217",justifyContent:"space-between"}}>
<FIcon name="search" size={width*0.06} color="#DCDCDC"
style={{paddingHorizontal:width*0.02}}
    />
     <TextInput
         style={{fontSize:20}}
         placeholder={'Restaurant name or dish name..'}
         placeholderTextColor={"#DCDCDC"}
        />
         <TouchableOpacity
    onPress={()=>alert("Please Speak something...")}>
   <FIcon name="mic" size={width*0.06} color="#E42217"
   
    />
    </TouchableOpacity>
</View>
<View style={{flexDirection:'row',alignItems:"center",paddingHorizontal:width*0.05,paddingTop:width*0.03,}}>
<Switch
            
    
/>
<Text style={{paddingHorizontal:width*0.02}}>
  Veg
</Text>
<Switch
              
      
/>
<Text style={{paddingHorizontal:width*0.02}}>
  Non-Veg
</Text>
</View>
<View style={{paddingHorizontal:width*0.05,paddingTop:width*0.05,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
<Text style={{fontSize:width*0.05,fontWeight:"bold",color:"#000000"}}>
  Recommended (30)
</Text>
<TouchableOpacity>
<AntDesign
name='caretup' size={width*0.04} color="#000000"
/>
</TouchableOpacity>
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
              <Animated.Text style={{color:"#E42217",opacity,fontWeight:"bold",borderBottomWidth:1,borderBottomColor:"#E42217",fontSize:15 }}>{route.title}</Animated.Text>
              <Text>

              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first:FirstRoute,
    second:SecondRoute,
    third:ThirdRoute,
  });

  render() { 
    return (
     <View style={{flex:1}}>
<ScrollView contentContainerStyle={{flexGrow: 1}}>
 <BackButtonHeader1
    backPressed={() => { this.props.navigation.goBack() }}
     />
     <View style={{paddingHorizontal:width*0.05,height:height*0.24}}>
       <Image
       source={require('../../images/banner1.png')}
       style={{height:height*0.24,width:width*0.92,alignSelf:"center"}} resizeMode={'contain'}
       />
     </View>
     <View style={{paddingHorizontal:width*0.05,height:height*0.06}}>
       <Text style={{fontSize:width*0.06,fontWeight:'bold',color:"#000000",fontFamily: "Poppins-Medium"}}>
         Nazeer Foods
       </Text>
     </View>
     <View style={{paddingHorizontal:width*0.05,height:height*0.04}}>
       <Text style={{fontSize:width*0.04,fontWeight:'bold',color:"#000000"}}>
North Indian, Mughlai,Fast Food
       </Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:width*0.05,
     height:height*0.04}}>
       <Text>
M-42 Connaught Place,New Delhi.
       </Text>
       <Text style={{color:"#000000"}}>

2KM       </Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",height:height*0.04,paddingHorizontal:width*0.05}}>
       <Text style={{color:"#000000",fontWeight:"bold",fontFamily: "Poppins-Medium"}}>
Delivery
       </Text>
       <Text style={{color:"#000000",fontWeight:"bold",fontFamily: "Poppins-Medium",paddingHorizontal:width*0.2}}>
Open time</Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:width*0.05,height:height*0.04}}>
       <Text style={{fontWeight:"bold",fontFamily: "Poppins-Medium"}}>
Free
       </Text>

<Text style={{fontWeight:"bold",fontFamily: "Poppins-Medium",paddingHorizontal:width*0.27}}>
8:00AM
</Text>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",
     height:height*0.1}}>
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
     <View style={{width:width,height:height,backgroundColor: '#FFFFFF'}}>
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
    width:width,
    height:'100%'
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent:"space-evenly"
    
  },
  tabItem: {
    flex:1,
    alignItems: 'center',
    padding: 16,
  

    
  },
})