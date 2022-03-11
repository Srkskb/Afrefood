import { Text, View,Dimensions,TouchableOpacity, TextInput} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';
export default class Notices extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      initializing: true,
      sdate:new Date(),
      eopen:false,
      edate:new Date(),
      stopen:false,
      open:false,
      value:'',
      open1:false,
      value1:'',
    }
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
    const setOpen1=()=>{
        this.setState({open1:!this.state.open1})
      }
    var items=[{label: 'Internal', value: 'Internal'},
    {label: 'External', value: 'External'}]
    var items2=[{label: 'Understand-Quran', value: 'Understand-Quran'},
    {label: 'Read Al-Quran', value: 'Read Al-Quran'},
    {label: 'Complete-Quran', value: 'Complete-Quran'}
  ]

    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
    <Text style={{paddingHorizontal:5,fontSize:width*0.06,fontWeight:'bold'}}>Notices</Text>

   </View>
   <View style={{
     height:700,
    backgroundColor:"#ffffff",
    justifyContent:'flex-start',
    paddingHorizontal:width*0.05}}>
   <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Date
    </Text>
    <TouchableOpacity onPress={()=>{this.setState({sopen:true})}}
    style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:width*0.038,
      flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
      
    <Text style={{fontSize:width*0.036}}>
    dd-mm-yyyy
    </Text>
    <MaterialCommunityIcons name="calendar" color={"#999"} size={width*0.04} />
    <DatePicker
        modal
        mode={'date'}
        open={this.state.sopen}
        date={this.state.sdate}
        onConfirm={(date) => {this.setState({sdate:date,sopen:false})}}
        onCancel={() => {this.setState({sopen:false})}}
      /></TouchableOpacity>
      <View style={{flexDirection:'column',justifyContent:'space-around',paddingTop:width*0.1}}>
<View style={{borderWidth:1,borderRadius:30,height:160,borderColor:'#FFBF00'}}>
    <Text style={{fontSize:width*0.04,fontWeight:'bold',paddingTop:width*0.03,paddingHorizontal:width*0.04}}>
    A: Date: 2021-06-05 01:25:40
    </Text>
    <Text style={{fontSize:width*0.04,fontWeight:'bold',paddingTop:width*0.03,paddingHorizontal:width*0.04}}>
    B: Topic/Subject: testtt
    </Text>
    <Text style={{fontSize:width*0.04,fontWeight:'bold',paddingTop:width*0.03,paddingHorizontal:width*0.04}}>
    C: By: Shumaila Khursheed
    </Text>
    <Text style={{fontSize:width*0.04,fontWeight:'bold',paddingTop:width*0.03,paddingHorizontal:width*0.04}}>
    D: Description: test2t
    </Text>
</View>
      </View>
      
</View>
   </View>
  
   
    )
  }
}