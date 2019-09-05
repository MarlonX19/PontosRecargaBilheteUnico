import React, { Component } from 'react';
import { View, Button, Image, Text, Dimensions, StatusBar, ImageBackground, StyleSheet } from 'react-native';

import MenuButton from '../components/MenuButton';

const IMGWIDTH = Dimensions.get('screen').width;

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#e3f1f1"
        />
        <View style={{ flex: 1 }}>
          <MenuButton navigation={this.props.navigation} screenTitle='Pontos de recarga Bilhete Único' />
        </View>

        <View style={styles.mainCards}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={styles.title}>Adquira crédito</Text>
            <Text style={styles.description}>Compre crédito para o sistema de transporte público de São Paulo</Text>
          </View>
          <Image style={{ width: 100, height: 80 }} source={require('../assets/imgs/cardIcon.png')} />
        </View>

        <View style={styles.mainCards}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={styles.title}>Onde adquirir</Text>
            <Text style={styles.description}>Há centenas de estabelecimentos espalhados pela cidade onde é possível carregar seu Bilhete Único nas diversas modalidades</Text>
          </View>
          <Image style={{ width: 80, height: 80 }} source={require('../assets/imgs/storeIcon.png')} />
        </View>

        <View style={styles.mainCards}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={styles.title}>Use seu crédito</Text>
            <Text style={styles.description}>Após carregar seu bilhete único corretamente basta usá-lo em ônibus, trem, metrô ou CPTM</Text>
          </View>
          <Image style={{ width: 80, height: 80 }} source={require('../assets/imgs/busIcon.png')} />
        </View>

        <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{ color: 'blue' }}>Termos de uso</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  mainCards: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#EFEFEF',
    borderRadius: 10
  },

  title: {
    fontFamily: 'sans-serif-thin',
    fontSize: 18,
    fontWeight: 'bold',
    color:"#A9DAD6"
  },

  description: {
    fontFamily: 'sans-serif-light'
  }

});
