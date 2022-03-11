import { Text, View,Dimensions ,SafeAreaView,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker'

export default class AddQuestion extends Component {
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
    var items=[{label: 'Hindi', value: 'Hindi'},
        {label: 'English', value: 'English'},
        {label: 'Urdu', value: 'Urdu'},
      
      ]
        var items2=[{label: 'Understand-Quran', value: 'Understand-Quran'},
        {label: 'Read Al-Quran', value: 'Read Al-Quran'},
        {label: 'Complete-Quran', value: 'Complete-Quran'}
      ]
        var items3=[{label: 'Easy', value: 'Easy'},
        {label: 'Hard', value: 'Hard'},
        {label: 'Medium', value: 'Medium'},
       ]
    return (
      <View style={{width: '100%',height: '100%'}}>
      <ScrollView nestedScrollEnabled={true}>
      <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfk',paddingHorizontal:width*0.06,
      alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
     <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Add Questions</Text>
   </View>
   <View style={styles.Container}>
     <Text style={{fontSize:width*0.05,fontWeight:"bold",paddingVertical:width*0.06}}>
       ADD QUESTIONS
     </Text>
     <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.03}}>
     Medium*
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
      Question*
    </Text>
  <TextInput
  placeholder='Batch Name'
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  />
  <View>
  <View style={{zIndex: 300}}>
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
    Question Type*
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
    Difficulty Level*
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
  Hint*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Explanation*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Marks*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Time To Spend*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Answers Option 1*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Answers Option 2*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Answers Option 3*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Answers Option 4*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Choose answers option4 file
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
  />
  <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
  Correct Answer*
    </Text>
    <TextInput
  
  style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
  placeholder={'Text here..'}
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
    height:1700,
    backgroundColor:"#ffffff",
    justifyContent:'flex-start',
    paddingHorizontal:width*0.05
    
  }
})