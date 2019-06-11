import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';


class MenuButton extends Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.navigation.toggleDrawer()}
            >
            <Image style={{ width: 35, height: 35, zIndex: 0, position: 'absolute', top: 10, left: 10 }} 
                source={require('../assets/imgs/iconDrawer.png')} 
            />
            </TouchableWithoutFeedback>
        );
    }
}


export default MenuButton;
