import React from 'react';
import { Text, View, Button, ImageBackground, Image, Dimensions, StyleSheet, picker, TouchableOpacity } from 'react-native'
import Registration from '../screen/signup/Registration'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screen/login/Login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import ResetPassword from '../screen/resetPassword/resetPassword';
import ProfileUpdate from '../screen/updatescreen/ProfileUpdate';
import Home from '../screen/home/Home';
import Location from '../screen/location/Location';
import Filter from '../screen/filterscreen/Filter';
import MainScreen from '../screen/mainscreen/MainScreen';
import Discover from '../screen/tabscreen/Discover';
import Cart from '../screen/tabscreen/Cart';
import Favorite from '../screen/tabscreen/Favorite';
import Profile from '../screen/tabscreen/Profile';
import style from 'react-native-datepicker/style';
import Order from '../screen/yourOrder/Order';
import Menu from '../screen/Menu_Screen/Menu';
import Offer from '../Offer_Screen/Offer';
import History from '../screen/oder_history/History';
import Address from '../screen/address_book/Address';
import Payment from '../screen/Payment_Gateway/Payment';
import Addcart from '../screen/Add-Cart/Addcart';
import FoodCart from '../screen/food_cart/FoodCart';
const Tab = createMaterialTopTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={{ height: 70, width: 70, top: -30, justifyContent: "center", alignItems: "center", ...styles.shadow }} onPress={onPress}>
    <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: "#e32f45" }}>
      {children}
    </View>
  </TouchableOpacity>

);
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="MainScreen"
      tabBarPosition='bottom'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 1,
          left: 0,
          right: 0,
          elevation: 5,
          paddingVertical:10,
          backgroundColor: "#fff",
          borderRadius: 15,
          shadowColor: "#7F5DF0",
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5
        }
      }}
    >
      <Tab.Screen name="Attend Class" component={MainScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            <View style={{ alignItems: "center", justifyContent: "center",height:'100%' }}>
              <Image
                source={require('../images/806.png')}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: focused ? "#e32f45" : "#000" }}
              />
              {/* // <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Home</Text> */}
            </View>
        }}
      />
      <Tab.Screen name="Attendence" component={Discover}
        options={{
          tabBarIcon: ({ color, focused }) =>
            <View style={{ alignItems: "center", justifyContent: "center",height:'100%' }}>
              <Image
                source={require('../images/805.png')}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: focused ? "#e32f45" : "#000" }}
              />
              {/* <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize:12 }}>Dining</Text> */}
            </View>
        }}
      />
      <Tab.Screen name="Assignments" component={Cart}
        options={{
          tabBarIcon: ({ color, focused }) =>
            <View style={{ alignItems: "center", justifyContent: "center" ,height:'100%' }}>
              <Image
                source={require('../images/803.png')}
              style={{ width:49, height:49 ,borderRadius:25}}
              />
              {/* <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Home</Text> */}
            </View>
        }}
      />
      <Tab.Screen name="Teacher Remarks" component={Favorite}
        options={{
          tabBarIcon: ({ color, focused }) =>
            <View style={{ alignItems: "center", justifyContent: "center", height:'100%' }}>
              <Image
                source={require('../images/804.png')}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: focused ? "#e32f45" : "#000" }}
              />
              {/* <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Home</Text> */}
            </View>
        }}
      />
      <Tab.Screen name="Next Class Prepration" component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) =>
            <View style={{ alignItems: "center", justifyContent: "center", height:'100%' }}>
              <Image
                source={require('../images/pc.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? "#e32f45" : "#000" }}
              />
              {/* <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Home</Text> */}
            </View>
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function LoginStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS) }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
      <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />
      <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="MainScreen" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Offer" component={Offer} options={{headerShown:false}}/>
      <Stack.Screen name="History" component={History} options={{headerShown:false}}/>
      <Stack.Screen name="Address" component={Address} options={{headerShown:false}}/>
      <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>
      <Stack.Screen name="Addcart" component={Addcart} options={{headerShown:false}}/>
      <Stack.Screen name="FoodCart" component={FoodCart} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,

  },

  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5

  },
});
export default LoginStackNavigator;
