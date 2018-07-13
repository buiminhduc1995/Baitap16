import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Home from './src/Home'
import Detail from './src/Detail'
const Navigation =StackNavigator({
  home :{screen:Home},
  detail :{screen:Detail},
  },{
    navigationOptions:{
      header:null
    }
  }

)
export default Navigation