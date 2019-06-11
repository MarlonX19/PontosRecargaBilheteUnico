import React, { Component } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import MenuButton from '../components/MenuButton';
import MapScreen from './Map';

class Home extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1}}>
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

  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/imgs/iconDrawer.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <MenuButton navigation={ this.props.navigation } />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,   
    },

    Notifications: {
      screen: MyNotificationsScreen,
    },

    Map: {
      screen: MapScreen,
    }

  });
  
const Main = createAppContainer(MyDrawerNavigator);


export default Main;
