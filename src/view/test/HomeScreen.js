import React from 'react';
import { Button,Text, View } from 'react-native';
import {
    createStackNavigator,
  } from 'react-navigation';
 class Screen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* other code from before here */}
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Details2"
            onPress={() => this.props.navigation.navigate('Details2')}
          />
        </View>
      );
    }
  }
  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details11111!</Text>
        </View>
      );
    }
  }
  class DetailsScreen2 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Det222!</Text>
        </View>
      );
    }
  }
  
  export default  HomeScreen = createStackNavigator({
    Home: Screen,
    Details: DetailsScreen,
    Details2: DetailsScreen2,
  });