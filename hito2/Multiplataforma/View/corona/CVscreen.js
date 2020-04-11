import React, {Component}from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonLogin from '../../Components/corona/Button';
import Casosinput from '../../Components/corona/TextInput';
import CVciudad from '../../Components/corona/CVciudad';
import LogoLogin from '../../Components/corona/CVlogo';
import Constants from '../../Config/constants';
import Colors from '../../Config/Colors';
import imgUsername from '../../../src/img/background.jpg';
import ciudades from '../../Config/ciudades';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''

        };
        this._onPress=this._onPress.bind(this);
        this._onChangeTextusername=this._onChangeTextusername.bind(this);
        this._onChangeTextPassword=this._onChangeTextPassword.bind(this);
    }
    _onPress(){
        console.log('button pressed!!');
        console.log (this.state.username);
        console.log(this.state.password);


    }
    _onChangeTextusername(username){
        this.setState({
            username: username,
        });

    }
    _onChangeTextPassword(password){
        this.setState({
            password:password,

        });

    }
    render(){
        return(
            <View style={stylesLoginScreen.container}>
                <LogoLogin style={stylesLoginScreen.logo}></LogoLogin>
                <View style={stylesLoginScreen.form}>

                    <CVciudad
                    onChangeText={this._onChangeTextusername}
                    Ciudad={ciudades.COCHA}   
                    
                    
                    securetextEntry={false}
                    autoCorrect={false}                    
                    
                    />
                    <CVciudad
                    onChangeText={this._onChangeTextusername}
                    Ciudad={ciudades.SANTA}   
                    
                    
                    securetextEntry={false}
                    autoCorrect={false}                    
                    
                    />
                    <CVciudad
                    onChangeText={this._onChangeTextusername}
                    Ciudad={ciudades.ORURO}   
                    
                    
                    securetextEntry={false}
                    autoCorrect={false}                    
                    
                    />
                    
                    
                    
                    
                </View>
                <View style={stylesLoginScreen.form}>


                    <Casosinput
                    placeholder={Constants.MAX}
                    
                    
                    
                    
                    /> 

                    
                    
                    
                    <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constants.CALCULAR}/>
                    
                </View>
                
            </View>


        );
    }



}
const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.red,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      flex: 1,
      width: '100%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      width: '80%',
      marginTop:100,
    },
  });