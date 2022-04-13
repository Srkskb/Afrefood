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
export default class MainScreen extends Component {
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
        <Image source={require('../../images/banner.png')}
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Filter")}>
            <Text style={{ fontSize: width * 0.04, color: "#FFFFFF", borderRadius: 10, borderWidth: 1, paddingHorizontal: width * 0.04, backgroundColor: "#E42217", borderColor: "#E42217" }}>Filter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',borderWidth:1,borderRadius:10,padding:3,backgroundColor:'#FFF',borderColor:'#fff',paddingHorizontal:width*0.02}}>
          <MaterialIcons
                name='language' size={width * 0.03} color={"#000"}
              />
            <Text style={{color:'#000',fontSize:width*0.03}} >
            language
            </Text>
            <Modal visible={this.state.show} transparent={true}>
<View style={{backgroundColor:"#000000aa",flex:1}}>
  <View style={{margin:50,backgroundColor:"#ffffff",flex:1,borderRadius:10,padding:50}}>
    <Text style={{textAlign:"center",fontSize:width*0.06,color:'#000',fontFamily:"Poppins-Semibold"}}>
Please Select the language
    </Text>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  Hindi
</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  English
</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  Tamil
</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  Marathi
</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  Chinese
</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  Spanish
</Text>
</View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
    <View style={{paddingTop:width*0.09}}>
    <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}>
<Text style={{fontSize:width*0.05}} >
  French
</Text>
</View>
    </View>
    </TouchableOpacity>
  </View>

</View>
            </Modal>
            
          </View>
          </TouchableOpacity>
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
            <Text style={{ fontSize: width * 0.06, textAlign: "center", color: "#000000", fontWeight: "bold" }}>
              Top Brand for you
            </Text>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image
                source={require('../../images/logo1.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/logo2.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/log3.jpg')}
              
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/logo4.jpg')}
            
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
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
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Image
                source={require('../../images/logo5.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/logo6.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/logo7.jpg')}
              
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
              <Image
                source={require('../../images/logo8.jpg')}
                
                style={{ borderWidth: 1, borderRadius: 35, height: 70, width: 70, borderColor: "#F7B614" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: width * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.03 }}>
                Burger King
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Kuwality wal.
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", }}>
                Nazeer foo.
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold", paddingHorizontal: width * 0.04 }}>
                Chai Point
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
            <Text style={{ fontSize: width * 0.06, color: "#000000", fontWeight: "bold" }}>
              Eat What makes you happy
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
          <View style={{ paddingTop: width * 0.05 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ paddingHorizontal: width * 0.05, fontSize: width * 0.06, fontWeight: "bold", color: "#000000" }}>
                Trending this week
              </Text>
              <TouchableOpacity onPress={() => alert("Opening...")}>
                <Text style={{ fontFamily: "Poppins-SemiBold", paddingHorizontal: width * 0.05, fontSize: width * 0.04, color: "#E42216", paddingVertical: width * 0.01 }}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.05 }}>

            <ScrollView ref={(snapScroll) => { this.snapScroll = snapScroll; }}
              horizontal={true}
              decelerationRate={0}
              onResponderRelease={() => {


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
                source={require('../../images/vag1.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />
              <Image
                source={require('../../images/vag2.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />
              <Image
                source={require('../../images/vag3.jpg')}
                resizeMode="contain"
                style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
              />


            </ScrollView>
            <View style={{ paddingTop: width * 0.05, paddingHorizontal: width * 0.05 }}>
              <Text style={{ fontSize: width * 0.05, color: "#000000", fontWeight: "bold" }}>
                Madhurima Veg Restaurent
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
                  source={require('../../images/vag2.jpg')}
                  resizeMode="contain"
                  style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
                />
                <Image
                  source={require('../../images/vag3.jpg')}
                  resizeMode="contain"
                  style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
                />
                <Image
                  source={require('../../images/vag1.jpg')}
                  resizeMode="contain"
                  style={{ paddingHorizontal: width * 0.05, marginLeft: width * 0.05 }}
                />


              </ScrollView>
            </View>
          </View>
          <View style={{ paddingTop: width * 0.02 }}>
            <Text>

            </Text>
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