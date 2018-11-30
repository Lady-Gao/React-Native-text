import React from 'react';
import { Button, Text, View } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation';

import Home from "./src/view/Home.js";
import Page1 from "./src/view/Page1.js";
import Page2 from "./src/view/Page2.js";
import Page3 from "./src/view/Page3.js";

import { createBottomTabNavigator, createStackNavigator,} from 'react-navigation';


let Creat = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Page1: { screen: Page1 },
    Page2: { screen: Page2 },
    Page3: { screen: Page3 },
  },
  {initialRouteName: 'Home',}
);
export default class App extends React.Component {
  render() {
    return (
      <Creat />
    );
  }
}