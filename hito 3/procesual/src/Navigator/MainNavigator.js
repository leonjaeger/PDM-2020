import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../View/Onboarding/Login';
import AboutScreen from '../View/Onboarding/AboutScreen';
import WelcomeScreen from '../View/Onboarding/WelcomeScreen';
import TaskScreen from '../View/Onboarding/TaskScreen'
import RegisterScreen from '../View/register/Register';
import Colors from '../Config/Colors';


const Stack = createStackNavigator();

function mainNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
                options={{headerShown: false}}
                WelcomeScreen
                >                   

                </Stack.Screen>
                <Stack.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={{headerShown: false}}
                
                >  
                </Stack.Screen> 
                <Stack.Screen
                name='TaskScreen'
                component={TaskScreen}
                options={{headerShown: false}}
                
                >                   

                </Stack.Screen>
                <Stack.Screen
                name='login'
                component={LoginScreen}
                options={{headerShown: false}}
                
                >                   

                </Stack.Screen>
                <Stack.Screen
                name='register'
                component={RegisterScreen}
                options={{title: 'Register Form',
                            headerStyle:{backgroundColor: Colors.red},
                            headerTintColor:Colors.white,
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color:Colors.white,
                            },



            }}
                >
                    
                
                </Stack.Screen>
                
                
            </Stack.Navigator>



        </NavigationContainer>


    );



    
}
export default mainNavigator;