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


import MyComponent from './src/test/MyComponent';
import Logo from './src/login/logo'
import Input from './src/login/input'
import imgPass from './src/img/background.jpg';
import Button from './src/login/Button';

const PASS ='123';
const USER ='user1';
const resp ='3';
const num1='1';
const num2='2';
export default class App extends Component{
  render(){
    return(  
        


      
      
      <View style ={styles.body}>
        <View style={styles.container}>       
         
         <Logo/>
         <Input
          source={imgPass}
          placeholder="password"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={USER=> this.setState({PASS})}
          


         
         />
          <Input
          source={imgPass}
          placeholder="login"
          secureTextEntry={false}
          autoCorrect={false}
          onChangeText={USER=> this.setState({USER})}        
         
         />
         <Button pass={USER} username={PASS} num1={num1} num2={num2}  ></Button>


        </View>
        
         
        
        
        
      </View>
      
      
      
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
