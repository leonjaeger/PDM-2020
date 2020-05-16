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
  Image,
  Button
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/View/login/LoginScreen';
import Ventilar from './src/View/SmartHome/ventilacion';
import MainNavigator from './src/Navigator/MainNavigator';
import Drawer from './Drawer';
import SmartHome from './SmartHome/navigation/SmartHome';
import Dash from './SmartHome/screens/Dashboard';
import 'react-native-gesture-handler';
function login ({navigation}){
  return(
    <View style={{flex:1}}>
      <LoginScreen>
      
    </LoginScreen>
    <Button
      title='Ingresar'
      onPress={()=> navigation.navigate('Menu')}
      />
    </View>
    
  );
}

function Menu (){

  return(
   <NavigationContainer independent={true}> 
    <Drawer/>
  
  </NavigationContainer>

  
  );
}
const Stack =createStackNavigator();


export default class App extends Component{
  render(){
    return(  
      /*<NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='login' component={login}/>
          <Stack.Screen name='Menu' component={Menu}/>



        </Stack.Navigator>


      </NavigationContainer>*/
        


      
      
      
        //#PDM  
        <MainNavigator></MainNavigator> 
        
        //#integrador 3
        

        //#prueba implemento integrador//
        //<Dash></Dash>

      
      
      
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
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  box:{
    height:100
  }
});
