import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Container,Button, Header, Content, Badge, Icon } from 'native-base';
export default class Page3 extends Component{
    render(){
        return <View>
            <Text>eerddwer</Text>
            
          <Button dark><Text> Dark </Text></Button>
          <Container>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          <Badge danger>
            <Text>2</Text>
          </Badge>
          <Badge primary>
          <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
          </Badge>
          <Badge style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>1866</Text>
          </Badge>
      </Container>
        </View>
    }

}