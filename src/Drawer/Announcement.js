import { Text, View,Dimensions,StyleSheet,ScrollView,TouchableOpacity,TextInput } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDown from '../components/picker/picker';
const { width, height } = Dimensions.get("window");
import DropDownPicker from 'react-native-dropdown-picker';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initializing: true,
      open:false,
      value:'',
      open1:false,
      value1:'',
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
        var items=[{label: 'Understand-Quran', value: 'Understand-Quran'},
        {label: 'Read Al-Quran', value: 'Read Al-Quran'},
        {label: 'Complete-Quran', value: 'Complete-Quran'}
      ]
      var items2=[{label: 'Understand Quran Level-2 Plus', value: 'Understand Quran Level-2 Plus'},
      {label: 'Understand Quran Level-1', value: 'Understand Quran Level-1'},
      {label: ' Level-1 English ', value: ' Level-1 English '}
    ]
    return (
      <ScrollView>
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Add Announcement</Text>
   </View>
   <View style={styles.Container}>
     <Text style={{fontSize:width*0.05,fontWeight:"bold",paddingVertical:width*0.06}}>
       ADD Announcement
     </Text>
     <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.03}}>
       Course
     </Text>
     <DropDownPicker
      open={this.state.open}
      value={this.state.value}
      items={items}
      setOpen={setOpen}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode="MODAL"
    />
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Batch 
    </Text>
  <DropDownPicker
      open={this.state.open1}
      value={this.state.value1}
      items={items2}
      setOpen={setOpen1}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode="SCROLLVIEW"
    />
    <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
      Topic
    </Text>
    <TextInput
  placeholder='Text here'
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}

  />
   <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
   Description
    </Text>
    <TextInput
  placeholder='Text here'
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}

  />
  
  <TouchableOpacity onPress={()=>alert('Submit Sucessfully')}>
    <Text style={{textAlign:'center',borderWidth:1,borderRadius:10,marginTop:40,
    width:200,height:50,justifyContent:'center',alignSelf:'center',
    paddingTop:width*0.03,fontSize:width*0.04,borderColor:"#727cf5",backgroundColor:"#727cf5",fontWeight:'bold',color:"#ffffff"}}>
Submit
    </Text>
  </TouchableOpacity>
  

   </View>
   </View>
   </ScrollView>
   
   
    )
  }
}
const styles = StyleSheet.create({
  Container:{
    height:750,
    backgroundColor:"#ffffff",
    justifyContent:'flex-start',
    paddingHorizontal:width*0.05
    
  }
})