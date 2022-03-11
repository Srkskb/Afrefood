import React from 'react';
import AppStack from './src/navigation/appStack';
import {YellowBox, StatusBar} from 'react-native'
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
     };
   }
 
   render() {
     return (
       <SafeAreaProvider>
         {/*<StatusBar backgroundColor={'#90CDD1'} barStyle={'dark-content'} />*/}
         <AppStack />
         <FlashMessage position="top" />
       </SafeAreaProvider>
     );
   }
 }
 export default App;