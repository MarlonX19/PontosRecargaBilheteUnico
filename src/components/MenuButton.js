import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

class MenuButton extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.toggleDrawer()}
                >
                    <Image style={{ width: 32, height: 32, zIndex: 9, position: 'absolute', top: 15, left: 10 }}
                        source={require('../assets/imgs/iconDrawer.png')}
                    />
                </TouchableWithoutFeedback>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pontos de recarga bilhete único</Text>
            </View>
        );
    }
}

export default MenuButton;
