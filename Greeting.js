import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from "./src/view/Home.js";
import Page1 from "./src/view/Page1.js";
import Page2 from "./src/view/Page2.js";


export default Greeting= createBottomTabNavigator({
  Home: { screen: Home },
  Page1: { screen: Page1 },
  Page2: { screen: Page2 },
});