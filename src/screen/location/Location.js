import { Text, View,ImageBackground,Dimensions ,TouchableOpacity,Image,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles'
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
  BackButtonHeader
} from '../../components/index';

export default class L extends Component {
    constructor(props) {
        super(props);
        this.state = {
          initializing: true,
          user: '',
          open:false,
          value:''
        };
      }
      setValue(callback) {
        this.setState(state => ({
          value: callback(state.value)
        }));
      }
    
      setItems(callback) {
        this.setState(state => ({
          items: callback(state.items)
        }));
      }

  render() {
    const setOpen=()=>{
        this.setState({open:!this.state.open})
      }
      var items=[{label: 'Afghanistan', value: 'Afghanistan'},
          {label: 'Albania', value: 'Albania'},
          {label: 'Algeria', value: 'Algeria'},
          {label: 'Andorra', value: 'Andorra'},
          {label: 'Angola', value: 'Angola'},
          {label: 'Antigua and Barbuda', value: 'Antigua and Barbuda'},
          {label: 'Argentina', value: 'Argentina'},
          {label: 'Armenia', value: 'Armenia'},
          {label: 'Australia', value: 'Australia'},
          {label: 'Austria', value: 'Austria'},
          {label: 'Azerbaijan', value: 'Azerbaijan'},
          {label: 'Bahamas', value: 'Bahamas'},
          {label: 'India', value: 'India'}]
    return (
      <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
<BackButtonHeader
    backgroundColor={"#F7B614"}
    backPressed={() => { this.props.navigation.goBack() }} />
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#F7B614',paddingVertical:width*0.03}} >
    <View style ={{borderWidth:1,borderRadius:10,backgroundColor:"#FFFFFF",width:"90%",borderColor:"#FFFFFF"}}>
    <View style={{flexDirection:'row',justifyContent:"flex-start",alignItems:"center"}} >
    <FIcon name="search" size={width*0.06} color="#DCDCDC"
    style={{paddingHorizontal:width*0.03}}
    />
        <TextInput
         style={{fontSize:20}}
         placeholder={'Enter your location'}
         placeholderTextColor={"#DCDCDC"}
        />
   
    </View>
    </View> 
</View>
<View style={{borderBottomColor:"#DCDCDC",borderBottomWidth:1,marginTop:width*0.01,paddingVertical:width*0.05,backgroundColor:"#FFFFFF"}}>
   
        
    <TouchableOpacity onPress={()=>alert("Tracking your location...")} >
    <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:'center',paddingHorizontal:width*0.05}}>
        <FontAwesome5
        name="location-arrow" size={width*0.04} color={"#E42217"}
        />
    <Text style={{fontSize:width*0.05,paddingHorizontal:width*0.05,color:"#E42217"}}>
        Use current location
    </Text>
    </View>
    </TouchableOpacity>
    </View>
    <View style={{width:'100%',justifyContent:'center',alignItems:'center',paddingTop:width*0.05,backgroundColor:"#ffffff",borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.05 }}>
       <View style={{width:'90%'}}>
         <DropDownPicker
      open={this.state.open}
      value={this.state.value}
      items={items}
      setOpen={setOpen}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      placeholder={'Choose your country'}
      listMode="MODAL"
      searchable={true}
    />
        
        </View>
    
</View>
<View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.04}}>
    <Text style={{fontSize:width*0.04,color:"#000000",paddingHorizontal:width*0.09}}>
        Afghanistan
    </Text>
    
</View>

<View style={{borderBottomWidth:1,borderColor:"#DCDCDC",paddingVertical:width*0.04}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("MainScreen")}>
        <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
    <Text style={{fontSize:width*0.04,color:"#E42217",paddingHorizontal:width*0.09}}>
        Algeria
    </Text>
    <FIcon name="check" size={width*0.06} color="#E42217"
    style={{paddingHorizontal:width*0.03}}
    />
    </View>
    </TouchableOpacity>
</View>


        </View>
        


    
    )
  }
}