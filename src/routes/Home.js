import React, { Component } from 'react';
import { View, Button, Image, Text, Dimensions, StatusBar, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';

import MenuButton from '../components/MenuButton';

const IMGWIDTH = Dimensions.get('screen').width;

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loadingMap: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loadingMap: false })
    }, 35000);
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loadingMap
            ?
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.title}>Carregando mapa, leva alguns segundos :)</Text>
              <ActivityIndicator size='large' color='green' />
            </View>
            :
            <View style={styles.container}>
              <StatusBar
                barStyle="dark-content"
                backgroundColor="#e3f1f1"
              />
              <View style={{ flex: 1 }}>
                <MenuButton navigation={this.props.navigation} screenTitle='Recarga Bilhete Único | SP' />
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

              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'blue' }}>Termos de uso</Text>
              </View>
            </View>

        }

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
    color: "#A7B2DD"
  },

  description: {
    fontFamily: 'sans-serif-light'
  }

});
