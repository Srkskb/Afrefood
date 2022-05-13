import { Text, View, ImageBackground, Dimensions,TouchableNativeFeedback, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet,Modal } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
export default class Favorite extends Component {
  constructor()
  {
    super();
 this.state = {
    data: [{ "id": "1" }, { "id": "2" }, { "id": "3" }, { "id": "4" }, { "id": "5" }, { "id": "6" }],
    activeSlide: 0,
    show:false
  }
}
  renderItem = ({ item, index }) => {

    return (
      <View style={{ paddingBottom: 4 }}>
        <Image source={require('../../images/ban2.png')}
          style={{ height: height * 0.24, width: width * 0.92 }} resizeMode={'contain'}
        />
      </View>
    );
  }
  render() {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_WIDTH2 = 166;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
    const ITEM_WIDTH2 = 166;
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
    return (

      <SafeAreaView style={{ width: width, height: height, backgroundColor: "#FFFFFF" }}>
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
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{paddingHorizontal:width*0.03,paddingTop:width*0.03}}>
<Image
source={require('../../images/star.png')}
style={{height:50,width:50}}
/>
</View>
<View >
  <Text style={{fontSize:width*0.06,fontWeight:'bold',fontFamily:'Poppins-Medium',color:'#E44227'}}>
    Crazy 60% OFF deals
  </Text>
  <Text style={{fontSize:width*0.04}}>
    and other amazing offers too
  </Text>
</View>
<View>
  <TouchableOpacity>
  <Text style={{fontWeight:'bold',fontFamily:'Poppins-Medium',color:'#E44227'}}>
    See All
  </Text>
  </TouchableOpacity>
</View>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>

<ScrollView ref={(snapScroll) => { this.snapScroll = snapScroll; }}
  horizontal={true}
  decelerationRate={0}
  onResponderRelease={() => {

    var interval = 300; // WIDTH OF 1 CHILD COMPONENT 

    var snapTo = (this.scrollingRight) ? Math.ceil(this.lastx / interval) :
      Math.floor(this.lastx / interval);
    var scrollTo = snapTo * interval;
    this.snapScroll.scrollTo(0, scrollTo);
  }}
  scrollEventThrottle={32}
  onScroll={(event) => {
    var nextx = event.nativeEvent.contentOffset.x;
    this.scrollingRight = (nextx > this.lastx);
    this.lastx = nextx;
  }}
  showsHorizontalScrollIndicator={false}
  style={styles.listViewHorizontal}
>
<TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
  <Image
    source={require('../../images/9999.png')}
    resizeMode="contain"
    style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
  />
  </TouchableNativeFeedback>
  <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
  <Image
    source={require('../../images/3333.png')}
    resizeMode="contain"
    style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
  />
  </TouchableNativeFeedback>
  <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
  <Image
    source={require('../../images/6666.png')}
    resizeMode="contain"
    style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
  />
  </TouchableNativeFeedback>


</ScrollView>
</View>
<View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.1 }}>
            <Text style={{ fontSize: width * 0.06, color: "#000000", fontWeight: "bold" ,fontFamily:'Poppins-Semibold'}}>
              Eat What makes you happy
            </Text>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around",
             alignItems: "center" }}>
                <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/802.jpg')}
                style={{ borderRadius: 35, height:70, width: 70, borderColor: "#F7B614" ,borderWidth:2}}
              />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/801.jpg')}
                style={{ borderRadius:35, height:70, width: 70, borderColor: "#F7B614" ,borderWidth:2 }}
              />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/800.jpg')}
               style={{ borderRadius: 35, height:70, width: 70, borderColor: "#F7B614",borderWidth:2  }}
              />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/795.jpg')}
      
                style={{borderRadius: 35, height:70, width: 70, borderColor: "#F7B614",borderWidth:2 }}
              />
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Home Style
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold",marginRight:20}}>
                Burger
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Pizza
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold",paddingHorizontal:width*0.04}}>
                Rolls
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.1 }}>
            <Text style={{ fontSize: width * 0.06, color: "#000000", fontWeight: "bold",fontFamily:'Poppins-Semibold' }}>
              Most loved offers on Afrefood
            </Text>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>

<ScrollView ref={(snapScroll) => { this.snapScroll = snapScroll; }}
  horizontal={true}
  decelerationRate={0}
  onResponderRelease={() => {

    var interval = 300; // WIDTH OF 1 CHILD COMPONENT 

    var snapTo = (this.scrollingRight) ? Math.ceil(this.lastx / interval) :
      Math.floor(this.lastx / interval);
    var scrollTo = snapTo * interval;
    this.snapScroll.scrollTo(0, scrollTo);
  }}
  scrollEventThrottle={32}
  onScroll={(event) => {
    var nextx = event.nativeEvent.contentOffset.x;
    this.scrollingRight = (nextx > this.lastx);
    this.lastx = nextx;
  }}
  showsHorizontalScrollIndicator={false}
  style={styles.listViewHorizontal}
>
  <Image
    source={require('../../images/deal-1.png')}
    resizeMode="contain"
    style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
  />
  <Image
    source={require('../../images/deal-2.png')}
    resizeMode="contain"
    style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
  />
  <Image
    source={require('../../images/deal-3.png')}
    resizeMode="contain"
    style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
  />


</ScrollView>
</View>
<View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.05,justifyContent:'flex-start',alignItems:'flex-start' }}>
            <Text style={{ fontSize: width * 0.06, textAlign: "center", color: "#000000", fontWeight: "bold",fontFamily:'Poppins-Semibold' }}>
              Top Brand for you
            </Text>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/logo1.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/logo2.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/log3.jpg')}
              
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
              <Image
                source={require('../../images/logo4.jpg')}
            
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                McDonald's
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Domino's
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Subway
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.04 }}>
                KFC
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: width * 0.03 }}>
                45 minits
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: width * 0.03 }}>
                35 minits
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: width * 0.03 }}>
                20 minits
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: width * 0.03 }}>
                10 minits
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.1 }}>
            <Text style={{ fontSize: width * 0.06, color: "#000000", fontWeight: "bold",fontFamily:'Poppins-Semibold' }}>
              Best offers around you
            </Text>
          </View>
          <View style={{paddingTop:width*0.03}} >
<View style={{borderWidth:1,borderRadius:10,justifyContent:'flex-start',alignItems:'flex-start',
borderColor:"#F7B614",marginHorizontal:width*0.03,}}>
   <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
<ImageBackground
source={require('../../images/7777.png')}
style={{height:height*0.3,width:"100%",borderRadius:20}}
>
  <View style={{paddingTop:width*0.09,flexDirection:'row-reverse'}}>
<Text style={{fontSize:width*0.05,color:'#FFF',fontWeight:'bold'}}>
   FLAT 40 %
</Text>
  </View>
</ImageBackground>
</TouchableNativeFeedback>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
  <View style={{width:'85%',paddingTop:width*0.02}}>
<Text style={{fontSize:width*0.06,fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,color:"#111111",fontWeight:'bold'}}>
  Canteen Central -Burger,
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,fontSize:width*0.03}} >
  {'American Pasta,Pizzas.....\nplace New Delhi,Delhi 110001'}
</Text>

</View>
<View style={{width:'15%'}}>
<Text style={{borderRadius:5,borderWidth:1,borderColor:'#F7B614',paddingHorizontal:width*0.02,backgroundColor:"#00670A",textAlign:'center',color:'#fff'}}>
  4.1*
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.01,fontSize:width*0.03,color:'#E44227'}}>
  $25.00 for Two
</Text>
</View>
</View>
</View>
          </View>
          <View style={{paddingTop:width*0.03}} >
<View style={{borderWidth:1,borderRadius:10,justifyContent:'flex-start',alignItems:'flex-start',
borderColor:"#F7B614",marginHorizontal:width*0.03}}>
   <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('FoodCart')}>
<ImageBackground
source={require('../../images/11111.png')}
style={{height:height*0.3,width:"100%",borderRadius:20}}
>
  <View style={{paddingTop:width*0.09,flexDirection:'row-reverse'}}>
<Text style={{fontSize:width*0.05,color:'#E44227',fontWeight:'bold'}}>
   FLAT 40 %
</Text>
  </View>
</ImageBackground>
</TouchableNativeFeedback>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
  <View style={{width:'85%',paddingTop:width*0.02}}>
<Text style={{fontSize:width*0.05,fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,color:"#111111",fontWeight:'bold'}}>
  Chaayos Chai+Snacks=Relax
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,fontSize:width*0.03}} >
  {'Bakery,Beverages,Chaats,Desserts,\nFast food Home Food Itatian...'}
</Text>

</View>
<View style={{width:'15%'}}>
<Text style={{borderRadius:5,borderWidth:1,borderColor:'#F7B614',paddingHorizontal:width*0.02,backgroundColor:"#00670A",textAlign:'center',color:'#fff'}}>
  4.1*
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.01,fontSize:width*0.03,color:'#E44227'}}>
  $25.00 for Two
</Text>
</View>
</View>
</View>
          </View>
          <View style={{paddingBottom:width*0.3}}>

</View>
        </ScrollView>
       

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  listViewHorizontal: {

  },
})