import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'SignInScreen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>SignInScreen</Text>
        <Button onPress={()=>this.props.navigation.navigate('App')} title="SignInScreen"></Button>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'createStackNavigator-HomeScreen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title="Show me more of the app" onPress={()=>this.props.navigation.navigate('Other')} />
        <Button title="Actually, sign me out :)" onPress={()=>this.props.navigation.navigate('Auth')} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'createStackNavigator-OtherScreen',
  };
  render() {
    return (
      <View style={styles.container}>
       <Text>OtherScreen</Text>
        <StatusBar barStyle="default" />
        <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />

        <Button onPress={()=>this.props.navigation.navigate('Auth') } title="OtherScreen"></Button>
      </View>
    );
  }
}

class AuthLoadingScreen extends React.Component {
  componentDidMount(){
   
    // console.log(_storeData,"_storeData")
}
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  
  _bootstrapAsync = async () => {
var person = {
    name:'jun',
    age:20
}
//json转成字符串
var jsonStr = JSON.stringify(person)
    AsyncStorage.setItem('key', person, function (error) {
  })
  };
  _readData(){
    console.log('读取')
    AsyncStorage.getItem('key', (error, result)=> {
      console.log(result)
    this.props.navigation.navigate( 'App');
    })

}

  static navigationOptions = {
    title: 'AuthLoadingScreen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>AuthLoadingScreen</Text>
        <Button title="AuthLoadingScreen" onPress={()=>this._readData()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const  AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const  AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default Home= createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
