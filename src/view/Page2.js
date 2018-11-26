import React, { Component } from 'react';
import { Text,Button, StatusBar,SafeAreaView,View ,Image,StyleSheet,DeviceEventEmitter} from 'react-native';
import {  createDrawerNavigator,createStackNavigator } from 'react-navigation';
class Screen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={ {backgroundColor: '#6a51ae' }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <Text style={{ color: '#fff' }}>
          Light Screen
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color="blue" 
        />
      </SafeAreaView>
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#ecf0f1' }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text >
          Dark Screen
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
      </SafeAreaView>
    );
  }
}
export default createStackNavigator({
  Screen1,
  Screen2}, {
  headerMode: 'none',
});