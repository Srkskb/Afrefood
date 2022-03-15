import { Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader
} from '../../components/index';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class MainScreen extends Component {
  render() {
    return (

  <SafeAreaView style={{width:width,height:height,backgroundColor:"#FFFFFF"}}>
  <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',
  backgroundColor:"#F7B614",width:width,height:'6%',paddingHorizontal:width*0.05}}>
<Text style={{fontSize:width*0.09,color:"#121212",fontWeight:"bold"}}>
Browser
</Text>
<TouchableOpacity onPress={()=>this.props.navigation.navigate("Filter")}>
<Text style={{fontSize:width*0.05,color:"#E42217"}}>Filter
</Text>
</TouchableOpacity>
        </View>
  <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#F7B614',
  width:width,height:'8%'}} >
    <View style ={{borderRadius:10,backgroundColor:"#FFFFFF",width:"90%",
    borderColor:"#FFFFFF",height: '80%',}}>
        
    <View style={{flexDirection:'row',width:'100%'}} >
    <View style={{width:'16%',height: '100%',justifyContent:'center',alignItems:'center'}}>
    <FIcon name="search" size={width*0.06} color="#DCDCDC"
    /></View>
    <View style={{width:'68%',height: '100%',justifyContent:'center',alignItems:'flex-start'}}>
    <TextInput
         style={{fontSize:20}}
         placeholder={'Search your delivery location'}
         placeholderTextColor={"#DCDCDC"}
        /></View>
    <TouchableOpacity style={{width:'16%',height: '100%',justifyContent:'center',alignItems:'center'}}
    onPress={()=>alert("Please Speak something...")}>
   <FIcon name="mic" size={width*0.06} color="#E42217"
    />
    </TouchableOpacity>
    </View>
    </View> 
</View>
<View style={{height:'5%',justifyContent:'center',alignItems:'center',width:width}}>
<View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",
width: '100%',height: '80%'}}>
<Text style={{borderRadius:5,borderWidth:1,padding:width*0.01,borderColor:"#F7B614",color:"#000000" ,fontSize:width*0.03}}>
MAX Safety
</Text>
<Text style={{borderRadius:5,borderWidth:1,padding:width*0.01,borderColor:"#F7B614" ,color:"#000000" ,fontSize:width*0.03}}>
Fast delivery
</Text>
<Text style={{borderRadius:5,borderWidth:1,padding:width*0.01,borderColor:"#F7B614" ,color:"#000000" ,fontSize:width*0.03}}>
Raiting 4.0+
</Text>
<Text style={{borderRadius:5,borderWidth:1,padding:width*0.01,borderColor:"#F7B614" ,color:"#000000" ,fontSize:width*0.03}}>
New
</Text>
<Text style={{borderRadius:5,borderWidth:1,padding:width*0.01,borderColor:"#F7B614" ,color:"#000000",fontSize:width*0.03}}>
Relevance
</Text>
</View>
</View>
<ScrollView showsVerticalScrollIndicator={false} style={{width:width,height:'81%'}}>
  <View style={{paddingVertical:width*0.03,alignItems:"center",marginHorizontal:width*0.04}}>
  <Image
  source={require('../../images/banner.png')}
  style={{height:height*0.24,width:width*0.92}} resizeMode={'contain'}
  />
</View>

<View style={{paddingHorizontal:width*0.05}}>
  <Text style={{fontSize:width*0.06,textAlign:"center",color:"#000000",fontWeight:"bold"}}>
    Top Brand for you 
  </Text>
</View>
<View style={{paddingTop:width*0.05}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Image
  source={require('../../images/logo1.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:50,height:50,width:50,borderColor:"#F7B614"}}
  />
   <Image
  source={require('../../images/logo2.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:50,height:50,width:50 ,borderColor:"#F7B614"}}
  />
   <Image
  source={require('../../images/log3.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:150,height:50,width:50 ,borderColor:"#F7B614"}}
  />
   <Image
  source={require('../../images/logo4.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:50,height:50,width:50 ,borderColor:"#F7B614"}}
  />
</View>
</View>
<View style={{paddingTop:width*0.05,marginTop:width*0.01}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold",paddingHorizontal:width*0.04}}>
    50% OFF
  </Text>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold", paddingHorizontal:width*0.04}}>
    20% OFF
  </Text>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold", paddingHorizontal:width*0.04}}>
    50% OFF
  </Text>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold",paddingHorizontal:width*0.04}}>
    30% OFF
  </Text>
</View>
</View>
<View style={{paddingTop:width*0.01}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Text style={{color:"#000000",fontWeight:"bold",}}>
    McDonald's
  </Text>
  <Text style={{color:"#000000",fontWeight:"bold",}}>
    Domino's
  </Text>
  <Text style={{color:"#000000",fontWeight:"bold",}}>
    Subway
  </Text>
  <Text style={{color:"#000000",fontWeight:"bold",paddingHorizontal:width*0.04}}>
    KFC
  </Text>
</View>
</View>
<View style={{paddingHorizontal:width*0.01}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    45 minits
  </Text>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    35 minits
  </Text>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    20 minits
  </Text>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    10 minits
  </Text>
</View>
</View>
<View style={{paddingTop:width*0.05}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Image
  source={require('../../images/logo5.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:50,height:50,width:50,borderColor:"#F7B614"}}
  />
   <Image
  source={require('../../images/logo6.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:50,height:50,width:50 ,borderColor:"#F7B614"}}
  />
   <Image
  source={require('../../images/logo7.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:150,height:50,width:50 ,borderColor:"#F7B614"}}
  />
   <Image
  source={require('../../images/logo8.jpg')}
  resizeMode="contain"
  style={{borderWidth:1,borderRadius:50,height:50,width:50 ,borderColor:"#F7B614"}}
  />
</View>
</View>
<View style={{paddingTop:width*0.05,marginTop:width*0.01}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold",paddingHorizontal:width*0.04}}>
    20% OFF
  </Text>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold", paddingHorizontal:width*0.04}}>
    30% OFF
  </Text>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold", paddingHorizontal:width*0.04}}>
    50% OFF
  </Text>
  <Text style={{borderWidth:1,backgroundColor:"#F7B614",color:"#ffffff",borderColor:"#f7b614",fontWeight:"bold",paddingHorizontal:width*0.04}}>
    35% OFF
  </Text>
</View>
</View>
<View style={{paddingTop:width*0.01}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Text style={{color:"#000000",fontWeight:"bold",paddingHorizontal:width*0.03}}>
    Burger King
  </Text>
  <Text style={{color:"#000000",fontWeight:"bold",}}>
    Kuwality wal.
  </Text>
  <Text style={{color:"#000000",fontWeight:"bold",}}>
    Nazeer foo.
  </Text>
  <Text style={{color:"#000000",fontWeight:"bold",paddingHorizontal:width*0.04}}>
    Chai Point
  </Text>
</View>
</View>
<View style={{paddingHorizontal:width*0.01}}>
<View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    45 minits
  </Text>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    35 minits
  </Text>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    20 minits
  </Text>
  <Text style={{fontWeight:"bold",fontSize:width*0.03}}>
    10 minits
  </Text>
</View>
</View>
<View style={{paddingTop:width*0.05}}>
  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Text style={{paddingHorizontal:width*0.05,fontSize:width*0.06,fontWeight:"bold",color:"#000000"}}>
Trending this week
</Text>
<TouchableOpacity onPress={()=>alert("Opening...")}>
<Text style={{fontFamily:"Poppins-SemiBold",paddingHorizontal:width*0.05,fontSize:width*0.04,color:"#E42216",paddingVertical:width*0.01}}>
View all
</Text>
</TouchableOpacity>
  </View>
</View>
<View style={{paddingTop:width*0.05}}>
  
  <ScrollView   ref={(snapScroll) => { this.snapScroll = snapScroll; }}
  horizontal={true} 
  decelerationRate={0}
  onResponderRelease={()=>{


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
                source={require('../../images/img1.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />
              <Image
                source={require('../../images/img2.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />
              <Image
                source={require('../../images/img3.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />

            </ScrollView>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ paddingHorizontal: width * 0.05, fontSize: width * 0.06, fontWeight: "bold", color: "#000000" }}>
                Most Popular
              </Text>
              <TouchableOpacity onPress={() => alert("Opening...")}>
                <Text style={{ fontFamily: "Poppins-Medium", paddingHorizontal: width * 0.05, fontSize: width * 0.04, color: "#E42216", paddingVertical: width * 0.01 }}>
                  26 Places
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
              <Image
                source={require('../../images/img3.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />
              <Image
                source={require('../../images/img2.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />
              <Image
                source={require('../../images/img1.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />

            </ScrollView>
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