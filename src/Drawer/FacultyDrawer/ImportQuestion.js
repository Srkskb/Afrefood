import { Text, View,ScrollView,TouchableOpacity,Dimensions ,StyleSheet,TextInput} from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import DropDownPicker from 'react-native-dropdown-picker';
export default class ImportQuestion extends Component {
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
    return (
      <View style={{width: '100%',height: '100%'}}>
      <View style={{width: '100%',height: '15%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,paddingTop:width*0.04,
      justifyContent:'flex-start',flexDirection:'column'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Import Questions</Text>
     <TouchableOpacity onPress={()=>alert('Downloading...')}>
     <Text style={{fontSize:width*0.04,paddingTop:width*0.06,paddingHorizontal:width*0.03,color:"#727cf5"}}>
       Download QuestionSample
     </Text>
     </TouchableOpacity>
     </View>
     <View style={styles.Container}>
     <Text style={{fontSize:width*0.05,fontWeight:"bold",paddingVertical:width*0.06}}>
       IMPORT QUESTIONS
     </Text>
     <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
   Choose File
    </Text>
    <DropDownPicker
      open={this.state.open}
      value={this.state.value}
      items={items}
      setOpen={setOpen}
      setValue={item=>this.setValue(item)}
      setItems={item=>this.setItems(item)}
      listMode="FLATLIST"
    />
  
  <TouchableOpacity onPress={()=>alert('Submit Sucessfully')}>
    <Text style={{textAlign:'center',borderWidth:1,borderRadius:10,marginTop:40,
    width:200,height:50,justifyContent:'center',alignSelf:'center',
    paddingTop:width*0.03,fontSize:width*0.04,borderColor:"#727cf5",backgroundColor:"#727cf5",fontWeight:'bold',color:"#ffffff"}}>
Import
    </Text>
  </TouchableOpacity>
  
     </View>
     </View>
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