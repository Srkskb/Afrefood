import React, { Component } from 'react'
import { Text, View ,Dimensions,} from 'react-native'
const { width, height } = Dimensions.get("window");
export default class Guest extends Component {
    render() {
        return (
            <View style={{width: '100%',height: '100%'}}>
            <View style={{width: '100%',height: '10%', backgroundColor: '#fdfdfd',paddingHorizontal:width*0.06,
            alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
           <Text style={{paddingHorizontal:12,fontSize:width*0.06,fontWeight:'bold'}}>Add Announcement</Text>
         </View>
         </View>
        )
    }
}
