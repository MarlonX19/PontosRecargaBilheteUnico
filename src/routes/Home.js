import React, { Component } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

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
              <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center', backgroundColor: '#483d8b' }}>
                  <View style={{ flex: 2, padding: 20 }}>
                      <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Veja aqui os pontos comerciais que efetuam recarga para Bilhete Único SP</Text>
                  </View>
                  <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                      <Button
                          onPress={() => this.props.navigation.navigate('Map')}
                          title="Ver mapa"
                          color="#841584"
                          accessibilityLabel="See the map"
                      />
                  </View>
              </View>
          </View>
      );
    }
  }
