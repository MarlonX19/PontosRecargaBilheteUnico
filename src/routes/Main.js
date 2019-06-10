import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, Text } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';


class Home extends React.Component {
    static navigationOptions = {
        headerVisible: true,
        headerTitle: "Home",
        headerRight: (
          <Button
            onPress={() => this.props.navigation.openDrawer()}
            title="Info"
            color="#fff"
          />
        ),
      };
  
    render() {
      return (
        <Text>Olá mundo</Text>
      );
    }
  }


class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/imgs/iconDrawer.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go to notifications"
        />
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
        <Button
          onPress={() => this.props.navigation.closeDrawer()}
          title="Go back home"
        />
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
    start: {
        screen: Home,   
    },
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
  
const Main = createAppContainer(MyDrawerNavigator);


export default Main;
