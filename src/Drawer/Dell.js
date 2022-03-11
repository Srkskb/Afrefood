import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {WebView} from 'react-native-webview';
export default class Dell extends Component {
    render() {
        return (
            <WebView
            source={{uri:'https://yogix.ai/zoom/meeting.html?name=Q0ROMS45LjlXaW4xMCNjaHJvbWUvOTMuMC40NTc3Ljgy&mn=99870035931&email=&pwd=STdIYUhkZHFPNXU5S21IcjMzTTFHdz09&role=0&lang=en-US&signature=SVJJelBxZmhUYjZONlh1YVJnZXFNZy45OTg3MDAzNTkzMS4xNjMyOTMyNjc0ODM2LjAuYW9nZHBPRXZOdk9xT1hNSll0dDZQVWJYUkczUUpRd21oRmU3QW9yNzBKWT0&china=0&apiKey=IRIzPqfhTb6N6XuaRgeqMg'}}
            startInLoadingState
            style={{flex:1,alignItems:'center',justifyContent:'center'}}
            />
        )
    }
}

