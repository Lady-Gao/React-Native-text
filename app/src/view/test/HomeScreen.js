import React from 'react';

import { connect } from 'react-redux';
import { Button,Text, View } from 'react-native';
import {
    createStackNavigator,
  } from 'react-navigation';
  import DetailsScreen2 from "./DetailsScreen2";
  
import { actionGetWeather } from '../../../actions/GetWeatherAction'

 class Screen extends React.Component {
  componentWillMount(e){
  }
  componentWillReceiveProps(nextProps){        
   
}
    render() {
     
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.ggg.message}dddd</Text>
          <Button
            title="Details2"
            onPress={() => { console.log(this.props.ggg,"this.props.message"),this.props.dispatch(actionGetWeather("lll"))}}
          />
        </View>
      );
    }
  }
 
  function select(store) {
    console.log(store,"store")
    return {
      ggg : store.GetWeatherReducer,
    }
  }
  function dispatch(dispatch) {
    console.log(dispatch,"dispatch")
    return {
    }
  }
  
  export default connect(select)(Screen)