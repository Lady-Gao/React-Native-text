
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/Store';
import HomeScreen from "./src/view/test/HomeScreen"
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    Text,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
 const store = configureStore();
export default class Root extends Component {
    
    render() {
      return (
        <Provider  store={store}>
          <HomeScreen />
        </Provider>
      );
    }
  
}