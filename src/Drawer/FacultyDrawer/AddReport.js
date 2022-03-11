import { Text, View,Dimensions,TouchableOpacity, TextInput,StyleSheet,ScrollView} from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';

export default class AddReport extends Component {

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
             <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Add Performance Report</Text>
           </View>
           <View style={styles.Container}>
             <Text style={{fontSize:width*0.05,fontWeight:"bold",paddingVertical:width*0.06}}>
               ADD PERFORMACE REPORT
             </Text>
             <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingBottom:width*0.03}}>
             Student
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
            Attandence
            </Text>
          <TextInput
          placeholder=''
          style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
          />
             <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
             Assignment
            </Text>
          <TextInput
          placeholder=''
          style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
          />
          <View>
          <View style={{zIndex: 300}}>
          <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
          Objective
          </Text>
          <DropDownPicker
              open={this.state.open1}
              value={this.state.value1}
              items={items2}
              setOpen={setOpen1}
              setValue={item=>this.setValue(item)}
              setItems={item=>this.setItems(item)}
              listMode="SCROLLVIEW"
              dropDownDirection ='BOTTOM'
            />
               <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
               Subjective
            </Text>
          <TextInput
          placeholder=''
          style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
          />
             <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
             Gross Total
            </Text>
          <TextInput
          placeholder=''
          style={{borderWidth:1,borderRadius:10,paddingHorizontal:15}}
          />
             <Text style={{fontSize:width*0.04,fontWeight:"bold",paddingVertical:width*0.03}}>
             Percentage
            </Text>
          <TextInput
          placeholder=''
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
        </View>
           </View>
           </ScrollView>
           </View>
           
           
            )
          }
        }
        const styles = StyleSheet.create({
          Container:{
            height:950,
            backgroundColor:"#ffffff",
            justifyContent:'flex-start',
            paddingHorizontal:width*0.05
            
          }
        })