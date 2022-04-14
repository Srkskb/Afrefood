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
export default class Discover extends Component {
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
        <View style={{ height: '5%', justifyContent: 'center', alignItems: 'center', width: width }}>
          <View style={{
            flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",
            width: '100%', height: '80%'
          }}>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              MAX Safety
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              Fast delivery
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              Raiting 4.0+
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              New
            </Text>
            <Text style={{ borderRadius: 5, borderWidth: 1, padding: width * 0.01, borderColor: "#F7B614", color: "#000000", fontSize: width * 0.03 }}>
              Relevance
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, height:'81%' }}>
          <View style={{
            paddingTop: width * 0.03, alignItems: "center", marginHorizontal: width * 0.04,
            justifyContent: 'center', paddingBottom: width * 0.05
          }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.data}
              renderItem={this.renderItem}
              sliderWidth={SLIDER_WIDTH - width * 0.08}
              itemWidth={ITEM_WIDTH}
              loop={true}
              autoplay={true}
              autoplayInterval={5000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={this.state.data.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{
                backgroundColor: 'transparent', position: 'absolute',
                bottom: 4, borderRadius: 10, paddingVertical: 2, paddingHorizontal: 4
              }}
              dotContainerStyle={{ marginHorizontal: 1 }}
              dotStyle={{
                width: 14,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#F7B614'
              }}
              inactiveDotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#F7B614'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
            {/*<Image
    source={require('../../images/banner.png')}
    style={{height:height*0.24,width:width*0.92}} resizeMode={'contain'}
    />*/}
          </View>

          <View style={{ paddingHorizontal: width * 0.05 }}>
            <Text style={{ fontSize: width * 0.06, textAlign: "center", color: "#000000", fontWeight: "bold",fontFamily:'Poppins-Medium' }}>
              Top Brand for you
            </Text>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image
                source={require('../../images/outd.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/prm.png')}
                
                style={{ borderWidth: 1, borderRadius:10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/evnt.png')}
              
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/pro.png')}
            
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Outdoor
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Premium
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Events
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.04 }}>
                Pro
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.03 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image
                source={require('../../images/icon5.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon6.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon7.png')}
              
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon8.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.07 }}>
                Cafe
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Romantic
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
               Pubs & Bars
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold" }}>
                Family Dining
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image
                source={require('../../images/icon9.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon10.png')}
                
                style={{ borderWidth: 1, borderRadius:10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon11.png')}
              
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon12.png')}
            
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold",paddingHorizontal:width*0.04 }}>
                Buffet
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Desserts
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Pure Veg
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Kid Friendly
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.03 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image
                source={require('../../images/icon13.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon14.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon15.png')}
              
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/icon16.png')}
                
                style={{ borderWidth: 1, borderRadius: 10, height: 70, width: 70, borderColor: "#F7B614" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                BreakFast
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Pet Friendly
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
               Snacks
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold" ,paddingHorizontal:width*0.03}}>
                Healthy
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.1 }}>
            <Text style={{ fontSize: width * 0.06, color: "#000000", fontWeight: "bold" ,fontFamily:'Poppins-Medium'}}>
              Popular Restaurants Around You
            </Text>
          </View>
          <View style={{paddingTop:width*0.03}} >
<View style={{borderWidth:1,borderRadius:10,justifyContent:'flex-start',alignItems:'flex-start',
borderColor:"#F7B614",marginHorizontal:width*0.03}}>
<Image
source={require('../../images/ban.png')}
style={{height:height*0.3,width:"100%",borderRadius:10}}
/>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
  <View style={{width:'85%',paddingTop:width*0.02}}>
<Text style={{fontSize:width*0.04,fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,color:"#111111"}}>
  The Grill Rooms
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,fontSize:width*0.03}} >
  {'3rd floor Avenue,Fire Bridge lane Cannought\nplace New Delhi,Delhi 110001'}
</Text>

</View>
<View style={{width:'15%'}}>
<Text style={{borderRadius:5,borderWidth:1,borderColor:'#F7B614',paddingHorizontal:width*0.02,backgroundColor:"#00670A",textAlign:'center',color:'#fff'}}>
  5.3*
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.01,fontSize:width*0.03}}>
  $500 for Now
</Text>
</View>
</View>
</View>
          </View>
          <View style={{paddingTop:width*0.03}} >
<View style={{borderWidth:1,borderRadius:10,justifyContent:'flex-start',alignItems:'flex-start',
borderColor:"#F7B614",marginHorizontal:width*0.03}}>
<Image
source={require('../../images/ban2.png')}
style={{height:height*0.3,width:"100%",borderRadius:10}}
/>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
  <View style={{width:'85%',paddingTop:width*0.02}}>
<Text style={{fontSize:width*0.04,fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,color:"#111111"}}>
  The Ancient Barbeque
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.03,fontSize:width*0.03}} >
  {'223 $223A A Good Earth City Center,Sector 50\n Gurugram Haryana,122018'}
</Text>

</View>
<View style={{width:'15%'}}>
<Text style={{borderRadius:5,borderWidth:1,borderColor:'#F7B614',paddingHorizontal:width*0.02,backgroundColor:"#00670A",textAlign:'center',color:'#fff'}}>
  5.3*
</Text>
<Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.01,fontSize:width*0.03}}>
  $500 for Now
</Text>
</View>
</View>
</View>
          </View>
          <View style={{ paddingHorizontal: width * 0.05,paddingTop:width*0.1 }}>
            <Text style={{ fontSize: width * 0.06, color: "#000000", fontWeight: "bold" ,fontFamily:'Poppins-Medium'}}>
              Discover Restaurants For You
            </Text>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around",
             alignItems: "center" }}>
              <Image
                source={require('../../images/802.jpg')}
                style={{ borderRadius: 35, height:70, width: 70, borderColor: "#F7B614" ,borderWidth:2}}
              />
              <Image
                source={require('../../images/801.jpg')}
                style={{ borderRadius:35, height:70, width: 70, borderColor: "#F7B614" ,borderWidth:2 }}
              />
              <Image
                source={require('../../images/800.jpg')}
               style={{ borderRadius: 35, height:70, width: 70, borderColor: "#F7B614",borderWidth:2  }}
              />
              <Image
                source={require('../../images/795.jpg')}
      
                style={{borderRadius: 35, height:70, width: 70, borderColor: "#F7B614",borderWidth:2 }}
              />
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
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", 
            alignItems: "center"}}>
              <Image
                source={require('../../images/799.jpg')}
                
                style={{  borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614",borderWidth:2 }}
              />
              <Image
                source={require('../../images/798.jpg')}
                
                style={{  borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614",borderWidth:2 }}
              />
              <Image
                source={require('../../images/797.jpg')}
                
                style={{ borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614",borderWidth:2 }}
              />
              <Image
                source={require('../../images/796.jpg')}
              
                style={{ borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614",borderWidth:2 }}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.03 }}>
                Chaat
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Momos
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Healthy
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.04 }}>
                Thali
              </Text>
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