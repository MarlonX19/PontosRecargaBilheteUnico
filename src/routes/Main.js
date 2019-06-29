import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './Home';
import MapScreen from './Map';
import About from './About';
import Doubts from './Doubts';
import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.74,
    contentComponent: ({ navigation }) => {
      return( <MenuDrawer navigation={navigation} /> )
    }
}


const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },

    Map: {
      screen: MapScreen,
    },

    Doubts: {
      screen: Doubts
    },

    About: {
      screen: About,
    },

  },

  DrawerConfig

);

const Main = createAppContainer(MyDrawerNavigator);

export default Main;
