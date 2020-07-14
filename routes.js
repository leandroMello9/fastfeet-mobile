import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Entypo, FontAwesome5} from '@expo/vector-icons'
import Home from './src/pages/Home'
import Deliveries from './src/pages/Deliveries'
import Profile from './src/pages/Profile'
import Detalhes from './src/pages/Detalhes'
import NewProblemDelivery from './src/pages/NewProblemDelivery'
import ViewProblem from './src/pages/ViewProblem'

export default (signedIn = false) => 
  createSwitchNavigator({
     Home: {
       screen: Home,
        
       navigationOptions: {
         headerShown: false,
        
    
         
       },
     },
     Deliveries: createBottomTabNavigator({
    
       
       Delivery:{
         screen: createStackNavigator(
           {
             Deliveries,
             Detalhes,
             NewProblemDelivery,
             ViewProblem
           
           },
           {
             defaultNavigationOptions: {
              headerShown: false,
          
            
             
             
             },
           }
       
         ),
         navigationOptions: {
           tabBarLabel: 'Entregas',
           headerShown: false,
           
        
           tabBarIcon: (
             <Entypo
               name="menu"
               size={22}
               color="#121212"
             />
           ),

          
      
           
         },
       },
      
       Profile : {
         screen: Profile,
         navigationOptions: {
           tabBarLabel: 'Perfil',
           header: false,
           tabBarIcon: (
             <FontAwesome5
               name="user-circle"
               size={22}
               color="#7159c1"
             />
           ),

          
      
           
         },
         
       },
     
       
     }),
   
  
   
  
    
     
   
}, {initialRouteName: signedIn ? 'Deliveries' : 'Home', headerMode: 'none'});

