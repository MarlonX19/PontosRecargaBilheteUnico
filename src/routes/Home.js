import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import MenuButton from '../components/MenuButton';

export default class Home extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Início',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/imgs/homeIcon.png')}
            style={{color: 'grey', width: 20, height: 20}}
          />
        ),
      };

    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <MenuButton navigation={this.props.navigation} />
          </View>
          <View style={{ flex: 9 }}>
            <Button
              onPress={() => this.props.navigation.navigate('Map')}
              title="Ver mapa"
              color="#841584"
              accessibilityLabel="See the map"
            />
          </View>
        </View>
      );
    }
  }
