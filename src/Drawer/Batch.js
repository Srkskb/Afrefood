import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDown from '../components/picker/picker';
const { width, height } = Dimensions.get("window");
import DropDownPicker from 'react-native-dropdown-picker';
import { Input } from '../components';
import DatePicker from 'react-native-date-picker'

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initializing: true,
      open:false,
      value:'',
      open1:false,
      value1:'',
      open2:false,
      value2:'',
      sopen:false,
      sdate:new Date(),
      eopen:false,
      edate:new Date(),
      stopen:false,
      stime:new Date(),
      etopen:false,
      etime:new Date()
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
    const setOpen1=()=>{
      this.setState({open1:!this.state.open1})
    }
    const setOpen2=()=>{
      this.setState({open2:!this.state.open2})
    }
    var items=[{label: 'Internal', value: 'Internal'},
        {label: 'External', value: 'External'}]
        var items2=[{label: 'Understand-Quran', value: 'Understand-Quran'},
        {label: 'Read Al-Quran', value: 'Read Al-Quran'},
        {label: 'Complete-Quran', value: 'Complete-Quran'}
      ]
        var items3=[{label: 'Level-1', value: 'Level-1'},
        {label: 'Level-2', value: 'Level-2'},
        {label: 'Level-3', value: 'Level-3'},
        {label: 'Qaida', value: 'Qaida'},
        {label: 'Naxra', value: 'Naxra'}]
    return (
      <View style={{width: '100%',height: '100%'}}>
      <ScrollView nestedScrollEnabled={true}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Add batch</Text>
   </View>
   <View style={styles.Container}>
     <Text style={{fontSize:width*0.05,fontWeight:"bold",paddingVertical:width*0.06}}>
       ADD BATCH
     </Text>
     <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.03}}>
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
      Batch Name
    </Text>
  <TextInput
  placeholder='Batch Name'
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  />
  <View>
  <View style={{zIndex: 300}}>
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
      listMode="SCROLLVIEW"
      dropDownDirection ="TOP"
    />
    </View>
    <View style={{zIndex: 300}}>
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Level
    </Text>
    <DropDownPicker
      open={this.state.open2}
      value={this.state.value2}
      items={items3}
      setOpen={setOpen2}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode="SCROLLVIEW"
    />
    </View>
    </View>
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Date of Start
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
      Date of Completion
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
   <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Start Time 
    </Text>
    <TouchableOpacity onPress={()=>{this.setState({stopen:true})}}
    style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:width*0.038,justifyContent:"space-between",flexDirection:'row'}}>
    <Text style={{fontSize:width*0.036}}>
    --:--
    </Text>
    <MaterialCommunityIcons name="clock-time-three-outline" color={"#999"} size={width*0.04} />
    <DatePicker
        modal
        mode={'time'}
        open={this.state.stopen}
        date={this.state.stime}
        onConfirm={(date) => {this.setState({stime:date,stopen:false})}}
        onCancel={() => {this.setState({stopen:false})}}
      /></TouchableOpacity>
   <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      End Time
    </Text>
    <TouchableOpacity onPress={()=>{this.setState({etopen:true})}}
    style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:width*0.038,justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{fontSize:width*0.036}}>
    --:--
    </Text>
    <MaterialCommunityIcons name="clock-time-three-outline" color={"#999"} size={width*0.04} />
    <DatePicker
        modal
        mode={'time'}
        open={this.state.etopen}
        date={this.state.etime}
        onConfirm={(date) => {this.setState({etime:date,etopen:false})}}
        onCancel={() => {this.setState({etopen:false})}}
      /></TouchableOpacity>
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Nos. of Days
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  
  />
  <TouchableOpacity onPress={()=>alert('Submit Sucessfully')}>
    <Text style={{textAlign:'center',borderWidth:1,borderRadius:10,marginTop:40,
    width:200,height:50,justifyContent:'center',alignSelf:'center',
    paddingTop:width*0.03,fontSize:width*0.04,backgroundColor:"#727cf5",borderColor:"#727cf5",fontWeight:'bold',color:"#ffffff"}}>
Submit
    </Text>
  </TouchableOpacity>
  

   </View>
   </ScrollView>
   </View>
   
   
    )
  }
}
const styles = StyleSheet.create({
  Container:{
    height:1150,
    backgroundColor:"#ffffff",
    justifyContent:'flex-start',
    paddingHorizontal:width*0.05
    
  }
})