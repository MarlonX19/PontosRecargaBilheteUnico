import React, { Component } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './Home';
import MapScreen from './Map';
import About from './About';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,   
    },

    Mapa: {
      screen: MapScreen,
    },

    Sobre: {
      screen: About,
    },


  });
  
const Main = createAppContainer(MyDrawerNavigator);

export default Main;
