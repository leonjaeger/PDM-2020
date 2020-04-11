/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import CVscreen from './src/View/corona/CVscreen';
import CVscreening from './src/Components/corona/CVscreening';
import LoginScreen from './src/View/login/LoginScreen';
import Ventilar from './src/View/SmartHome/ventilacion';


const PASS ='123';
const USER ='user1';
const resp ='3';
const num1='1';
const num2='2';
export default class App extends Component{
  render(){
    return(  
        


      
      
      
        
        <CVscreening></CVscreening>
         
        
        
        
      
      
      
      
    );


  }
}
const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor:Colors.primary,
  },
  container:{
    flex:0.5,
    flexDirection: 'column',
    alignItems:'center'
  },
  box:{
    height:100
  }
});
