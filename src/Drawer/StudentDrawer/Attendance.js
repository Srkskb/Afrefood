import { Text, View,Dimensions,TouchableOpacity, } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';
export default class Attendance extends Component {
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
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Attendance Report: Daily</Text>
   </View>
   <View style={{
     height:700,
    backgroundColor:"#ffffff",
    justifyContent:'flex-start',
    paddingHorizontal:width*0.05}}>
   <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      From
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
       <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      To
    </Text>
   
    <TouchableOpacity onPress={()=>{this.setState({eopen:true})}}
    style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:width*0.038,justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{fontSize:width*0.036}}>
    dd-mm-yyyy
    </Text>
    <MaterialCommunityIcons name="calendar" color={"#999"} size={width*0.04} />
    <DatePicker
        modal
        mode={'date'}
        open={this.state.eopen}
        date={this.state.edate}
        onConfirm={(date) => {this.setState({edate:date,eopen:false})}}
        onCancel={() => {this.setState({eopen:false})}}
      /></TouchableOpacity>
       <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.03,paddingTop:width*0.02}}>
       Batch Type
     </Text>
     <DropDownPicker
      open={this.state.open}
      value={this.state.value}
      items={items}
      setOpen={setOpen}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode="SCROLLVIEW"
    />
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
    Course
  </Text>
  <DropDownPicker
      open={this.state.open1}
      value={this.state.value1}
      items={items2}
      setOpen={setOpen1}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode="FLATLIST"
      dropDownDirection ="BOTTOM"
    />
    <TouchableOpacity onPress={()=>alert('Searching..')}>
    <Text style={{textAlign:'center',borderWidth:1,borderRadius:10,marginTop:40,
    width:200,height:50,justifyContent:'center',alignSelf:'center',
    paddingTop:width*0.03,fontSize:width*0.04,backgroundColor:"#727cf5",borderColor:"#727cf5",fontWeight:'bold',color:"#ffffff"}}>
Search
    </Text>
  </TouchableOpacity>
  <View style={{paddingTop:width*0.08}}>
  <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffbc00',borderBottomWidth:1,borderBottomColor:"96A3B9",paddingVertical:width*0.03}}>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
     { 'Student\nName'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
      { 'Start\nTime'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
     { 'End\nTime'}
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
       Date
     </Text>
     <Text style={{fontWeight:'bold',fontSize:width*0.05,color:'#ffffff'}}>
       Duration
     </Text>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',marginVertical:20}}>
<Text style={{fontWeight:'bold',fontSize:width*0.05}}>
  No record(s) found...
</Text>
</View>
   </View>
   </View>
   </View>
    )
  }
}