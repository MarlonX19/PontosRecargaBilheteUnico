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
                  <MenuButton navigation={this.props.navigation} screenTitle='Pontos de recarga Bilhete Único' />
              </View>
              <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                  <View style={{ flex: 2, backgroundColor: '#A9DAD6', borderRadius: 5, elevation: 3, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginVertical: 5 }}>
                      <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', padding: 20 }}>
                          Veja aqui os pontos comerciais que efetuam recarga para Bilhete Único SP
                      </Text>
                  </View>
                  <View style={{ flex: 2, backgroundColor: '#e3f1f1', borderRadius: 5, elevation: 3, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginVertical: 5 }}>
                      <Text style={{ fontSize: 14, color: 'black', padding: 20 }}>
                          Encontre o ponto de recarga de bilhete único mais próximo de você!
                          São centenas de estabelecimentos comercias espalhadas pela cidade que prestam o
                          serviço de recarga para as mais variadas modalidades: vale comum, diário, mensal e estudante
                        </Text>
                  </View>
                  <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 150, width: 150 }} source={require('../assets/imgs/busMapIcon.png')} />
                  </View>
                  <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                      <Button
                          onPress={() => this.props.navigation.toggleDrawer()}
                          title="Explorar o app"
                          color="green"
                          accessibilityLabel="See the map"
                      />
                  </View>
              </View>
          </View>
      );
    }
  }
