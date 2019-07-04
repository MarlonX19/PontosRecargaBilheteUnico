import React, { Component } from 'react';
import { View, Button, Image, Text, Dimensions, StatusBar, ImageBackground} from 'react-native';

import MenuButton from '../components/MenuButton';

const IMGWIDTH = Dimensions.get('screen').width;

export default class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#e3f1f1"
        />
        <View style={{ flex: 1 }}>
          <MenuButton navigation={this.props.navigation} screenTitle='Pontos de recarga Bilhete Único' />
        </View>
        <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
          <View style={{ flex: 2, backgroundColor: '#A9DAD6', borderRadius: 5, elevation: 3, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginVertical: 5 }}>
            <Text style={{ fontSize: 20, color: 'black', padding: 20 }}>
              Veja no mapa os pontos comerciais que efetuam recarga para Bilhete Único SPTrans
            </Text>
          </View>
          <View style={{ flex: 2, backgroundColor: '#e3f1f1', borderRadius: 5, elevation: 3, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginVertical: 5 }}>
            <Text style={{ fontSize: 14, color: 'black', padding: 20 }}>
              Encontre o ponto de recarga de bilhete único mais próximo de você!
              São centenas de estabelecimentos comercias espalhadas pela cidade que prestam o
              serviço de recarga!
            </Text>
          </View>
          <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 160, width: IMGWIDTH * 0.8, borderRadius: 5 }} source={require('../assets/imgs/SPTransCardHome.jpg')} />
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
