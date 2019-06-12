import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import MenuButton from '../components/MenuButton';

export default class About extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Sobre nós',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/imgs/aboutIcon.png')}
            style={{ width: 15, height: 15 }}
          />
        ),
      };
  
      
    render() {
      return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1}}>
                <MenuButton navigation={this.props.navigation} />
            </View>
            <View style={{ flex: 9 }}>
                <Text>Sobre</Text>
            </View>
        </View>
      );
    }
  }
