import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class FacultyReport extends Component {
  render() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}} onPress={()=>alert('Work Pending')}> To be Implements </Text>
      </View>
    )
  }
}