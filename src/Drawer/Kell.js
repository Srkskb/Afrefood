import { Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Kell extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}} onPress={()=>alert('Work Pending')}>Next Class Prepration </Text>
      </View>
    );
  }
}
