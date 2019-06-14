import React, { Component } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

import MenuButton from '../components/MenuButton';

export default class Home extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Início',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/imgs/Home.png')}
            style={{ width: 15, height: 15 }}
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
                  <View style={{ flex: 2 }}>
                      <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', padding: 20 }}>
                          Veja aqui os pontos comerciais que efetuam recarga para Bilhete Único SP
                      </Text>
                  </View>
                  <View style={{ flex: 4 }}>
                      <Text style={{ fontSize: 14, color: '#fff', padding: 20 }}>
                          Encontre o ponto de recarga de bilhete único mais próximo de você!
                          São centenas de estabelecimentos comercias espalhadas pela cidade que prestam o
                          serviço de recarga para as mais variadas modalidades: vale comum, diário, mensal e estudante
                        </Text>
                  </View>
                  <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                      <Button
                          onPress={() => this.props.navigation.navigate('Map')}
                          title="Ver mapa"
                          color="green"
                          accessibilityLabel="See the map"
                      />
                  </View>
              </View>
          </View>
      );
    }
  }
