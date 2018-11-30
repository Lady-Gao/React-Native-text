import React, { Component } from 'react';
import { Text, View ,ToolbarAndroid,StyleSheet} from 'react-native';
import {  createStackNavigator, } from 'react-navigation';
class one extends React.Component {
  static navigationOptions = {
    title: 'one',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>one!</Text>
      </View>
    );
  }
}
class two extends React.Component {
  static navigationOptions = {
    title: 'two',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>two!</Text>
      </View>
    );
  }
}
class three extends React.Component {
  static navigationOptions = {
    title: 'three',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>three!</Text>
      </View>
    );
  }
}
class Screen extends Component {
  static navigationOptions = {
    title: 'My',
  };
  constructor(props) {
    super(props);
    this.state = { view: "one"};
  }
  //ToolbarAndroid点击事件
  onActionSelected(position) {
   switch(position){
   case 0:
   this.props.navigation.navigate( "one")
   break;
   case 1:
   this.props.navigation.navigate( "two")
   break;
   case 2:
   this.props.navigation.navigate( "three")
   break;
   }
  }
  render() {
    return (
      <View> 
        <ToolbarAndroid
          actions={toolbarActions}
          style={styles.toolbar}
          onActionSelected={this.onActionSelected.bind(this)}
          ></ToolbarAndroid>
      </View>
    );
  }
}
var toolbarActions =[
  {title: 'Create', icon:require('../img/img.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings'}
];
export default  Page1 = createStackNavigator({
  Home: Screen,
  one: one,
  two: two,
  three: three,
});
// css
const styles =StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
})
